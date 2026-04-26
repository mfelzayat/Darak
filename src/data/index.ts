// Single source of truth for the deck — Arabic only.
// Mirrors /opt/mfz-pa/assets/projects/marina-eye-residence/scenes-dialogue.json
// (kept in source so the bundler ships static, no JSON loader hop).

export type Character = {
  name: string;
  age: number;
  role: string;
};

export type DialogueLine = {
  by: string;
  line: string;
};

export type Shot = {
  page: number;
  note: string;
  description: string;
  dialogue: DialogueLine[] | null;
};

export type Scene = {
  id: number;
  title: string;
  type: string; // د/خ — نهار  /  د/ل — ليل
  summary: string;
  shots: Shot[];
};

export const tagline =
  "كده كده هتشتري في مارينا آاي ريزيدينس .. فمتخليش العمر يفوت.";

export const taglineEn =
  "You're going to buy at Marina Eye Residence anyway — don't let life slip past you.";

export const concept =
  "شلة من العواجيز، طالعين الساحل بعد استلام عزيز الشاليه الخاص به في مارينا آاي ريزيدينس. ينطلق عزيز للاستمتاع بكل وسائل الرفاهية الموجوده متصابياً وسط الشباب و الـ Gen Z، بينما باقي العواجيز يحاولون اللحاق به في كل مكان متعجبين من نشاطه المفرط، ولا يكفوا المقارنة بين المكان و شاليهاتهم في الساحل القديم في إطار كوميدي.";

export const characters: Character[] = [
  {
    name: "عزيز",
    age: 60,
    role: "ملابس شبابية صارخة، بيقلد الشباب الجداد في كلامهم و نشاطاتهم.",
  },
  {
    name: "سمير",
    age: 62,
    role: "ماسك عكاز رباعي تخين، عصبي المزاج.",
  },
  {
    name: "شبل",
    age: 60,
    role: "جسم صغير، ذاكرة 2 جيجا، هاديء.",
  },
  {
    name: "أم عزيز",
    age: 85,
    role: "أم مصرية بتخاف على ابنها زي ما كان صغير، ودائماً بتحذره من أي شيء.",
  },
  {
    name: "مالايا",
    age: 30,
    role: "ممرضة فليبينية مرافقة لسمير، لابسة لبس الممرضة، و طول الوقت بتديله دوا بكل الأشكال.",
  },
  {
    name: "نور",
    age: 25,
    role: "فائقة الجمال — عزيز كان بيعاكسها وبيكتشف إنها مخطوبة لطارق، وبعدين يبقوا أصدقاء.",
  },
  {
    name: "سليم",
    age: 27,
    role: "شاب منطلق، اتعرف على عزيز و بقوا أصدقاء.",
  },
];

