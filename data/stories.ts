export type RegionCode =
  | 'EU'
  | 'EA'
  | 'AF'
  | 'ME'
  | 'SA'
  | 'NA'
  | 'LA'
  | 'OC'
  | 'GL';

export type CertaintyBadge = 'CONFIRMED' | 'OFFICIAL' | 'REPORTED' | 'CLAIM';

export type StoryField =
  | 'War'
  | 'Diplomacy'
  | 'Security'
  | 'Economy'
  | 'Rights'
  | 'Trade'
  | 'Tech'
  | 'Sport'
  | 'Markets'
  | 'Disaster'
  | 'Justice'
  | 'Energy'
  | 'Space'
  | 'Migration'
  | 'Climate'
  | 'Culture'
  | 'Health'
  | 'Transport';

export interface RegionInfo {
  id: RegionCode;
  name: string;
  shortLabel: string;
  color: string;
}

export interface LeadCard {
  num: number;
  region: RegionCode;
  field: StoryField;
  locationBeat: string;
  badge: CertaintyBadge;
  headline: string;
  summary: string;
  takeaway: string;
  sceneKey: 'noreaster' | 'kuwaitdrone' | 'ecbsummit';
}

export interface FeatureCard {
  num: number;
  region: RegionCode;
  field: StoryField;
  locationBeat: string;
  badge: CertaintyBadge;
  statTag: string;
  headline: string;
  summary: string;
  sceneKey:
    | 'jazan'
    | 'bokrate'
    | 'fifacyber'
    | 'ukmigration'
    | 'bangkokfire'
    | 'argentinabcra'
    | 'kenyacourt'
    | 'germanycell'
    | 'progress97'
    | 'australiaduty';
}

export interface BriefItem {
  num: number;
  region: RegionCode;
  field: StoryField;
  place: string;
  text: string;
  tag?: 'CLAIM' | 'REPORTED';
}

export interface HeadlineStat {
  value: string;
  line1: string;
  line2: string;
  color: string;
}

export interface UtcMilestone {
  utc: string;
  label: string;
}

export interface GeoPin {
  num: number;
  region: RegionCode;
  x: number;
  y: number;
}

export const DAY_TITLE = 'Thursday 26 November 2026';
export const DAY_DECK =
  'Nor’easter delays Macy’s Parade for first time in 100 years  ·  Kuwait drone strike kills 2 Italian technicians  ·  EU taps Spain’s Hernández de Cos to lead ECB';

export const REGIONS: RegionInfo[] = [
  { id: 'EU', name: 'Europe', shortLabel: 'Europe', color: '#1D4ED8' },
  { id: 'EA', name: 'East Asia', shortLabel: 'E. Asia', color: '#B45309' },
  { id: 'AF', name: 'Africa', shortLabel: 'Africa', color: '#15803D' },
  { id: 'ME', name: 'Middle East', shortLabel: 'Mid East', color: '#B91C1C' },
  { id: 'SA', name: 'South & SE Asia', shortLabel: 'S/SE Asia', color: '#C2410C' },
  { id: 'NA', name: 'North America', shortLabel: 'N. America', color: '#0F766E' },
  { id: 'LA', name: 'Latin America', shortLabel: 'LatAm', color: '#7E22CE' },
  { id: 'OC', name: 'Oceania', shortLabel: 'Oceania', color: '#0369A1' },
  { id: 'GL', name: 'World & Space', shortLabel: 'World', color: '#334155' },
];

export const REGION_LOOKUP: Record<RegionCode, RegionInfo> = Object.fromEntries(
  REGIONS.map((r) => [r.id, r])
) as Record<RegionCode, RegionInfo>;

export const HEADLINE_STATS: HeadlineStat[] = [
  { value: '900K+', line1: 'US homes lose power', line2: 'as Macy’s Parade delayed', color: '#0F766E' },
  { value: '3.25%', line1: 'Bank of Korea rate', line2: 'after +25 bps hike', color: '#B45309' },
  { value: '77,000', line1: 'UK net migration,', line2: 'lowest since 1997 (ONS)', color: '#1D4ED8' },
  { value: '€45bn', line1: 'EU Ukraine loan', line2: 'deadlocks Brussels talks', color: '#B91C1C' },
  { value: '8.1%', line1: 'South Africa Oct PPI', line2: 'jumps on fuel costs', color: '#15803D' },
];

