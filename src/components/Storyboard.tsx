import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { shots, type Shot } from "../data/shots";

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

/** Render Arabic-Indic digits inside an isolated LTR run for clean alignment. */
function arabicNumeral(n: number) {
  const map = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  return n
    .toString()
    .split("")
    .map((d) => (/[0-9]/.test(d) ? map[+d] : d))
    .join("");
}

function ShotPanel({ shot, index }: { shot: Shot; index: number }) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  // gentle parallax for the image
  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const padded = pad(shot.shotNumber);
  const isFirstOfScene = index === 0 || shots[index - 1].sceneNumber !== shot.sceneNumber;

  return (
    <motion.section
      ref={sectionRef}
      id={`shot-${padded}`}
      dir="ltr"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
      }}
      className="relative panel-snap min-h-[100vh] flex items-center border-t border-strike/15"
    >
      {/* Scene-divider tag (first shot of each scene) */}
      {isFirstOfScene && (
        <div className="absolute top-0 left-0 right-0 px-6 md:px-16 pt-6 flex items-center gap-4 text-[10px] tracking-widest2 uppercase text-strike pointer-events-none">
          <span className="font-mono">Scene {pad(shot.sceneNumber)}</span>
          <div className="flex-1 h-px bg-strike/30" />
          <span dir="rtl" className="font-ar text-bone/60 tracking-normal">
            {shot.sceneNameAr}
          </span>
        </div>
      )}

      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-16 py-20 md:py-24">
        <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-start">
          {/* ───── IMAGE (60-65%) ───── */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.97, y: 30 },
              show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="md:w-[62%] w-full"
          >
            <motion.figure
              style={{ y: imgY }}
              className="relative group rounded-2xl overflow-hidden border border-white/10 bg-ink-800 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]"
            >
              <picture>
                <source srcSet={`/assets/storyboard/page-${padded}.webp`} type="image/webp" />
                <img
                  src={`/assets/storyboard/page-${padded}.webp`}
                  alt={`${shot.sceneNameEn} — shot ${shot.shotNumber}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full max-h-[80vh] object-contain transition-transform duration-[1500ms] ease-out group-hover:scale-[1.02]"
                />
              </picture>
              {/* HUD overlays */}
              <div className="absolute top-3 left-3 px-2.5 py-1 bg-ink-950/75 backdrop-blur-md rounded text-[10px] tracking-widest2 uppercase text-bone/85 font-mono">
                S{pad(shot.sceneNumber)} · SHOT {padded}
              </div>
              <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-ink-950/75 backdrop-blur-md rounded text-[10px] text-bone/55 font-mono">
                page-{padded}
              </div>
            </motion.figure>
          </motion.div>

          {/* ───── TEXT (35-40%, sticky) ───── */}
          <motion.div
            dir="rtl"
            variants={{
              hidden: { opacity: 0, x: -20 },
              show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
            }}
            className="md:w-[38%] w-full md:sticky md:top-24 self-start space-y-6 font-ar"
          >
            {/* Top badge + scene name */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-[11px] tracking-widest2 uppercase">
                <span className="font-mono text-strike">
                  ⁦S{pad(shot.sceneNumber)} · SHOT {padded}⁩
                </span>
                <span className="text-bone/30">·</span>
                <span className="text-bone/55">
                  مشهد {arabicNumeral(shot.sceneNumber)} · لقطة {arabicNumeral(shot.shotNumber)}
                </span>
              </div>

              <h3 className="text-3xl md:text-5xl font-black leading-[1.05] tracking-tight text-bone">
                {shot.sceneNameAr}
              </h3>
              <div className="text-[11px] tracking-widest2 uppercase text-bone/30 font-sans" dir="ltr">
                {shot.sceneNameEn}
              </div>
            </div>

            {/* Camera note */}
            <div className="pt-5 border-t border-white/10">
              <div className="text-[10px] tracking-widest2 uppercase text-strike mb-2 font-sans" dir="ltr">
                Camera
              </div>
              <p className="font-mono text-[13px] text-bone/65 leading-relaxed">
                {shot.cameraNote}
              </p>
            </div>

            {/* Scenario */}
            <div className="pt-5 border-t border-white/10">
              <div className="flex items-center gap-2 text-[12px] tracking-widest2 uppercase text-bone/50 mb-3">
                <span className="text-base leading-none">📝</span>
                <span>السيناريو</span>
              </div>
              <p className="text-bone/90 text-[15px] md:text-base leading-[1.85]">
                {shot.scenario}
              </p>
            </div>

            {/* Dialogue (only if any) */}
            {shot.dialogue.length > 0 && (
              <div className="pt-5 border-t border-white/10">
                <div className="flex items-center gap-2 text-[12px] tracking-widest2 uppercase text-bone/50 mb-3">
                  <span className="text-base leading-none">💬</span>
                  <span>الحوار</span>
                </div>
                <ul className="space-y-3.5">
                  {shot.dialogue.map((d, i) => (
                    <li key={i} className="leading-relaxed">
                      <div className="text-strike font-bold text-[14px] mb-0.5">
                        {d.character}
                        {d.note ? (
                          <span className="text-bone/35 font-normal text-[12px] mr-2">
                            ({d.note})
                          </span>
                        ) : null}
                      </div>
                      <div className="text-bone text-[15px] md:text-base">
                        «{d.line}»
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default function StoryboardSection() {
  return (
    <section
      id="storyboard"
      dir="ltr"
      className="relative bg-gradient-to-b from-ink-900 via-ink-950 to-ink-900"
    >
      {/* Heading */}
      <div className="px-6 md:px-16 pt-28 md:pt-40 pb-10 max-w-screen-2xl mx-auto">
        <div className="text-[11px] tracking-widest2 uppercase text-strike mb-6">
          03 / Storyboard
        </div>
        <h2 className="text-4xl md:text-7xl font-black leading-[0.95] tracking-tight">
          Eight scenes.
          <br />
          <span className="text-bone/45">Thirty-two shots.</span>
        </h2>
        <p className="mt-6 max-w-2xl text-bone/65 text-base md:text-lg leading-relaxed">
          One panel per shot — the full visual language of the spot, with
          camera notes, scenario, and dialogue beside each frame.
        </p>
        <div
          dir="rtl"
          className="mt-3 max-w-2xl font-ar text-bone/55 text-base md:text-lg leading-relaxed"
        >
          لوحة لكل لقطة — لغة الفيلم البصرية كاملة، مع ملاحظات الكاميرا
          والسيناريو والحوار جنب كل كادر.
        </div>
      </div>

      {/* 32 panels */}
      {shots.map((s, i) => (
        <ShotPanel key={s.shotNumber} shot={s} index={i} />
      ))}

      {/* footer divider */}
      <div className="px-6 md:px-16 py-10 max-w-screen-2xl mx-auto flex items-center gap-4 text-[10px] tracking-widest2 uppercase text-bone/30">
        <span className="font-mono">END · 32 / 32</span>
        <div className="flex-1 h-px bg-white/5" />
        <span>Marina I × DARAK</span>
      </div>
    </section>
  );
}