export const scenes: Scene[] = [
  {
    id: 1,
    title: "مدخل مارينا 1",
    type: "د/خ — نهار",
    summary: "وصول عزيز و الشلة لبوابة مارينا 1 في سيارته GETOUR T2.",
    shots: [
      {
        page: 1,
        note: "Cover / opening",
        description: "كادر افتتاحي — لوجو المشروع و عنوان السيناريو.",
        dialogue: null,
      },
      {
        page: 2,
        note: "Intro to crew",
        description: "تعريف الشلة: عزيز، سمير، شبل، أم عزيز، مالايا في السيارة.",
        dialogue: null,
      },
      {
        page: 3,
        note: "Driving in",
        description:
          "عزيز يقود الـ GETOUR T2 و معه الشلة. كلهم بملابس صيفية مبهجة.",
        dialogue: null,
      },
      {
        page: 4,
        note: "At gate",
        description: "السيارة تصل بوابة مارينا 1. فرد الأمن يقترب.",
        dialogue: [
          { by: "فرد الأمن", line: "الـ QR code لو سمحت!" },
          {
            by: "أم عزيز (همساً)",
            line: "يا عزيز يا روحي! دارك ضحكوا عليك و مدسوكش الـ عمد؟",
          },
          { by: "عزيز", line: "لا يا ماما!! ده عشان الـ برايفسي و الـ سيكيوريتي." },
          { by: "عزيز للأمن", line: "أنا أُونور في آيييي ريزيدنس يا ابني، افتح." },
          {
            by: "سمير (منزعجاً)",
            line: "ده أنا في اللوتس 5 على بعد 5 كيلو يفتحوا لي البوابة!",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Parking",
    type: "د/خ — نهار",
    summary: "عزيز يفشل مراراً في ركن السيارة رغم تنظيم الـ Parking المثالي.",
    shots: [
      {
        page: 5,
        note: "Parking establishing",
        description:
          "كاميرا علوية على الـ Parking. ترى السيارة تركن. مشروع المارينا في الخلفية.",
        dialogue: null,
      },
      {
        page: 6,
        note: "Aziz failing",
        description:
          "عزيز يحاول و يفشل في ركن السيارة مرات و مرات. الـ Parking مساحاته واسعة و مخططة بدقة.",
        dialogue: null,
      },
      {
        page: 7,
        note: "Beach attendants help",
        description:
          "بيلمان مارينا آاي ريزيدينس بـ Uniform يساعدونه و ينزلون الشنط من السيارة.",
        dialogue: null,
      },
    ],
  },
  {
    id: 3,
    title: "تيراس الشاليه",
    type: "د/خ — نهار",
    summary:
      "عزيز يصل التيراس و ينبهر بالـ View، لكنه مش قادر يخلي نفسه يسترخي.",
    shots: [
      {
        page: 8,
        note: "Aziz on terrace",
        description: "عزيز يقف على التيراس وينظر لفيو البحيرة الرائع بتفاصيله.",
        dialogue: null,
      },
      {
        page: 9,
        note: "Mariam treating Samir",
        description:
          "يستدير و يدخل الشاليه، يجد مالايا تضع مرهماً على رجل سمير. الجميع منهك.",
        dialogue: [
          { by: "عزيز", line: "الـ فيو تحفة، أنا نازل." },
          { by: "شبل", line: "بس طب ما نريح شوية و نستمتع بجمال الشاليه." },
        ],
      },
      {
        page: 10,
        note: "Aziz won't rest",
        description: "عزيز يرفض الراحة و يخرج تاني.",
        dialogue: [{ by: "عزيز", line: "أنا مش قادر أنسى نفسي." }],
      },
      {
        page: 11,
        note: "Mom commentary",
        description: "أم عزيز تعلق بسخرية ضمنية على عناده.",
        dialogue: [{ by: "أم عزيز", line: "ولفّي ورق جرايد على صدرك." }],
      },
    ],
  },
  {
    id: 4,
    title: "الممشى",
    type: "د/خ — نهار",
    summary:
      "عزيز يصور Vlog على gimbal و يتفاعل مع الشباب و الـ Gen Z على الممشى. الشلة تلاحقه من بعيد.",
    shots: [
      {
        page: 12,
        note: "Aziz vlogging",
        description: "عزيز يمشي ممسكاً تليفون مربوط بـ gimbal و يصور.",
        dialogue: null,
      },
      {
        page: 13,
        note: "Greeting youngsters",
        description: "يسلّم على البنات و الشباب اللي يبعدوا عنه. يصور معهم Tiktoks.",
        dialogue: null,
      },
      {
        page: 14,
        note: "Old crew chasing",
        description:
          "في خلفية الكادر تتبعه شلة العواجيز و الممرضة، ممسكين موبايلاتهم و شايفين الـ Tiktoks بتاع عزيز.",
        dialogue: [
          {
            by: "أم سمير (تنادي من بعيد)",
            line: "متشتريش يا عزيز عشان طنطن سعاد عينها وحشة.",
          },
          { by: "سمير لـ شبل", line: "طلع تريند ولا أنا ضابط شوف.. كده؟" },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Outdoor Gym",
    type: "د/خ — نهار",
    summary: "عزيز يحاول رفع وزن ثقيل في الجيم — والشلة تساعده تخفيه.",
    shots: [
      {
        page: 15,
        note: "Aziz enters gym",
        description: "عزيز يدخل الـ outdoor gym بطاقة جامحة.",
        dialogue: [{ by: "عزيز", line: "إديني spot يا كابتن." }],
      },
      {
        page: 16,
        note: "Heavy weight stare-down",
        description: "عزيز يقف أمام وزن ثقيل ويتأمل الموقف.",
        dialogue: null,
      },
      {
        page: 17,
        note: "The trick",
        description:
          "ينزل عزيز ليلتقط بار فاضي مختبئ خلف البار الثقيل، يرفعه بصعوبة بالغة و يتظاهر إنه شال الثقيل.",
        dialogue: null,
      },
      {
        page: 18,
        note: "Shibl mimics, mom advises",
        description:
          "شبل يشجعه و يصطنع رفع زي الناس اللي بتركض، الـ Gym يلعب غلط الولفة كلها كوميديا.",
        dialogue: [
          { by: "شبل", line: "افرد ضهرك كده يا عزيز" },
          { by: "أم عزيز", line: "ابدأ كارديو الأول يا عزيز" },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "الشاطئ",
    type: "د/خ — نهار",
    summary: "عزيز يلاحظ سليم في مشكلة مع شباب ضخام عضلات — يدخل و يحلها.",
    shots: [
      {
        page: 19,
        note: "Trouble brewing",
        description: "عزيز يلاحظ أن سليم يقع في مشكلة مع شباب ضخام بالعضلات.",
        dialogue: [{ by: "عزيز", line: "في إيه ينمن .. جاية معاكوا بإيه؟" }],
      },
      {
        page: 20,
        note: "The bow",
        description:
          "زعيم العضلات يطأطئ رأسه بأدب شديد و يضع يده وراء ضهره و يرجع للوراء و من معه.",
        dialogue: [
          { by: "سليم", line: "..لو كنت اتأخرت عن كده" },
          { by: "عزيز (مقاطعاً)", line: "أن تأتي متأخراً خير من ألا تأتي." },
        ],
      },
      {
        page: 21,
        note: "Embarrassed retreat",
        description: "ينسحب الشباب بهدوء، الإحباط يبدو على الجد.",
        dialogue: [
          { by: "سمير", line: "إيه ده!؟ مفيش بوكسنج عالسريع حتة؟" },
          { by: "شبل", line: "أوماك بيقولوا جيل بايظ ليه؟" },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Infinity Pool",
    type: "د/خ — نهار",
    summary: "عزيز يحاول التغزل في نور — تنفجر ضحكاً لما يظهر طارق خطيبها.",
    shots: [
      {
        page: 22,
        note: "Aziz with juice",
        description:
          "عزيز يمسك كوب عصير شيئ، ينظر للأفق في الـ Infinity Pool. يقترب من نور الممسكة بكوب عصير أيضاً.",
        dialogue: null,
      },
      {
        page: 23,
        note: "The pickup line",
        description: "يحدثها بحيث تضربه بالكلام.",
        dialogue: [
          {
            by: "عزيز لـ نور",
            line: "عارفة؟ أنا ابن خالتي نزل الإنفينيتي بول ده في السبعينات، لحد دلوقت اللينة.",
          },
        ],
      },
      {
        page: 24,
        note: "The reveal",
        description:
          "نور تنفجر ضحكاً، يدخل الكادر من الناحية التانية طارق خطيبها — عضلات كتير و وسيم.",
        dialogue: [
          { by: "نور", line: "هاهاهاهاهاهاهاه." },
          { by: "عزيز", line: "تـكـحـط." },
        ],
      },
      {
        page: 25,
        note: "Mom commentary",
        description: "أم عزيز تعلق من بعيد و الكاميرا تكسرها.",
        dialogue: [{ by: "أم عزيز", line: "يعني للـ هبا مال." }],
      },
    ],
  },
  {
    id: 8,
    title: "Sky Lounge",
    type: "د/ل — ليل",
    summary: "محاولة خِطبة على الأركان وفي الـ Sky Lounge — تنقلب على عزيز.",
    shots: [
      {
        page: 26,
        note: "Sky Lounge entry",
        description:
          "إضاءة خافتة و ملوّنة Neon/Party Vibes، موسيقى، نور، و مجموعة من الشباب يرقصون و مندمجون جداً.",
        dialogue: null,
      },
      {
        page: 27,
        note: "Slow-mo entrance",
        description:
          "فجأة، يظهر الجد بين صفوف الشباب بحركة بطيئة Slow Motion، يدخل الجد الساحة بقميص أبيض تـريكوه.",
        dialogue: null,
      },
      {
        page: 28,
        note: "Crew follows",
        description: "بجانبه سمير و شبل و أم عزيز ورائه بخطوتين.",
        dialogue: null,
      },
      {
        page: 29,
        note: "The proposal",
        description:
          "نور جالسة في انتظاره على ترابيزتها. عزيز يتكئ على ركبتيه لتقديم خاتم الخطوبة لنور.",
        dialogue: [{ by: "عزيز", line: "تقبلي مني هذه الهدية المتواضعة دي." }],
      },
      {
        page: 30,
        note: "Tarek arrives",
        description: "يدخل الكادر طارق خطيب نور و يأخذ الخاتم من إيد عزيز.",
        dialogue: [
          { by: "طارق", line: "حليتنالها الأسعار ولعت." },
          { by: "نور", line: "ميرسي يا أُونكل." },
        ],
      },
      {
        page: 31,
        note: "Mom consoles",
        description:
          "يغادر طارق و نور المكان وتدخل أم عزيز لتواسي ابنها وتساعده على الوقوف.",
        dialogue: [
          { by: "أم عزيز", line: "متلتعزش يا حبيبي.. هتقابل اللي أحسن منها." },
          { by: "عزيز", line: "صحيح يا ماما؟" },
          {
            by: "أم عزيز",
            line: "شكرا للتأمل اللي ربطته خي وأنا ده الحياة كلها بـ مارينا آاي ريزيدينس.",
          },
        ],
      },
      {
        page: 32,
        note: "Final tagline / logo",
        description: "كادر تاجلاين أخير + لوجو المشروع و Powered by Strike Media.",
        dialogue: [
          {
            by: "Tagline",
            line: "هد كده هد كده هتشتري آي مارينا ريزيدنس .. فمتلخص العمر يفوت.",
          },
        ],
      },
    ],
  },
];