export const UTC_TIMELINE: UtcMilestone[] = [
  { utc: '01:00', label: 'BoK hikes 3.25%' },
  { utc: '03:30', label: 'AU Digital Act' },
  { utc: '06:00', label: 'Bangkok blast' },
  { utc: '09:30', label: 'UK mig. 77K' },
  { utc: '11:00', label: 'Kuwait drone' },
  { utc: '13:00', label: 'Progress 97 dock' },
  { utc: '14:00', label: 'Macy’s delayed' },
  { utc: '17:30', label: 'ECB taps de Cos' },
  { utc: '22:00', label: 'NFL thrillers' },
];

export const LEAD_CARDS: LeadCard[] = [
  {
    num: 1,
    region: 'NA',
    field: 'Climate',
    locationBeat: 'NEW YORK · US EAST COAST · WEATHER',
    badge: 'CONFIRMED',
    headline: 'Nor’easter postpones Macy’s Parade for first time in 100 years',
    summary:
      'High winds and torrential rain cut power to 900,000+ homes across the East Coast, cancel 400+ flights and push NYC’s Thanksgiving parade to Saturday.',
    takeaway: 'First weather postponement in the parade’s century-long history',
    sceneKey: 'noreaster',
  },
  {
    num: 2,
    region: 'ME',
    field: 'War',
    locationBeat: 'KUWAIT · ROME · TEHRAN · WAR',
    badge: 'CONFIRMED',
    headline: 'Drone strike in Kuwait kills two Italian Rheinmetall technicians',
    summary:
      'Drone hits a Kuwaiti air-defense site; Italy and Kuwait blame Iran, while Tehran denies any role and offers a joint investigation into the strike.',
    takeaway: 'Gulf hostilities claim European defense personnel on Kuwaiti soil',
    sceneKey: 'kuwaitdrone',
  },
  {
    num: 3,
    region: 'EU',
    field: 'Economy',
    locationBeat: 'BRUSSELS · FRANKFURT · ECONOMY',
    badge: 'OFFICIAL',
    headline: 'EU taps Spain’s Hernández de Cos to lead ECB; aid talks clash',
    summary:
      'Eurozone leaders back former Bank of Spain governor to succeed Lagarde in Feb 2027 as Brussels summit splits over €1.6tn budget and €45bn Ukraine loan.',
    takeaway: 'First Spaniard named to chair the eurozone’s central bank',
    sceneKey: 'ecbsummit',
  },
];

export const FEATURE_CARDS: FeatureCard[] = [
  {
    num: 4,
    region: 'ME',
    field: 'War',
    locationBeat: 'JAZAN, SAUDI · WAR',
    badge: 'CONFIRMED',
    statTag: '1 KILLED',
    headline: 'Projectile hits Saudi Jazan refinery, killing 1 worker',
    summary: 'Strike sparks fire and temporary shutdown near Yemen border; coalition hits Sanaa & Hodeidah.',
    sceneKey: 'jazan',
  },
  {
    num: 5,
    region: 'EA',
    field: 'Markets',
    locationBeat: 'SEOUL · MARKETS',
    badge: 'OFFICIAL',
    statTag: '3.25% RATE',
    headline: 'Bank of Korea raises rate 25 bps to two-year high',
    summary: '5–2 vote lifts base rate to 3.25% on AI-led chip boom and 2.8% inflation; 2026 GDP view at 3.9%.',
    sceneKey: 'bokrate',
  },
  {
    num: 6,
    region: 'GL',
    field: 'Tech',
    locationBeat: 'ZURICH · GLOBAL · TECH',
    badge: 'OFFICIAL',
    statTag: '12+ GB',
    headline: 'FIFA confirms cyberattack stole legal & financial files',
    summary: 'World football body discloses breach of limited personal and business data after extortion fails.',
    sceneKey: 'fifacyber',
  },
  {
    num: 7,
    region: 'EU',
    field: 'Migration',
    locationBeat: 'LONDON · MIGRATION',
    badge: 'OFFICIAL',
    statTag: '77,000 NET',
    headline: 'UK net migration plunges to 77,000, lowest since 1997',
    summary: 'ONS data for year to June 2026 shows sharp drop in non-EU work, study and asylum arrivals.',
    sceneKey: 'ukmigration',
  },
  {
    num: 8,
    region: 'SA',
    field: 'Disaster',
    locationBeat: 'BANGKOK · DISASTER',
    badge: 'CONFIRMED',
    statTag: '7 INJURED',
    headline: 'Explosion and fire rock Bangkok’s Bangchak refinery',
    summary: 'Blast at Phra Khanong plant sends black smoke over capital, injuring seven and halting units.',
    sceneKey: 'bangkokfire',
  },
  {
    num: 9,
    region: 'LA',
    field: 'Economy',
    locationBeat: 'BUENOS AIRES · ECONOMY',
    badge: 'OFFICIAL',
    statTag: 'BCRA LAW',
    headline: 'Argentina Congress bans central bank money-printing',
    summary: 'Overhaul bars BCRA from funding fiscal deficits and narrows mandate to defending the peso.',
    sceneKey: 'argentinabcra',
  },
  {
    num: 10,
    region: 'AF',
    field: 'Justice',
    locationBeat: 'NAIROBI · JUSTICE',
    badge: 'OFFICIAL',
    statTag: 'HALTED',
    headline: 'Kenya court halts US-backed Laikipia Ebola facility',
    summary: 'High Court rules deal breached transparency rules and orders full disclosure within 45 days.',
    sceneKey: 'kenyacourt',
  },
  {
    num: 11,
    region: 'EU',
    field: 'Security',
    locationBeat: 'COLOGNE · SECURITY',
    badge: 'OFFICIAL',
    statTag: '2 HELD',
    headline: 'Germany arrests two over alleged synagogue bomb plot',
    summary: '250 police raid 17 sites; prosecutors link Iraqi suspects to pro-Iran terror network.',
    sceneKey: 'germanycell',
  },
  {
    num: 12,
    region: 'GL',
    field: 'Space',
    locationBeat: 'ORBIT · ISS · SPACE',
    badge: 'OFFICIAL',
    statTag: '3 TONS',
    headline: 'Progress 97 docks at ISS with Thanksgiving supplies',
    summary: 'Roscosmos cargo craft links autonomously to Rassvet module for Expedition 75 crew.',
    sceneKey: 'progress97',
  },
  {
    num: 13,
    region: 'OC',
    field: 'Tech',
    locationBeat: 'CANBERRA · TECH',
    badge: 'OFFICIAL',
    statTag: '5% FINES',
    headline: 'Australia enacts Digital Duty of Care Act on platforms',
    summary: 'Law imposes safety duties on social media and AI chatbots with fines up to 5% of turnover.',
    sceneKey: 'australiaduty',
  },
];

