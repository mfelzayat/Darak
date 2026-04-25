// Cast and scene data extracted from script_draft_01 + storyboard_old_man_FINAL.

export type Cast = {
  name: string;
  nameAr: string;
  age: number | string;
  role: string;
  blurb: string;
  initials: string;
  accent?: boolean;
};

export const cast: Cast[] = [
  {
    name: "Aziz",
    nameAr: "عزيز",
    age: 60,
    role: "Lead — Gen Z energy in an old man's body",
    blurb:
      "60 years old but acts like he's 22. Owns the chalet at Marina I, lives life loud. Drives every gag.",
    initials: "AZ",
    accent: true,
  },
  {
    name: "Samir",
    nameAr: "سمير",
    age: 60,
    role: "Sarcastic best friend",
    blurb:
      "Aziz's mature foil. Watches him from the side, drops dry one-liners, then gets dragged into every bit anyway.",
    initials: "SM",
  },
  {
    name: "Shibl",
    nameAr: "شبل",
    age: 60,
    role: "The dad of the crew",
    blurb:
      "Quiet, shows up with two kids in tow. The straight man whose face does most of the talking.",
    initials: "SH",
  },
  {
    name: "Aziz's mother",
    nameAr: "والدة عزيز",
    age: 85,
    role: "The unfiltered conscience",
    blurb:
      "85, says exactly what she thinks. Worries about her son's antics — and roasts him in front of everyone.",
    initials: "UM",
  },
  {
    name: "Mariam",
    nameAr: "مريم",
    age: 60,
    role: "Filipina nurse, modest, joyful",
    blurb:
      "Laughs at every line whether she gets it or not. Pure warmth — the texture of the family.",
    initials: "MR",
  },
  {
    name: "Noor",
    nameAr: "نور",
    age: 28,
    role: "The love-interest twist",
    blurb:
      "28, beautiful — Aziz thinks he has a chance. Plot twist: she's engaged to Tarek. The punchline lands hard.",
    initials: "NR",
  },
  {
    name: "Salim",
    nameAr: "سليم",
    age: 22,
    role: "The young friend",
    blurb:
      "22, the actual Gen Z mirror. Keeps up with Aziz on the dance floor, surfboard, and the meme references.",
    initials: "SL",
  },
];

export type Scene = {
  no: string;
  title: string;
  titleAr: string;
  location: string;
  pages: number[]; // page-XX.png indexes
  beats: string[]; // story beats (English)
  beatsAr: string[]; // dialogue / Arabic notes
  direction: string; // camera / direction notes
};

