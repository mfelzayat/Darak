// Per-shot storyboard data extracted from script_draft_01.pdf
// Marina I Residence × DARAK — "Old Man" spot
//
// 32 storyboard pages mapped across 8 scenes, 4 shots per scene.
// Arabic dialogue transcribed from the PDF (Latin tokens wrapped with
// LRI/PDI U+2066…U+2069 so they direction correctly inside RTL text).

export type DialogueLine = {
  /** Character speaking (Arabic). */
  character: string;
  /** Line, Arabic. Latin tokens already wrapped with ⁦…⁩ */
  line: string;
  /** Optional stage direction in parens, Arabic. */
  note?: string;
};

export type Shot = {
  /** 1..32 — corresponds to /assets/storyboard/page-XX */
  shotNumber: number;
  /** 1..8 */
  sceneNumber: number;
  sceneNameAr: string;
  sceneNameEn: string;
  /** Short Arabic camera/lens note. */
  cameraNote: string;
  /** 2-4 Arabic sentences describing what happens on screen. */
  scenario: string;
  /** Empty when this beat has no spoken line. */
  dialogue: DialogueLine[];
};

export const sceneTitles: { ar: string; en: string }[] = [
  { ar: "المدخل", en: "Marina Entrance" },
  { ar: "الباركينج", en: "Parking" },
  { ar: "تيراس الشاليه", en: "Chalet Terrace" },
  { ar: "الممشى", en: "Walkway" },
  { ar: "الجيم المكشوف", en: "Outdoor Gym" },
  { ar: "الشاطئ", en: "Beach" },
  { ar: "حمام السباحة", en: "Infinity Pool" },
  { ar: "سكاي لاونج", en: "Sky Lounge" },
];