// 36 strictly single-story dateline briefs (1 line = 1 story = 1 dateline; 18 left + 18 right = 49 exact)
export const BRIEFS_LEFT: BriefItem[] = [
  { num: 14, region: 'EU', field: 'Security', place: 'Brussels', text: 'EU sanctions 15 Russian military-industrial firms over dual-use tech' },
  { num: 15, region: 'EU', field: 'Energy', place: 'Zaporizhzhia', text: 'IAEA says nuclear plant lost last 330 kV line, on diesel 28th time' },
  { num: 16, region: 'EU', field: 'War', place: 'Kyiv', text: 'Ukraine military says Russian troop losses topped 50,000 in a month', tag: 'CLAIM' },
  { num: 17, region: 'EU', field: 'Diplomacy', place: 'Berlin', text: 'Germany & Italy warn Kyiv against drone strikes far from frontline' },
  { num: 18, region: 'EU', field: 'Diplomacy', place: 'London', text: 'UK publishes post-Brexit EU reset treaties on agrifood & youth mobility' },
  { num: 19, region: 'EU', field: 'Culture', place: 'London', text: 'BBC launches Met Office weather alliance after 8-year gap; ice alerts' },
  { num: 20, region: 'EU', field: 'Justice', place: 'London', text: 'UK antisemitism adviser Lord Mann opens probe into BBC workplace' },
  { num: 21, region: 'EU', field: 'Disaster', place: 'Ibiza', text: 'Malta-flagged tanker sinks off Spain’s Ibiza; 1 dead, 16 rescued' },
  { num: 22, region: 'EU', field: 'Migration', place: 'Madrid', text: 'Kilmar Abrego Garcia lands in Spain under US departure agreement' },
  { num: 23, region: 'EU', field: 'Sport', place: 'Europe', text: 'Europa League: Milan 4–2 Olympiakos, Juventus 4–1, Plzeň 4–0 Benfica' },
  { num: 24, region: 'ME', field: 'War', place: 'Deir al-Balah', text: 'Israeli strike in central Gaza kills deputy education minister', tag: 'REPORTED' },
  { num: 25, region: 'ME', field: 'War', place: 'Marib', text: 'Heavy clashes erupt across Marib, al-Jawf & Taiz as Houthis advance' },
  { num: 26, region: 'ME', field: 'Diplomacy', place: 'Riyadh', text: 'Saudi & Turkish FMs head to Pakistan for trilateral defense pact talks' },
  { num: 27, region: 'ME', field: 'War', place: 'Beirut', text: 'Israeli airstrikes hit targets across southern Lebanon & southern Syria' },
  { num: 28, region: 'EA', field: 'Markets', place: 'Taipei', text: 'Asian chips rebound: Taiex +2.5%, Hang Seng +1.2%, Nikkei +0.9%' },
  { num: 29, region: 'EA', field: 'Trade', place: 'Beijing', text: 'China condemns proposed US Section 301 tariffs, reserves response' },
  { num: 30, region: 'EA', field: 'Diplomacy', place: 'Beijing', text: 'Premier Li Qiang meets ADB chief Masato Kanda on regional trade' },
  { num: 31, region: 'EA', field: 'Security', place: 'Pyongyang', text: 'Kim Jong Un inspects nuclear site, vows wider tactical arsenal', tag: 'REPORTED' },
];

