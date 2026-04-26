// Per-shot storyboard data — Marina I Residence × DARAK "Old Man" spot.
//
// MFZ direction (Apr 2026): pages 6-9 are all the same scene — Aziz comedically
// failing to park 3 times — so they're merged as 4 sub-thumbnails under
// page-5's main panel instead of 4 separate panels. Page 10 is the bellboy
// scene (separate panel). Net result: 28 storyboard panels (down from 32),
// across 8 scenes:
//
//   Scene 1 (Marina Entrance) ........ pages 1–4              (4 panels)
//   Scene 2 (Parking) ................ page  5 + page 10      (2 panels;
//                                       page 5 carries pages 6–9 as subImages)
//   Scene 3 (Chalet Terrace) ......... pages 11–15            (5 panels)
//   Scene 4 (Walkway) ................ page  16               (1 panel)
//   Scene 5 (Outdoor Gym) ............ pages 17–20            (4 panels)
//   Scene 6 (Beach) .................. pages 21–23            (3 panels)
//   Scene 7 (Infinity Pool) .......... pages 24–25            (2 panels)
//   Scene 8 (Sky Lounge) ............. pages 26–32            (7 panels)
//
// Scenarios for pages 11–32 verified by Gemini Vision spot-checks on pages
// 11/16/22/28 — current mapping is correct, no shift needed.
//
// Arabic dialogue transcribed from script_draft_01.pdf. Latin tokens wrapped
// with LRI/PDI U+2066…U+2069 so they direction-correctly inside RTL text.

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
    cameraNote: "كادر افتتاحي واسع · low-angle · فلِير على لافتة البوابة",
    scenario:
      "كادر افتتاحي على بوابة ⁦Marina I⁩ في وقت الذروة الذهبية. سيارة ⁦GETOUR T2⁩ بيضاء بتدخل البوابة الرئيسية وسط نخيل ويخوت في الخلفية. لافتة المشروع لامعة، الإضاءة سينمائية.",
    dialogue: [],
  },
  {
    shotNumber: 2,
    sceneNumber: 1,
    sceneNameAr: "المدخل",
    sceneNameEn: "Marina Entrance",
    cameraNote: "كاميرا داخل العربية · 35mm · تعريف الشلة",
    scenario:
      "تعريف الشلة جوّه السيارة: عزيز بيقود، أم عزيز جنبه، سمير وشبل وماريام في الخلف. وشوش قلقانة ومتشوقة في نفس الوقت. كل واحد بشخصيته الكوميدية الخاصة.",
    dialogue: [],
  },
  {
    shotNumber: 3,
    sceneNumber: 1,
    sceneNameAr: "المدخل",
    sceneNameEn: "Marina Entrance",
    cameraNote: "تايت على عزيز وفرد الأمن · كادر من جنب السيارة",
    scenario:
      "السيارة بتقف عند البوابة، عزيز بيطلّ من الشباك على فرد الأمن اللي ماسك تابلت. الكرو كلهم بيتفرجوا من جوّه العربية. الجو صيفي مبهج.",
    dialogue: [
      { character: "فرد الأمن", line: "الـ ⁦QR code⁩ لو سمحت!" },
      {
        character: "أم عزيز",
        line: "يا لهوي يا عزيز!! دارك شكلهم ضحكوا علينا ومدّوكش العقد؟",
        note: "همساً",
      },
      {
        character: "عزيز",
        line: "لا يا ماما!! ده عشان الـ ⁦privacy⁩ والـ ⁦security⁩.",
      },
      {
        character: "عزيز (لفرد الأمن)",
        line: "أنا أونر في آااي ⁦Residence⁩ يا ابني، افتح.",
      },
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
    cameraNote: "تايت داخل العربية · إيد ماريام والأم · ختام كوميدي للمشهد",
    scenario:
      "في الكرسي الخلفي، ماريام (الممرضة) بتمدّ كوب مية وبرشامة لعزيز اللي قاعد بقميص هاواي مزعوج. الأم وشبل بيبصّوا في صمت. روتين يومي بيختم لقطة المدخل قبل ما البوابة تفتح.",
    dialogue: [
      { character: "ماريام", line: "(تعطيه برشامة وكوب ماء)", note: "بدون كلام" },
    ],
  },

  // ───────── Scene 2 — الباركينج (page 5 + page 10) ─────────
  {
    shotNumber: 5,
    sceneNumber: 2,
    sceneNameAr: "الباركينج",
    sceneNameEn: "Parking",
    cameraNote:
      "كاميرا متابعة comedic dance · pan خلف العربية · ٣ محاولات ركنة",
    scenario:
      "عزيز بيحاول يركن العربية مرة، اتنين، تلاتة وبيفشل في كل مرة. الكاميرا بتلف معاه وبتبقى كأنها رقصة كوميدية مع السيارة. حد من فريق الباركينج بتاع ⁦Marina I Residence⁩ بيستنّى بصبر، لابس فِست برتقالي، وبيتفرج بابتسامة سرفيس. الباركينج كله مرتب ومخطط بدقة، الواجهة لامعة في الخلفية.",
    dialogue: [],
    subImages: ["page-06", "page-07", "page-08", "page-09"],
  },
  {
    shotNumber: 10,
    sceneNumber: 2,
    sceneNameAr: "الباركينج",
    sceneNameEn: "Parking",
    cameraNote:
      "لقطة قريبة على إيد البلمان · الشنطة الخلفية · low-angle hero للخدمة",
    scenario:
      "بلمان من ⁦I Residence⁩ لابس اليونيفورم بيفتح الشنطة الخلفية وبينزّل الشنط بعناية. لمسة سرفيس فندقية، تأكيد إن المكان فيه طبقة خدمة كاملة من اللحظة الأولى. ماريام واقفة جنب عربية صغيرة عليها أدوية وسلندر.",
    dialogue: [],
  },

  // ───────── Scene 3 — تيراس الشاليه (pages 11-15) ─────────
  {
    shotNumber: 11,
    sceneNumber: 3,
    sceneNameAr: "تيراس الشاليه",
    sceneNameEn: "Chalet Terrace",
    cameraNote: "هيرو على عزيز · drone push من ناحية اللاجون · فيو كامل",
    scenario:
      "عزيز واقف على تيراس الشاليه بنظرة منبهر. وراه فيو لشاليهات على المية وعجلة فيريس بتلمع في الأفق. الإضاءة دافية، الموسيقى بتبدأ تسحب الأذن.",
    dialogue: [],
  },
  {
    shotNumber: 12,
    sceneNumber: 3,
    sceneNameAr: "تيراس الشاليه",
    sceneNameEn: "Chalet Terrace",
    cameraNote: "بان داخل الشاليه من ناحية الأبواب الزجاج · ضوء طبيعي ناعم",
    scenario:
      "كاميرا داخل الصالة فاخرة من ناحية الأبواب الزجاجية اللي بتفتح على التيراس. عزيز بيدخل من التيراس بطاقة عالية. الفيو وراه بـ ⁦overwater bungalows⁩ والعجلة.",
    dialogue: [{ character: "عزيز", line: "الـ ⁦view⁩ تحفة، أنا نازل." }],
  },
  {
    shotNumber: 13,
    sceneNumber: 3,
    sceneNameAr: "تيراس الشاليه",
    sceneNameEn: "Chalet Terrace",
    cameraNote: "ميديوم على عزيز من الجنب · تأمل بطيء",
    scenario:
      "عزيز واقف على التيراس وحده، بيتأمل المنظر بصمت. اللحظة بطيئة، فيها فخر وفيها شوية حيرة. الكاميرا بتاخد وقتها على الفيو الكامل قبل ما تقطع جوّه.",
    dialogue: [],
  },
  {
    shotNumber: 14,
    sceneNumber: 3,
    sceneNameAr: "تيراس الشاليه",
    sceneNameEn: "Chalet Terrace",
    cameraNote: "wide داخل الصالة · الكرو كلهم في الكادر · إيقاع كوميدي",
    scenario:
      "جوّه الصالة، الشلة كلهم منهكين من السفر. ماريام قاعدة بتحط مرهم على رجل سمير، شبل قاعد على كنبة بيرتاح، والأم على كرسي بتشاور بإيدها. عزيز بيطلّ على المنظر من الباب.",
    dialogue: [
      { character: "شبل", line: "بس طب ما نريّح شوية ونستمتع بجمال الشاليه." },
    ],
  },
  {
    shotNumber: 15,
    sceneNumber: 3,
    sceneNameAr: "تيراس الشاليه",
    sceneNameEn: "Chalet Terrace",
    cameraNote: "تايت تبادل لقطات قريبة · عزيز / الأم · ختام للمشهد",
    scenario:
      "ماريام لسّه بتعالج رجل سمير، الكاميرا بتقطع على عزيز اللي رافض يريّح. الأم بتعلّق بسخرية ضمنية. كل اللقطة بتؤكد إن عزيز عنده طاقة مش طبيعية وعنده برنامج.",
    dialogue: [
      { character: "عزيز", line: "أنا مش قادر أمسك نفسي." },
      { character: "أم عزيز", line: "ولفّي ورق جرايد على صدرك." },
    ],
  },

  // ───────── Scene 4 — الممشى (page 16) ─────────
  {
    shotNumber: 16,
    sceneNumber: 4,
    sceneNameAr: "الممشى",
    sceneNameEn: "Walkway",
    cameraNote: "متابعة جانبية على الممشى · عزيز ماسك ⁦gimbal⁩ · شلة وراه على بُعد",
    scenario:
      "عزيز ماشي على الممشى الواجهة بحرية ماسك تليفون على ⁦gimbal⁩ وبيصور ⁦Vlog⁩، وبيسلّم على شباب وبنات وبيعمل ⁦high-five⁩ مع واحد منهم. ورا الكادر بنشوف الشلة العواجيز وماريام بيلحقوه ماسكين موبايلاتهم وبيتفرجوا على الـ ⁦TikToks⁩ بتاعته. عجلة فيريس ومارينا واضحين في الخلفية.",
    dialogue: [
      {
        character: "أم سمير (تنادي من بعيد)",
        line: "متشتريش يا عزيز عشان طنطن سعاد عينها وحشة.",
      },
      {
        character: "سمير لـ شبل",
        line: "طلع تريند ولا أنا ضابط شوف.. كده؟",
      },
    ],
  },

  // ───────── Scene 5 — الجيم المكشوف (pages 17-20) ─────────
  {
    shotNumber: 17,
    sceneNumber: 5,
    sceneNameAr: "الجيم المكشوف",
    sceneNameEn: "Outdoor Gym",
    cameraNote: "كادر متوسط في الـ ⁦outdoor gym⁩ · عزيز وكابتن جيم · يخوت ومبانٍ خلفية",
    scenario:
      "عزيز بقميص هاواي وردي بيدخل الـ ⁦outdoor gym⁩ بطاقة جامحة وبيحضّن البار، وكابتن الجيم واقف جنبه بيسانده. مارينا واضحة وراهم. اللقطة فيها فخر ومفاجأة كوميدية في نفس الوقت.",
    dialogue: [{ character: "عزيز", line: "إديني ⁦spot⁩ يا كابتن." }],
  },
  {
    shotNumber: 18,
    sceneNumber: 5,
    sceneNameAr: "الجيم المكشوف",
    sceneNameEn: "Outdoor Gym",
    cameraNote: "تايت على البار · عزيز يبص للوزن الثقيل · ست بتتفرج",
    scenario:
      "عزيز بيقف قدّام بار وزن ثقيل بيتأمله. الكابتن بيتفرج وست واقفة جنبهم بتشجّع بصمت. الكاميرا بتعمل zoom-in على وش عزيز قبل اللحظة الفاصلة.",
    dialogue: [],
  },
  {
    shotNumber: 19,
    sceneNumber: 5,
    sceneNameAr: "الجيم المكشوف",
    sceneNameEn: "Outdoor Gym",
    cameraNote: "wide كوميدي · عزيز قاعد على كرسي على المشاية · لقطة سرّ المشهد",
    scenario:
      "اللقطة الكوميدية الرئيسية: عزيز قاعد على كرسي ع المشاية، فاضي، لابس قميصه الملون. لقطة كشف للحيلة — هو مش رفع الوزن الثقيل، هو ادّى نفسه استراحة. الـ ⁦marina⁩ خلفية كاملة.",
    dialogue: [],
  },
  {
    shotNumber: 20,
    sceneNumber: 5,
    sceneNameAr: "الجيم المكشوف",
    sceneNameEn: "Outdoor Gym",
    cameraNote: "تايت على عزيز قاعد · شبل والأم بيعلّقوا · الـ gym لعب غلط",
    scenario:
      "عزيز لسّه قاعد ع المشاية بنظرة 'مش قادر'. شبل بيشجّع ساخر، والأم بتنصحه إنه يبدأ كارديو الأول. ولفة الجيم كلها انقلبت كوميديا، والمكشوف ⁦outdoor gym⁩ خلفية مثالية للسخرية.",
    dialogue: [
      { character: "شبل", line: "افرد ضهرك كده يا عزيز." },
      { character: "أم عزيز", line: "ابدأ كارديو الأول يا عزيز." },
    ],
  },

  // ───────── Scene 6 — الشاطئ (pages 21-23) ─────────
  {
    shotNumber: 21,
    sceneNumber: 6,
    sceneNameAr: "الشاطئ",
    sceneNameEn: "Beach",
    cameraNote: "كادر واسع على الرملة · عزيز يتقدم · ماريام وعربية الأدوية بينه وبين الشباب",
    scenario:
      "على شاطئ مشمس، عزيز بقميص ورود بيتقدم ناحية شلة شباب ضخام بالعضلات. ماريام واقفة في النص بعربية الأدوية. مارينا ومبانٍ فاخرة في الخلفية. توتر كوميدي بيتبني.",
    dialogue: [
      { character: "عزيز", line: "في إيه ينمن .. جاية معاكوا بإيه؟" },
    ],
  },
  {
    shotNumber: 22,
    sceneNumber: 6,
    sceneNameAr: "الشاطئ",
    sceneNameEn: "Beach",
    cameraNote: "ميديوم على الـ ⁦bow⁩ · زعيم الشباب يطأطئ راسه · شلة عزيز بتتفرج",
    scenario:
      "زعيم الشباب الضخم بيطأطئ راسه بأدب شديد قدّام عزيز ومعاه إيد وراه ضهره. سليم في الخلفية شاكر، وأم عزيز بتبص بفخر. الإحراج بيقع على شلة الشباب كلها.",
    dialogue: [
      { character: "سليم", line: "..لو كنت اتأخرت عن كده" },
      { character: "عزيز (مقاطعاً)", line: "أن تأتي متأخراً خير من ألا تأتي." },
    ],
  },
  {
    shotNumber: 23,
    sceneNumber: 6,
    sceneNameAr: "الشاطئ",
    sceneNameEn: "Beach",
    cameraNote: "كادر واسع · الشباب بيمشوا للوراء · شلة عزيز بتتفرج · مارينا في الخلفية",
    scenario:
      "الشباب بينسحبوا بهدوء بعد ما الجد كسر هيبتهم. الشلة كلها بتتفرج: ماريام بعربية الأدوية، الأم، سمير، شبل، سليم. الإحباط واضح على وش الشباب وعلامات استفهام على وش الشلة.",
    dialogue: [
      { character: "سمير", line: "إيه ده!؟ مفيش بوكسنج عالسريع حتة؟" },
      { character: "شبل", line: "أوماك بيقولوا جيل بايظ ليه؟" },
    ],
  },

  // ───────── Scene 7 — حمام السباحة (pages 24-25) ─────────
  {
    shotNumber: 24,
    sceneNumber: 7,
    sceneNameAr: "حمام السباحة",
    sceneNameEn: "Infinity Pool",
    cameraNote: "wide على الـ ⁦infinity pool⁩ · غروب ذهبي · عجلة فيريس وراه",
    scenario:
      "عزيز ماسك كوب كوكتيل وواقف في حمام السباحة الـ ⁦infinity⁩، جنبه نور ست فائقة الجمال ماسكة كوب كوكتيل برضو. الأفق مفتوح على البحر وعجلة فيريس. اللحظة شكلها رومانسي قوي.",
    dialogue: [
      {
        character: "عزيز لـ نور",
        line: "عارفة؟ أنا ابن خالتي نزل الـ ⁦Infinity Pool⁩ ده في السبعينات، لحد دلوقت ما لينة.",
      },
    ],
  },
  {
    shotNumber: 25,
    sceneNumber: 7,
    sceneNameAr: "حمام السباحة",
    sceneNameEn: "Infinity Pool",
    cameraNote: "تايت على نور بتضحك · ⁦reveal⁩ بدخول طارق من الجنب · غروب",
    scenario:
      "نور بتنفجر من الضحك على جملة عزيز. كوكتيل في إيدها، شعرها متايل، ضوء الغروب على وشها. عزيز مكشوف، والكاميرا بتجهّز للـ ⁦reveal⁩ في المشهد اللي بعده.",
    dialogue: [
      { character: "نور", line: "هاهاهاهاهاهاهاه." },
      { character: "عزيز", line: "تـكـحـط." },
      {
        character: "أم عزيز (من بعيد)",
        line: "يعني للـ هبا مال.",
      },
    ],
  },

  // ───────── Scene 8 — سكاي لاونج (pages 26-32) ─────────
  {
    shotNumber: 26,
    sceneNumber: 8,
    sceneNameAr: "سكاي لاونج",
    sceneNameEn: "Sky Lounge",
    cameraNote: "wide على سطح الـ ⁦Sky Lounge⁩ · ⁦neon⁩ ولوجو · party night vibes",
    scenario:
      "ليلة على سطح الـ ⁦Sky Lounge⁩، الإضاءة ⁦neon⁩ ملوّنة وموسيقى عالية. شباب بيرقصوا في النص، عزيز بيشاور بسلفي، والشلة العواجيز وراه شكلهم تايهين بين الشباب. لافتة ⁦SKY LOUNGE⁩ ⁦neon⁩ مضيئة.",
    dialogue: [],
  },
  {
    shotNumber: 27,
    sceneNumber: 8,
    sceneNameAr: "سكاي لاونج",
    sceneNameEn: "Sky Lounge",
    cameraNote: "slow motion · عزيز يدخل بقميص أبيض تـريكوه · حركة بطيئة هيرو",
    scenario:
      "حركة بطيئة جداً ⁦slow-motion⁩، عزيز بيدخل وسط الشباب بقميص أبيض تـريكوه. ضوء النيون عليه، الشباب بيلتفّوا حواليه وكأنه نجم. اللحظة فيها هيبة وفخر.",
    dialogue: [],
  },
  {
    shotNumber: 28,
    sceneNumber: 8,
    sceneNameAr: "سكاي لاونج",
    sceneNameEn: "Sky Lounge",
    cameraNote: "ميديوم · سمير وشبل وأم عزيز بياخدوا الإطار وراه · ⁦crew shot⁩",
    scenario:
      "جنب عزيز بنشوف سمير وشبل وأم عزيز بخطوتين وراه. الكرو كله ماشي معاه بنفس الإيقاع البطيء. الإطار بيتجمع قبل التوجّه ناحية ترابيزة نور.",
    dialogue: [],
  },
  {
    shotNumber: 29,
    sceneNumber: 8,
    sceneNameAr: "سكاي لاونج",
    sceneNameEn: "Sky Lounge",
    cameraNote: "تايت · عزيز على ركبتيه · خاتم خطوبة · نور قاعدة في انتظاره",
    scenario:
      "نور قاعدة في انتظاره على ترابيزتها. عزيز بينزل على ركبتيه وبيقدّم لها خاتم خطوبة. الإحساس انه لحظة مهمة جداً قدّام كل الشباب. الموسيقى بتختفي شوية.",
    dialogue: [
      { character: "عزيز", line: "تقبلي مني هذه الهدية المتواضعة دي." },
    ],
  },
  {
    shotNumber: 30,
    sceneNumber: 8,
    sceneNameAr: "سكاي لاونج",
    sceneNameEn: "Sky Lounge",
    cameraNote: "ميديوم · طارق يدخل الكادر · ياخد الخاتم من إيد عزيز · ⁦twist⁩",
    scenario:
      "طارق خطيب نور بيدخل الكادر من الجنب وبيمدّ إيده بياخد الخاتم من عزيز ببساطة. عزيز مفجوع، نور بتضحك، والشلة وراه شكلهم متجمدين.",
    dialogue: [
      { character: "طارق", line: "حليتنالها الأسعار ولعت." },
      { character: "نور", line: "ميرسي يا أُونكل." },
    ],
  },
  {
    shotNumber: 31,
    sceneNumber: 8,
    sceneNameAr: "سكاي لاونج",
    sceneNameEn: "Sky Lounge",
    cameraNote: "wide · أم عزيز بتساعد عزيز يقوم · الشباب وراه بيتفرجوا",
    scenario:
      "طارق ونور سابوا المكان. أم عزيز بتدخل الكادر وبتساعد ابنها يقوم على رجليه. الشباب وراهم بيتفرجوا في صمت، الـ ⁦neon⁩ لسّه شغّال. لحظة دافية بين أم وابنها.",
    dialogue: [
      { character: "أم عزيز", line: "متلتعزش يا حبيبي.. هتقابل اللي أحسن منها." },
      { character: "عزيز", line: "صحيح يا ماما؟" },
      {
        character: "أم عزيز",
        line: "شكراً للتأمل اللي ربطته خي وأنا ده الحياة كلها بـ ⁦Marina I Residence⁩.",
      },
    ],
  },
  {
    shotNumber: 32,
    sceneNumber: 8,
    sceneNameAr: "سكاي لاونج",
    sceneNameEn: "Sky Lounge",
    cameraNote: "كلوز إكستريم على وش عزيز · دموع · ⁦tagline overlay⁩ · لوجو ختامي",
    scenario:
      "كلوز إكستريم على وش عزيز ودموعه بتنزل. اللحظة فيها كل المشاعر: ندم، فخر، حنين. الكاديل بيتحوّل بنعومة لـ ⁦tagline⁩ المشروع ولوجو ⁦Marina I Residence⁩ + ⁦Powered by Strike Media⁩.",
    dialogue: [
      {
        character: "Tagline",
        line: "هد كده هد كده هتشتري آي مارينا ريزيدنس .. فمتلخّص العمر يفوت.",
      },
    ],
  },
];
