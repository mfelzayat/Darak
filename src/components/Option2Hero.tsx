import { motion } from "framer-motion";

export default function Option2Hero() {
  return (
    <section
      id="hero"
      dir="rtl"
      className="relative min-h-[100svh] w-full overflow-hidden bg-ink-950 vignette grain"
    >
      <div className="absolute inset-0 hero-glow" />
      {/* Hero backdrop = the project facade flashback (opt2-07) */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url(/assets/option2/opt2-07.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(60%) contrast(1.05) brightness(0.55)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/40 via-ink-950/40 to-ink-950" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 pt-24 md:pt-32 pb-12 min-h-[100svh] flex flex-col">
        {/* Top eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          className="flex items-center gap-3 text-[12px] tracking-widest text-bone/60"
        >
          <span className="inline-block w-8 h-px bg-strike" />
          <span>
            تصور دعائي · <bdi>Option&nbsp;2</bdi> · كشف الطبيب
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.15, ease: "easeOut" }}
          className="mt-8 text-[12vw] md:text-[7vw] leading-[1.05] font-black tracking-tight"
        >
          روشتة من نوع <span className="text-strike">تاني</span>.
          <br />
          <span className="text-bone/55 font-light">
            مارينا <span className="text-bone/85">آي</span> ريزيدنس
          </span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.6 }}
          className="mt-8 max-w-2xl text-bone/75 text-lg md:text-2xl leading-relaxed"
        >
          عاطف عنده كل حاجة… إلا الإحساس. الدكتور بدل الجلسة بكَتَب له عنوان.
        </motion.p>

        {/* Bottom row: CTA + Strike logo */}
        <div className="mt-auto pt-16 flex items-end justify-between gap-6">
          <motion.a
            href="#concept"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 1.0 }}
            className="group flex items-center gap-3 text-[12px] tracking-widest text-bone/70 hover:text-bone"
          >
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-strike text-2xl leading-none"
              aria-hidden
            >
              ↓
            </motion.span>
            ابدأ من المفهوم
            <span className="inline-block w-10 h-px bg-bone/40 group-hover:bg-strike group-hover:w-16 transition-all duration-500" />
          </motion.a>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6, delay: 1.2 }}
            className="flex items-center gap-3 text-bone/60"
          >
            <img
              src="/assets/brand/strike-media-logo.png"
              alt="Strike Media"
              className="h-7 md:h-9 w-auto opacity-90"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