export const BRIEFS_RIGHT: BriefItem[] = [
  { num: 32, region: 'EA', field: 'Security', place: 'Tokyo', text: 'Japan weighs ¥56.3tn five-year defense budget starting in FY 2027', tag: 'REPORTED' },
  { num: 33, region: 'EA', field: 'Security', place: 'Taipei', text: 'Taiwan tracks fresh Chinese warplane sorties ahead of local elections' },
  { num: 34, region: 'SA', field: 'Trade', place: 'Hanoi', text: 'ASEAN, EU & CPTPP trade ministers meet to navigate US tariff wave' },
  { num: 35, region: 'SA', field: 'Energy', place: 'Jakarta', text: 'Vena Energy secures $113m green refinancing for wind & solar assets' },
  { num: 36, region: 'SA', field: 'Sport', place: 'Manila', text: 'Philippines opens inaugural ASTAF U-19 Asian Sepak Takraw event' },
  { num: 37, region: 'SA', field: 'Rights', place: 'Mumbai', text: 'India marks anniversary of 2008 Mumbai terror attacks with tributes' },
  { num: 38, region: 'AF', field: 'Rights', place: 'Nairobi', text: 'UN-Habitat opens global expert summit on adequate housing & climate' },
  { num: 39, region: 'AF', field: 'Economy', place: 'Pretoria', text: 'South Africa Oct producer inflation jumps sharply to 8.1% YoY on fuel' },
  { num: 40, region: 'AF', field: 'Economy', place: 'Addis Ababa', text: 'Ethiopia launches external debt exchange offer in overhaul milestone' },
  { num: 41, region: 'AF', field: 'Rights', place: 'Tigray', text: 'Amnesty urges war crimes probe into shelling in northern Alamata' },
  { num: 42, region: 'AF', field: 'Health', place: 'Kinshasa', text: 'Gavi sets framework for 1.5m experimental Ebola vaccine doses in DRC' },
  { num: 43, region: 'AF', field: 'Diplomacy', place: 'Addis Ababa', text: 'PM Abiy Ahmed defends Ethiopia’s Sudan peace push in parliament' },
  { num: 44, region: 'NA', field: 'Sport', place: 'US · NFL', text: 'Thanksgiving thrillers: Bears 39–35, Eagles 39–38, Bills 13–10 Chiefs' },
  { num: 45, region: 'NA', field: 'Diplomacy', place: 'Florida', text: 'Trump & NATO chief Rutte urge Russia not to expand Ukraine war' },
  { num: 46, region: 'NA', field: 'Transport', place: 'Ontario', text: 'Freezing rain storm triggers emergency alerts across parts of Canada' },
  { num: 47, region: 'LA', field: 'Trade', place: 'Brasília', text: 'Embraer & Brazil reject proposed 10% US tariff on Brazilian aircraft' },
  { num: 48, region: 'LA', field: 'Tech', place: 'São Paulo', text: 'Kaszek closes record $650m early-stage fund for Latin American AI' },
  { num: 49, region: 'OC', field: 'Space', place: 'Mahia, NZ', text: 'Rocket Lab launches 101st Electron rocket carrying Synspective radar' },
];

