import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full overflow-hidden bg-ink-950 vignette grain"
    >
      <div className="absolute inset-0 hero-glow" />
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: "url(/assets/storyboard/page-01.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(100%) contrast(1.1) brightness(0.55)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/40 via-ink-950/40 to-ink-950" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-12 min-h-[100svh] flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          className="flex items-center gap-3 text-[11px] tracking-widest2 uppercase text-bone/60"
        >
          <span className="inline-block w-8 h-px bg-strike" />
          TVC Concept · Draft 01
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.15, ease: "easeOut" }}
          className="mt-6 text-[14vw] md:text-[7.5vw] leading-[0.92] font-black tracking-tight"
          style={{ fontFeatureSettings: "'ss01'" }}
        >
          Marina <span className="text-strike">I</span> Residence
          <br />
          <span className="text-bone/55 font-light italic">× DARAK</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.6 }}
          className="mt-8 max-w-2xl text-bone/70 text-base md:text-lg leading-relaxed"
        >
          A comedic narrative TVC built around premium real estate. Eight
          scenes. Seven characters. One tagline that lands harder than the
          punchline before it.
        </motion.p>

        <div className="mt-auto pt-16 flex items-end justify-between">
          <motion.a
            href="#concept"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 1.0 }}
            className="group flex items-center gap-3 text-[11px] tracking-widest2 uppercase text-bone/70 hover:text-bone"
          >
            <span className="inline-block w-10 h-px bg-bone/40 group-hover:bg-strike group-hover:w-16 transition-all duration-500" />
            Begin
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
              className="h-7 md:h-8 w-auto opacity-90"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
