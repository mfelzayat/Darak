import { motion } from "framer-motion";
import { option2Shots, type Option2Scene } from "../data/option2";
import { ar, pad } from "../lib/bidi";

/* ───────────────────── Section header ───────────────────── */

function StoryboardHeader() {
  return (
    <div
      dir="rtl"
      className="px-6 md:px-12 pt-24 md:pt-36 pb-12 max-w-[1600px] mx-auto"
    >
      <div className="flex items-center gap-3 text-[12px] tracking-widest text-strike mb-6">
        <span className="inline-block w-10 h-px bg-strike" />
        <span>السيناريو المصور</span>
      </div>
      <h2 className="text-4xl md:text-7xl font-black leading-[1.1] tracking-tight">
        اثني عشر كادر.
        <br />
        <span className="text-bone/45">من العيادة لقلب مارينا ١.</span>
      </h2>
      <p className="mt-6 max-w-2xl text-bone/65 text-base md:text-lg leading-relaxed">
        كل لقطة جنب وصفها — نية الإخراج، الديالوج، والكاميرا — كادر بكادر.
      </p>
    </div>
  );
}

/* ───────────────────── Dialogue line ───────────────────── */

function DialogueLine({
  character,
  line,
  note,
}: {
  character: string;
  line: string;
  note?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      dir="rtl"
      className="relative pr-4 border-r-2 border-strike/70"
    >
      <div className="flex items-baseline gap-2 mb-1">
        <span className="text-strike font-bold text-[13px] md:text-[14px] tracking-wide">
          {character}
        </span>
        {note && <span className="text-bone/40 text-[11px]">({note})</span>}
      </div>
      <div className="text-bone/95 text-[16px] md:text-[18px] leading-[1.85]">
        «{line}»
      </div>
    </motion.div>
  );
}

/* ───────────────────── Shot row ───────────────────── */

function ShotRow({
  shot,
  globalIndex,
}: {
  shot: Option2Scene;
  globalIndex: number;
}) {
  const flipped = globalIndex % 2 === 1;

  return (
    <motion.section
      id={`opt2-shot-${pad(shot.shotNumber)}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative px-4 md:px-12 py-10 md:py-16"
    >
      <div
        dir="ltr"
        className={`max-w-[1500px] mx-auto flex flex-col gap-6 md:gap-12 ${
          flipped ? "md:flex-row-reverse" : "md:flex-row"
        } md:items-stretch`}
      >
        {/* IMAGE */}
        <motion.figure
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="relative md:flex-1 md:basis-1/2 group"
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl border-2 border-strike/40 bg-ink-900 shadow-[0_30px_80px_-30px_rgba(212,33,40,0.35)]">
            <img
              src={`/assets/option2/${shot.imageFile}`}
              alt={`Option 2 — shot ${shot.shotNumber} — ${shot.title}`}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover bg-ink-950 transition-transform duration-[1500ms] group-hover:scale-[1.02]"
            />
            {/* corner brackets */}
            <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-strike/70 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-strike/70 pointer-events-none" />
            {/* page tag */}
            <div className="absolute top-3 right-3 px-2 py-1 bg-ink-950/80 backdrop-blur-md rounded text-[10px] tracking-widest text-bone/80 font-mono">
              opt2-{pad(shot.shotNumber)}
            </div>
          </div>
        </motion.figure>

        {/* TEXT PANEL */}
        <div
          dir="rtl"
          className="relative md:flex-1 md:basis-1/2 flex flex-col justify-center"
        >
          <div className="flex items-baseline gap-3 mb-3">
            <span className="text-strike font-black text-3xl md:text-4xl tracking-tighter">
              {pad(shot.shotNumber)}
            </span>
            <span className="text-[12px] tracking-widest text-bone/40">
              لقطة · {ar(shot.setting)}
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight mb-4">
            {ar(shot.title)}
          </h3>

          {/* Scenario */}
          <p className="text-bone/90 text-[18px] md:text-[20px] leading-[1.95] mb-5">
            {shot.scenario}
          </p>

          {/* Camera note */}
          {shot.cameraNote && (
            <div className="mb-6 flex flex-wrap items-baseline gap-2 text-[13px] md:text-[14px]">
              <span className="text-strike/85 font-medium tracking-wide">
                الكاميرا:
              </span>
              <span className="text-bone/65 leading-relaxed">
                {shot.cameraNote}
              </span>
            </div>
          )}

          {/* Dialogue */}
          {shot.dialogue.length > 0 && (
            <div className="mt-2 space-y-4 rounded-2xl bg-white/[0.03] border border-white/10 p-5 md:p-6">
              <div className="flex items-center gap-2 text-[11px] tracking-widest text-strike/85 mb-1">
                <span className="inline-block w-5 h-px bg-strike" />
                <span>الديالوج</span>
              </div>
              {shot.dialogue.map((d, i) => (
                <DialogueLine
                  key={i}
                  character={d.character}
                  line={d.line}
                  note={d.note}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
}

/* ───────────────────── Section root ───────────────────── */

export default function Option2StoryboardSection() {
  return (
    <section
      id="storyboard"
      dir="rtl"
      className="relative bg-gradient-to-b from-ink-900 via-ink-950 to-ink-900"
    >
      <StoryboardHeader />

      <div className="bg-gradient-to-b from-ink-950 via-ink-900/40 to-ink-950">
        {option2Shots.map((shot, i) => (
          <ShotRow key={shot.shotNumber} shot={shot} globalIndex={i} />
        ))}
      </div>

      {/* footer divider */}
      <div
        dir="rtl"
        className="px-6 md:px-12 py-10 max-w-[1600px] mx-auto flex items-center gap-4 text-[10px] tracking-widest text-bone/30"
      >
        <span className="font-mono">
          <bdi>END · 12 / 12</bdi>
        </span>
        <div className="flex-1 h-px bg-white/5" />
        <span>
          مارينا آي ريزيدنس × <bdi>DARAK</bdi> · <bdi>Option&nbsp;2</bdi>
        </span>
      </div>
    </section>
  );
}
