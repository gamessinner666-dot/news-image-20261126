import { writeFileSync, readFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import {
  DAY_TITLE,
  DAY_DECK,
  REGIONS,
  REGION_LOOKUP,
  HEADLINE_STATS,
  UTC_TIMELINE,
  LEAD_CARDS,
  FEATURE_CARDS,
  BRIEFS_LEFT,
  BRIEFS_RIGHT,
  MAP_PINS,
  MAP_BRIEF_DOTS,
  EXCLUDED_WED_25,
  EXCLUDED_FRI_27,
  type CertaintyBadge,
  type BriefItem,
  type RegionCode,
  type StoryField,
} from '../data/stories.ts';
import { renderLeadScene, renderFeatureScene } from './illustrations.ts';
import { renderLocatorMapSvg } from './world-map.ts';

function escapeHtml(text: string): string {
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function badgeCss(badge: CertaintyBadge): string {
  if (badge === 'CONFIRMED') return 'border-color:#15803D;color:#14532D;background:#DCFCE7;';
  if (badge === 'OFFICIAL') return 'border-color:#1D4ED8;color:#1E3A8A;background:#DBEAFE;';
  if (badge === 'REPORTED') return 'border-color:#B45309;color:#78350F;background:#FEF3C7;';
  return 'border-color:#B91C1C;color:#991B1B;background:#FEE2E2;';
}

function buildDocument(): string {
  const allItems: { num: number; region: RegionCode; field: StoryField }[] = [
    ...LEAD_CARDS,
    ...FEATURE_CARDS,
    ...BRIEFS_LEFT,
    ...BRIEFS_RIGHT,
  ];
  const totalStories = allItems.length;

  // Strict programmatic integrity assertions (zero arithmetic contradictions possible)
  for (let i = 0; i < totalStories; i++) {
    if (allItems[i].num !== i + 1) {
      throw new Error(`Story numbering gap at index ${i}: expected ${i + 1}, got ${allItems[i].num}`);
    }
  }
  const regCounts = new Map<RegionCode, number>();
  const fldCounts = new Map<StoryField, number>();
  for (const item of allItems) {
    regCounts.set(item.region, (regCounts.get(item.region) ?? 0) + 1);
    fldCounts.set(item.field, (fldCounts.get(item.field) ?? 0) + 1);
  }
  const glCount = regCounts.get('GL') ?? 0;
  if (MAP_PINS.length + MAP_BRIEF_DOTS.length + glCount !== totalStories) {
    throw new Error(
      `Map math mismatch: pins(${MAP_PINS.length}) + dots(${MAP_BRIEF_DOTS.length}) + GL(${glCount}) !== ${totalStories}`
    );
  }

  const fieldEntries = [...fldCounts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([f, c]) => (c > 1 ? `${f} ${c}` : f));
  const fieldStripText = `${fldCounts.size} FIELDS · ${fieldEntries.join(' · ')}`;

  const regionBarMarkup = REGIONS.map((r) => {
    const count = regCounts.get(r.id) ?? 0;
    if (count === 0) throw new Error(`Region ${r.id} has 0 stories`);
    const minPx = r.id === 'OC' ? 66 : r.id === 'GL' ? 58 : r.id === 'LA' ? 62 : 70;
    return `<div class="reg-seg" style="flex:${count} 1 0;min-width:${minPx}px;background:${r.color}">${escapeHtml(r.shortLabel.toUpperCase())} ${count}</div>`;
  }).join('');

  const statsMarkup = HEADLINE_STATS.map(
    (s) => `
    <div class="stat-cell">
      <div class="stat-num" style="color:${s.color}">${escapeHtml(s.value)}</div>
      <div class="stat-lbl"><div>${escapeHtml(s.line1)}</div><div>${escapeHtml(s.line2)}</div></div>
    </div>`
  ).join('');

  const timelineMarkup = UTC_TIMELINE.map(
    (ev) => `<span class="utc-ev"><strong>${escapeHtml(ev.utc)}</strong> ${escapeHtml(ev.label)}</span>`
  ).join('');

  const leadsMarkup = LEAD_CARDS.map((l) => {
    const reg = REGION_LOOKUP[l.region];
    return `
    <article class="lead-col">
      <div class="lead-art">${renderLeadScene(l.sceneKey)}</div>
      <div class="lead-meta">
        <span class="beat-lbl" style="color:${reg.color}">${escapeHtml(l.locationBeat)}</span>
        <span class="cert-pill" style="${badgeCss(l.badge)}">${escapeHtml(l.badge)}</span>
      </div>
      <h2 class="lead-head">${escapeHtml(l.headline)}</h2>
      <p class="lead-copy">${escapeHtml(l.summary)}</p>
      <div class="why-strip"><span>WHY IT MATTERS</span> ${escapeHtml(l.takeaway)}</div>
    </article>`;
  }).join('');

  const featuresMarkup = FEATURE_CARDS.map((f, idx) => {
    const reg = REGION_LOOKUP[f.region];
    const rowCls = idx < 5 ? 'feat-top' : 'feat-bot';
    const lastCls = idx % 5 === 4 ? 'feat-last' : '';
    return `
    <article class="feat-col ${rowCls} ${lastCls}">
      <div class="feat-art">${renderFeatureScene(f.sceneKey, f.num, reg.color)}</div>
      <div class="feat-meta">
        <span class="feat-loc" style="color:${reg.color}">${escapeHtml(f.locationBeat)}</span>
        <span class="feat-pill" style="${badgeCss(f.badge)}">${escapeHtml(f.badge)}</span>
      </div>
      <h3 class="feat-head">${escapeHtml(f.headline)}</h3>
      <p class="feat-copy">${escapeHtml(f.summary)}</p>
    </article>`;
  }).join('');

  const renderBriefRow = (b: BriefItem): string => {
    const color = REGION_LOOKUP[b.region].color;
    const tagMarkup = b.tag
      ? `<span class="brief-tag" style="${badgeCss(b.tag)}">${b.tag}</span>`
      : '';
    return `<div class="brief-row">
      <span class="brief-num" style="background:${color}">${b.num}</span>
      <span class="brief-txt"><strong>${escapeHtml(b.place)}</strong> ${escapeHtml(b.text)}</span>${tagMarkup}
    </div>`;
  };

  const leftBriefsMarkup = BRIEFS_LEFT.map(renderBriefRow).join('');
  const rightBriefsMarkup = BRIEFS_RIGHT.map(renderBriefRow).join('');

  const legendMarkup = REGIONS.map(
    (r) =>
      `<span class="leg-entry"><span class="leg-swatch" style="background:${r.color}"></span>${escapeHtml(r.shortLabel)} (${regCounts.get(r.id)})</span>`
  ).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>${escapeHtml(DAY_TITLE)} — The World in One Day</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body {
    width: 1024px;
    height: 1024px;
    overflow: hidden;
    background: #FAF5EA;
    color: #141414;
    font-family: "Segoe UI", Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  .sheet {
    width: 1024px;
    height: 1024px;
    padding: 0 14px 6px 14px;
    display: flex;
    flex-direction: column;
  }

  .top-band {
    margin: 0 -14px;
    background: #14181F;
    color: #F8FAFC;
    padding: 3.5px 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 8.6px;
    font-weight: 800;
    letter-spacing: 0.7px;
  }
  .top-band span:last-child { color: #E2E8F0; font-weight: 700; }

  .masthead {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 60px;
    font-weight: 700;
    line-height: 0.96;
    letter-spacing: -1.1px;
    text-align: center;
    color: #111111;
    padding: 4px 0 3px 0;
  }
  .deck {
    font-family: Georgia, "Times New Roman", serif;
    font-style: italic;
    font-size: 11.1px;
    font-weight: 600;
    text-align: center;
    color: #991B1B;
    border-top: 0.9px solid #CFC5B1;
    padding: 2.5px 0 3.5px 0;
    white-space: nowrap;
  }

  .reg-bar { display: flex; width: 100%; height: 14.5px; gap: 1.5px; }
  .reg-seg {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    font-size: 7.4px;
    font-weight: 800;
    letter-spacing: 0.25px;
    white-space: nowrap;
  }
  .fields-strip {
    font-size: 6.95px;
    font-weight: 700;
    color: #44403C;
    padding: 2.5px 0;
    border-bottom: 1.4px solid #1C1917;
    white-space: nowrap;
    overflow: hidden;
  }

  .stats-row {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 8px;
    padding: 4px 0 3.5px 0;
    border-bottom: 0.9px solid #C8BEA8;
  }
  .stat-cell {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    border-right: 0.8px solid #D5CBB8;
    padding-right: 4px;
  }
  .stat-cell:last-child { border-right: none; }
  .stat-num {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 22.5px;
    font-weight: 800;
    line-height: 0.95;
    letter-spacing: -0.5px;
  }
  .stat-lbl { font-size: 7.45px; font-weight: 700; line-height: 1.15; color: #292524; }

  .utc-strip {
    background: #1B2330;
    color: #E2E8F0;
    padding: 2.5px 7px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 7.1px;
    margin-top: 3px;
    margin-bottom: 5px;
  }
  .utc-title { color: #FACC15; font-weight: 800; letter-spacing: 0.4px; }
  .utc-ev strong { color: #FFFFFF; font-weight: 800; }

  .leads-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    padding-bottom: 6px;
    border-bottom: 1.6px solid #1C1917;
  }
  .lead-col {
    display: flex;
    flex-direction: column;
    gap: 3px;
    min-width: 0;
    padding: 0 9px;
    border-right: 0.75px solid #D6CCB8;
  }
  .lead-col:first-child { padding-left: 0; }
  .lead-col:last-child { padding-right: 0; border-right: none; }
  .lead-art { width: 100%; height: 104px; outline: 0.7px solid #C8BEA8; outline-offset: -0.7px; }
  .lead-meta { display: flex; justify-content: space-between; align-items: center; padding-top: 1px; }
  .beat-lbl { font-size: 7.4px; font-weight: 800; letter-spacing: 0.3px; }
  .cert-pill {
    font-size: 6.3px;
    font-weight: 800;
    padding: 0.7px 4px;
    border: 0.8px solid transparent;
    border-radius: 2px;
    letter-spacing: 0.3px;
    flex-shrink: 0;
  }
  .lead-head {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 15.1px;
    font-weight: 700;
    line-height: 1.1;
    color: #111111;
  }
  .lead-copy { font-size: 8.55px; line-height: 1.24; color: #292524; }
  .why-strip {
    font-size: 7.5px;
    font-weight: 700;
    color: #1C1917;
    border-top: 0.7px solid #D8CEBC;
    padding-top: 2px;
    white-space: nowrap;
    overflow: hidden;
  }
  .why-strip span { color: #B91C1C; font-weight: 800; letter-spacing: 0.25px; margin-right: 3px; }

  .feat-grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    padding: 5px 0 5px 0;
    border-bottom: 1.4px solid #1C1917;
  }
  .feat-col {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    padding: 0 6.5px;
    border-right: 0.7px solid #DCD2BE;
  }
  .feat-col:nth-child(5n + 1) { padding-left: 0; }
  .feat-last { padding-right: 0; border-right: none; }
  .feat-top { padding-bottom: 4.5px; border-bottom: 0.7px solid #E2D9C7; }
  .feat-bot { padding-top: 4.5px; }
  .feat-art { width: 100%; height: 60px; outline: 0.7px solid #C8BEA8; outline-offset: -0.7px; }
  .feat-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3px;
    padding-top: 1px;
    min-width: 0;
  }
  .feat-loc {
    font-size: 6.35px;
    font-weight: 800;
    letter-spacing: 0.2px;
    white-space: nowrap;
    overflow: hidden;
    min-width: 0;
  }
  .feat-pill {
    font-size: 5.5px;
    font-weight: 800;
    padding: 0.4px 2.8px;
    border: 0.7px solid transparent;
    border-radius: 2px;
    letter-spacing: 0.2px;
    flex-shrink: 0;
  }
  .feat-head {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 10.9px;
    font-weight: 700;
    line-height: 1.1;
    color: #111111;
  }
  .feat-copy { font-size: 7.6px; line-height: 1.17; color: #292524; }

  .lower-grid {
    display: grid;
    grid-template-columns: 314px minmax(0, 1fr);
    gap: 10px;
    padding: 5px 0 4px 0;
    flex: 1;
    min-height: 0;
  }
  .map-pane {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 4px;
  }
  .global-chips { display: flex; gap: 4px; }
  .g-chip {
    flex: 1;
    background: #EFE9DC;
    border: 0.7px solid #C8BEA8;
    border-radius: 2px;
    padding: 2.2px 3px;
    font-size: 6.3px;
    font-weight: 800;
    color: #1E293B;
    text-align: center;
    white-space: nowrap;
  }
  .pane-head {
    font-size: 8.2px;
    font-weight: 800;
    letter-spacing: 0.45px;
    color: #111111;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    border-bottom: 0.9px solid #C8BEA8;
    padding-bottom: 1.5px;
  }
  .pane-head span { font-size: 6.85px; font-weight: 600; color: #57534E; letter-spacing: 0; }
  .map-legend {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 2.5px 5px;
    font-size: 6.8px;
    font-weight: 700;
    color: #292524;
  }
  .leg-entry { display: inline-flex; align-items: center; gap: 3px; white-space: nowrap; }
  .leg-swatch { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }

  .briefs-pane { display: flex; flex-direction: column; gap: 3px; min-width: 0; }
  .briefs-cols {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 0 11px;
    flex: 1;
    min-height: 0;
  }
  .b-col {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 0;
    height: 100%;
  }
  .brief-row {
    display: flex;
    align-items: center;
    gap: 3.5px;
    font-size: 7.4px;
    line-height: 1.05;
    color: #1C1917;
    white-space: nowrap;
    overflow: hidden;
    min-width: 0;
  }
  .brief-num {
    width: 11.5px;
    height: 11.5px;
    border-radius: 50%;
    color: #FFFFFF;
    font-size: 6.2px;
    font-weight: 800;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .brief-txt { min-width: 0; overflow: hidden; text-overflow: ellipsis; }
  .brief-txt strong { color: #0F172A; font-weight: 800; margin-right: 2px; }
  .brief-tag {
    margin-left: auto;
    font-size: 5.4px;
    font-weight: 800;
    border: 0.6px solid transparent;
    border-radius: 2px;
    padding: 0.4px 2.5px;
    flex-shrink: 0;
  }

  .date-audit {
    background: #FFF5F5;
    border: 1.5px solid #B91C1C;
    border-radius: 2.5px;
    padding: 3px 7px;
    font-size: 7.25px;
    line-height: 1.24;
    color: #450A0A;
  }
  .audit-pill {
    display: inline-block;
    background: #B91C1C;
    color: #FFFFFF;
    font-size: 6.7px;
    font-weight: 800;
    padding: 0.5px 4.5px;
    border-radius: 2px;
    margin-right: 4px;
    letter-spacing: 0.3px;
  }
  .audit-lbl { font-weight: 800; color: #991B1B; }

  .foot-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 6.85px;
    font-weight: 600;
    color: #57534E;
    padding-top: 2.5px;
  }
  .foot-bar strong { color: #141414; font-weight: 800; }
</style>
</head>
<body>
  <div class="sheet">
    <div class="top-band">
      <span>THE WORLD IN ONE DAY</span>
      <span>${totalStories} VERIFIED STORIES · ${REGIONS.length} REGIONS · ${fldCounts.size} FIELDS · ALL FIRST REPORTED ON THURSDAY 26 NOVEMBER 2026</span>
    </div>

    <h1 class="masthead">${escapeHtml(DAY_TITLE)}</h1>
    <div class="deck">${escapeHtml(DAY_DECK)}</div>

    <div class="reg-bar">${regionBarMarkup}</div>
    <div class="fields-strip">${escapeHtml(fieldStripText)}</div>

    <section class="stats-row">${statsMarkup}</section>

    <section class="utc-strip">
      <span class="utc-title">THE DAY IN UTC</span>
      ${timelineMarkup}
    </section>

    <section class="leads-grid">${leadsMarkup}</section>

    <section class="feat-grid">${featuresMarkup}</section>

    <section class="lower-grid">
      <div class="map-pane">
        <div class="pane-head">WHERE IT HAPPENED <span>${MAP_PINS.length} pins · ${MAP_BRIEF_DOTS.length} dots · ${glCount} global/orbit</span></div>
        ${renderLocatorMapSvg(totalStories, glCount)}
        <div class="global-chips">
          <div class="g-chip">#6 FIFA · 12+ GB Hack</div>
          <div class="g-chip">#12 ISS · Progress 97</div>
          <div class="g-chip">#49 NZ · Electron #101</div>
        </div>
        <div class="map-legend">${legendMarkup}</div>
      </div>

      <div class="briefs-pane">
        <div class="pane-head">ALSO ON THURSDAY 26 NOVEMBER <span>36 single-story briefs · 18 + 18 across all 9 regions</span></div>
        <div class="briefs-cols">
          <div class="b-col">${leftBriefsMarkup}</div>
          <div class="b-col">${rightBriefsMarkup}</div>
        </div>
      </div>
    </section>

    <section class="date-audit">
      <div><span class="audit-pill">DATE CHECK · 26 NOV ONLY</span><span class="audit-lbl">Excluded Wed 25 Nov:</span> ${escapeHtml(EXCLUDED_WED_25)}</div>
      <div><span class="audit-lbl">Excluded Fri 27 Nov:</span> ${escapeHtml(EXCLUDED_FRI_27)}</div>
    </section>

    <footer class="foot-bar">
      <span><strong>OFFICIAL</strong> authority’s act · <strong>CONFIRMED</strong> 2+ wires · <strong>REPORTED</strong> press/leak · <strong>CLAIM</strong> one side’s unverified account</span>
      <span><strong>Maps &amp; drawings original in code, not photographs</strong> · Sources: Reuters, AP, BBC, Guardian, Al Jazeera, ONS, ECB, BoK, IAEA, NASA, UN</span>
    </footer>
  </div>
</body>
</html>`;
}

function locateBrowser(): string {
  const candidates = [
    process.env.CHROME_PATH,
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  ].filter(Boolean) as string[];

  for (const bin of candidates) {
    if (existsSync(bin)) return bin;
  }
  throw new Error('Could not locate Chrome or Edge binary');
}

function run(): void {
  const scriptsDir = dirname(fileURLToPath(import.meta.url));
  const repoDir = resolve(scriptsDir, '..');
  const workDir = resolve(repoDir, '..');
  const renderDir = join(workDir, 'render-work');
  mkdirSync(renderDir, { recursive: true });

  const htmlPath = join(renderDir, 'broadsheet.html');
  const outPng = join(repoDir, 'entry.png');
  const thumbHtml = join(renderDir, 'thumb300.html');
  const thumbPng = join(workDir, 'preview-300.png');

  writeFileSync(htmlPath, buildDocument(), 'utf8');

  const chrome = locateBrowser();
  const pageUrl = 'file:///' + htmlPath.replaceAll('\\', '/');

  execFileSync(
    chrome,
    [
      '--headless=new',
      '--disable-gpu',
      '--no-sandbox',
      '--hide-scrollbars',
      '--force-device-scale-factor=1',
      '--default-background-color=faf5ea',
      '--window-size=1024,1024',
      `--screenshot=${outPng}`,
      pageUrl,
    ],
    { stdio: 'inherit' }
  );

  const bytes = readFileSync(outPng);
  const w = bytes.readUInt32BE(16);
  const h = bytes.readUInt32BE(20);
  const hash = createHash('sha256').update(bytes).digest('hex');
  console.log(`Rendered ${outPng}: ${w}x${h}, ${bytes.length} bytes (${(bytes.length / 1024).toFixed(1)} KB), sha256=${hash}`);

  if (w !== 1024 || h !== 1024) {
    throw new Error(`Expected 1024x1024, got ${w}x${h}`);
  }
  if (bytes.length > 1_048_576) {
    throw new Error(`Output PNG exceeds 1 MiB (${bytes.length} bytes)`);
  }

  const pngUrl = 'file:///' + outPng.replaceAll('\\', '/');
  writeFileSync(
    thumbHtml,
    `<!DOCTYPE html><html><body style="margin:0;padding:0;width:300px;height:300px;overflow:hidden;"><img src="${pngUrl}" width="300" height="300" style="display:block;"/></body></html>`,
    'utf8'
  );
  execFileSync(
    chrome,
    [
      '--headless=new',
      '--disable-gpu',
      '--no-sandbox',
      '--hide-scrollbars',
      '--force-device-scale-factor=1',
      '--window-size=300,300',
      `--screenshot=${thumbPng}`,
      'file:///' + thumbHtml.replaceAll('\\', '/'),
    ],
    { stdio: 'inherit' }
  );
  console.log(`Rendered 300x300 preview: ${thumbPng}`);
}

run();
