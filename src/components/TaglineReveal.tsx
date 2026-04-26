import { motion } from "framer-motion";
import { tagline } from "../data";
import { ar } from "../lib/bidi";

const words = tagline.split(/\s+/).filter(Boolean);

export default function TaglineReveal() {
  return (
    <section
      id="tagline"
      dir="rtl"
      className="relative min-h-[100svh] flex items-center justify-center bg-ink-950 py-32 px-6 md:px-12 overflow-hidden vignette grain"
    >
      <div className="absolute inset-0 hero-glow opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,33,40,0.18),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-3 text-[12px] tracking-widest text-strike mb-12"
        >
          <span className="inline-block w-10 h-px bg-strike" />
          <span>التاجلاين</span>
          <span className="inline-block w-10 h-px bg-strike" />
        </motion.div>

        <div className="text-[7vw] md:text-[5vw] lg:text-[4.4vw] leading-[1.45] font-bold tracking-tight">
          {words.map((w, i) => {
            const isAccent =
              w.includes("ريزيدنس") || w.includes("مارينا") || w.includes("آي");
            return (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.8,
                  delay: 0.25 + i * 0.16,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`inline-block mx-1 md:mx-2 ${
                  isAccent ? "text-strike" : "text-bone"
                }`}
              >
                {ar(w)}
              </motion.span>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.0, delay: words.length * 0.16 + 0.6 }}
          className="mt-16 inline-flex items-center gap-3 text-[11px] tracking-widest text-bone/40"
        >
          <span className="w-8 h-px bg-strike" />
          <bdi>Marina I Residence</bdi>
          <span className="w-8 h-px bg-strike" />
        </motion.div>
      </div>
    </section>
  );
}
