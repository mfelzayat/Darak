import { motion } from "framer-motion";
import { useRef } from "react";
import { scenes, type Scene } from "../data";

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

function SceneSlide({ scene, index }: { scene: Scene; index: number }) {
  const railRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = railRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="relative px-6 md:px-12 py-20 md:py-28 border-t border-white/5"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* LEFT — number + title + direction */}
          <div className="md:col-span-4 lg:col-span-3 md:sticky md:top-24">
            <div className="flex items-baseline gap-3">
              <span className="text-[11px] tracking-widest2 uppercase text-bone/40">
                Scene
              </span>
              <span className="text-strike text-7xl md:text-8xl font-black leading-none tracking-tighter">
                {scene.no}
              </span>
            </div>

            <h3 className="mt-6 text-3xl md:text-4xl font-black leading-[1.05] tracking-tight">
              {scene.title}
            </h3>
            <div
              dir="rtl"
              className="font-ar text-bone/55 text-lg mt-1"
            >
              {scene.titleAr}
            </div>

            <div className="mt-5 text-[11px] tracking-widest2 uppercase text-bone/40">
              Location
            </div>
            <div className="text-bone/80 text-sm mt-1">{scene.location}</div>

            <div className="mt-7 pt-6 border-t border-white/10">
              <div className="text-[11px] tracking-widest2 uppercase text-strike mb-3">
                Direction
              </div>
              <p className="text-bone/70 text-sm leading-relaxed">
                {scene.direction}
              </p>
            </div>

            <div className="mt-7 flex items-center gap-2">
              <button
                onClick={() => scrollBy(-1)}
                className="w-10 h-10 rounded-full border border-white/10 hover:border-strike text-bone/60 hover:text-strike transition flex items-center justify-center"
                aria-label="Previous frame"
              >
                ←
              </button>
              <button
                onClick={() => scrollBy(1)}
                className="w-10 h-10 rounded-full border border-white/10 hover:border-strike text-bone/60 hover:text-strike transition flex items-center justify-center"
                aria-label="Next frame"
              >
                →
              </button>
              <div className="ml-3 text-[11px] tracking-widest2 uppercase text-bone/40">
                {scene.pages.length} frames
              </div>
            </div>
          </div>

          {/* RIGHT — frames + beats */}
          <div className="md:col-span-8 lg:col-span-9">
            <div
              ref={railRef}
              className="h-snap no-scrollbar flex gap-4 md:gap-5 overflow-x-auto pb-4 -mx-6 px-6"
            >
              {scene.pages.map((p, idx) => (
                <motion.figure
                  key={p}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className="relative flex-shrink-0 w-[82%] sm:w-[60%] md:w-[58%] lg:w-[48%] aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-ink-800 group"
                >
                  <img
                    src={`/assets/storyboard/page-${pad(p)}.png`}
                    alt={`${scene.title} — frame ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 px-2 py-1 bg-ink-950/70 backdrop-blur-md rounded text-[10px] tracking-widest2 uppercase text-bone/80">
                    {scene.no} · Frame {pad(idx + 1)}
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-ink-950/70 backdrop-blur-md rounded text-[10px] text-bone/60 font-mono">
                    page-{pad(p)}
                  </div>
                </motion.figure>
              ))}
            </div>

            {/* beats */}
            <div className="mt-8 grid md:grid-cols-2 gap-6 md:gap-10">
              <div>
                <div className="text-[11px] tracking-widest2 uppercase text-bone/40 mb-3">
                  Story Beats
                </div>
                <ul className="space-y-3">
                  {scene.beats.map((b, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-bone/85 text-[15px] leading-relaxed"
                    >
                      <span className="text-strike font-mono text-xs mt-1.5">
                        {pad(i + 1)}
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-[11px] tracking-widest2 uppercase text-bone/40 mb-3">
                  Notes (AR)
                </div>
                <ul dir="rtl" className="font-ar space-y-3">
                  {scene.beatsAr.map((b, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-bone/85 text-[15px] leading-relaxed"
                    >
                      <span className="text-strike font-mono text-xs mt-1.5">
                        {pad(i + 1)}
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* divider line w/ scene index */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-6 px-6 md:px-12 py-4 text-[10px] tracking-widest2 uppercase text-bone/30">
        <span>{pad(index + 1)} / {pad(scenes.length)}</span>
        <div className="flex-1 h-px bg-white/5" />
        <span>Marina I × DARAK</span>
      </div>
    </motion.section>
  );
}

export default function StoryboardSection() {
  return (
    <section
      id="storyboard"
      className="relative bg-gradient-to-b from-ink-900 via-ink-950 to-ink-900"
    >
      <div className="px-6 md:px-12 pt-28 md:pt-40 pb-10 max-w-[1600px] mx-auto">
        <div className="text-[11px] tracking-widest2 uppercase text-strike mb-6">
          03 / Storyboard
        </div>
        <h2 className="text-4xl md:text-7xl font-black leading-[0.95] tracking-tight">
          Eight scenes.<br />
          <span className="text-bone/45">Thirty-two frames.</span>
        </h2>
        <p className="mt-6 max-w-2xl text-bone/65 text-base md:text-lg leading-relaxed">
          The full visual language of the spot — directorial intent, camera
          notes, and the comedy beats that anchor every cut.
        </p>
      </div>

      {scenes.map((s, i) => (
        <SceneSlide key={s.no} scene={s} index={i} />
      ))}
    </section>
  );
}