// Map 32 storyboard pages across the 8 scenes.
// Distribution chosen to reflect typical Old Man final cut pacing.
export const scenes: Scene[] = [
  {
    no: "01",
    title: "Marina Entrance",
    titleAr: "بوابة مارينا",
    location: "Marina I — main gate, dawn",
    pages: [1, 2, 3, 4],
    beats: [
      "Opening wide on the iconic Marina I gate as Aziz arrives.",
      "The old folks crew unloads — sunglasses, oversized hats, full energy.",
      "Aziz steps out, instantly Gen Z. Music kicks in.",
    ],
    beatsAr: [
      "مشهد افتتاحي على البوابة الرئيسية لمارينا واحد.",
      "النخبة الكبار بينزلوا من العربية بشكل دراماتيكي.",
      "عزيز بينزل آخر واحد ـ بهالة شبابية كاملة.",
    ],
    direction:
      "Wide establishing → low-angle hero shot of Aziz. Slow push-in. Golden-hour grade, lens flare on the gate sign.",
  },
  {
    no: "02",
    title: "Parking",
    titleAr: "موقف السيارات",
    location: "Marina I — covered parking",
    pages: [5, 6, 7],
    beats: [
      "Cars line up — luxury, but tasteful.",
      "Aziz argues with Samir over who parked closer to the chalet.",
      "Mother delivers the first roast of the day.",
    ],
    beatsAr: [
      "العربيات بترص جنب بعض ـ كله كلاس.",
      "عزيز وسمير بيتخانقوا على الركنة.",
      "الوالدة بتلقي أول قفلة في حياته.",
    ],
    direction:
      "Tracking shot beside the car. Cut to a tight 2-shot for the bicker. Punchy edit on the mother's line.",
  },
  {
    no: "03",
    title: "Chalet Terrace",
    titleAr: "تراس الشاليه",
    location: "Marina I — private chalet, terrace",
    pages: [8, 9, 10, 11, 12],
    beats: [
      "Reveal of the chalet terrace — golden light, sea behind.",
      "Aziz tries to host a 'sunset session'. The crew look like they need naps.",
      "Salim arrives. Energy doubles. A first taste of the comedy rhythm.",
    ],
    beatsAr: [
      "كشف على تراس الشاليه ـ البحر في الخلفية.",
      "عزيز بيحاول يعمل سيشن سن-سيت. الكبار خلاص هايناموا.",
      "سليم بينضم. الطاقة بتتضاعف.",
    ],
    direction:
      "Drone push from sea toward terrace. Anchor on Aziz mid-frame, crew softly out-of-focus around him. Warm tungsten + cool ambient mix.",
  },
  {
    no: "04",
    title: "Walkway",
    titleAr: "الممشى",
    location: "Marina I — landscaped walkway",
    pages: [13, 14, 15, 16],
    beats: [
      "Hero walk down the palm-lined walkway.",
      "Aziz tries to flirt — meets Noor for the first time.",
      "Samir sees the trainwreck coming.",
    ],
    beatsAr: [
      "مشية بطل على الممشى المطل على البحر.",
      "عزيز بيقابل نور لأول مرة ـ وبيحاول يلعبها كول.",
      "سمير بيتفرج على الكارثة الجاية.",
    ],
    direction:
      "Stabilized tracking shot, 35mm feel. Lens character over technical perfection. Hold on Noor's reaction beat.",
  },
  {
    no: "05",
    title: "Outdoor Gym",
    titleAr: "الجيم المكشوف",
    location: "Marina I — beachside outdoor gym",
    pages: [17, 18, 19, 20],
    beats: [
      "Aziz tries to lift. Form, debatable.",
      "The crew copy him — collective collapse.",
      "Mariam laughs through the entire scene. Cinematic.",
    ],
    beatsAr: [
      "عزيز بيحاول يرفع حديد ـ الفورم نقاش.",
      "الكرو بيقلدوه ـ الكل بيقع.",
      "مريم بتفضل تضحك طول المشهد.",
    ],
    direction:
      "Slow-mo on the failed lift. Cuts back to real-time on the laugh. Wide for the group fall.",
  },
  {
    no: "06",
    title: "Beach",
    titleAr: "الشاطئ",
    location: "Marina I — private beach",
    pages: [21, 22, 23, 24],
    beats: [
      "Beach reveal — wide, generous, premium.",
      "Aziz tries surfing. Sees Noor again. Confidence spikes.",
      "Salim shows him up effortlessly on the next wave.",
    ],
    beatsAr: [
      "كشف واسع على الشاطئ الخاص.",
      "عزيز بيحاول يركب الموج ـ بيشوف نور تاني.",
      "سليم بيركبها ببساطة ورا منه.",
    ],
    direction:
      "Slider on the beach reveal. Surf section in 60fps for the slo-mo beat. Salt-haze highlights, deep contrast in the water.",
  },
  {
    no: "07",
    title: "Infinity Pool",
    titleAr: "حمام السباحة اللانهائي",
    location: "Marina I — sky-deck infinity pool",
    pages: [25, 26, 27, 28],
    beats: [
      "The infinity pool reveal — sea continuing into the horizon.",
      "Aziz makes his move — Noor mentions Tarek. Punchline lands.",
      "Mother's reaction shot ties the joke shut.",
    ],
    beatsAr: [
      "كشف على البول اللانهائي ـ البحر بيكمل الأفق.",
      "عزيز بيحاول حركة ـ نور بتقول إنها مخطوبة لطارق.",
      "ريأكشن الوالدة بيقفل النكتة.",
    ],
    direction:
      "Wide drone for the reveal. 50mm for the dialogue beat. Mother cut on the laugh tag.",
  },
  {
    no: "08",
    title: "Sky Lounge",
    titleAr: "سكاي لاونج",
    location: "Marina I — rooftop sky lounge, blue hour",
    pages: [29, 30, 31, 32],
    beats: [
      "The crew at the sky lounge — full premium reveal.",
      "Aziz makes his peace — surrounded by his people.",
      "Tagline lands. Brand reveal. Logo close.",
    ],
    beatsAr: [
      "الكرو في السكاي لاونج ـ كشف بريميوم كامل.",
      "عزيز بيلاقي نفسه ـ وسط ناسه.",
      "التاج لاين بينزل. اللوجو. القفلة.",
    ],
    direction:
      "Crane up from the lounge to the wider Marina skyline. Hold on the brand. Music drops to a single sustained note.",
  },
];

export const tagline = "هد كده هد كده هتشتري آي مارينا ريزيدنس .. فمتلخص العمر يفوت.";
export const taglineEn =
  "Take it easy — but at Marina I Residence, life shouldn't slip past you.";
