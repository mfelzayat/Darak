import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      dir="rtl"
      className="relative min-h-[100svh] w-full overflow-hidden bg-ink-950 vignette grain"
    >
      <div className="absolute inset-0 hero-glow" />
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: "url(/assets/storyboard/page-01.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(100%) contrast(1.1) brightness(0.5)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/40 via-ink-950/40 to-ink-950" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 pt-16 md:pt-20 pb-12 min-h-[100svh] flex flex-col">
        {/* Client × Project logos lockup */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          className="flex items-center justify-center md:justify-start gap-6 md:gap-10 mb-8 md:mb-12 flex-wrap"
        >
          <img
            src="/assets/brand/darak-logo.png"
            alt="DARAK Group"
            className="h-12 md:h-16 w-auto opacity-95"
          />
          <span className="text-bone/35 text-3xl md:text-4xl font-extralight">×</span>
          <img
            src="/assets/brand/marina-eye-logo.png"
            alt="Marina Eye Residence"
            className="h-14 md:h-20 w-auto bg-white/95 rounded-lg px-3 py-1"
          />
        </motion.div>

        {/* Top eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.15, ease: "easeOut" }}
          className="flex items-center gap-3 text-[12px] tracking-widest text-bone/60"
        >
          <span className="inline-block w-8 h-px bg-strike" />
          <span>تصور دعائي · الـ <bdi>Draft</bdi> الأول</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: "easeOut" }}
          className="mt-6 md:mt-8 text-[10vw] md:text-[6.2vw] leading-[1.05] font-black tracking-tight"
        >
          مارينا <span className="text-strike">آاي</span> ريزيدينس
          <br />
          <span className="text-bone/55 font-light">
            × <bdi>DARAK</bdi>
          </span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.6 }}
          className="mt-8 max-w-2xl text-bone/75 text-lg md:text-2xl leading-relaxed"
        >
          ثمانية مشاهد. سبع شخصيات. تاجلاين واحد ينزل أقوى من اللي قبله.
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