export const shots: Shot[] = [
  // ───────── Scene 1 — المدخل (pages 1-4) ─────────
  {
    shotNumber: 1,
    sceneNumber: 1,
    sceneNameAr: "المدخل",
    sceneNameEn: "Marina Entrance",
    cameraNote: "كادر واسع تأسيسي · low-angle hero · فلِير على لافتة البوابة",
    scenario:
      "كادر افتتاحي واسع على بوابات ⁦Marina I⁩ وقت الذروة الذهبية. سيارة عزيز ⁦GETOUR T2⁩ بتقرّب من البوابة وكل التفاصيل بتحس إنها سينمائية: نخل، شعار، ساعة وصول.",
    dialogue: [],
  },
  {
    shotNumber: 2,
    sceneNumber: 1,
    sceneNameAr: "المدخل",
    sceneNameEn: "Marina Entrance",
    cameraNote: "كاميرا داخل العربية · 35mm · قطع مع وش الأم",
    scenario:
      "العربية بتقف عند فرد الأمن. عزيز ورا الدركسيون، الأم بتطل من جنبه قلقانة، وفي الخلف الممرضة وأصدقاؤه الاتنين. الجو صيفي مبهج.",
    dialogue: [
      { character: "فرد الأمن", line: "الـ ⁦QR code⁩ لو سمحت!" },
      {
        character: "أم عزيز",
        line: "يا لهوي يا عزيز!! دارك شكلهم ضحكوا علينا ومدّوكش العقد؟",
        note: "بقلق",
      },
      {
        character: "عزيز",
        line: "لا يا ماما!! ده عشان الـ ⁦privacy⁩ والـ ⁦security⁩.",
      },
    ],
  },
  {
    shotNumber: 3,
    sceneNumber: 1,
    sceneNameAr: "المدخل",
    sceneNameEn: "Marina Entrance",
    cameraNote: "تايت ٢-شوت بين عزيز وفرد الأمن · cut to Samir reaction",
    scenario:
      "عزيز بيلف على فرد الأمن بنبرة واثقة وبيقوله ‹أنا أونر›. قطع على سمير في الكرسي الخلفي بيشتكي ساخر إن الـ ⁦Lotus 5⁩ بيفتحوله البوابة من بعيد.",
    dialogue: [
      { character: "عزيز (لفرد الأمن)", line: "أنا أونر في آااي ⁦Residence⁩ يا ابني، افتح." },
      {
        character: "سمير",
        line: "ده أنا في الـ ⁦Lotus 5⁩ بيفتحولي البوابة من على بُعد ⁦5⁩ كيلو.",
        note: "منزعج",
      },
    ],
  },
  {
    shotNumber: 4,
    sceneNumber: 1,
    sceneNameAr: "المدخل",
    sceneNameEn: "Marina Entrance",
    cameraNote: "تايت على إيد ماليا والأم · لقطة كوميدية تختم المشهد",
    scenario:
      "ماليا (الممرضة) بتمدّ إيدها بكوب مية وبرشامة لأم عزيز كأنها روتين يومي. الأم بتاخدها بهدوء، عزيز بيكمل قدّام والبوابة بتفتح ببطء.",
    dialogue: [
      { character: "ماليا", line: "(تعطيها برشامة وكوب ماء)", note: "بدون كلام" },
    ],
  },

  // ───────── Scene 2 — الباركينج (pages 5-8) ─────────
  {
    shotNumber: 5,
    sceneNumber: 2,
    sceneNameAr: "الباركينج",
    sceneNameEn: "Parking",
    cameraNote: "زاوية علوية · تتبع جانبي للسيارة · واجهة المشروع في الخلفية",
    scenario:
      "كاميرا بترتفع شوية وبتلتقط الباركينج المنظم — مساحات واسعة، خطوط واضحة، وواجهة ⁦Marina I⁩ لامعة في الخلفية. طاقة بريميوم هادية.",
    dialogue: [],
  },
  {
    shotNumber: 6,
    sceneNumber: 2,
    sceneNameAr: "الباركينج",
    sceneNameEn: "Parking",
    cameraNote: "متابعة من فوق العربية · جامبل ثابت",
    scenario:
      "عزيز بيحاول يركن العربية مرة، اتنين، تلاتة وبيفشل في كل مرة. الكاميرا بتلف معاه وبتبقى كأنها رقصة كوميدية. حد من فريق الباركينج بيستنّى بصبر.",
    dialogue: [],
  },
  {
    shotNumber: 7,
    sceneNumber: 2,
    sceneNameAr: "الباركينج",
    sceneNameEn: "Parking",
    cameraNote: "كلوز على البلمان · ابتسامة سرفيس",
    scenario:
      "بلمان من ⁦I Residence⁩ لابس اليونيفورم بيفتح الشنطة الخلفية وبينزّل الشنط بعناية. لمسة سرفيس فندقية، تأكيد إن المكان فيه طبقة خدمة كاملة.",
    dialogue: [],
  },
  {
    shotNumber: 8,
    sceneNumber: 2,
    sceneNameAr: "الباركينج",
    sceneNameEn: "Parking",
    cameraNote: "wide tracking · المجموعة ماشية باتجاه الشاليه",
    scenario:
      "عزيز ووالدته وسمير وشبل وماليا بيمشوا متجاورين باتجاه الشاليه. ضحكة هادية، مشية واثقة، الكاميرا بتسبقهم وبتعمل ⁦pull-back⁩.",
    dialogue: [],
  },

  // ───────── Scene 3 — تيراس الشاليه (pages 9-12) ─────────
  {
    shotNumber: 9,
    sceneNumber: 3,
    sceneNameAr: "تيراس الشاليه",
    sceneNameEn: "Chalet Terrace",
    cameraNote: "drone push من ناحية اللاجون · هيرو على عزيز",
    scenario:
      "كشف على تيراس الشاليه ووراه فيو البحيرة الكامل. عزيز واقف في النص بيتأمل المنظر. الإضاءة دافية، الموسيقى بتبدأ تسحب الأذن.",
    dialogue: [{ character: "عزيز", line: "الفيو تحفة، أنا نازل." }],
  },
  {
    shotNumber: 10,
    sceneNumber: 3,
    sceneNameAr: "تيراس الشاليه",
    sceneNameEn: "Chalet Terrace",
    cameraNote: "بان داخل الشاليه · ضوء طبيعي ناعم",
    scenario:
      "عزيز بيستدير وبيدخل من التيراس على الصالة، يلاقي ماليا قاعدة بتحط مرهم على رجل سمير. كل الكرو شكلهم مسطول من السفر.",
    dialogue: [],
  },
  {
    shotNumber: 11,
    sceneNumber: 3,
    sceneNameAr: "تيراس الشاليه",
    sceneNameEn: "Chalet Terrace",
    cameraNote: "تبادل لقطات قريبة · كوميدي إيقاع بطيء",
    scenario:
      "شبل بيحاول يقنع عزيز يهدّى من الموجة. عزيز رافض، طاقته للسقف. الكاميرا بتقف على وش كل واحد ثانيتين قبل ما تقطع.",
    dialogue: [
      { character: "شبل", line: "طب ما نريّح شوية ونستمتع بجمال الشاليه." },
      { character: "عزيز", line: "أنا مش قادر أمسك نفسي." },
    ],
  },
  {
    shotNumber: 12,
    sceneNumber: 3,
    sceneNameAr: "تيراس الشاليه",
    sceneNameEn: "Chalet Terrace",
    cameraNote: "متابعة عزيز وهو خارج · أم عزيز في المقدمة",
    scenario:
      "عزيز بيغادر الشاليه بسرعة، الأم بتناديه بخفة وبتقفل المشهد بقفلة كوميدية حنينة.",
    dialogue: [
      { character: "أم عزيز", line: "لُف ورق جرايد على صدرك." },
    ],
  },

  // ───────── Scene 4 — الممشى (pages 13-16) ─────────
  {
    shotNumber: 13,
    sceneNumber: 4,
    sceneNameAr: "الممشى",
    sceneNameEn: "Walkway",
    cameraNote: "ستيدي‑كام جنب عزيز · ⁦35mm⁩ سينمائي",
    scenario:
      "عزيز ماشي على الممشى ماسك تليفونه على ⁦gimbal⁩ بيعمل ⁦live⁩ على ⁦TikTok⁩. مشية بطل، الفيو بحر، الموسيقى بتشتغل.",
    dialogue: [],
  },
  {
    shotNumber: 14,
    sceneNumber: 4,
    sceneNameAr: "الممشى",
    sceneNameEn: "Walkway",
    cameraNote: "دفعة كاميرا للأمام · cuts قصيرة على الشباب والبنات",
    scenario:
      "عزيز بيسلّم على شباب وبنات بيعدوا من جنبه وبيصور معاهم ⁦live⁩. خلفه شلة العواجيز بيحاولوا يلحقوه ماسكين موبايلاتهم وبيتفرّجوا على الـ ⁦live⁩ بتاعه.",
    dialogue: [],
  },
  {
    shotNumber: 15,
    sceneNumber: 4,
    sceneNameAr: "الممشى",
    sceneNameEn: "Walkway",
    cameraNote: "نداء من بعيد · long lens compression",
    scenario:
      "أم سمير بتنادي على عزيز من بعيد بصوت عالي قاطع موسيقى المشهد. ريأكشن سريع من عزيز ومن الكرو.",
    dialogue: [
      {
        character: "أم سمير",
        line: "متشيرش يا عزيز عشان طنطن سعاد عينها وحشة!",
        note: "تنادي من بعيد",
      },
    ],
  },
  {
    shotNumber: 16,
    sceneNumber: 4,
    sceneNameAr: "الممشى",
    sceneNameEn: "Walkway",
    cameraNote: "تايت على سمير وشبل · تليفون في الكادر",
    scenario:
      "سمير وشبل واقفين بيتفرّجوا على الـ ⁦live⁩ بتاع عزيز على موبايلاتهم. سمير بيدّي تعليق ساخر يقفل المشهد.",
    dialogue: [
      { character: "سمير (لشبل)", line: "طلع ⁦trend⁩ ولا لسه؟ شوف كده." },
    ],
  },

  // ───────── Scene 5 — الجيم المكشوف (pages 17-20) ─────────
  {
    shotNumber: 17,
    sceneNumber: 5,
    sceneNameAr: "الجيم المكشوف",
    sceneNameEn: "Outdoor Gym",
    cameraNote: "wide entrance · بان على معدات الجيم · ⁦outdoor gym⁩",
    scenario:
      "عزيز بيدخل الجيم المكشوف اللي مطل على البحر. كاميرا واسعة بتكشف المكان كله — معدات ⁦premium⁩ تحت سما مفتوحة.",
    dialogue: [
      { character: "عزيز", line: "إديني ⁦spot⁩ يا كابتن." },
    ],
  },
  {
    shotNumber: 18,
    sceneNumber: 5,
    sceneNameAr: "الجيم المكشوف",
    sceneNameEn: "Outdoor Gym",
    cameraNote: "تايت على عزيز قدام الوزن التقيل · تردد",
    scenario:
      "عزيز بيقف قدام بار وزن تقيل جداً. الكاميرا بتطل من تحت لتحس ضخامة الوزن. عزيز بيفكر، وبيلتف على بار فاضي مخبّي ورا التقيل.",
    dialogue: [],
  },
  {
    shotNumber: 19,
    sceneNumber: 5,
    sceneNameAr: "الجيم المكشوف",
    sceneNameEn: "Outdoor Gym",
    cameraNote: "⁦slow-motion⁩ على الرفعة · قطع على الكرو بيشجّع",
    scenario:
      "عزيز بيرفع البار الفاضي بصعوبة بالغة كأنه طن. شبل ووفا بيشجّعوه، الكابتن بيصلّح فورمه، الناس في الجيم مبهوتة من اللعب الغلط.",
    dialogue: [
      { character: "شبل", line: "افرد ضهرك كده يا عزيز." },
    ],
  },
  {
    shotNumber: 20,
    sceneNumber: 5,
    sceneNameAr: "الجيم المكشوف",
    sceneNameEn: "Outdoor Gym",
    cameraNote: "كادر فيه سمير على المشاية · أم عزيز جنبه",
    scenario:
      "سمير قاعد على كرسي فوق المشاية بيحرّك رجله ببطء. أم عزيز بتمر جنبه بنصيحة. لقطة كوميدية بتقفل المشهد.",
    dialogue: [
      { character: "أم عزيز", line: "ابدأ ⁦cardio⁩ الأول يا عزيز." },
    ],
  },

  // ───────── Scene 6 — الشاطئ (pages 21-24) ─────────
  {
    shotNumber: 21,
    sceneNumber: 6,
    sceneNameAr: "الشاطئ",
    sceneNameEn: "Beach",
    cameraNote: "wide reveal على الشاطئ · سلايدر طويل",
    scenario:
      "كشف واسع على الشاطئ الخاص لـ ⁦Marina I⁩ — مية صافية، رمل ذهبي، كراسي ⁦cabana⁩. الكاميرا بتمر بسلاسة وبتلتقط سليم في الخلفية في مشكلة.",
    dialogue: [],
  },
  {
    shotNumber: 22,
    sceneNumber: 6,
    sceneNameAr: "الشاطئ",
    sceneNameEn: "Beach",
    cameraNote: "low angle على عزيز · power shot",
    scenario:
      "عزيز بيقرّب من الشباب اللي حوالين سليم. زعيم العضلات بيوطّي راسه بأدب شديد، بيحط إيده ورا ضهره وبيتراجع هو ومجموعته للوراء.",
    dialogue: [
      {
        character: "عزيز",
        line: "في إيه منكم ليه.. جايين معاكوا بإيه؟",
      },
    ],
  },
  {
    shotNumber: 23,
    sceneNumber: 6,
    sceneNameAr: "الشاطئ",
    sceneNameEn: "Beach",
    cameraNote: "تبادل ٢-شوت بين عزيز وسليم",
    scenario:
      "سليم بيحاول يشكر عزيز، عزيز بيقاطعه باقتباس مدرسي بنبرة فلسفية مبالغ فيها. الكاميرا بتعمل ⁦push-in⁩ خفيف على وش عزيز.",
    dialogue: [
      { character: "سليم", line: "لو كنت اتأخرت عن كده.." },
      {
        character: "عزيز",
        line: "أن تأتي متأخراً خيرٌ من ألا تأتي.",
        note: "مقاطعاً",
      },
    ],
  },
  {
    shotNumber: 24,
    sceneNumber: 6,
    sceneNameAr: "الشاطئ",
    sceneNameEn: "Beach",
    cameraNote: "تايت على سمير وشبل · قفلة كوميدية",
    scenario:
      "الشباب بينسحبوا بهدوء وبيبان الإحباط على الزعيم. سمير وشبل بيتبادلوا قفلتين كوميديتين على الجيل الجديد.",
    dialogue: [
      { character: "سمير", line: "إيه ده؟! مفيش ⁦boxing⁩ عالسريع حتة؟" },
      { character: "شبل", line: "أومال بيقولوا جيل بايظ ليه؟" },
    ],
  },

  // ───────── Scene 7 — حمام السباحة (pages 25-28) ─────────
  {
    shotNumber: 25,
    sceneNumber: 7,
    sceneNameAr: "حمام السباحة",
    sceneNameEn: "Infinity Pool",
    cameraNote: "drone wide · البحر بيكمّل الأفق",
    scenario:
      "كشف واسع على الـ ⁦Infinity Pool⁩ والبحر بيكمّل الأفق ورا حافة المسبح. عزيز ماسك كوب عصير شين، بيبص ناحية الأفق بهدوء.",
    dialogue: [],
  },
  {
    shotNumber: 26,
    sceneNumber: 7,
    sceneNameAr: "حمام السباحة",
    sceneNameEn: "Infinity Pool",
    cameraNote: "tracking جنبي · ⁦50mm⁩ للحوار",
    scenario:
      "عزيز بيقرّب من نور اللي ماسكة عصير زيه. بيحاول يلعبها كوول وبيبدأ يعاكسها بنبرة هادية.",
    dialogue: [
      {
        character: "عزيز (لنور)",
        line: "عارفة؟ أنا ابن خالتي نزّل الـ ⁦Infinity Pool⁩ ده في السبعينات، لحد دلوقتي مش اللي ينّه.",
      },
    ],
  },
  {
    shotNumber: 27,
    sceneNumber: 7,
    sceneNameAr: "حمام السباحة",
    sceneNameEn: "Infinity Pool",
    cameraNote: "تايت على نور · cut to Tarek دخوله من اليمين",
    scenario:
      "نور بتنفجر من الضحك. الكاميرا بتفتح شوية فيدخل في الكادر طارق خطيبها — عضلات كتير ووسيم. الـ ⁦vibe⁩ بيتقلب فجأة.",
    dialogue: [
      {
        character: "نور",
        line: "هاهاهاهاهاها!",
      },
      { character: "عزيز", line: "ضحكت." },
    ],
  },
  {
    shotNumber: 28,
    sceneNumber: 7,
    sceneNameAr: "حمام السباحة",
    sceneNameEn: "Infinity Pool",
    cameraNote: "ريأكشن الأم بيقفل النكتة",
    scenario:
      "كاميرا بتقطع على أم عزيز اللي شايفة المشهد من بعيد، بتعلّق على نور بنبرة جافة بتقفل النكتة كلها.",
    dialogue: [
      { character: "أم عزيز", line: "يعني قلبها مال." },
    ],
  },

  // ───────── Scene 8 — سكاي لاونج (pages 29-32) ─────────
  {
    shotNumber: 29,
    sceneNumber: 8,
    sceneNameAr: "سكاي لاونج",
    sceneNameEn: "Sky Lounge",
    cameraNote: "إضاءة ⁦Neon / Party Vibes⁩ · موسيقى عالية",
    scenario:
      "كادر واسع على الـ ⁦Sky Lounge⁩ ساعة الـ ⁦blue hour⁩. إضاءة خافتة وملوّنة، نور قاعدة على ترابيزتها، ومجموعة شباب بترقص بطاقة عالية.",
    dialogue: [],
  },
  {
    shotNumber: 30,
    sceneNumber: 8,
    sceneNameAr: "سكاي لاونج",
    sceneNameEn: "Sky Lounge",
    cameraNote: "⁦Slow Motion⁩ · عزيز يدخل بين صفوف الشباب",
    scenario:
      "فجأة الكاميرا تتحوّل لـ ⁦slow motion⁩ ويدخل عزيز بين صفوف الراقصين لابس قميص أبيض تريكوه، وراه سمير وشبل وأم عزيز بخطوتين.",
    dialogue: [],
  },
  {
    shotNumber: 31,
    sceneNumber: 8,
    sceneNameAr: "سكاي لاونج",
    sceneNameEn: "Sky Lounge",
    cameraNote: "تايت على عزيز وهو راكع · entrance من اليمين لطارق",
    scenario:
      "عزيز بيتكئ على ركبتيه وبيقدّم خاتم الخطوبة لنور. فجأة طارق بيدخل في الكادر وبياخد الخاتم. القفلة الكوميدية الكبرى للـ ⁦spot⁩.",
    dialogue: [
      {
        character: "عزيز",
        line: "تقبلي مني الهدية المتواضعة دي.",
      },
      {
        character: "طارق",
        line: "حلّيتهالنا! ده الأسعار ولعت!",
      },
      { character: "نور", line: "مرسي يا ⁦uncle⁩." },
    ],
  },
  {
    shotNumber: 32,
    sceneNumber: 8,
    sceneNameAr: "سكاي لاونج",
    sceneNameEn: "Sky Lounge",
    cameraNote: "كرين ⁦up⁩ · الشعار يطلع · ⁦VO⁩ بيقفل",
    scenario:
      "أم عزيز بتدخل تواسي ابنها وتساعده يقف. عزيز بينفجر بالعياط. الكاميرا بترتفع وتكشف شعار ⁦Marina I Residence⁩ مع الـ ⁦tagline⁩.",
    dialogue: [
      {
        character: "أم عزيز",
        line: "متزعلش يا حبيبي.. هتقابل اللي أحسن منها.",
      },
      { character: "عزيز", line: "صحيح يا ماما؟" },
      {
        character: "أم عزيز",
        line: "آه يا حبيبي.. الجنة مليانة.",
      },
      {
        character: "⁦VO⁩",
        line: "كده كده هتشتري في ⁦Marina I Residence⁩… فمتستناش العمر يجري. احجز.. استلم.. قسط.. عيش.",
      },
    ],
  },
];

// Sanity check: 32 shots, scenes 1..8 with 4 shots each.
if (shots.length !== 32 && typeof console !== "undefined") {
  // eslint-disable-next-line no-console
  console.warn("[shots.ts] expected 32 shots, found", shots.length);
}
