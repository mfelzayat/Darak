// Per-shot storyboard data — Marina I Residence × DARAK "Old Man" spot.
//
// 32 storyboard pages mapped across 8 scenes. Scene assignment was verified
// per-page using Gemini Vision against the actual storyboard panels (the
// previous mechanical 4-pages-per-scene assumption was wrong). Distribution
// is uneven on purpose — that's what the artwork actually shows:
//
//   Scene 1 (Marina Entrance) ........ pages 1–4    (4)
//   Scene 2 (Parking) ................ pages 5–10   (6)
//   Scene 3 (Chalet Terrace) ......... pages 11–15  (5)
//   Scene 4 (Walkway) ................ page  16     (1)
//   Scene 5 (Outdoor Gym) ............ pages 17–20  (4)
//   Scene 6 (Beach) .................. pages 21–23  (3)
//   Scene 7 (Infinity Pool) .......... pages 24–25  (2)
//   Scene 8 (Sky Lounge) ............. pages 26–32  (7)
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

  // ───────── Scene 2 — الباركينج (pages 5-10) ─────────
  {
    shotNumber: 5,
    sceneNumber: 2,
    sceneNameAr: "الباركينج",
    sceneNameEn: "Parking",
    cameraNote: "زاوية علوية واسعة · واجهة المشروع كاملة · drone establishing",
    scenario:
      "كاميرا علوية على باركينج ⁦Marina I Residence⁩. مساحات واسعة ومنظمة، عربيات صف ورا صف، وواجهة المبنى لامعة في الخلفية. السيارة البيضاء بتدخل المساحة وفريق الباركينج بيستقبلها.",
    dialogue: [],
  },
  {
    shotNumber: 6,
    sceneNumber: 2,
    sceneNameAr: "الباركينج",
    sceneNameEn: "Parking",
    cameraNote: "كادر متوسط · بلمان بفِست برتقالي · ابتسامة سرفيس",
    scenario:
      "عزيز ووالدته وصلوا الباركينج وفي استقبالهم بلمان لابس فِست برتقالي. الباركينج كله مزدحم لكن منظم، ولافتة ⁦MARINA EYE⁩ مبيّنة وراه. الإحساس فندقي.",
    dialogue: [],
  },
  {
    shotNumber: 7,
    sceneNumber: 2,
    sceneNameAr: "الباركينج",
    sceneNameEn: "Parking",
    cameraNote: "تايت على باب السواق · سرفيس valet",
    scenario:
      "البلمان بيفتح باب عزيز بأدب، وعزيز بينزل من السيارة بنظرة عيون متفائلة. الكرو كلهم بينزلوا واحد ورا التاني. كل خطوة فيها لمسة بريميوم.",
    dialogue: [],
  },
  {
    shotNumber: 8,
    sceneNumber: 2,
    sceneNameAr: "الباركينج",
    sceneNameEn: "Parking",
    cameraNote: "ميديوم · البلمان بياخد العربية · عزيز خارج الكادر",
    scenario:
      "البلمان بيقعد في كرسي السواق ومستعد إنه يركن بدل عزيز اللي فشل يركن أكثر من مرة. عزيز ووالدته بيتوقفوا قدّام واجهة المبنى منبهرين بالـ ⁦scale⁩.",
    dialogue: [],
  },
  {
    shotNumber: 9,
    sceneNumber: 2,
    sceneNameAr: "الباركينج",
    sceneNameEn: "Parking",
    cameraNote: "wide · عزيز واقف وسط الباركينج · سمير وشبل بيلوّحوا من العربية",
    scenario:
      "عزيز واقف في النص بيتأمل المكان، وسمير وشبل لسه قاعدين جوّه السيارة بيلوّحوا له. لقطة تأكيد إن الشلة كلها وصلت سليمة. الباركينج خلفية مثالية.",
    dialogue: [],
  },
  {
    shotNumber: 10,
    sceneNumber: 2,
    sceneNameAr: "الباركينج",
    sceneNameEn: "Parking",
    cameraNote: "كادر متوسط على البلمان والعربية الطبية · سرفيس متكامل",
    scenario:
      "بلمان مارينا آي ريزيدنس بيشيل الشنط وبيحطها على عربية، وفي نفس الوقت ماريام واقفة جنب عربية صغيرة عليها أدوية وسلندر. سرفيس كامل من اللحظة الأولى.",
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
