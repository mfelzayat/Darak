// Per-shot storyboard data for Option 2 — "Doctor's Visit" treatment
// Marina I Residence × DARAK
//
// 12 shots covering: clinic opener → Atef confides → doctor 'prescribes'
// Marina I Residence via lifestyle flashbacks (pool, gym, walkway, rooftop)
// → return to clinic → Atef books → end card with VO + facade hero.
//
// OCR'd from /opt/mfz-pa/assets/projects/marina-eye-residence/option_2_treatment.pdf
// (4 pages, GPT-4o Vision). Clean text saved at .../option_2_clean.txt.
//
// Character consistency anchors (mention in every clinic shot prompt):
// - Atef: Egyptian man, late 40s, salt-and-pepper hair, neat beard,
//   smart casual (linen shirt, no tie). Restless eyes. Confident silhouette.
// - Doctor: Egyptian man, early 50s, slim wire-rim glasses, crisp white
//   doctor's coat over a pale blue shirt. Calm composed presence.
//
// Style suffix is concatenated to every imageGenPrompt at generation time
// (see scripts/gen-images.py) — kept in one place for easy iteration.

export interface Option2DialogueLine {
  character: string;
  line: string;
  note?: string;
}

export interface Option2Scene {
  /** 1..12 — corresponds to /assets/option2/opt2-XX.png */
  shotNumber: number;
  /** Short Arabic title for the scene index strip. */
  title: string;
  /** Short English setting tag for production notes. */
  setting: string;
  /** Arabic camera/lens note. */
  cameraNote: string;
  /** 2-4 Arabic sentences. */
  scenario: string;
  /** Spoken lines for this beat. */
  dialogue: Option2DialogueLine[];
  /** Full prompt sent to gpt-image-1 (English). */
  imageGenPrompt: string;
  /** File name in /public/assets/option2/ */
  imageFile: string;
}

export const option2Concept =
  "عاطف، رجل في أواخر الأربعينات ناجح في شغله وبيته، بس حاسس إن الحياة بقت روتين تقيل. بيتكلم مع طبيبه النفسي اللي بدل ما يدّيله جلسات، \"يكتبله\" روشتة من نوع تاني — مارينا آي ريزيدنس. كل كلمة من الدكتور بتفتح فلاش باك على لحظة في المشروع: الـ Pool، الـ Outdoor Gym، الممشى، السكاي لاونج. عاطف بيرجع من الفلاش باك بقرار: مفيش جلسة الأسبوع الجاي.";

export const option2ConceptEn =
  "A successful 40-something who 'has it all' but feels life is on autopilot. His therapist's prescription isn't another session — it's Marina I Residence. Each line of advice cuts to a lifestyle flashback at the project. By the end, Atef walks out a different man, ready to book.";

export const option2Tagline =
  "مارينا آي ريزيدنس… في قلب مارينا ١. الفرصة لسه في إيدك.";

export const option2TaglineEn =
  "Marina Eye Residence — in the heart of Marina 1. The opportunity is still in your hands.";

export const option2Characters: { name: string; age: number; role: string }[] =
  [
    {
      name: "عاطف",
      age: 47,
      role: "البطل — متزوج، أب لطفلين، ناجح بس حاسس بالملل والروتين.",
    },
    {
      name: "الدكتور",
      age: 52,
      role: "طبيب نفسي هادئ، حكيم — بيكتب \"روشتة\" من نوع تاني.",
    },
    {
      name: "مدام عاطف",
      age: 42,
      role: "في الفلاش باكات — في المطاعم والكافيهات والمحلات.",
    },
    { name: "الأولاد", age: 9, role: "طفلان في الـ Pool وفي اللعب." },
  ];

