import { motion } from "framer-motion";
import { option2Characters } from "../data/option2";
import { ar } from "../lib/bidi";

const ACCENT_NAME = "عاطف";

export default function Option2CastGrid() {
  return (
    <section
      id="cast"
      dir="rtl"
      className="relative bg-ink-900 py-24 md:py-36 px-6 md:px-12 overflow-hidden"
    >
      {/* faint grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-[1500px] mx-auto">
        <div className="flex items-end justify-between gap-8 mb-14 md:mb-20">
          <div>
            <div className="flex items-center gap-3 text-[12px] tracking-widest text-strike mb-4">
              <span className="inline-block w-10 h-px bg-strike" />
              <span>الشخصيات</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black leading-[1.15] tracking-tight">
              بطل واحد.
              <br />
              <span className="text-bone/45">حكمة طبيب وراه.</span>
            </h2>
          </div>
          <p className="hidden md:block text-bone/55 max-w-xs leading-relaxed">
            عاطف هو القلب — والدكتور بيلعب دور المرايا اللي بتفرجه نفسه من
            بَرَّه.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {option2Characters.map((c, i) => {
            const accent = c.name === ACCENT_NAME;
            return (
              <motion.article
                key={c.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.07, ease: "easeOut" }}
                className={`group relative overflow-hidden rounded-2xl border ${
                  accent
                    ? "border-strike/45 bg-gradient-to-br from-strike/15 via-ink-800 to-ink-900"
                    : "border-white/10 bg-ink-800/60"
                } p-5 md:p-6 hover:border-strike/60 transition-all duration-500 hover:-translate-y-1`}
              >
                <div
                  className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700"
                  style={{
                    background:
                      "radial-gradient(circle at 70% 0%, rgba(212,33,40,0.18), transparent 60%)",
                  }}
                />

                <div className="relative flex items-start justify-between mb-6">
                  <div className="text-right">
                    <div className="text-bone/40 text-[10px] tracking-widest uppercase">
                      السن
                    </div>
                    <div className="text-bone/90 font-black text-3xl leading-none mt-1">
                      {c.age}
                    </div>
                  </div>
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-lg ${
                      accent
                        ? "bg-strike text-white"
                        : "bg-white/5 text-bone/70 border border-white/10"
                    }`}
                  >
                    {c.name.slice(0, 1)}
                  </div>
                </div>

                <h3 className="relative text-2xl md:text-[1.7rem] font-bold tracking-tight leading-tight">
                  {c.name}
                </h3>

                <p className="relative mt-4 text-bone/75 text-[15px] leading-relaxed">
                  {ar(c.role)}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
