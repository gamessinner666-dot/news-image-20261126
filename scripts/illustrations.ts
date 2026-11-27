// 13 full-bleed bespoke editorial pictorial SVG scenes for Thursday 26 November 2026.
// Unified vintage print palette (deep slate #1C3447, terracotta #C64732, ochre #DCA03D,
// sage teal #376E6B, warm sky #D5E3EB, archival cream #F4EBD7) — pure visual storytelling,
// zero cluttered text-boxes or black stat pills covering the artwork.

export function renderLeadScene(key: 'noreaster' | 'kuwaitdrone' | 'ecbsummit'): string {
  if (key === 'noreaster') {
    // Pure pictorial NYC Nor'easter: dramatic stormy skyline, slashing gale rain & lightning,
    // giant deflated terracotta/ochre parade star balloon slumped across wet avenue, umbrella silhouettes
    return `<svg viewBox="0 0 316 104" width="100%" height="104" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="nySky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1C3447"/>
          <stop offset="65%" stop-color="#35556E"/>
          <stop offset="100%" stop-color="#53728A"/>
        </linearGradient>
      </defs>
      <rect width="316" height="76" fill="url(#nySky)"/>
      <!-- Layered storm cloud bank -->
      <path d="M0,0 L316,0 L316,25 Q274,36 232,24 Q190,38 144,26 Q96,38 48,25 Q20,32 0,24 Z" fill="#172A3A"/>
      <path d="M18,16 Q72,4 128,18 Q186,6 244,18 Q284,10 316,16 L316,0 L0,0 Z" fill="#2A445A"/>
      <!-- Midtown Manhattan skyline (Empire State + towers) -->
      <rect x="8" y="42" width="22" height="34" fill="#1B2E40"/>
      <rect x="34" y="34" width="18" height="42" fill="#23394D"/>
      <rect x="56" y="24" width="16" height="52" fill="#182A3B"/>
      <rect x="60" y="16" width="8" height="8" fill="#182A3B"/>
      <polygon points="64,4 62,16 66,16" fill="#2A445A"/>
      <rect x="76" y="46" width="24" height="30" fill="#23394D"/>
      <rect x="204" y="40" width="22" height="36" fill="#23394D"/>
      <rect x="230" y="28" width="20" height="48" fill="#182A3B"/>
      <rect x="254" y="44" width="24" height="32" fill="#23394D"/>
      <rect x="282" y="36" width="26" height="40" fill="#1B2E40"/>
      <!-- Warm glowing apartment windows -->
      <g fill="#E8BC66" fill-opacity="0.75">
        <rect x="13" y="48" width="3" height="4"/><rect x="21" y="54" width="3" height="4"/>
        <rect x="39" y="42" width="3" height="4"/><rect x="45" y="50" width="3" height="4"/>
        <rect x="61" y="32" width="3" height="4"/><rect x="61" y="42" width="3" height="4"/>
        <rect x="236" y="36" width="3" height="4"/><rect x="242" y="46" width="3" height="4"/>
        <rect x="288" y="44" width="3" height="4"/><rect x="297" y="52" width="3" height="4"/>
      </g>
      <!-- Bright ochre lightning bolt -->
      <polygon points="184,22 174,42 183,42 176,62 196,38 186,38" fill="#E8BC66"/>
      <!-- Slashing wind-driven rain streaks -->
      <g stroke="#B8D4E8" stroke-width="1.15" stroke-opacity="0.65">
        <line x1="24" y1="26" x2="10" y2="58"/><line x1="88" y1="24" x2="74" y2="56"/>
        <line x1="126" y1="22" x2="112" y2="54"/><line x1="162" y1="26" x2="148" y2="58"/>
        <line x1="214" y1="24" x2="200" y2="56"/><line x1="268" y1="26" x2="254" y2="58"/>
        <line x1="304" y1="24" x2="290" y2="56"/>
      </g>
      <!-- Rain-slicked Manhattan avenue -->
      <rect y="74" width="316" height="30" fill="#26323E"/>
      <line x1="0" y1="74" x2="316" y2="74" stroke="#6E8BA3" stroke-width="1.2"/>
      <line x1="18" y1="90" x2="298" y2="90" stroke="#DCA03D" stroke-width="1.4" stroke-dasharray="12,10" stroke-opacity="0.7"/>
      <!-- Giant deflated terracotta & ochre parade balloon slumped on avenue -->
      <path d="M84,84 C80,62 106,50 132,54 C152,44 176,54 184,68 C196,64 206,74 198,85 C172,88 112,88 84,84 Z"
        fill="#C64732" stroke="#9E2F20" stroke-width="1.2"/>
      <path d="M104,76 Q134,60 168,72" fill="none" stroke="#E8BC66" stroke-width="2.6" stroke-linecap="round"/>
      <circle cx="122" cy="67" r="4.5" fill="#F4EBD7"/>
      <circle cx="156" cy="65" r="3.5" fill="#E8BC66"/>
      <!-- Tether ropes pinned to street -->
      <line x1="94" y1="84" x2="74" y2="96" stroke="#CBD5E1" stroke-width="1"/>
      <line x1="188" y1="84" x2="210" y2="96" stroke="#CBD5E1" stroke-width="1"/>
      <!-- Tilted storm umbrellas held by spectators (right) -->
      <g>
        <path d="M224,78 A12,9 0 0,1 246,74 Z" fill="#DCA03D" transform="rotate(-14 235 76)"/>
        <line x1="235" y1="76" x2="238" y2="96" stroke="#141C24" stroke-width="1.5"/>
        <circle cx="238" cy="84" r="3.2" fill="#141C24"/>
        <path d="M254,80 A12,9 0 0,1 276,76 Z" fill="#376E6B" transform="rotate(-12 265 78)"/>
        <line x1="265" y1="78" x2="268" y2="96" stroke="#141C24" stroke-width="1.5"/>
        <circle cx="268" cy="85" r="3.2" fill="#141C24"/>
      </g>
      <!-- Leaning utility pole with snapped sparkling power line (left-mid) -->
      <line x1="48" y1="48" x2="54" y2="92" stroke="#141C24" stroke-width="2.4"/>
      <line x1="38" y1="54" x2="60" y2="51" stroke="#141C24" stroke-width="2"/>
      <path d="M38,54 Q26,64 20,76" fill="none" stroke="#E8BC66" stroke-width="1.2" stroke-dasharray="2.5,2"/>
      <!-- Clean corner story number -->
      <circle cx="15" cy="89" r="9.5" fill="#0F766E" stroke="#FAF5EA" stroke-width="1.5"/>
      <text x="15" y="92.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="9.8" font-weight="800" fill="#FFFFFF">1</text>
    </svg>`;
  }

  if (key === 'kuwaitdrone') {
    // Pure pictorial Gulf desert air-defense radar compound struck by drone + Kuwait & Italy flags
    return `<svg viewBox="0 0 316 104" width="100%" height="104" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gulfSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#D9B996"/>
          <stop offset="65%" stop-color="#EED8BC"/>
          <stop offset="100%" stop-color="#F6EAD7"/>
        </linearGradient>
      </defs>
      <rect width="316" height="66" fill="url(#gulfSky)"/>
      <!-- Distant Gulf sea horizon & rolling desert dunes -->
      <rect y="58" width="316" height="9" fill="#4E7C94"/>
      <path d="M0,66 Q80,61 164,66 T316,64 L316,104 L0,104 Z" fill="#C99B68"/>
      <path d="M0,84 Q112,76 218,86 T316,80 L316,104 L0,104 Z" fill="#B58352"/>
      <!-- Kuwait & Italy flags (crisp top-left) -->
      <rect x="10" y="9" width="32" height="19" fill="#FFFFFF" stroke="#384350" stroke-width="0.7"/>
      <rect x="10" y="9" width="32" height="6.3" fill="#2A7A4B"/>
      <rect x="10" y="21.7" width="32" height="6.3" fill="#C64732"/>
      <polygon points="10,9 18,14.5 18,22.5 10,28" fill="#1C242C"/>
      <rect x="47" y="9" width="31" height="19" fill="#FFFFFF" stroke="#384350" stroke-width="0.7"/>
      <rect x="47" y="9" width="10.3" height="19" fill="#2A7A4B"/>
      <rect x="67.7" y="9" width="10.3" height="19" fill="#C64732"/>
      <!-- Military radar station, radome & lattice mast (center-left) -->
      <rect x="78" y="54" width="84" height="26" fill="#465564" stroke="#1E293B" stroke-width="1"/>
      <rect x="86" y="61" width="14" height="10" fill="#1E293B"/>
      <rect x="140" y="61" width="14" height="10" fill="#1E293B"/>
      <!-- Curved white radome sphere -->
      <path d="M96,54 A24,22 0 0,1 144,54 Z" fill="#F4EBD7" stroke="#384350" stroke-width="1.1"/>
      <path d="M108,54 A16,22 0 0,1 132,54" fill="none" stroke="#CBD5E1" stroke-width="0.8"/>
      <!-- Secondary radar antenna tower -->
      <path d="M174,80 L182,36 L190,80 M176,56 L188,56 M178,46 L186,46" fill="none" stroke="#384350" stroke-width="1.6"/>
      <ellipse cx="182" cy="34" rx="10" ry="4" fill="#F4EBD7" stroke="#384350" stroke-width="1" transform="rotate(-18 182 34)"/>
      <!-- Incoming delta-wing drone silhouette + curved flight path (upper right) -->
      <path d="M276,22 Q226,24 152,44" fill="none" stroke="#9E2F20" stroke-width="1.6" stroke-dasharray="4,3"/>
      <polygon points="266,22 292,13 284,23 294,30" fill="#1C242C"/>
      <polygon points="274,22 287,18 284,23" fill="#465564"/>
      <!-- Dramatic rising charcoal smoke plumes & layered fireball on radome -->
      <circle cx="146" cy="24" r="15" fill="#2E3A46" fill-opacity="0.62"/>
      <circle cx="164" cy="17" r="13" fill="#465564" fill-opacity="0.5"/>
      <circle cx="132" cy="32" r="13" fill="#384350" fill-opacity="0.55"/>
      <path d="M124,62 C119,42 132,30 140,20 C147,33 158,34 156,62 Z" fill="#C64732"/>
      <path d="M132,62 C130,49 138,40 142,33 C146,43 151,46 149,62 Z" fill="#E8BC66"/>
      <!-- Clean corner story number -->
      <circle cx="15" cy="89" r="9.5" fill="#B91C1C" stroke="#FAF5EA" stroke-width="1.5"/>
      <text x="15" y="92.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="9.8" font-weight="800" fill="#FFFFFF">2</text>
    </svg>`;
  }

  // ecbsummit: Frankfurt slanted twin Eurotowers + gleaming gold Euro medallion with EU stars + Spanish flag + hemicycle
  return `<svg viewBox="0 0 316 104" width="100%" height="104" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="euSky" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#18304C"/>
        <stop offset="100%" stop-color="#284C75"/>
      </linearGradient>
    </defs>
    <rect width="316" height="104" fill="url(#euSky)"/>
    <!-- Subtle horizon band -->
    <rect y="84" width="316" height="20" fill="#13263C"/>
    <!-- Spanish Flag top-left (first Spanish ECB president) -->
    <rect x="12" y="10" width="34" height="21" fill="#C64732" stroke="#F4EBD7" stroke-width="0.8"/>
    <rect x="12" y="15.2" width="34" height="10.6" fill="#DCA03D"/>
    <!-- Sculpted gold Euro medallion ringed by 12 EU star dots (left-center) -->
    <circle cx="104" cy="52" r="36" fill="none" stroke="#E8BC66" stroke-width="2.2" stroke-dasharray="2.4,16.4"/>
    <circle cx="104" cy="52" r="25" fill="#1D4ED8" stroke="#E8BC66" stroke-width="2"/>
    <text x="104" y="65" text-anchor="middle" font-family="Georgia,serif" font-size="37" font-weight="800" fill="#F4D37B">€</text>
    <!-- Frankfurt ECB slanted glass twin towers (center-right) -->
    <polygon points="166,92 178,12 198,12 190,92" fill="#689CC7" stroke="#142942" stroke-width="1"/>
    <polygon points="196,92 204,20 224,20 218,92" fill="#8BB9DC" stroke="#142942" stroke-width="1"/>
    <!-- Architectural atrium cross-braces -->
    <g stroke="#18304C" stroke-width="1">
      <line x1="175" y1="30" x2="195" y2="30"/><line x1="172" y1="50" x2="193" y2="50"/><line x1="169" y1="70" x2="191" y2="70"/>
      <line x1="202" y1="38" x2="222" y2="38"/><line x1="200" y1="56" x2="220" y2="56"/><line x1="198" y1="74" x2="219" y2="74"/>
    </g>
    <!-- EU Summit chamber hemicycle arc (right) showing budget/Ukraine split -->
    <path d="M236,84 A36,36 0 0,1 304,84" fill="none" stroke="#F4EBD7" stroke-width="5" stroke-dasharray="14,3"/>
    <path d="M246,84 A26,26 0 0,1 294,84" fill="none" stroke="#DCA03D" stroke-width="5" stroke-dasharray="11,3"/>
    <path d="M256,84 A16,16 0 0,1 284,84" fill="none" stroke="#C64732" stroke-width="5" stroke-dasharray="8,3"/>
    <circle cx="270" cy="84" r="5" fill="#F4EBD7"/>
    <!-- Clean corner story number -->
    <circle cx="15" cy="89" r="9.5" fill="#1D4ED8" stroke="#FAF5EA" stroke-width="1.5"/>
    <text x="15" y="92.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="9.8" font-weight="800" fill="#FFFFFF">3</text>
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
  regionColor: string
): string {
  // Clean single corner badge only — ZERO dark stat pills covering the artwork!
  const cornerBadge = `
    <circle cx="12" cy="48" r="8.2" fill="${regionColor}" stroke="#FAF5EA" stroke-width="1.4"/>
    <text x="12" y="51.1" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="8.4" font-weight="800" fill="#FFFFFF">${num}</text>
  `;

  switch (key) {
    case 'jazan':
      // Red Sea coastal refinery tanks & cracking towers struck by fireball & rising smoke
      return `<svg viewBox="0 0 188 60" width="100%" height="60" xmlns="http://www.w3.org/2000/svg">
        <rect width="188" height="39" fill="#EED4B7"/>
        <rect y="39" width="188" height="6" fill="#46728C"/>
        <rect y="45" width="188" height="15" fill="#BE8F5D"/>
        <!-- Storage spheres & cracking columns -->
        <circle cx="38" cy="37" r="10" fill="#E8DFCE" stroke="#465564" stroke-width="1"/>
        <circle cx="62" cy="38" r="9" fill="#D5CCB8" stroke="#465564" stroke-width="1"/>
        <rect x="78" y="16" width="8" height="29" fill="#465564"/>
        <rect x="92" y="22" width="10" height="23" fill="#384350"/>
        <rect x="150" y="26" width="24" height="19" fill="#64748B" stroke="#384350" stroke-width="0.9"/>
        <!-- Smoke & vivid flame plume -->
        <circle cx="124" cy="16" r="12" fill="#2E3A46" fill-opacity="0.62"/>
        <circle cx="144" cy="11" r="11" fill="#465564" fill-opacity="0.48"/>
        <path d="M106,45 C102,28 114,20 120,10 C127,22 135,24 133,45 Z" fill="#C64732"/>
        <path d="M113,45 C111,34 118,28 121,23 C125,30 128,34 126,45 Z" fill="#E8BC66"/>
        ${cornerBadge}
      </svg>`;

    case 'bokrate':
      // Classical Bank of Korea dome building + rising rate steps to bold 3.25% + gold chip accent
      return `<svg viewBox="0 0 188 60" width="100%" height="60" xmlns="http://www.w3.org/2000/svg">
        <rect width="188" height="60" fill="#F2E6CE"/>
        <rect y="48" width="188" height="12" fill="#D8C9AA"/>
        <!-- Bank of Korea neoclassical facade & sage-teal dome (left) -->
        <path d="M26,24 A18,14 0 0,1 62,24 Z" fill="#376E6B" stroke="#1C3447" stroke-width="0.9"/>
        <rect x="18" y="24" width="52" height="24" fill="#E6DAC2" stroke="#465564" stroke-width="1"/>
        <rect x="24" y="30" width="7" height="12" rx="3" fill="#26435A"/>
        <rect x="37" y="30" width="14" height="18" rx="4" fill="#1C3447"/>
        <rect x="57" y="30" width="7" height="12" rx="3" fill="#26435A"/>
        <!-- Bold stepped rate bars + upward terracotta arrow + single crisp 3.25% figure -->
        <rect x="82" y="34" width="22" height="14" fill="#8C99A6"/>
        <rect x="110" y="22" width="24" height="26" fill="#C64732"/>
        <path d="M84,26 L108,14 L102,13 L112,11 L109,20 L108,16" fill="#B45309" stroke="#B45309" stroke-width="1.6"/>
        <text x="158" y="35" text-anchor="middle" font-family="Georgia,serif" font-size="16" font-weight="800" fill="#9E2F20">3.25%</text>
        <text x="158" y="46" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="7.4" font-weight="800" fill="#384350">+25 bps</text>
        ${cornerBadge}
      </svg>`;

    case 'fifacyber':
      // Pure pictorial FIFA cyberattack: classic soccer ball + snapping crimson padlock + server racks (ZERO text box!)
      return `<svg viewBox="0 0 188 60" width="100%" height="60" xmlns="http://www.w3.org/2000/svg">
        <rect width="188" height="60" fill="#1C3447"/>
        <!-- Subtle teal circuit board grid -->
        <g stroke="#376E6B" stroke-width="0.9" stroke-opacity="0.6">
          <polyline points="0,16 32,16 42,26"/><polyline points="0,44 28,44 38,34"/>
          <polyline points="188,18 156,18 144,30"/><polyline points="188,46 154,46 142,34"/>
        </g>
        <!-- Server racks (right) with crimson breach LEDs -->
        <rect x="134" y="9" width="42" height="42" rx="2" fill="#142330" stroke="#4E7C94" stroke-width="1"/>
        <rect x="140" y="15" width="30" height="6" fill="#26435A"/><circle cx="165" cy="18" r="2" fill="#C64732"/>
        <rect x="140" y="27" width="30" height="6" fill="#26435A"/><circle cx="165" cy="30" r="2" fill="#E8BC66"/>
        <rect x="140" y="39" width="30" height="6" fill="#26435A"/><circle cx="165" cy="42" r="2" fill="#C64732"/>
        <!-- Classic soccer ball (left-center) -->
        <circle cx="48" cy="29" r="19" fill="#F4EBD7" stroke="#142330" stroke-width="1.4"/>
        <polygon points="48,20 56,26 53,35 43,35 40,26" fill="#1C242C"/>
        <line x1="48" y1="20" x2="48" y2="10" stroke="#1C242C" stroke-width="1.3"/>
        <line x1="56" y1="26" x2="66" y2="23" stroke="#1C242C" stroke-width="1.3"/>
        <line x1="40" y1="26" x2="30" y2="23" stroke="#1C242C" stroke-width="1.3"/>
        <line x1="53" y1="35" x2="60" y2="44" stroke="#1C242C" stroke-width="1.3"/>
        <line x1="43" y1="35" x2="36" y2="44" stroke="#1C242C" stroke-width="1.3"/>
        <!-- Snapped crimson padlock in center with glowing breach spark -->
        <path d="M90,24 L90,17 A9,9 0 0,1 108,16 L108,19" fill="none" stroke="#E8BC66" stroke-width="3" stroke-linecap="round"/>
        <rect x="85" y="24" width="26" height="22" rx="3" fill="#C64732" stroke="#F4EBD7" stroke-width="1"/>
        <circle cx="98" cy="33" r="3" fill="#1C242C"/>
        <rect x="96.5" y="35" width="3" height="6" fill="#1C242C"/>
        <line x1="114" y1="29" x2="130" y2="23" stroke="#E8BC66" stroke-width="1.6" stroke-dasharray="3,2"/>
        <line x1="114" y1="36" x2="130" y2="39" stroke="#C64732" stroke-width="1.6" stroke-dasharray="3,2"/>
        ${cornerBadge}
      </svg>`;

    case 'ukmigration':
      // Iconic Big Ben & Westminster silhouette + steep downward terracotta curve to crisp 77K
      return `<svg viewBox="0 0 188 60" width="100%" height="60" xmlns="http://www.w3.org/2000/svg">
        <rect width="188" height="60" fill="#D5E3EB"/>
        <rect y="50" width="188" height="10" fill="#527894"/>
        <!-- Big Ben (Elizabeth Tower) & Palace of Westminster silhouette (left) -->
        <rect x="26" y="18" width="16" height="34" fill="#26435A"/>
        <polygon points="34,4 25,18 43,18" fill="#1C3447"/>
        <circle cx="34" cy="26" r="5" fill="#F4EBD7" stroke="#1C3447" stroke-width="1"/>
        <line x1="34" y1="26" x2="34" y2="23" stroke="#1C3447" stroke-width="1.2"/>
        <line x1="34" y1="26" x2="37" y2="27" stroke="#1C3447" stroke-width="1"/>
        <rect x="42" y="36" width="34" height="16" fill="#35556E"/>
        <!-- Sweeping plunging chart area & terracotta line (right) -->
        <polygon points="82,12 114,16 140,34 166,44 166,50 82,50" fill="#C64732" fill-opacity="0.22"/>
        <polyline points="82,12 114,16 140,34 166,44" fill="none" stroke="#C64732" stroke-width="3"/>
        <circle cx="166" cy="44" r="4" fill="#C64732" stroke="#F4EBD7" stroke-width="1.2"/>
        <text x="158" y="21" text-anchor="middle" font-family="Georgia,serif" font-size="15.5" font-weight="800" fill="#1C3447">77K</text>
        ${cornerBadge}
      </svg>`;

    case 'bangkokfire':
      // Bangkok Bangchak refinery explosion & rolling dark smoke over skyline
      return `<svg viewBox="0 0 188 60" width="100%" height="60" xmlns="http://www.w3.org/2000/svg">
        <rect width="188" height="42" fill="#DCE4E8"/>
        <rect y="42" width="188" height="18" fill="#465564"/>
        <!-- Heavy billowing charcoal smoke clouds -->
        <circle cx="96" cy="18" r="14" fill="#1E293B" fill-opacity="0.72"/>
        <circle cx="118" cy="13" r="16" fill="#334155" fill-opacity="0.65"/>
        <circle cx="144" cy="15" r="13" fill="#475569" fill-opacity="0.5"/>
        <!-- Bangkok skyline & Bangchak distillation towers -->
        <rect x="18" y="24" width="14" height="20" fill="#64748B"/>
        <rect x="38" y="16" width="9" height="28" fill="#384350"/>
        <rect x="52" y="22" width="14" height="22" fill="#465564"/>
        <rect x="148" y="20" width="18" height="24" fill="#64748B"/>
        <rect x="170" y="28" width="12" height="16" fill="#465564"/>
        <!-- Vivid explosion fireball -->
        <path d="M72,44 C67,26 80,18 88,9 C96,21 104,22 106,44 Z" fill="#C64732"/>
        <path d="M80,44 C78,33 85,26 89,20 C93,28 98,32 96,44 Z" fill="#E8BC66"/>
        ${cornerBadge}
      </svg>`;

    case 'argentinabcra':
      // Pure pictorial BCRA reform: Buenos Aires bank portico + peso bills under crimson ban slash (ZERO text box!)
      return `<svg viewBox="0 0 188 60" width="100%" height="60" xmlns="http://www.w3.org/2000/svg">
        <rect width="188" height="60" fill="#EFE6D4"/>
        <!-- Subtle Argentine flag stripe at top -->
        <rect x="0" y="0" width="188" height="4" fill="#5BA8D6"/>
        <rect x="0" y="4" width="188" height="3" fill="#FFFFFF"/>
        <rect x="0" y="7" width="188" height="4" fill="#5BA8D6"/>
        <!-- Neoclassical BCRA portico (left) -->
        <polygon points="16,24 52,13 88,24" fill="#38546B"/>
        <rect x="20" y="24" width="64" height="26" fill="#E2D6BE" stroke="#38546B" stroke-width="0.9"/>
        <rect x="26" y="26" width="7" height="22" fill="#F8F3E8"/><rect x="41" y="26" width="7" height="22" fill="#F8F3E8"/>
        <rect x="56" y="26" width="7" height="22" fill="#F8F3E8"/><rect x="71" y="26" width="7" height="22" fill="#F8F3E8"/>
        <rect x="14" y="50" width="76" height="5" fill="#26435A"/>
        <!-- Stacked peso banknotes inside bold crimson prohibition symbol (right) -->
        <rect x="112" y="23" width="48" height="24" rx="2" fill="#376E6B" stroke="#1C3447" stroke-width="1"/>
        <rect x="116" y="27" width="40" height="16" rx="1" fill="#56948E"/>
        <circle cx="136" cy="35" r="5.5" fill="#F4EBD7"/>
        <text x="136" y="38.5" text-anchor="middle" font-family="Georgia,serif" font-size="9.5" font-weight="800" fill="#1C3447">$</text>
        <!-- Prohibition circle & slash -->
        <circle cx="136" cy="35" r="20" fill="none" stroke="#C64732" stroke-width="3.6"/>
        <line x1="122" y1="21" x2="150" y2="49" stroke="#C64732" stroke-width="3.6"/>
        ${cornerBadge}
      </svg>`;

    case 'kenyacourt':
      // Sunlit Nairobi High Court + wooden judge's gavel beside halted red-cross medical tent
      return `<svg viewBox="0 0 188 60" width="100%" height="60" xmlns="http://www.w3.org/2000/svg">
        <rect width="188" height="46" fill="#EFE4CC"/>
        <rect y="46" width="188" height="14" fill="#BFA882"/>
        <!-- Pillared High Court facade (left) -->
        <polygon points="14,22 58,7 102,22" fill="#376E6B" stroke="#1C3447" stroke-width="0.9"/>
        <rect x="20" y="22" width="76" height="26" fill="#1E4B49"/>
        <rect x="26" y="22" width="8" height="26" fill="#F4EBD7"/>
        <rect x="44" y="22" width="8" height="26" fill="#F4EBD7"/>
        <rect x="64" y="22" width="8" height="26" fill="#F4EBD7"/>
        <rect x="82" y="22" width="8" height="26" fill="#F4EBD7"/>
        <rect x="14" y="48" width="88" height="5" fill="#1C3447"/>
        <!-- Sculpted mahogany judge's gavel (center) -->
        <rect x="52" y="26" width="19" height="8" rx="1.8" fill="#A65E2E" stroke="#F4EBD7" stroke-width="0.9" transform="rotate(-24 61 30)"/>
        <line x1="61" y1="32" x2="72" y2="45" stroke="#7C3F1A" stroke-width="2.6" stroke-linecap="round"/>
        <!-- Halted medical quarantine tent silhouette (right) -->
        <path d="M116,48 L124,26 L168,26 L176,48 Z" fill="#F8F3E8" stroke="#465564" stroke-width="1"/>
        <rect x="141" y="34" width="10" height="3.2" fill="#C64732"/>
        <rect x="144.4" y="30.6" width="3.2" height="10" fill="#C64732"/>
        <!-- Crimson halt diagonal bar over construction tent -->
        <line x1="120" y1="22" x2="172" y2="48" stroke="#C64732" stroke-width="3" stroke-linecap="round"/>
        ${cornerBadge}
      </svg>`;

    case 'germanycell':
      // Nighttime Cologne synagogue dome protected by cobalt police shield & blue patrol light beams (ZERO "FOILED" text!)
      return `<svg viewBox="0 0 188 60" width="100%" height="60" xmlns="http://www.w3.org/2000/svg">
        <rect width="188" height="60" fill="#1A2C40"/>
        <!-- Crisp German tricolor top trim -->
        <rect x="0" y="0" width="188" height="3" fill="#111827"/>
        <rect x="0" y="3" width="188" height="3" fill="#C64732"/>
        <rect x="0" y="6" width="188" height="3" fill="#DCA03D"/>
        <!-- Sweeping police patrol light beams -->
        <polygon points="154,34 86,10 86,44" fill="#60A5FA" fill-opacity="0.18"/>
        <rect y="48" width="188" height="12" fill="#101C29"/>
        <!-- Warm-lit synagogue dome silhouette (left-center) -->
        <path d="M32,32 A22,18 0 0,1 76,32 Z" fill="#DCA03D" stroke="#F4EBD7" stroke-width="0.9"/>
        <rect x="26" y="32" width="56" height="18" fill="#2A445A" stroke="#142330" stroke-width="0.9"/>
        <rect x="36" y="37" width="8" height="11" rx="4" fill="#E8BC66"/>
        <rect x="50" y="37" width="8" height="11" rx="4" fill="#E8BC66"/>
        <rect x="64" y="37" width="8" height="11" rx="4" fill="#E8BC66"/>
        <!-- Cobalt protective police shield (center-right) -->
        <path d="M114,15 L134,20 L134,34 C134,43 124,49 114,52 C104,49 94,43 94,34 L94,20 Z" fill="#1D4ED8" stroke="#93C5FD" stroke-width="1.5"/>
        <polygon points="114,23 117,31 125,31 119,36 121,44 114,39 107,44 109,36 103,31 111,31" fill="#F4EBD7"/>
        <!-- Police vehicle silhouette with blue siren (right) -->
        <rect x="146" y="37" width="32" height="11" rx="2" fill="#E2E8F0"/>
        <rect x="151" y="32" width="18" height="6" rx="1.5" fill="#384350"/>
        <rect x="157" y="29" width="6" height="3" fill="#3B82F6"/>
        <circle cx="153" cy="48" r="3" fill="#141C24"/><circle cx="171" cy="48" r="3" fill="#141C24"/>
        ${cornerBadge}
      </svg>`;

    case 'progress97':
      // Angled 3D ISS with ribbed golden solar arrays orbiting over sunlit Earth + Progress 97 docking
      return `<svg viewBox="0 0 188 60" width="100%" height="60" xmlns="http://www.w3.org/2000/svg">
        <rect width="188" height="60" fill="#122338"/>
        <!-- Starfield -->
        <g fill="#F4EBD7">
          <circle cx="20" cy="11" r="1"/><circle cx="52" cy="8" r="0.9"/><circle cx="128" cy="9" r="1.1"/>
          <circle cx="166" cy="14" r="1"/><circle cx="144" cy="22" r="0.8"/><circle cx="28" cy="26" r="0.9"/>
        </g>
        <!-- Curved sunlit Earth limb -->
        <path d="M0,60 Q94,36 188,60 Z" fill="#2D6E9E"/>
        <path d="M0,60 Q94,36 188,60" fill="none" stroke="#85C7E8" stroke-width="2"/>
        <!-- Angled ISS main truss & ribbed ochre-gold solar wings -->
        <g transform="rotate(-8 94 25)">
          <rect x="44" y="22" width="100" height="5" fill="#E2E8F0"/>
          <rect x="86" y="17" width="16" height="15" rx="3" fill="#CBD5E1"/>
          <rect x="50" y="7" width="16" height="34" fill="#DCA03D" stroke="#F4EBD7" stroke-width="0.8"/>
          <rect x="70" y="7" width="12" height="34" fill="#C98A2E" stroke="#F4EBD7" stroke-width="0.7"/>
          <rect x="106" y="7" width="12" height="34" fill="#C98A2E" stroke="#F4EBD7" stroke-width="0.7"/>
          <rect x="122" y="7" width="16" height="34" fill="#DCA03D" stroke="#F4EBD7" stroke-width="0.8"/>
          <line x1="58" y1="7" x2="58" y2="41" stroke="#78350F" stroke-width="0.7"/>
          <line x1="130" y1="7" x2="130" y2="41" stroke="#78350F" stroke-width="0.7"/>
        </g>
        <!-- Progress 97 cargo capsule approaching Rassvet docking port -->
        <line x1="94" y1="30" x2="94" y2="39" stroke="#E8BC66" stroke-width="1.8" stroke-dasharray="2.5,2"/>
        <rect x="84" y="39" width="20" height="10" rx="4" fill="#F4EBD7" stroke="#465564" stroke-width="0.9"/>
        <rect x="74" y="42" width="10" height="4" fill="#4E7C94"/>
        <rect x="104" y="42" width="10" height="4" fill="#4E7C94"/>
        ${cornerBadge}
      </svg>`;

    case 'australiaduty':
      // Canberra Parliament flagpole + Australian flag beside smartphone/AI screen behind steel safety shield
      return `<svg viewBox="0 0 188 60" width="100%" height="60" xmlns="http://www.w3.org/2000/svg">
        <rect width="188" height="46" fill="#D5E3EB"/>
        <!-- Canberra Parliament grass roof hill -->
        <path d="M0,48 Q46,34 94,48 L94,60 L0,60 Z" fill="#376E6B"/>
        <rect x="94" y="46" width="94" height="14" fill="#BED0DB"/>
        <!-- Iconic Parliament House four-legged flagpole mast -->
        <path d="M24,44 L44,10 L64,44 M34,44 L44,10 L54,44" fill="none" stroke="#384350" stroke-width="1.5"/>
        <!-- Crisp miniature Australian Flag -->
        <rect x="44" y="6" width="32" height="18" fill="#1C3447" stroke="#F4EBD7" stroke-width="0.7"/>
        <path d="M44,6 L58,14 M58,6 L44,14 M51,6 L51,14 M44,10 L58,10" stroke="#FFFFFF" stroke-width="1.4"/>
        <path d="M51,6 L51,14 M44,10 L58,10" stroke="#C64732" stroke-width="0.7"/>
        <circle cx="67" cy="11" r="1.1" fill="#FFFFFF"/><circle cx="70" cy="16" r="1.1" fill="#FFFFFF"/><circle cx="64" cy="18" r="1.1" fill="#FFFFFF"/>
        <!-- Smartphone & AI screen (right) guarded by bold steel safety shield -->
        <rect x="102" y="10" width="34" height="44" rx="4" fill="#1C242C" stroke="#465564" stroke-width="1.2"/>
        <rect x="106" y="15" width="26" height="31" rx="1.5" fill="#F4EBD7"/>
        <rect x="109" y="19" width="16" height="4" rx="1" fill="#376E6B"/>
        <rect x="113" y="26" width="16" height="4" rx="1" fill="#DCA03D"/>
        <rect x="109" y="33" width="14" height="4" rx="1" fill="#46728C"/>
        <!-- Protective steel-blue duty-of-care shield with check -->
        <path d="M150,14 L172,20 L172,34 C172,44 161,50 150,53 C139,50 128,44 128,34 L128,20 Z" fill="#0369A1" stroke="#F4EBD7" stroke-width="1.5"/>
        <polyline points="141,33 148,40 160,26" fill="none" stroke="#F4EBD7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        ${cornerBadge}
      </svg>`;
  }
}
