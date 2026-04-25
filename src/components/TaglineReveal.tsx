import { motion } from "framer-motion";
import { tagline, taglineEn } from "../data";

const words = tagline.split(" ");

export default function TaglineReveal() {
  return (
    <section
      id="tagline"
      className="relative min-h-[100svh] flex items-center justify-center bg-ink-950 py-32 px-6 md:px-12 overflow-hidden vignette grain"
    >
      <div className="absolute inset-0 hero-glow opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,33,40,0.15),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-[11px] tracking-widest2 uppercase text-strike mb-12"
        >
          04 / The Tagline
        </motion.div>

        <div
          dir="rtl"
          className="font-ar text-[7vw] md:text-[5vw] lg:text-[4.2vw] leading-[1.25] font-bold tracking-tight"
        >
          {words.map((w, i) => {
            const isAccent = w.includes("ريزيدنس") || w.includes("مارينا");
            const isPunct = w === "..";
            return (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.8,
                  delay: 0.25 + i * 0.18,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`inline-block mx-1 md:mx-2 ${
                  isAccent
                    ? "text-strike"
                    : isPunct
                    ? "text-strike"
                    : "text-bone"
                }`}
              >
                {w}
              </motion.span>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, delay: words.length * 0.18 + 0.4 }}
          className="mt-16 mx-auto max-w-2xl text-bone/55 text-base md:text-lg italic leading-relaxed"
        >
          {taglineEn}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.0, delay: words.length * 0.18 + 0.8 }}
          className="mt-12 inline-flex items-center gap-3 text-[10px] tracking-widest2 uppercase text-bone/40"
        >
          <span className="w-8 h-px bg-strike" />
          Marina I Residence
          <span className="w-8 h-px bg-strike" />
        </motion.div>
      </div>
    </section>
  );
}