// 11 geographic numbered pins for illustrated stories (#6 FIFA & #12 ISS are Global/Space chips below map)
export const MAP_PINS: GeoPin[] = [
  { num: 1, region: 'NA', x: 96, y: 47 },    // New York / US East Coast
  { num: 7, region: 'EU', x: 148, y: 36 },   // London (clearly separated from #3 & #11)
  { num: 3, region: 'EU', x: 165, y: 48 },   // Brussels / Frankfurt
  { num: 11, region: 'EU', x: 183, y: 35 },  // Cologne / Heidelberg
  { num: 2, region: 'ME', x: 218, y: 61 },   // Kuwait
  { num: 4, region: 'ME', x: 207, y: 78 },   // Jazan, Saudi Arabia
  { num: 10, region: 'AF', x: 199, y: 102 }, // Nairobi / Laikipia
  { num: 8, region: 'SA', x: 259, y: 83 },   // Bangkok
  { num: 5, region: 'EA', x: 294, y: 52 },   // Seoul
  { num: 9, region: 'LA', x: 108, y: 138 },  // Buenos Aires
  { num: 13, region: 'OC', x: 300, y: 137 }, // Canberra
];

// 36 geographic dots for every single digest brief (#14-#49) => 11 + 36 + 2 GL = 49 exact!
export const MAP_BRIEF_DOTS: { region: RegionCode; x: number; y: number }[] = [
  // EU (10)
  { region: 'EU', x: 165, y: 49 }, // #14 Brussels sanctions
  { region: 'EU', x: 197, y: 44 }, // #15 Zaporizhzhia
  { region: 'EU', x: 193, y: 38 }, // #16 Kyiv
  { region: 'EU', x: 176, y: 45 }, // #17 Berlin/Rome
  { region: 'EU', x: 153, y: 44 }, // #18 London EU reset
  { region: 'EU', x: 158, y: 36 }, // #19 London BBC Met Office
  { region: 'EU', x: 160, y: 44 }, // #20 London Lord Mann
  { region: 'EU', x: 160, y: 58 }, // #21 Ibiza
  { region: 'EU', x: 153, y: 56 }, // #22 Madrid
  { region: 'EU', x: 173, y: 52 }, // #23 Europe UEL
  // ME (4)
  { region: 'ME', x: 198, y: 63 }, // #24 Deir al-Balah
  { region: 'ME', x: 215, y: 80 }, // #25 Marib
  { region: 'ME', x: 222, y: 71 }, // #26 Riyadh
  { region: 'ME', x: 201, y: 57 }, // #27 Beirut
  // EA (6)
  { region: 'EA', x: 284, y: 69 }, // #28 Taipei chips
  { region: 'EA', x: 277, y: 47 }, // #29 Beijing tariffs
  { region: 'EA', x: 281, y: 52 }, // #30 Beijing ADB
  { region: 'EA', x: 289, y: 45 }, // #31 Pyongyang
  { region: 'EA', x: 307, y: 56 }, // #32 Tokyo defense
  { region: 'EA', x: 288, y: 72 }, // #33 Taipei sorties
  // SA (4)
  { region: 'SA', x: 267, y: 77 }, // #34 Hanoi
  { region: 'SA', x: 269, y: 105 }, // #35 Jakarta
  { region: 'SA', x: 282, y: 84 }, // #36 Manila
  { region: 'SA', x: 238, y: 78 }, // #37 Mumbai
  // AF (6)
  { region: 'AF', x: 202, y: 97 }, // #38 Nairobi UN-Habitat
  { region: 'AF', x: 192, y: 127 }, // #39 Pretoria
  { region: 'AF', x: 202, y: 89 }, // #40 Addis Ababa debt
  { region: 'AF', x: 200, y: 84 }, // #41 Tigray
  { region: 'AF', x: 184, y: 103 }, // #42 Kinshasa
  { region: 'AF', x: 197, y: 90 }, // #43 Addis Ababa Sudan
  // NA (3)
  { region: 'NA', x: 75, y: 48 },  // #44 US NFL
  { region: 'NA', x: 86, y: 63 },  // #45 Florida
  { region: 'NA', x: 84, y: 37 },  // #46 Ontario
  // LA (2)
  { region: 'LA', x: 117, y: 118 }, // #47 Brasília
  { region: 'LA', x: 119, y: 126 }, // #48 São Paulo
  // OC (1)
  { region: 'OC', x: 322, y: 147 }, // #49 Mahia, NZ
];

export const EXCLUDED_WED_25 =
  'USTR 14-nation tariff launch · Kospi –6.2% chip rout · Shenzhou-24 Tiangong dock · Cairo tanker fire (31+) · Ofgem +26% cap · West Java gold pit · AU–Solomons pact · Dhaka garment wage · Ramaphosa court · Nigeria meth bust';

export const EXCLUDED_FRI_27 =
  'NZ final election result · Copernicus 2°C 7-day climate alert · AFAC Australia bushfire outlook · BoE Governor tax warning · Fri Asia Nikkei/Kospi open';
