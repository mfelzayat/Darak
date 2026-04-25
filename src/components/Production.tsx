import { motion } from "framer-motion";

const deliverables = [
  {
    title: "Pre-production",
    items: [
      "Final shot list & call sheets",
      "Casting lock for all 7 roles",
      "Location scout & permits inside Marina I",
      "Wardrobe + props styling",
    ],
  },
  {
    title: "Production",
    items: [
      "3-day shoot, full cinema package",
      "Drone + slider + steadicam units",
      "Sound recordist + on-set comedy direction",
      "BTS coverage for social",
    ],
  },
  {
    title: "Post-production",
    items: [
      "Edit · 60s hero + 30s · 15s · 6s cutdowns",
      "Color grade — premium cinematic LUT",
      "Original music + Foley + final mix",
      "Master delivery for TV, OOH, social",
    ],
  },
];

export default function Production() {
  return (
    <section
      id="production"
      className="relative bg-ink-900 py-28 md:py-40 px-6 md:px-12 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
      />

      <div className="relative max-w-[1500px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="mb-16"
        >
          <div className="text-[11px] tracking-widest2 uppercase text-strike mb-6">
            05 / Production
          </div>
          <h2 className="text-4xl md:text-6xl font-black leading-[0.95] tracking-tight">
            What Strike delivers.
          </h2>
          <p className="mt-6 max-w-2xl text-bone/65 text-base md:text-lg leading-relaxed">
            Full-stack production from script to master. One team accountable
            for the comedy, the cinematography, and the brand.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {deliverables.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="relative rounded-2xl border border-white/10 bg-ink-800/60 p-7 md:p-8 hover:border-strike/50 transition-colors duration-500"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="text-[10px] tracking-widest2 uppercase text-bone/40">
                  Phase {String(i + 1).padStart(2, "0")}
                </div>
                <div className="w-2 h-2 rounded-full bg-strike" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
                {d.title}
              </h3>
              <ul className="space-y-3">
                {d.items.map((it) => (
                  <li
                    key={it}
                    className="flex gap-3 text-bone/75 text-[15px] leading-relaxed"
                  >
                    <span className="text-strike mt-2 inline-block w-1.5 h-1.5 rounded-full bg-strike flex-shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.0, delay: 0.2 }}
          className="mt-24 md:mt-32 pt-16 border-t border-white/10 grid md:grid-cols-12 gap-10 items-center"
        >
          <div className="md:col-span-7">
            <div className="text-[11px] tracking-widest2 uppercase text-strike mb-4">
              Powered by
            </div>
            <div className="flex items-center gap-5">
              <img
                src="/assets/brand/strike-media-logo.png"
                alt="Strike Media"
                className="h-14 md:h-16 w-auto"
              />
              <div>
                <div className="text-bone text-2xl md:text-3xl font-bold tracking-tight">
                  Strike Media
                </div>
                <div className="text-bone/50 text-sm">
                  Cinematic brand storytelling.
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 text-bone/55 text-sm leading-relaxed">
            <p>
              Marina I Residence — DARAK · TVC concept presented by Strike
              Media. All visuals, copy, and direction © Strike Media{" "}
              {new Date().getFullYear()}.
            </p>
            <a
              href="#hero"
              className="inline-flex items-center gap-2 mt-5 text-bone/75 hover:text-strike transition text-[11px] tracking-widest2 uppercase"
            >
              <span className="w-6 h-px bg-strike" /> Back to top
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
