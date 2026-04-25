import { motion } from "framer-motion";

export default function Concept() {
  return (
    <section
      id="concept"
      className="relative bg-ink-950 py-28 md:py-40 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto grid md:grid-cols-12 gap-10 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="md:col-span-6"
        >
          <div className="text-[11px] tracking-widest2 uppercase text-strike mb-6">
            01 / The Concept
          </div>
          <h2 className="text-4xl md:text-6xl font-black leading-[0.95] tracking-tight">
            Old soul.<br />
            <span className="text-bone/45">New energy.</span>
          </h2>

          <div
            dir="rtl"
            className="font-ar mt-10 text-[1.35rem] md:text-2xl leading-[1.85] text-bone/85"
          >
            <p>
              عزيز، ⁦60⁩ سنة، عايش بعقلية الـ⁦Gen Z⁩. عنده شاليه
              في ⁦Marina I Residence⁩، ودايماً جامع زيجاوزه ـ
              النخبة الكبار ـ يحاولوا يلحقوا بإيقاعه. كل مشهد كوميدي،
              كل لقطة بريميوم، وكل تفصيلة بتقول إن الحياة لو راحت
              ـ مش بترجع.
            </p>
            <p className="mt-6 text-bone/55 text-lg">
              تنفيذ سينمائي يحول العقار لتجربة ـ مش إعلان.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-2 text-[11px] tracking-widest2 uppercase">
            {["Comedy", "Premium", "Cinematic", "Narrative", "Lifestyle"].map(
              (t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-full border border-white/10 text-bone/65"
                >
                  {t}
                </span>
              )
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="md:col-span-6 relative"
        >
          <div className="relative aspect-[4/5] md:aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 group">
            <img
              src="/assets/storyboard/page-09.png"
              alt="Marina I Residence — chalet terrace storyboard"
              className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/95 via-ink-950/10 to-ink-950/30" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="text-[10px] tracking-widest2 uppercase text-strike mb-2">
                Storyboard · Scene 03
              </div>
              <div className="text-bone/90 text-sm md:text-base">
                Chalet terrace · Aziz hosts the sunset session
              </div>
            </div>
          </div>

          {/* corner brackets for cinematic frame */}
          <div className="absolute -top-3 -left-3 w-8 h-8 border-l-2 border-t-2 border-strike/70" />
          <div className="absolute -bottom-3 -right-3 w-8 h-8 border-r-2 border-b-2 border-strike/70" />
        </motion.div>
      </div>
    </section>
  );
}
