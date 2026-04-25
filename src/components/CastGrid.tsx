import { motion } from "framer-motion";
import { cast } from "../data";

export default function CastGrid() {
  return (
    <section
      id="cast"
      className="relative bg-ink-900 py-28 md:py-40 px-6 md:px-12 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-[1500px] mx-auto">
        <div className="flex items-end justify-between mb-14 md:mb-20">
          <div>
            <div className="text-[11px] tracking-widest2 uppercase text-strike mb-4">
              02 / Cast
            </div>
            <h2 className="text-4xl md:text-6xl font-black leading-[0.95] tracking-tight">
              Seven characters.<br />
              <span className="text-bone/45">One unforgettable rhythm.</span>
            </h2>
          </div>
          <div
            dir="rtl"
            className="font-ar hidden md:block text-bone/55 text-right max-w-xs leading-relaxed"
          >
            عزيز هو القلب. والكرو حواليه ـ كل واحد فيهم
            بيلعب جزء من الكوميديا والإيقاع.
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {cast.map((c, i) => (
            <motion.article
              key={c.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: i * 0.07,
                ease: "easeOut",
              }}
              className={`group relative overflow-hidden rounded-2xl border ${
                c.accent
                  ? "border-strike/40 bg-gradient-to-br from-strike/15 via-ink-800 to-ink-900"
                  : "border-white/10 bg-ink-800/60"
              } p-5 md:p-6 hover:border-strike/60 transition-all duration-500 hover:-translate-y-1`}
            >
              {/* glow */}
              <div
                className={`absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700`}
                style={{
                  background:
                    "radial-gradient(circle at 30% 0%, rgba(212,33,40,0.18), transparent 60%)",
                }}
              />

              <div className="relative flex items-start justify-between mb-6">
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center font-black text-lg tracking-wider ${
                    c.accent
                      ? "bg-strike text-white"
                      : "bg-white/5 text-bone/70 border border-white/10"
                  }`}
                >
                  {c.initials}
                </div>
                <div className="text-right">
                  <div className="text-bone/40 text-[10px] tracking-widest2 uppercase">
                    Age
                  </div>
                  <div className="text-bone/90 font-semibold text-2xl leading-none mt-1">
                    {c.age}
                  </div>
                </div>
              </div>

              <h3 className="relative text-2xl md:text-[1.6rem] font-bold tracking-tight leading-tight">
                {c.name}
              </h3>
              <div
                dir="rtl"
                className="font-ar text-bone/55 text-sm mt-1"
              >
                {c.nameAr}
              </div>

              <div className="relative mt-4 text-[11px] tracking-widest2 uppercase text-strike/85">
                {c.role}
              </div>
              <p className="relative mt-3 text-bone/70 text-sm leading-relaxed">
                {c.blurb}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