export const option2Shots: Option2Scene[] = [
  // ───────── 01 — Opening clinic, Atef on chaise longue ─────────
  {
    shotNumber: 1,
    title: "العيادة — الافتتاحية",
    setting: "Therapist's clinic, day. Wide-to-tight opening.",
    cameraNote: "كادر قريب على وجه عاطف · ⁦35mm⁩ · إضاءة طبيعية باردة من الشباك",
    scenario:
      "عاطف ممدد على الشيزلونج بنظرة فاضية، باصص للسقف يائس. الكاميرا قريبة على وشّه، نسمع نَفَسه فقط. الدكتور في الخلفية ضبابي ماسك نوته.",
    dialogue: [
      {
        character: "عاطف",
        line: "مابقتش ابنبسط… كل حاجة حلوة بتيجي بس متأخر.",
        note: "مضايق",
      },
    ],
    imageGenPrompt:
      "Cinematic close-up of an Egyptian man in his late 40s named Atef, salt-and-pepper hair, neat short beard, wearing a smart casual linen shirt, lying on a brown leather therapist's chaise longue, head resting on a small pillow, staring at the ceiling with a tired empty expression. In the soft-focus background sits a calm composed Egyptian man in his early 50s wearing slim wire-rim glasses and a crisp white doctor's coat over a pale blue shirt, holding a notebook on his lap. Bookshelves and a window with diffused cool morning light behind them.",
    imageFile: "opt2-01.webp",
  },

  // ───────── 02 — Doctor listens, calm ─────────
  {
    shotNumber: 2,
    title: "الدكتور — الإصغاء",
    setting: "Therapist's clinic, doctor in his armchair.",
    cameraNote: "تايت على الدكتور · ⁦50mm⁩ · backlight ناعم من الشباك",
    scenario:
      "كات على الدكتور قاعد في كرسيه الجلد، ماسك القلم والنوته، ثابت كأنه مش بيتأثر. عيونه مركزة على عاطف. الكاميرا بتعمل ⁦push-in⁩ بطيء.",
    dialogue: [{ character: "الدكتور", line: "زي إيه؟" }],
    imageGenPrompt:
      "Cinematic medium close-up of a calm composed Egyptian man in his early 50s, slim wire-rim glasses, crisp white doctor's coat over a pale blue shirt, sitting in a tan leather wing-back armchair in a warm therapist's office. He holds a fountain pen above an open leather notebook on his lap, looking straight ahead with a steady patient expression. Soft window backlight rim-lights his shoulders. Bookshelves and a small green plant slightly out of focus behind him.",
    imageFile: "opt2-02.webp",
  },

  // ───────── 03 — Atef talks about the car (sets up flashback) ─────────
  {
    shotNumber: 3,
    title: "العربية — الإحباط",
    setting: "Clinic, two-shot.",
    cameraNote: "تو-شوت بزاوية جانبية · شيزلونج في الكادر · فلِير من الشباك",
    scenario:
      "عاطف بيتكلم بسرعة، إيده بتلوّح. الدكتور ساكت بيسمع. الكاميرا بتلتقط الإحباط في حركة الجسم قبل ما يقطع على الفلاش باك.",
    dialogue: [
      {
        character: "عاطف",
        line: "العربية اللي كان نفسي فيها… جبتها. بس عشان مشاوير البيت والنادي والطلبات اللي مبتخلصش.",
      },
    ],
    imageGenPrompt:
      "Cinematic side-angle two-shot inside a warm therapist's office: in the foreground (right) the calm Egyptian doctor in his early 50s, wire-rim glasses, white doctor's coat over a pale blue shirt, sitting in a tan leather armchair listening; in the mid-ground (left) the same Egyptian man Atef in his late 40s, salt-and-pepper hair and neat beard, smart casual linen shirt, sitting up on the edge of a brown leather chaise longue, gesturing with one hand mid-sentence, frustrated body language. A bright window between them flares the lens softly.",
    imageFile: "opt2-03.webp",
  },

  // ───────── 04 — Flashback: Atef driving the dream car ─────────
  {
    shotNumber: 4,
    title: "فلاش باك — العربية",
    setting: "Coastal road, day. Driving POV / quarter-side.",
    cameraNote: "كاميرا من جنب العربية · ⁦24mm⁩ · حركة جانبية سريعة",
    scenario:
      "فلاش باك سريع. عاطف لابس نظارة شمس وقاعد ورا الدركسيون في عربية فاخرة، وش واثق بس فاضي. الكاميرا بتمشي معاه على الكورنيش. اللون دافي جداً.",
    dialogue: [],
    imageGenPrompt:
      "Cinematic side-tracking shot of a luxury matte-grey SUV driving along a coastal Egyptian road at golden hour. Behind the wheel: an Egyptian man in his late 40s with salt-and-pepper hair, neat beard, dark aviator sunglasses, wearing an open-collar white linen shirt — confident posture, one hand on the wheel, calm but slightly empty expression. Sea and palm trees blur past on the right. Warm sunlight rakes across the side of the car. Slight motion blur on the background.",
    imageFile: "opt2-04.webp",
  },

  // ───────── 05 — Doctor opens the curtains ─────────
  {
    shotNumber: 5,
    title: "الدكتور — يفتح الستائر",
    setting: "Clinic, by the window.",
    cameraNote: "كاميرا بتتبع حركة الدكتور · ضوء شمس بيغمر الكادر فجأة",
    scenario:
      "الدكتور بيسيب القلم وبيقوم. بيمشي ناحية الشباك وبيفتح الستارة. الضوء الذهبي بيغمر الأوضة فجأة، الكاميرا بتلاحق الحركة.",
    dialogue: [
      {
        character: "الدكتور",
        line: "مشكلتك إنك بتفكر كتير… والفرص بتيجي وانت مبتاخدش قرار.",
      },
    ],
    imageGenPrompt:
      "Cinematic medium shot of a calm Egyptian doctor in his early 50s, slim wire-rim glasses, crisp white doctor's coat over a pale blue shirt, standing by a tall arched window in a warm therapist's office, one hand pulling the cream linen curtain aside. Bright golden sunlight floods into the room from his left, throwing long warm beams across the bookshelves and wooden floor. His expression is wise, slightly amused. Lens flare across the frame. Backlit silhouette of his profile.",
    imageFile: "opt2-05.webp",
  },

  // ───────── 06 — Doctor 'prescribes' Marina I Residence ─────────
  {
    shotNumber: 6,
    title: "الروشتة — مارينا آي ريزيدنس",
    setting: "Clinic, doctor showing brochure / screen.",
    cameraNote: "over-the-shoulder من ورا عاطف · فوكَس على إيد الدكتور وهو بيقدّم كتالوج",
    scenario:
      "الدكتور بيرجع لكرسيه وبيمد إيده بكتالوج / تابلت لعاطف. الصور على الشاشة لمشروع مارينا. الكاميرا بتبص من فوق كتف عاطف.",
    dialogue: [
      {
        character: "الدكتور",
        line: "أنا مضيعتش الفرصة… واشتريت في مارينا آي ريزيدنس.",
      },
    ],
    imageGenPrompt:
      "Cinematic over-the-shoulder shot from behind an Egyptian man (Atef, late 40s, salt-and-pepper hair, neat beard, smart casual linen shirt) seated on a brown leather chaise longue. In front of him, the Egyptian doctor in his early 50s, wire-rim glasses, white coat over pale blue shirt, leans forward from his armchair holding out a sleek black tablet. The tablet screen shows a luxurious Mediterranean seafront residential development with white modern architecture and palm trees. Warm side light from the right window. Shallow depth of field, focus on the tablet and the doctor's hand.",
    imageFile: "opt2-06.webp",
  },

  // ───────── 07 — Flashback: Marina I Residence facade hero ─────────
  {
    shotNumber: 7,
    title: "فلاش باك — الواجهة",
    setting: "Marina I Residence exterior, golden hour.",
    cameraNote: "drone هيرو wide · واجهة المشروع كاملة · أفق بحر وراها",
    scenario:
      "كشف واسع على واجهة مارينا آي ريزيدنس. عمارة بيضا مودرن بشرفات منحنية، نخل، ولاجون قدامها. الكاميرا بترتفع كأنها بتفتح الفلاش باك.",
    dialogue: [],
    imageGenPrompt:
      "Cinematic aerial drone shot of a premium Mediterranean luxury residential development: tall white modern apartment buildings with curved balconies, floor-to-ceiling glass, and lush palm landscaping in the foreground. A long turquoise lagoon and infinity pool runs along the front of the buildings, with the open Mediterranean sea stretching to the horizon behind. Golden hour sunlight casts long warm shadows across the pool deck. No people visible. Clean architectural hero shot.",
    imageFile: "opt2-07.webp",
  },

  // ───────── 08 — Flashback: Pool with kids ─────────
  {
    shotNumber: 8,
    title: "فلاش باك — البول والأولاد",
    setting: "Marina infinity pool, mid-day.",
    cameraNote: "low-angle قريب من سطح المية · ⁦slow motion⁩ خفيفة",
    scenario:
      "فلاش باك على طفلين بيلعبوا ويرشّوا مية على بعض في الـ ⁦Pool⁩، طاقة فرحة. خلفهم عيلة قاعدة على كراسي الـ ⁦cabana⁩. لقطة دافية بريئة.",
    dialogue: [{ character: "الدكتور", line: "والأولاد؟ سيبهم في الـ ⁦Pool⁩." }],
    imageGenPrompt:
      "Cinematic low-angle shot just above the water surface of a luxurious infinity swimming pool at a Mediterranean resort. Two Egyptian children, around 8 and 10 years old, play and splash water joyfully, mid-laughter, water droplets frozen in mid-air around them. Behind the pool, white modern residential architecture and palm trees. Warm late-morning sunlight. Soft slow-motion feel, water sparkles, shallow depth of field.",
    imageFile: "opt2-08.webp",
  },

  // ───────── 09 — Flashback: Outdoor gym ─────────
  {
    shotNumber: 9,
    title: "فلاش باك — الجيم المكشوف",
    setting: "Outdoor gym overlooking sea.",
    cameraNote: "تايت على عاطف وهو بيلعب · ⁦35mm⁩ · ضوء جانبي قوي",
    scenario:
      "عاطف لابس ⁦outfit⁩ رياضي، بيرفع وزن خفيف على معدات الـ ⁦outdoor gym⁩ والبحر وراه. شكله مختلف، أصغر، فيه طاقة. الكاميرا بتلف حواليه ⁦half-arc⁩.",
    dialogue: [
      {
        character: "الدكتور",
        line: "وأنت انزل العب رياضة في الـ ⁦Outdoor Gym⁩… وطلع ⁦six packs⁩.",
      },
    ],
    imageGenPrompt:
      "Cinematic tight shot of the same Egyptian man Atef, late 40s, salt-and-pepper hair, neat beard — but here in athletic mode wearing a fitted black sports T-shirt and grey shorts, mid-rep on a premium outdoor gym pull-up / dip station overlooking the open Mediterranean sea. Strong side light highlights his arms and jawline, sweat just beginning. The outdoor gym features modern matte-black equipment on a wooden deck framed by palms. Sea and sky stretch behind him. Confident determined expression.",
    imageFile: "opt2-09.webp",
  },

  // ───────── 10 — Flashback: Walkway / café / restaurants ─────────
  {
    shotNumber: 10,
    title: "فلاش باك — الممشى",
    setting: "Marina promenade, restaurants & cafés.",
    cameraNote: "ستيدي‑كام ⁦tracking⁩ · ⁦35mm⁩ · ⁦blue hour⁩ يبدأ",
    scenario:
      "عاطف ومدامه ماشيين على الممشى، بيدخلوا كافيه أنيق. الكاميرا بتسبقهم. مطاعم وكافيهات بإضاءة دافية على الجوانب. حياة كاملة في كادر واحد.",
    dialogue: [
      {
        character: "الدكتور",
        line: "الممشى ده ⁦lifestyle⁩ متكامل — مطاعم، كافيهات، وأشهر البراندات.",
      },
    ],
    imageGenPrompt:
      "Cinematic steadicam tracking shot moving backward in front of an Egyptian couple walking together along a stylish Mediterranean marina promenade at early blue hour. The man is Atef, late 40s, salt-and-pepper hair, neat beard, smart casual navy shirt; his wife, an elegant Egyptian woman around 42 in a flowing cream summer dress, holds his arm. Behind them and on either side: warm-lit upscale restaurants and cafés with outdoor seating, string lights, and a few well-dressed patrons. Reflections on polished stone tiles. Relaxed happy expressions.",
    imageFile: "opt2-10.webp",
  },

  // ───────── 11 — Flashback: Sky lounge / rooftop ─────────
  {
    shotNumber: 11,
    title: "فلاش باك — السكاي لاونج",
    setting: "Rooftop sky lounge, blue hour.",
    cameraNote: "wide reveal من ناحية الـ ⁦infinity edge⁩ · شمعدانات وضوء دافي",
    scenario:
      "كشف واسع على روف توب فيه ⁦infinity pool⁩ على الحافة، البحر بيمتد للأفق. ناس بترتاح، عاطف وقف عند الحافة بيبص للأفق وكوب في إيده.",
    dialogue: [
      {
        character: "VO",
        line: "مسبح ⁦infinity⁩، ⁦rooftop⁩ ينسيك تعب اليوم.",
      },
    ],
    imageGenPrompt:
      "Cinematic wide reveal of a luxurious rooftop sky lounge at blue hour: an infinity-edge pool runs along the building's edge, blending into the open Mediterranean sea on the horizon. Soft warm bistro lights and lit candles on low lounge tables. A few elegantly dressed guests relax in the background. In the mid-ground, the same Egyptian man Atef, late 40s, salt-and-pepper hair and beard, smart casual linen shirt, stands at the infinity edge looking out at the horizon, holding a tumbler glass. Dusk sky transitions from soft orange to deep teal.",
    imageFile: "opt2-11.webp",
  },

  // ───────── 12 — Back to clinic, Atef stands up decided ─────────
  {
    shotNumber: 12,
    title: "العيادة — القرار",
    setting: "Back at the clinic, Atef rises.",
    cameraNote: "كاميرا بترتفع مع عاطف · ⁦low angle⁩ · عينه بتلمع",
    scenario:
      "كات للعيادة. عاطف بيقف من على الشيزلونج بحركة كوميدية واثقة، بيعدّل قميصه، عينه بتلمع. الدكتور باصصله مستغرب. الـ ⁦energy⁩ اتقلبت.",
    dialogue: [
      {
        character: "عاطف",
        line: "دكتور، أنا مش هاجي جلسة الأسبوع الجاي… هكون في ⁦Marina Eye Residence⁩.",
      },
      {
        character: "الدكتور",
        line: "طب مش تفكر الأول؟",
      },
      {
        character: "عاطف",
        line: "هي الراحة محتاجة تفكير برضه؟!",
      },
    ],
    imageGenPrompt:
      "Cinematic low-angle medium shot inside a warm therapist's office: the Egyptian man Atef, late 40s, salt-and-pepper hair, neat beard, smart casual linen shirt, has just stood up from a brown leather chaise longue. He stands tall, adjusting his collar with both hands, eyes bright with new resolve, the faintest confident smile. In the soft-focus background, the calm Egyptian doctor (early 50s, wire-rim glasses, white coat over pale blue shirt) sits in his armchair looking up at him with a surprised raised eyebrow. Warm golden afternoon light streams through the window behind Atef, rim-lighting his silhouette.",
    imageFile: "opt2-12.webp",
  },
];

// Sanity check: 12 shots numbered 1..12.
if (option2Shots.length !== 12 && typeof console !== "undefined") {
  // eslint-disable-next-line no-console
  console.warn(
    "[option2.ts] expected 12 shots, found",
    option2Shots.length,
  );
}
