// 13 full-bleed bespoke editorial pictorial SVG scenes for Thursday 26 November 2026.
// Authored from scratch in high-contrast Economist/BBC print vector style.

export function renderLeadScene(key: 'noreaster' | 'kuwaitdrone' | 'ecbsummit'): string {
  if (key === 'noreaster') {
    // Dramatic NYC Thanksgiving Nor'easter: dark storm cloud, slashing wind/rain, grounded parade balloon, NYC skyline
    return `<svg viewBox="0 0 316 104" width="100%" height="104" xmlns="http://www.w3.org/2000/svg">
      <rect width="316" height="104" fill="#1E2B3C"/>
      <!-- Storm clouds -->
      <path d="M0,0 L316,0 L316,32 Q278,42 240,30 Q196,44 152,32 Q104,44 58,30 Q26,38 0,28 Z" fill="#334155"/>
      <path d="M20,24 Q74,10 128,24 Q182,12 246,24 Q282,16 316,22 L316,0 L0,0 L0,24 Z" fill="#475569"/>
      <!-- Slashing rain & gale wind lines -->
      <g stroke="#93C5FD" stroke-width="1.2" stroke-opacity="0.65">
        <line x1="28" y1="36" x2="14" y2="66"/><line x1="62" y1="38" x2="48" y2="68"/>
        <line x1="98" y1="36" x2="84" y2="66"/><line x1="138" y1="40" x2="124" y2="70"/>
        <line x1="176" y1="36" x2="162" y2="66"/><line x1="212" y1="38" x2="198" y2="68"/>
      </g>
      <!-- Lightning bolt -->
      <polygon points="154,28 145,46 153,46 147,64 164,42 156,42" fill="#FACC15"/>
      <!-- NYC skyline silhouettes -->
      <rect x="0" y="76" width="316" height="28" fill="#0F172A"/>
      <rect x="18" y="54" width="18" height="30" fill="#1E293B"/>
      <rect x="40" y="42" width="14" height="42" fill="#334155"/>
      <polygon points="47,26 44,42 50,42" fill="#334155"/>
      <rect x="58" y="58" width="22" height="26" fill="#1E293B"/>
      <rect x="182" y="52" width="20" height="32" fill="#1E293B"/>
      <rect x="206" y="44" width="18" height="40" fill="#334155"/>
      <!-- Deflated/grounded Macy's star parade balloon on street -->
      <ellipse cx="114" cy="79" rx="28" ry="12" fill="#DC2626" stroke="#FCA5A5" stroke-width="1.2"/>
      <text x="114" y="82" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="7.4" font-weight="800" fill="#FFFFFF">POSTPONED</text>
      <!-- Right crisp storm impact box -->
      <rect x="224" y="8" width="86" height="88" rx="3" fill="#0F172A" fill-opacity="0.9" stroke="#60A5FA" stroke-width="0.9"/>
      <rect x="224" y="8" width="86" height="16" rx="2" fill="#B91C1C"/>
      <text x="267" y="19" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="8.2" font-weight="800" fill="#FFFFFF">100-YR FIRST</text>
      <text x="267" y="38" text-anchor="middle" font-family="Georgia,serif" font-size="14" font-weight="800" fill="#FACC15">900K+</text>
      <text x="267" y="48" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6.8" font-weight="700" fill="#CBD5E1">NO POWER</text>
      <line x1="232" y1="54" x2="302" y2="54" stroke="#334155" stroke-width="0.8"/>
      <text x="267" y="69" text-anchor="middle" font-family="Georgia,serif" font-size="13" font-weight="800" fill="#93C5FD">400+</text>
      <text x="267" y="79" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6.8" font-weight="700" fill="#CBD5E1">FLIGHTS CUT</text>
      <text x="267" y="91" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6.4" font-weight="800" fill="#FCA5A5">MOVED TO SAT</text>
      <!-- Story badge -->
      <circle cx="15" cy="90" r="10" fill="#0F766E" stroke="#FAF5EA" stroke-width="1.5"/>
      <text x="15" y="93.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="10" font-weight="800" fill="#FFFFFF">1</text>
    </svg>`;
  }

  if (key === 'kuwaitdrone') {
    // Gulf air-defense radar station hit by drone + Italy & Kuwait flags + Iran denies stamp
    return `<svg viewBox="0 0 316 104" width="100%" height="104" xmlns="http://www.w3.org/2000/svg">
      <rect width="316" height="68" fill="#F6E5D3"/>
      <rect y="68" width="316" height="36" fill="#C49A6C"/>
      <!-- Distant Gulf horizon water strip -->
      <rect y="62" width="316" height="7" fill="#3B82F6" fill-opacity="0.35"/>
      <!-- Kuwait Flag (top-left) -->
      <rect x="10" y="8" width="34" height="20" fill="#FFFFFF" stroke="#475569" stroke-width="0.7"/>
      <rect x="10" y="8" width="34" height="6.7" fill="#15803D"/>
      <rect x="10" y="21.3" width="34" height="6.7" fill="#DC2626"/>
      <polygon points="10,8 19,14 19,22 10,28" fill="#111827"/>
      <!-- Italy Flag -->
      <rect x="49" y="8" width="33" height="20" fill="#FFFFFF" stroke="#475569" stroke-width="0.7"/>
      <rect x="49" y="8" width="11" height="20" fill="#15803D"/>
      <rect x="71" y="8" width="11" height="20" fill="#DC2626"/>
      <!-- Air-defense radar dome & compound -->
      <rect x="64" y="54" width="66" height="24" fill="#475569" stroke="#1E293B" stroke-width="1"/>
      <path d="M74,54 A22,20 0 0,1 118,54 Z" fill="#CBD5E1" stroke="#334155" stroke-width="1"/>
      <line x1="96" y1="34" x2="96" y2="24" stroke="#334155" stroke-width="2"/>
      <!-- Explosion plume & incoming drone trajectory -->
      <path d="M188,20 Q152,26 116,44" fill="none" stroke="#991B1B" stroke-width="1.8" stroke-dasharray="4,3"/>
      <!-- Drone delta silhouette -->
      <polygon points="186,20 202,14 198,22 204,26" fill="#1E293B"/>
      <circle cx="114" cy="46" r="15" fill="#DC2626" fill-opacity="0.35"/>
      <path d="M102,56 C100,42 109,32 115,24 C121,34 128,36 126,56 Z" fill="#DC2626"/>
      <path d="M108,56 C107,46 113,40 116,35 C119,42 123,45 121,56 Z" fill="#F59E0B"/>
      <!-- Right crisp status card -->
      <rect x="210" y="8" width="98" height="58" rx="3" fill="#1E293B"/>
      <text x="259" y="22" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="8.6" font-weight="800" fill="#FCA5A5">2 ITALIANS KILLED</text>
      <text x="259" y="34" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="7.2" font-weight="700" fill="#E2E8F0">RHEINMETALL STAFF</text>
      <line x1="218" y1="40" x2="300" y2="40" stroke="#475569" stroke-width="0.8"/>
      <text x="259" y="51.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="7.1" font-weight="800" fill="#FDE68A">ITALY·KUWAIT: IRAN</text>
      <text x="259" y="61" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6.8" font-weight="700" fill="#CBD5E1">TEHRAN DENIES ROLE</text>
      <!-- Story badge -->
      <circle cx="15" cy="90" r="10" fill="#B91C1C" stroke="#FAF5EA" stroke-width="1.5"/>
      <text x="15" y="93.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="10" font-weight="800" fill="#FFFFFF">2</text>
    </svg>`;
  }

  // ecbsummit: Frankfurt Eurotower + bold gold Euro emblem + Spanish flag + EU summit €45bn Ukraine loan split
  return `<svg viewBox="0 0 316 104" width="100%" height="104" xmlns="http://www.w3.org/2000/svg">
    <rect width="316" height="104" fill="#172554"/>
    <!-- Subtle EU star ring -->
    <circle cx="96" cy="52" r="36" fill="none" stroke="#FACC15" stroke-width="1.2" stroke-dasharray="2,9"/>
    <!-- Big gold Euro symbol -->
    <circle cx="96" cy="52" r="26" fill="#1D4ED8" stroke="#FACC15" stroke-width="1.8"/>
    <text x="96" y="65" text-anchor="middle" font-family="Georgia,serif" font-size="38" font-weight="800" fill="#FACC15">€</text>
    <!-- Spain Flag top-left -->
    <rect x="10" y="9" width="32" height="20" fill="#DC2626" stroke="#FFFFFF" stroke-width="0.7"/>
    <rect x="10" y="14" width="32" height="10" fill="#FACC15"/>
    <text x="26" y="38" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6.6" font-weight="800" fill="#DBEAFE">SPAIN</text>
    <!-- Frankfurt ECB twin glass towers center -->
    <rect x="148" y="14" width="16" height="84" fill="#93C5FD" stroke="#1E3A8A" stroke-width="0.8"/>
    <rect x="167" y="22" width="16" height="76" fill="#60A5FA" stroke="#1E3A8A" stroke-width="0.8"/>
    <line x1="148" y1="34" x2="183" y2="34" stroke="#1E3A8A" stroke-width="0.8"/>
    <line x1="148" y1="54" x2="183" y2="54" stroke="#1E3A8A" stroke-width="0.8"/>
    <line x1="148" y1="74" x2="183" y2="74" stroke="#1E3A8A" stroke-width="0.8"/>
    <!-- Right leadership + summit clash board -->
    <rect x="192" y="8" width="116" height="88" rx="3" fill="#0F172A" fill-opacity="0.92" stroke="#60A5FA" stroke-width="0.9"/>
    <text x="250" y="21" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="7.3" font-weight="800" fill="#FACC15">NEXT ECB PRESIDENT</text>
    <text x="250" y="34" text-anchor="middle" font-family="Georgia,serif" font-size="10.2" font-weight="800" fill="#FFFFFF">Hernández de Cos</text>
    <text x="250" y="45" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6.8" font-weight="700" fill="#93C5FD">SUCCEEDS LAGARDE · FEB ’27</text>
    <line x1="200" y1="52" x2="300" y2="52" stroke="#334155" stroke-width="0.8"/>
    <text x="250" y="65" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="7.2" font-weight="800" fill="#FCA5A5">BRUSSELS SUMMIT SPLIT</text>
    <text x="250" y="78" text-anchor="middle" font-family="Georgia,serif" font-size="10.0" font-weight="800" fill="#FFFFFF">€45bn Ukraine Loan</text>
    <text x="250" y="89" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6.7" font-weight="700" fill="#CBD5E1">€1.6tn 2028–34 BUDGET</text>
    <!-- Story badge -->
    <circle cx="15" cy="90" r="10" fill="#1D4ED8" stroke="#FAF5EA" stroke-width="1.5"/>
    <text x="15" y="93.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="10" font-weight="800" fill="#FFFFFF">3</text>
  </svg>`;
}

