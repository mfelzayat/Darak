import { motion } from "framer-motion";
import { option2Concept } from "../data/option2";
import { ar } from "../lib/bidi";

export default function Option2Concept() {
  return (
    <section
      id="concept"
      dir="rtl"
      className="relative bg-ink-950 overflow-hidden"
    >
      {/* dim cinematic backdrop = the clinic opener */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: "url(/assets/option2/opt2-01.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(100%) contrast(1.1) brightness(0.45)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/90 to-ink-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(212,33,40,0.08),transparent_55%)]" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 py-28 md:py-44">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 text-[12px] tracking-widest text-strike">
            <span className="inline-block w-10 h-px bg-strike" />
            <span>المفهوم</span>
          </div>

          <h2 className="mt-6 text-4xl md:text-6xl font-black leading-[1.15] tracking-tight max-w-4xl">
            مش جلسة. روشتة عنوان.
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, delay: 0.2 }}
            className="mt-12 max-w-3xl text-bone/85 text-xl md:text-[26px] leading-[1.95] font-light"
          >
            {ar(option2Concept)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.0, delay: 0.5 }}
            className="mt-12 flex flex-wrap gap-2 text-[12px]"
          >
            {[
              "درامي خفيف",
              "بريميوم",
              "سينمائي",
              "إنساني",
              "نمط حياة",
            ].map((t) => (
              <span
                key={t}
                className="px-4 py-2 rounded-full border border-white/10 text-bone/65"
              >
                {t}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
