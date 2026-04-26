import { motion } from "framer-motion";

export default function Production() {
  return (
    <footer
      id="production"
      dir="rtl"
      className="relative bg-ink-900 px-6 md:px-12 py-20 md:py-28 overflow-hidden"
    >
      {/* faint grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9 }}
        className="relative max-w-[1400px] mx-auto"
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 md:gap-14 pb-10 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 text-[12px] tracking-widest text-strike mb-4">
              <span className="inline-block w-10 h-px bg-strike" />
              <span>تم الإنتاج بواسطة</span>
            </div>
            <div className="flex items-center gap-5">
              <img
                src="/assets/brand/strike-media-logo.png"
                alt="Strike Media"
                className="h-14 md:h-16 w-auto"
              />
              <div>
                <div className="text-bone text-2xl md:text-3xl font-bold tracking-tight">
                  <bdi>Strike Media</bdi>
                </div>
                <div className="text-bone/55 text-sm mt-1">
                  حكاية بريميوم على الشاشة.
                </div>
              </div>
            </div>
          </div>

          <a
            href="#hero"
            className="self-start md:self-end inline-flex items-center gap-3 text-[12px] tracking-widest text-bone/70 hover:text-strike transition group"
          >
            <span>للأعلى</span>
            <span className="text-strike text-lg group-hover:-translate-y-0.5 transition">
              ↑
            </span>
          </a>
        </div>

        <div className="mt-8 flex flex-col md:flex-row md:items-baseline md:justify-between gap-3 text-bone/50 text-[13px] leading-relaxed">
          <p>
            مارينا آاي ريزيدينس — <bdi>DARAK</bdi> · تصور دعائي تليفزيوني — كل
            المرئيات والنصوص والإخراج محفوظة لـ <bdi>Strike Media</bdi> ©{" "}
            <bdi>{new Date().getFullYear()}</bdi>.
          </p>
          <p className="text-bone/35 text-[12px]">
            <bdi>Draft 01</bdi> · مراجعة داخلية
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