export function renderFeatureScene(
  key:
    | 'jazan'
    | 'bokrate'
    | 'fifacyber'
    | 'ukmigration'
    | 'bangkokfire'
    | 'argentinabcra'
    | 'kenyacourt'
    | 'germanycell'
    | 'progress97'
    | 'australiaduty',
  num: number,
  regionColor: string,
  statTag: string
): string {
  const pillW = Math.max(52, statTag.length * 6.4 + 10);
  const badgeOverlay = `
    <rect x="20" y="42" width="${pillW}" height="14" rx="2" fill="#141414" fill-opacity="0.88"/>
    <text x="${20 + pillW / 2}" y="51.8" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="7.4" font-weight="800" fill="#FFFFFF" letter-spacing="0.3">${statTag}</text>
    <circle cx="12" cy="49" r="8.5" fill="${regionColor}" stroke="#FAF5EA" stroke-width="1.4"/>
    <text x="12" y="52.2" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="8.6" font-weight="800" fill="#FFFFFF">${num}</text>
  `;

  switch (key) {
    case 'jazan':
      return `<svg viewBox="0 0 188 60" width="100%" height="60" xmlns="http://www.w3.org/2000/svg">
        <rect width="188" height="42" fill="#FDE8D8"/>
        <rect y="42" width="188" height="18" fill="#B48A5A"/>
        <!-- Aramco Jazan refinery tanks & flare stacks -->
        <rect x="18" y="28" width="28" height="16" rx="2" fill="#CBD5E1" stroke="#475569" stroke-width="1"/>
        <rect x="52" y="24" width="24" height="20" rx="2" fill="#94A3B8" stroke="#475569" stroke-width="1"/>
        <rect x="82" y="14" width="6" height="30" fill="#475569"/>
        <!-- Smoke & fire hit -->
        <circle cx="118" cy="16" r="12" fill="#334155" fill-opacity="0.5"/>
        <circle cx="136" cy="13" r="10" fill="#475569" fill-opacity="0.4"/>
        <path d="M100,44 C98,28 108,20 114,12 C120,22 127,24 125,44 Z" fill="#DC2626"/>
        <path d="M107,44 C106,34 112,28 115,24 C118,30 121,34 119,44 Z" fill="#F59E0B"/>
        <rect x="132" y="6" width="52" height="13" rx="2" fill="#991B1B"/>
        <text x="158" y="14.8" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="7.1" font-weight="800" fill="#FFFFFF">JAZAN HIT</text>
        ${badgeOverlay}
      </svg>`;

    case 'bokrate':
      return `<svg viewBox="0 0 188 60" width="100%" height="60" xmlns="http://www.w3.org/2000/svg">
        <rect width="188" height="60" fill="#FEF3C7"/>
        <!-- Step-up interest rate bars -->
        <rect x="18" y="30" width="22" height="14" fill="#94A3B8"/>
        <text x="29" y="27" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="7" font-weight="700" fill="#475569">3.00%</text>
        <path d="M44,32 L58,20 L54,19 L62,18 L59,26 L58,22" fill="#B45309" stroke="#B45309" stroke-width="1.6"/>
        <rect x="64" y="16" width="24" height="28" fill="#B45309"/>
        <text x="76" y="13" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="7.6" font-weight="800" fill="#92400E">+25 bps</text>
        <!-- Crisp rate card on right -->
        <rect x="98" y="6" width="84" height="48" rx="3" fill="#FFFFFF" stroke="#D97706" stroke-width="1.2"/>
        <rect x="98" y="6" width="84" height="13" rx="2" fill="#78350F"/>
        <text x="140" y="15" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="7.2" font-weight="800" fill="#FEF3C7">BANK OF KOREA</text>
        <text x="140" y="36" text-anchor="middle" font-family="Georgia,serif" font-size="18" font-weight="800" fill="#B45309">3.25%</text>
        <text x="140" y="48.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6.8" font-weight="800" fill="#475569">5–2 VOTE · 2-YR HIGH</text>
        ${badgeOverlay}
      </svg>`;

    case 'fifacyber':
      return `<svg viewBox="0 0 188 60" width="100%" height="60" xmlns="http://www.w3.org/2000/svg">
        <rect width="188" height="60" fill="#1E293B"/>
        <!-- Subtle data grid -->
        <g stroke="#334155" stroke-width="0.7"><line x1="0" y1="20" x2="188" y2="20"/><line x1="0" y1="40" x2="188" y2="40"/></g>
        <!-- Football icon left -->
        <circle cx="38" cy="22" r="14.5" fill="#F8FAFC" stroke="#94A3B8" stroke-width="1.2"/>
        <polygon points="38,14 44,19 41,26 35,26 32,19" fill="#0F172A"/>
        <!-- Breached red lock & alert card right (clear of bottom-left badge) -->
        <rect x="78" y="6" width="104" height="48" rx="3" fill="#0F172A" stroke="#EF4444" stroke-width="1.3"/>
        <text x="130" y="19.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="8.2" font-weight="800" fill="#F87171">FIFA CYBERHACK</text>
        <text x="130" y="34" text-anchor="middle" font-family="Georgia,serif" font-size="10.8" font-weight="800" fill="#FFFFFF">12+ GB STOLEN</text>
        <text x="130" y="46.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6.4" font-weight="700" fill="#FCA5A5">LEGAL &amp; FINANCE FILES</text>
        ${badgeOverlay}
      </svg>`;

    case 'ukmigration':
      return `<svg viewBox="0 0 188 60" width="100%" height="60" xmlns="http://www.w3.org/2000/svg">
        <rect width="188" height="60" fill="#DBEAFE"/>
        <!-- Sharp downward trend chart (left) -->
        <polygon points="14,12 42,18 66,34 86,44 86,52 14,52" fill="#1D4ED8" fill-opacity="0.18"/>
        <polyline points="14,12 42,18 66,34 86,44" fill="none" stroke="#1D4ED8" stroke-width="2.6"/>
        <circle cx="86" cy="44" r="3.5" fill="#1D4ED8"/>
        <!-- Right ONS card -->
        <rect x="94" y="5" width="88" height="50" rx="3" fill="#FFFFFF" stroke="#60A5FA" stroke-width="1.2"/>
        <rect x="94" y="5" width="88" height="12.5" rx="2" fill="#1E3A8A"/>
        <text x="138" y="13.8" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="7" font-weight="800" fill="#FFFFFF">UK ONS NET MIG.</text>
        <text x="138" y="36" text-anchor="middle" font-family="Georgia,serif" font-size="18" font-weight="800" fill="#1D4ED8">77,000</text>
        <text x="138" y="48.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6.7" font-weight="800" fill="#475569">LOWEST SINCE 1997</text>
        ${badgeOverlay}
      </svg>`;

    case 'bangkokfire':
      return `<svg viewBox="0 0 188 60" width="100%" height="60" xmlns="http://www.w3.org/2000/svg">
        <rect width="188" height="44" fill="#E2E8F0"/>
        <rect y="44" width="188" height="16" fill="#475569"/>
        <!-- Heavy black smoke plume over Bangkok skyline -->
        <circle cx="88" cy="18" r="14" fill="#1E293B" fill-opacity="0.7"/>
        <circle cx="110" cy="13" r="16" fill="#334155" fill-opacity="0.65"/>
        <circle cx="136" cy="15" r="13" fill="#475569" fill-opacity="0.5"/>
        <!-- Refinery towers -->
        <rect x="24" y="24" width="16" height="22" fill="#64748B"/>
        <rect x="46" y="18" width="10" height="28" fill="#475569"/>
        <rect x="148" y="22" width="24" height="24" fill="#64748B"/>
        <!-- Bright orange-red explosion core -->
        <path d="M68,46 C64,30 76,20 84,12 C90,24 98,22 100,46 Z" fill="#DC2626"/>
        <path d="M76,46 C74,35 81,28 85,23 C89,30 93,34 91,46 Z" fill="#F59E0B"/>
        <rect x="116" y="42" width="66" height="14" rx="2" fill="#9A3412"/>
        <text x="149" y="51.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="7" font-weight="800" fill="#FEF3C7">UNITS HALTED</text>
        ${badgeOverlay}
      </svg>`;

    case 'argentinabcra':
      return `<svg viewBox="0 0 188 60" width="100%" height="60" xmlns="http://www.w3.org/2000/svg">
        <rect width="188" height="60" fill="#F3E8FF"/>
        <!-- Argentina Flag left -->
        <rect x="12" y="8" width="44" height="26" fill="#FFFFFF" stroke="#7E22CE" stroke-width="0.8"/>
        <rect x="12" y="8" width="44" height="8.6" fill="#38BDF8"/>
        <rect x="12" y="25.4" width="44" height="8.6" fill="#38BDF8"/>
        <circle cx="34" cy="21" r="3.6" fill="#F59E0B"/>
        <!-- Central bank charter reform card right (clear of BCRA LAW badge) -->
        <rect x="82" y="6" width="100" height="48" rx="3" fill="#FFFFFF" stroke="#7E22CE" stroke-width="1.2"/>
        <rect x="82" y="6" width="100" height="12.5" rx="2" fill="#6B21A8"/>
        <text x="132" y="14.8" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="7.1" font-weight="800" fill="#FFFFFF">BCRA REFORM LAW</text>
        <text x="132" y="34" text-anchor="middle" font-family="Georgia,serif" font-size="10.2" font-weight="800" fill="#B91C1C">PRINTING BANNED</text>
        <text x="132" y="47" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6.5" font-weight="800" fill="#475569">DEFEND PESO MANDATE</text>
        ${badgeOverlay}
      </svg>`;

    case 'kenyacourt':
      return `<svg viewBox="0 0 188 60" width="100%" height="60" xmlns="http://www.w3.org/2000/svg">
        <rect width="188" height="60" fill="#DCFCE7"/>
        <!-- Classical High Court facade with emerald recess -->
        <polygon points="24,20 94,4 164,20" fill="#15803D" stroke="#14532D" stroke-width="0.9"/>
        <rect x="32" y="20" width="124" height="5" fill="#14532D"/>
        <rect x="38" y="25" width="112" height="25" fill="#166534"/>
        <rect x="44" y="25" width="10" height="25" fill="#FFFFFF" stroke="#14532D" stroke-width="0.8"/>
        <rect x="66" y="25" width="10" height="25" fill="#FFFFFF" stroke="#14532D" stroke-width="0.8"/>
        <rect x="112" y="25" width="10" height="25" fill="#FFFFFF" stroke="#14532D" stroke-width="0.8"/>
        <rect x="134" y="25" width="10" height="25" fill="#FFFFFF" stroke="#14532D" stroke-width="0.8"/>
        <rect x="24" y="50" width="140" height="6" fill="#14532D"/>
        <!-- Red Halt Stamp in doorway -->
        <rect x="81" y="29" width="26" height="16" rx="2" fill="#B91C1C" stroke="#FFFFFF" stroke-width="0.9"/>
        <text x="94" y="39.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="7.2" font-weight="800" fill="#FFFFFF">STOP</text>
        ${badgeOverlay}
      </svg>`;

    case 'germanycell':
      return `<svg viewBox="0 0 188 60" width="100%" height="60" xmlns="http://www.w3.org/2000/svg">
        <rect width="188" height="60" fill="#1E293B"/>
        <!-- German tricolor top band -->
        <rect x="0" y="0" width="188" height="3.5" fill="#111827"/>
        <rect x="0" y="3.5" width="188" height="3.2" fill="#DC2626"/>
        <rect x="0" y="6.7" width="188" height="3.2" fill="#FACC15"/>
        <!-- Police shield emblem left -->
        <path d="M36,13 L53,17.5 L53,28.5 C53,35.5 44.5,39.5 36,42 C27.5,39.5 19,35.5 19,28.5 L19,17.5 Z" fill="#1D4ED8" stroke="#93C5FD" stroke-width="1.2"/>
        <text x="36" y="30" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="7.1" font-weight="800" fill="#FFFFFF">POLIZEI</text>
        <!-- Raid stats card right (clear of 2 HELD badge) -->
        <rect x="78" y="13" width="104" height="41" rx="3" fill="#0F172A" stroke="#60A5FA" stroke-width="1"/>
        <text x="130" y="25.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="7.7" font-weight="800" fill="#FDE68A">250 POLICE · 17 RAIDS</text>
        <text x="130" y="37.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6.5" font-weight="700" fill="#E2E8F0">COLOGNE &amp; HEIDELBERG</text>
        <text x="130" y="48" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6.3" font-weight="800" fill="#FCA5A5">SYNAGOGUE PLOT FOILED</text>
        ${badgeOverlay}
      </svg>`;

    case 'progress97':
      return `<svg viewBox="0 0 188 60" width="100%" height="60" xmlns="http://www.w3.org/2000/svg">
        <rect width="188" height="60" fill="#0E1B33"/>
        <circle cx="18" cy="12" r="1" fill="#E2E8F0"/><circle cx="164" cy="10" r="1.2" fill="#FEF08A"/><circle cx="122" cy="14" r="1" fill="#E2E8F0"/>
        <!-- Curved Earth horizon -->
        <path d="M0,60 Q94,38 188,60 Z" fill="#1D6FA5"/>
        <path d="M0,60 Q94,38 188,60" fill="none" stroke="#7DD3FC" stroke-width="1.8"/>
        <!-- ISS central truss & gold solar wings -->
        <rect x="52" y="22" width="84" height="5" fill="#E2E8F0"/>
        <rect x="60" y="10" width="14" height="29" fill="#D97706" stroke="#FDE68A" stroke-width="0.7"/>
        <rect x="114" y="10" width="14" height="29" fill="#D97706" stroke="#FDE68A" stroke-width="0.7"/>
        <!-- Progress 97 cargo ship docking -->
        <rect x="86" y="28" width="16" height="9" rx="3" fill="#FFFFFF" stroke="#94A3B8" stroke-width="0.8"/>
        <line x1="94" y1="27" x2="94" y2="29" stroke="#FACC15" stroke-width="2"/>
        <text x="134" y="54" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="7.1" font-weight="800" fill="#FFFFFF">ISS DOCKED</text>
        ${badgeOverlay}
      </svg>`;

    case 'australiaduty':
      return `<svg viewBox="0 0 188 60" width="100%" height="60" xmlns="http://www.w3.org/2000/svg">
        <rect width="188" height="60" fill="#E0F2FE"/>
        <!-- Australia Flag left -->
        <rect x="12" y="8" width="44" height="25" fill="#1E3A8A" stroke="#FFFFFF" stroke-width="0.8"/>
        <path d="M12,8 L31,19 M31,8 L12,19 M21.5,8 L21.5,19 M12,13.5 L31,13.5" stroke="#FFFFFF" stroke-width="1.8"/>
        <path d="M21.5,8 L21.5,19 M12,13.5 L31,13.5" stroke="#DC2626" stroke-width="0.9"/>
        <circle cx="46" cy="14" r="1.4" fill="#FFFFFF"/><circle cx="50" cy="20" r="1.4" fill="#FFFFFF"/><circle cx="43" cy="23" r="1.4" fill="#FFFFFF"/>
        <!-- Digital Duty Act card right (clear of 5% FINES badge) -->
        <rect x="78" y="6" width="104" height="48" rx="3" fill="#FFFFFF" stroke="#0369A1" stroke-width="1.2"/>
        <rect x="78" y="6" width="104" height="13" rx="2" fill="#0369A1"/>
        <text x="130" y="15" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="7.0" font-weight="800" fill="#FFFFFF">DIGITAL DUTY ACT</text>
        <text x="130" y="33.5" text-anchor="middle" font-family="Georgia,serif" font-size="11.2" font-weight="800" fill="#B91C1C">UP TO 5% FINES</text>
        <text x="130" y="46.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6.3" font-weight="800" fill="#334155">SOCIAL MEDIA &amp; AI BOTS</text>
        ${badgeOverlay}
      </svg>`;
  }
}
