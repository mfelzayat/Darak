// Per-shot storyboard data — مارينا آاي ريزيدينس × DARAK "Old Man" spot.
//
// Source of truth: script_v2_corrected.md (Apr 2026 corrected version).
// Character corrections: مالايا (NOT ماريام) — Filipino nurse, 30 years old.
// Project spelling: مارينا آاي ريزيدينس (preserve exact alef sequence).
//
// Panel mapping (28 panels across 8 scenes):
//   Scene 1 (مدخل مارينا 1) ............... pages 1–4              (4 panels)
//   Scene 2 (الباركينج) ................... page  5 + page 10      (2 panels;
//                                            page 5 carries pages 6–9 as subImages)
//   Scene 3 (تراس الشاليه) ................ pages 11–13            (3 panels)
//   Scene 4 (الممشى) ...................... pages 14–16            (3 panels)
//   Scene 5 (⁦Outdoor Gym⁩) ................. pages 17–20            (4 panels)
//   Scene 6 (الشاطئ) ...................... pages 21–24            (4 panels)
//   Scene 7 (⁦Infinity Pool⁩) ............... pages 25–28            (4 panels)
//   Scene 8 (⁦Sky Lounge⁩) .................. pages 29–32            (4 panels)
//
// Arabic dialogue transcribed verbatim from script_v2_corrected.md.
// Latin tokens wrapped with LRI/PDI U+2066…U+2069 so they direction-correctly
// inside RTL text on Discord, Notion, browsers, etc.

export type DialogueLine = {
  /** Character speaking (Arabic). */
  character: string;
  /** Line, Arabic. Latin tokens already wrapped with ⁦…⁩ */
  line: string;
  /** Optional stage direction in parens, Arabic. */
  note?: string;
};

export type Shot = {
  /** Image page number (1..32) — corresponds to /assets/storyboard/page-XX */
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
  /**
   * Optional extra storyboard frames that belong to the same panel — rendered
   * as a row of small thumbnails under the description. File names without
   * extension, e.g. "page-06" → /assets/storyboard/page-06.webp.
   */
  subImages?: string[];
};

export const sceneTitles: { ar: string; en: string }[] = [
  { ar: "مدخل مارينا 1", en: "Marina Entrance" },
  { ar: "الباركينج", en: "Parking" },
  { ar: "تراس الشاليه", en: "Chalet Terrace" },
  { ar: "الممشى", en: "Walkway" },
  { ar: "الجيم المكشوف", en: "Outdoor Gym" },
  { ar: "الشاطئ", en: "Beach" },
  { ar: "حمام السباحة", en: "Infinity Pool" },
  { ar: "سكاي لاونج", en: "Sky Lounge" },
];

