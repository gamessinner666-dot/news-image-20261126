import { readFileSync, writeFileSync, mkdirSync, chmodSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const PNG_SIG = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const MAX_BYTES = 1_048_576;

function verifyPng(data: Buffer): { width: number; height: number } {
  if (data.length < 33) {
    throw new Error(`PNG too small: ${data.length} bytes`);
  }
  if (data.length > MAX_BYTES) {
    throw new Error(`PNG exceeds 1 MiB cap: ${data.length} bytes`);
  }
  if (!data.subarray(0, 8).equals(PNG_SIG)) {
    throw new Error('Invalid PNG file signature');
  }
  const ihdrLen = data.readUInt32BE(8);
  const ihdrType = data.subarray(12, 16).toString('ascii');
  if (ihdrType !== 'IHDR' || ihdrLen !== 13) {
    throw new Error(`Expected 13-byte IHDR chunk first, found ${ihdrType} (${ihdrLen} bytes)`);
  }
  const width = data.readUInt32BE(16);
  const height = data.readUInt32BE(20);
  if (width < 1 || width > 1024 || height < 1 || height > 1024) {
    throw new Error(`Dimensions out of bounds: ${width}x${height}`);
  }

  let offset = 8;
  let sawIend = false;
  while (offset + 12 <= data.length) {
    const chunkLen = data.readUInt32BE(offset);
    const chunkType = data.subarray(offset + 4, offset + 8).toString('ascii');
    const nextOffset = offset + 12 + chunkLen;
    if (nextOffset > data.length) {
      throw new Error(`Truncated PNG chunk ${chunkType} at byte ${offset}`);
    }
    if (chunkType === 'IEND') {
      sawIend = true;
      if (nextOffset !== data.length) {
        throw new Error(`Unexpected trailing bytes after IEND (${data.length - nextOffset})`);
      }
      break;
    }
    offset = nextOffset;
  }
  if (!sawIend) {
    throw new Error('Missing IEND terminator chunk');
  }
  return { width, height };
}

function main(): void {
  const rootDir = dirname(fileURLToPath(import.meta.url));
  const srcPath = join(rootDir, 'entry.png');
  const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR || '/output');
  const destPath = join(outDir, 'entry.png');

  const pngBytes = readFileSync(srcPath);
  const { width, height } = verifyPng(pngBytes);

  mkdirSync(outDir, { recursive: true });
  writeFileSync(destPath, pngBytes);
  try {
    chmodSync(destPath, 0o644);
  } catch {
    // Windows filesystems ignore POSIX chmod bits
  }

  const digest = createHash('sha256').update(pngBytes).digest('hex');
  console.log(`Wrote ${destPath} (${pngBytes.length} bytes, ${width}x${height}, sha256=${digest})`);
}

main();
