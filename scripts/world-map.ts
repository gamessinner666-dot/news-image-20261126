import { MAP_PINS, MAP_BRIEF_DOTS, REGION_LOOKUP } from '../data/stories.ts';

// Archival parchment World Locator Map showing all 11 geographic featured pins
// and all 36 geographic digest dots (plus 2 Global/Space chips below => 49 stories exact).
const SCALE_X = 0.96;
const SCALE_Y = 1.16;
const OFFSET_X = -4;
const OFFSET_Y = 11;

function project(x: number, y: number): { sx: number; sy: number } {
  return {
    sx: +(x * SCALE_X + OFFSET_X).toFixed(1),
    sy: +(y * SCALE_Y + OFFSET_Y).toFixed(1),
  };
}

export function renderLocatorMapSvg(totalStories: number, globalCount: number): string {
  const dotsMarkup = MAP_BRIEF_DOTS.map((d) => {
    const color = REGION_LOOKUP[d.region].color;
    const { sx, sy } = project(d.x, d.y);
    return `<circle cx="${sx}" cy="${sy}" r="2.25" fill="${color}" fill-opacity="0.82" stroke="#FAF5EA" stroke-width="0.55"/>`;
  }).join('');

  const pinsMarkup = MAP_PINS.map((pin) => {
    const color = REGION_LOOKUP[pin.region].color;
    const { sx, sy } = project(pin.x, pin.y);
    const isLead = pin.num <= 3;
    const r = isLead ? 6.8 : 5.6;
    const fs = isLead ? 7.1 : 6.0;
    return `
      <g>
        <circle cx="${sx}" cy="${sy}" r="${(r + 1.1).toFixed(1)}" fill="#FFFFFF" fill-opacity="0.96"/>
        <circle cx="${sx}" cy="${sy}" r="${r.toFixed(1)}" fill="${color}"/>
        <text x="${sx}" y="${(sy + fs * 0.35).toFixed(1)}" text-anchor="middle"
          font-family="Segoe UI,Arial,sans-serif" font-size="${fs}" font-weight="800" fill="#FFFFFF">${pin.num}</text>
      </g>
    `;
  }).join('');

  return `<svg viewBox="0 0 314 214" width="100%" height="214" xmlns="http://www.w3.org/2000/svg">
    <rect width="314" height="214" rx="3" fill="#E5EFF5" stroke="#C8BEA8" stroke-width="0.9"/>
    <g transform="translate(${OFFSET_X}, ${OFFSET_Y}) scale(${SCALE_X}, ${SCALE_Y})">
      <line x1="4" y1="84" x2="332" y2="84" stroke="#BBD4E3" stroke-width="0.7" stroke-dasharray="3,2"/>
      <line x1="4" y1="46" x2="332" y2="46" stroke="#C8DCE8" stroke-width="0.5" stroke-dasharray="2,3"/>
      <line x1="4" y1="122" x2="332" y2="122" stroke="#C8DCE8" stroke-width="0.5" stroke-dasharray="2,3"/>
      <!-- North America -->
      <path d="M18,22 L42,16 L78,18 L108,24 L118,36 L104,48 L96,60 L82,68 L74,80 L64,76 L58,64 L48,54 L36,42 L22,36 Z"
        fill="#DDD2BC" stroke="#B7A88E" stroke-width="0.8"/>
      <!-- Greenland -->
      <path d="M114,10 L138,8 L144,22 L128,28 L116,22 Z" fill="#DDD2BC" stroke="#B7A88E" stroke-width="0.8"/>
      <!-- Central America -->
      <path d="M74,80 L84,88 L90,92 L84,94 L72,85 Z" fill="#DDD2BC" stroke="#B7A88E" stroke-width="0.7"/>
      <!-- South America -->
      <path d="M88,92 L106,92 L124,102 L132,116 L124,132 L110,148 L100,156 L94,144 L94,124 L86,108 Z"
        fill="#DDD2BC" stroke="#B7A88E" stroke-width="0.8"/>
      <!-- Europe -->
      <path d="M150,24 L172,18 L194,20 L208,28 L206,46 L196,56 L184,60 L172,58 L160,60 L150,56 L154,44 L148,36 Z"
        fill="#DDD2BC" stroke="#B7A88E" stroke-width="0.8"/>
      <!-- UK -->
      <path d="M153,36 L160,36 L161,46 L154,46 Z" fill="#DDD2BC" stroke="#B7A88E" stroke-width="0.7"/>
      <!-- Africa -->
      <path d="M148,66 L172,64 L196,68 L210,82 L212,96 L202,116 L194,136 L182,138 L174,120 L170,102 L152,92 L144,78 Z"
        fill="#DDD2BC" stroke="#B7A88E" stroke-width="0.8"/>
      <!-- Madagascar -->
      <path d="M210,118 L215,118 L214,130 L209,130 Z" fill="#DDD2BC" stroke="#B7A88E" stroke-width="0.6"/>
      <!-- Middle East & Asia -->
      <path d="M204,22 L248,18 L292,22 L316,32 L308,48 L294,64 L278,76 L266,84 L254,84 L244,92 L236,78 L224,80 L212,80 L202,68 L204,50 Z"
        fill="#DDD2BC" stroke="#B7A88E" stroke-width="0.8"/>
      <!-- Japan -->
      <path d="M302,52 L310,50 L312,62 L304,64 Z" fill="#DDD2BC" stroke="#B7A88E" stroke-width="0.7"/>
      <!-- Indonesia -->
      <path d="M258,98 L272,102 L286,106 L296,108 L292,113 L274,111 L256,104 Z" fill="#DDD2BC" stroke="#B7A88E" stroke-width="0.7"/>
      <!-- Australia -->
      <path d="M270,118 L294,114 L310,124 L308,142 L292,146 L274,140 L268,128 Z"
        fill="#DDD2BC" stroke="#B7A88E" stroke-width="0.8"/>
      <!-- New Zealand -->
      <path d="M318,144 L326,140 L328,150 L320,154 Z" fill="#DDD2BC" stroke="#B7A88E" stroke-width="0.7"/>
    </g>
    ${dotsMarkup}
    ${pinsMarkup}
    <text x="6" y="207.5" font-family="Segoe UI,Arial,sans-serif" font-size="6.4" font-weight="700" fill="#64748B">${MAP_PINS.length} PINS · ${MAP_BRIEF_DOTS.length} BRIEF DOTS · ${globalCount} GLOBAL/ORBIT</text>
    <text x="308" y="207.5" text-anchor="end" font-family="Segoe UI,Arial,sans-serif" font-size="6.4" font-weight="800" fill="#334155">${totalStories} STORIES</text>
  </svg>`;
}