export const shots: Shot[] = [
  // ───────── Scene 1 — مدخل مارينا 1 (pages 1-4) ─────────
  {
    shotNumber: 1,
    sceneNumber: 1,
    sceneNameAr: "مدخل مارينا 1",
    sceneNameEn: "Marina Entrance",
    cameraNote: "كادر افتتاحي واسع · ⁦low-angle⁩ · فلِير على لافتة البوابة",
    scenario:
      "كادر افتتاحي على بوابات ⁦Marina I⁩ في وقت الذروة الذهبية. عزيز يقود سيارته ⁦GETOUR T2⁩ ويصل على البوابة، ومعه اتنين من أصدقائه (سمير وشبل) والممرضة مالايا في خلف العربية، وأمه الطاعنة في السن جالسة بجواره في الأمام. الجميع بملابس صيفية مبهجة.",
    dialogue: [],
  },
  {
    shotNumber: 2,
    sceneNumber: 1,
    sceneNameAr: "مدخل مارينا 1",
    sceneNameEn: "Marina Entrance",
    cameraNote: "كاميرا داخل العربية · ⁦35mm⁩ · تعريف الشلة",
    scenario:
      "تعريف الشلة جوّه السيارة: عزيز بيقود، أم عزيز جنبه، سمير وشبل ومالايا (الممرضة الفليبينية) في الخلف. وشوش متشوقة، وكل شخصية بطابعها الكوميدي الخاص. سمير ماسك عكاز رباعي تخين، وشبل قاعد بهدوء.",
    dialogue: [],
  },
  {
    shotNumber: 3,
    sceneNumber: 1,
    sceneNameAr: "مدخل مارينا 1",
    sceneNameEn: "Marina Entrance",
    cameraNote: "تايت على عزيز وفرد الأمن · كادر من جنب السيارة",
    scenario:
      "السيارة بتقف عند البوابة، فرد الأمن بيتقدم منها. الكرو كلهم بيتفرجوا من جوّه العربية. أم عزيز بتبص بقلق، ومالايا بتجهز برشامة وكوب مية لعزيز.",
    dialogue: [
      { character: "فرد الأمن", line: "ال ⁦QR code⁩ لو سمحت!" },
      {
        character: "أم عزيز",
        line: "يا لهوي يا عزيز!! دارك شكلهم ضحكوا عليك و مدوكش العقد؟",
        note: "بقلق",
      },
      {
        character: "مالايا",
        line: "(تعطيه برشامة وكوب ماء)",
        note: "بدون كلام",
      },
    ],
  },
  {
    shotNumber: 4,
    sceneNumber: 1,
    sceneNameAr: "مدخل مارينا 1",
    sceneNameEn: "Marina Entrance",
    cameraNote: "تبادل لقطات داخل العربية · عزيز يردّ على أمه ثم على فرد الأمن",
    scenario:
      "عزيز بيرد على أمه بتنرفز خفيف ثم بيخاطب فرد الأمن بثقة، بينما سمير في الخلف بيعلّق منزعجاً مقارناً البوابة دي ببوابة شاليهه القديم في اللوتس 5.",
    dialogue: [
      {
        character: "عزيز",
        line: "لا يا ماما!!! ده عشان البرايفاسي و السيكيوريتي.",
      },
      {
        character: "عزيز (لفرد الأمن)",
        line: "أنا أوونر في آاااي ريزيدينس يا ابني، افتح.",
      },
      {
        character: "سمير",
        line: "ده أنا في اللوتس 5 بيفتحولي البوابة من على بعد 5 كيلو.",
        note: "منزعجاً",
      },
    ],
  },

  // ───────── Scene 2 — الباركينج (page 5 + page 10) ─────────
  {
    shotNumber: 5,
    sceneNumber: 2,
    sceneNameAr: "الباركينج",
    sceneNameEn: "Parking",
    cameraNote:
      "زاوية علوية · واجهة المشروع في الخلفية · متابعة كوميدية للسيارة",
    scenario:
      "بجانب الباركنج تظهر واجهة المشروع في الخلفية. من زاوية علوية نرى السيارة بتركن، ويفشل عزيز في الركنة مرارا و تكرارا — مع إن الباركنج منظم جدا و متخطط، والمساحات واسعة، وفيه حد بيساعده عشان يركن. لحد ما ينزله من العربية و يركنهاله بنفسه.",
    dialogue: [],
    subImages: ["page-06", "page-07", "page-08", "page-09"],
  },
  {
    shotNumber: 10,
    sceneNumber: 2,
    sceneNameAr: "الباركينج",
    sceneNameEn: "Parking",
    cameraNote:
      "لقطة قريبة على البلمان · لمسة سرفيس فندقية · ⁦low-angle hero⁩ للخدمة",
    scenario:
      "بلمان من آاي ريزيدينس لابس اليونيفورم بينزلهم الشنط بعناية وبيساعدهم. لمسة سرفيس فندقية بتأكد إن المكان فيه طبقة خدمة كاملة من اللحظة الأولى. مالايا واقفة جنب السيارة بأدوية سمير.",
    dialogue: [],
  },

  // ───────── Scene 3 — تراس الشاليه (pages 11-13) ─────────
  {
    shotNumber: 11,
    sceneNumber: 3,
    sceneNameAr: "تراس الشاليه",
    sceneNameEn: "Chalet Terrace",
    cameraNote: "هيرو على عزيز · ⁦drone push⁩ من ناحية البحيرة · فيو كامل",
    scenario:
      "يقف عزيز في التراس ينظر لفيو البحيرة الرائع بتفاصيله. الإضاءة دافية، الموسيقى بتبدأ تسحب الأذن، وعجلة فيريس بتلمع في الأفق.",
    dialogue: [
      { character: "عزيز", line: "الفيو تحفه، انا نازل." },
    ],
  },
  {
    shotNumber: 12,
    sceneNumber: 3,
    sceneNameAr: "تراس الشاليه",
    sceneNameEn: "Chalet Terrace",
    cameraNote: "wide داخل الشاليه · الكرو كلهم في الكادر · إيقاع كوميدي",
    scenario:
      "يستدير عزيز ويدخل من التراس ليجد مالايا تضع مرهم على رجل سمير، ويبدو على الجميع الإنتخه (الإرهاق). شبل قاعد على كنبة بيرتاح، والأم على كرسي بتشاور بإيدها.",
    dialogue: [
      { character: "شبل", line: "طب ما نريح شويه و نستمتع بجمال الشاليه." },
    ],
  },
  {
    shotNumber: 13,
    sceneNumber: 3,
    sceneNameAr: "تراس الشاليه",
    sceneNameEn: "Chalet Terrace",
    cameraNote: "تايت تبادل لقطات قريبة · عزيز / الأم · ختام للمشهد",
    scenario:
      "عزيز رافض يريّح وبيتجه ناحية الباب يغادر الشاليه. الأم بتنصحه على طريقة الجدّات بنبرة أمومية فيها قلق وسخرية في نفس الوقت.",
    dialogue: [
      { character: "عزيز", line: "أنا مش قادر امسك نفسي.", note: "يغادر عزيز الشاليه" },
      { character: "أم عزيز", line: "لف ورق جرايد على صدرك." },
    ],
  },

  // ───────── Scene 4 — الممشى (pages 14-16) ─────────
  {
    shotNumber: 14,
    sceneNumber: 4,
    sceneNameAr: "الممشى",
    sceneNameEn: "Walkway",
    cameraNote: "متابعة جانبية على الممشى · عزيز ماسك ⁦gimbal⁩ · فيو بحري",
    scenario:
      "يمشي عزيز ممسكا هاتف مربوط بـ ⁦gimbal⁩ على الممشى الواجهة بحرية. بيسلم على الشباب والبنات اللي بيعدوا من جمبه و بيصور معاهم لايف ⁦TikTok⁩، متصابياً وسط شباب ال ⁦gen Z⁩.",
    dialogue: [],
  },
  {
    shotNumber: 15,
    sceneNumber: 4,
    sceneNameAr: "الممشى",
    sceneNameEn: "Walkway",
    cameraNote: "كادر بعيد · شلة العواجيز ومالايا في خلفية المشهد · بيلحقوه",
    scenario:
      "في خلفية المشهد تتبعه شلة العواجيز ومالايا، يحاولون اللحاق به ممسكين موبايلاتهم وشايفين اللايف بتاع عزيز. الأم بتنادي من بعيد بصوت عالي تحذيرها المعتاد.",
    dialogue: [
      {
        character: "أم عزيز",
        line: "متشيرش يا عزيز عشان طنطك سعاد عنيها وحشه.",
        note: "تنادي من بعيد",
      },
    ],
  },
  {
    shotNumber: 16,
    sceneNumber: 4,
    sceneNameAr: "الممشى",
    sceneNameEn: "Walkway",
    cameraNote: "تايت على سمير وشبل · موبايلين في إيدهم · تعليق كوميدي",
    scenario:
      "سمير وشبل واقفين بيبصوا في موبايلاتهم على لايف عزيز. سمير بيسأل شبل بنبرة تحقق هل اللايف طلع تريند ولا لسه، في إطار كوميدي.",
    dialogue: [
      { character: "سمير لـ شبل", line: "طلع تريند ولا لسه.. شوف كده؟" },
    ],
  },

  // ───────── Scene 5 — ⁦Outdoor Gym⁩ (pages 17-20) ─────────
  {
    shotNumber: 17,
    sceneNumber: 5,
    sceneNameAr: "الجيم المكشوف",
    sceneNameEn: "Outdoor Gym",
    cameraNote:
      "كادر متوسط · يدخل عزيز الـ ⁦outdoor gym⁩ · يخوت ومبانٍ خلفية",
    scenario:
      "يدخل عزيز إلى الـ ⁦outdoor gym⁩ ويقف أمام وزن ثقيل، طاقته جامحة وكأنه شاب في العشرينات. مارينا واضحة وراه واللقطة فيها فخر ومفاجأة كوميدية في نفس الوقت.",
    dialogue: [
      { character: "عزيز", line: "إديني سبوت يا كابتن." },
    ],
  },
  {
    shotNumber: 18,
    sceneNumber: 5,
    sceneNameAr: "الجيم المكشوف",
    sceneNameEn: "Outdoor Gym",
    cameraNote: "تايت على البار · كشف الحيلة الكوميدية",
    scenario:
      "ينزل عزيز ليلتقط بار فاضي كان مستخبي ورا البار الثقيل، ويرفعه بصعوبة بالغة على عكس ما توحي اللقطة الأولى. لقطة كشف للحيلة — هو مش رفع الوزن الثقيل أصلاً.",
    dialogue: [],
  },
  {
    shotNumber: 19,
    sceneNumber: 5,
    sceneNameAr: "الجيم المكشوف",
    sceneNameEn: "Outdoor Gym",
    cameraNote: "ميديوم · شبل بيشجع وبيأمبر · زي كابتن جيم مزيف",
    scenario:
      "شبل واقف بيشجع عزيز و بيأمبر زي الناس اللي بيعدو في الجيم بيقولولك بتلعب غلط يا كابتن الوقفة كده. لمسة كوميدية كاملة على شخصية شبل.",
    dialogue: [
      { character: "شبل", line: "افرد ضهرك كده يا عزيز." },
    ],
  },
  {
    shotNumber: 20,
    sceneNumber: 5,
    sceneNameAr: "الجيم المكشوف",
    sceneNameEn: "Outdoor Gym",
    cameraNote: "wide · سمير قاعد على المشاية · الأم بتنصح · ختام كوميدي",
    scenario:
      "سمير جالس على كرسي فوق المشاية بيحرك رجله بدل ما يمشي، والأم واقفة بتشاور على عزيز بنصيحة كارديو. ولفة الجيم كلها انقلبت كوميديا.",
    dialogue: [
      { character: "أم عزيز", line: "ابدأ كارديو الاول يا عزيز." },
    ],
  },

  // ───────── Scene 6 — الشاطئ (pages 21-24) ─────────
  {
    shotNumber: 21,
    sceneNumber: 6,
    sceneNameAr: "الشاطئ",
    sceneNameEn: "Beach",
    cameraNote: "كادر واسع على الرملة · عزيز يلاحظ سليم في مشكلة",
    scenario:
      "على شاطئ مشمس، يلاحظ عزيز إن سليم (شاب 27 سنة منطلق) يقع في مشكله مع شباب ضخام بعضلات. عزيز يتقدم ناحيتهم بثبات، ومالايا واقفة في الخلفية بعربية الأدوية.",
    dialogue: [],
  },
  {
    shotNumber: 22,
    sceneNumber: 6,
    sceneNameAr: "الشاطئ",
    sceneNameEn: "Beach",
    cameraNote: "ميديوم على عزيز يواجه شلة الشباب · توتر كوميدي",
    scenario:
      "عزيز يقف أمام شباب العضلات ويسألهم باستفزاز خفيف. توتر كوميدي بيتبني، وزعيم العضلات بيبص ناحية عزيز قبل أن يقرر رد فعله.",
    dialogue: [
      { character: "عزيز", line: "في ايه منك ليه.. جايه معاكوا بايه؟" },
    ],
  },
  {
    shotNumber: 23,
    sceneNumber: 6,
    sceneNameAr: "الشاطئ",
    sceneNameEn: "Beach",
    cameraNote: "تايت على زعيم العضلات · يطأطئ راسه بأدب · جملة فصحى من عزيز",
    scenario:
      "زعيم العضلات يوطي راسه بأدب شديد ويحط ايده ورا ضهره ويرجع للوراء هو ومن معه. سليم بيحاول يكمل كلامه، فيقاطعه عزيز بجملة فصحى مفاجئة.",
    dialogue: [
      { character: "سليم", line: "لو كنت اتأخرت عن كده." },
      {
        character: "عزيز",
        line: "أن تأتي متأخرا خير من أن لا تأتي.",
        note: "مقاطعاً",
      },
    ],
  },
  {
    shotNumber: 24,
    sceneNumber: 6,
    sceneNameAr: "الشاطئ",
    sceneNameEn: "Beach",
    cameraNote: "كادر واسع · انسحاب الشباب · ردود فعل الشلة",
    scenario:
      "ينسحب الشباب بهدوء بعد ما الجد كسر هيبتهم، ويبدو على الجد سليم الإحباط من إن مفيش عركة. سمير وشبل بيعلقوا في إطار كوميدي.",
    dialogue: [
      { character: "سمير", line: "ايه ده؟! مفيش بوكسين عالسريع حته؟" },
      { character: "شبل", line: "اومال بيقولوا جيل بايظ ليه؟" },
    ],
  },

  // ───────── Scene 7 — ⁦Infinity Pool⁩ (pages 25-28) ─────────
  {
    shotNumber: 25,
    sceneNumber: 7,
    sceneNameAr: "حمام السباحة",
    sceneNameEn: "Infinity Pool",
    cameraNote: "wide على الـ ⁦Infinity Pool⁩ · غروب ذهبي · أفق مفتوح",
    scenario:
      "عزيز يمسك كوب عصير شيك وينظر إلى الأفق في الـ ⁦Infinity Pool⁩. الأفق مفتوح على البحر وعجلة فيريس، والإضاءة الذهبية تغطّي اللقطة كلها.",
    dialogue: [],
  },
  {
    shotNumber: 26,
    sceneNumber: 7,
    sceneNameAr: "حمام السباحة",
    sceneNameEn: "Infinity Pool",
    cameraNote: "ميديوم · عزيز يقترب من نور · جنبها كوب عصير",
    scenario:
      "عزيز يقترب من نور (25 سنة، فائقة الجمال) الممسكة بعصير أيضاً، ويتحدث إليها معاكساً. اللحظة شكلها رومانسي قوي.",
    dialogue: [],
  },
  {
    shotNumber: 27,
    sceneNumber: 7,
    sceneNameAr: "حمام السباحة",
    sceneNameEn: "Infinity Pool",
    cameraNote: "تايت على عزيز · جملة المعاكسة الكوميدية",
    scenario:
      "كلوز على وش عزيز وهو بيرمي جملة معاكسته الكوميدية على نور بثقة كاملة، كأنه شاب في العشرينات. نور بتسمع وبتبدأ تستوعب الموقف.",
    dialogue: [
      {
        character: "عزيز لـ نور",
        line: "عارفه؟ انا ابن خالتي نزل الإنفينيتي بوول ده في السبعينات، لحد دلوقت مش لاقيينه.",
      },
    ],
  },
  {
    shotNumber: 28,
    sceneNumber: 7,
    sceneNameAr: "حمام السباحة",
    sceneNameEn: "Infinity Pool",
    cameraNote: "⁦reveal⁩ بدخول طارق من الناحية التانية · عضلات · وسيم",
    scenario:
      "نور تنفجر من الضحك على جملة عزيز. فيدخل الكادر من الناحية التانية طارق خطيبها، عضلات كتير ووسيم. عزيز مكشوف، وردة فعله بتبدأ تظهر على وشّه.",
    dialogue: [],
  },

  // ───────── Scene 8 — ⁦Sky Lounge⁩ (pages 29-32) ─────────
  {
    shotNumber: 29,
    sceneNumber: 8,
    sceneNameAr: "سكاي لاونج",
    sceneNameEn: "Sky Lounge",
    cameraNote:
      "wide على الـ ⁦Sky Lounge⁩ · إضاءة ⁦Neon⁩ · ⁦Party Vibes⁩ · ⁦Slow Motion⁩",
    scenario:
      "إضاءة خافتة وملونة (⁦Neon⁩ / ⁦Party Vibes⁩)، موسيقى عالية، نور، ومجموعة من الشباب يرقصون ومندمجون جداً. فجأة يظهر عزيز بين صفوف الشباب بحركة بطيئة (⁦Slow Motion⁩)، لابس قميص أبيض تريكوه، وبجانبه سمير وشبل وأم عزيز مأخّرين وراه بخطوتين.",
    dialogue: [],
  },
  {
    shotNumber: 30,
    sceneNumber: 8,
    sceneNameAr: "سكاي لاونج",
    sceneNameEn: "Sky Lounge",
    cameraNote: "تايت · عزيز يتكئ على ركبتيه · خاتم خطوبة · نور قاعدة في انتظاره",
    scenario:
      "نور جالسة في انتظاره على تربيزة. عزيز يتكئ على ركبتيه لتقديم خاتم الخطوبة لنور. الإحساس إنها لحظة مهمة جداً قدّام كل الشباب.",
    dialogue: [
      { character: "عزيز", line: "تقبلي مني الهدية المتواضعه دي." },
    ],
  },
  {
    shotNumber: 31,
    sceneNumber: 8,
    sceneNameAr: "سكاي لاونج",
    sceneNameEn: "Sky Lounge",
    cameraNote: "ميديوم · طارق يدخل الكادر · ياخد الخاتم · ⁦twist⁩ كوميدي",
    scenario:
      "يدخل الكادر خطيب نور (طارق) ويأخذ الخاتم من إيد عزيز ببساطة. عزيز مفجوع، نور بتضحك، والشلة وراه شكلهم متجمدين.",
    dialogue: [
      { character: "طارق", line: "حليتهالنا ده الأسعار ولعت." },
      { character: "نور", line: "ميرسي يا اونكل." },
    ],
  },
  {
    shotNumber: 32,
    sceneNumber: 8,
    sceneNameAr: "سكاي لاونج",
    sceneNameEn: "Sky Lounge",
    cameraNote: "wide · الأم تواسي عزيز · ⁦VO⁩ ختامية · لوجو المشروع",
    scenario:
      "يغادر طارق ونور المكان، وتدخل أم عزيز لتواسي ابنها وتساعده على الوقوف. عزيز ينفجر بالبكاء في النهاية، والكاديل يتحوّل بنعومة لـ ⁦tagline⁩ المشروع ولوجو مارينا آاي ريزيدينس.",
    dialogue: [
      {
        character: "أم عزيز",
        line: "متزعلش يا حبيبي .. هتقابل اللي احسن منها.",
      },
      { character: "عزيز", line: "صحيح يا ماما؟" },
      { character: "أم عزيز", line: "اه يا حبيبي الجنة مليانه." },
      {
        character: "VO",
        line: "كده كده هتشتري في مارينا آاي ريزيدينس ... فمتستناش العمر يجري.. احجز .. استلم.. قسط .. عيش.",
      },
    ],
  },
];
