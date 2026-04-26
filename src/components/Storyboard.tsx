import { motion } from "framer-motion";
import { shots, type Shot } from "../data/shots";
import { scenes as sceneMeta } from "../data";
import { ar, pad } from "../lib/bidi";

/** Map sceneNumber -> rich metadata (type / summary) from data/index.ts. */
const sceneMetaByNumber: Record<number, (typeof sceneMeta)[number]> = {};
for (const s of sceneMeta) sceneMetaByNumber[s.id] = s;

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
        ثمانية مشاهد.
        <br />
        <span className="text-bone/45">ثمانية وعشرون كادر.</span>
      </h2>
      <p className="mt-6 max-w-2xl text-bone/65 text-base md:text-lg leading-relaxed">
        كل لقطة جنب وصفها — نية الإخراج، الديالوج، والكوميديا — لقطة بلقطة.
      </p>
    </div>
  );
}

/* ───────────────────── Scene cover slide ───────────────────── */

function SceneCover({ sceneNumber }: { sceneNumber: number }) {
  const meta = sceneMetaByNumber[sceneNumber];
  if (!meta) return null;
  const sceneIndex = sceneNumber; // 1-based for display
  const totalScenes = sceneMeta.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      dir="rtl"
      className="relative px-6 md:px-12 py-20 md:py-32 border-t border-white/5 bg-gradient-to-b from-ink-950 via-ink-900/40 to-ink-950"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-14">
          {/* Big scene number */}
          <div className="flex items-baseline gap-4">
            <span className="text-[12px] tracking-widest text-bone/40">
              مشهد
            </span>
            <span className="text-strike text-[7rem] md:text-[11rem] font-black leading-[0.85] tracking-tighter">
              {pad(meta.id)}
            </span>
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1.5 rounded-full border border-strike/40 text-strike text-[12px] font-medium">
                {meta.type}
              </span>
              <span className="px-3 py-1.5 rounded-full border border-white/10 text-bone/60 text-[12px]">
                {ar(`${meta.shots.length} لقطات`)}
              </span>
            </div>
            <h3 className="text-3xl md:text-5xl font-black leading-[1.2] tracking-tight">
              {ar(meta.title)}
            </h3>
            <p className="mt-4 text-bone/75 text-lg md:text-xl leading-relaxed max-w-3xl">
              {ar(meta.summary)}
            </p>
          </div>
        </div>
      </div>

      {/* index strip */}
      <div className="absolute bottom-0 inset-x-0 flex items-center gap-6 px-6 md:px-12 py-4 text-[10px] tracking-widest text-bone/30">
        <span>
          {pad(sceneIndex)} / {pad(totalScenes)}
        </span>
        <div className="flex-1 h-px bg-white/5" />
        <span>
          مارينا آاي ريزيدينس × <bdi>DARAK</bdi>
        </span>
      </div>
    </motion.div>
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
        {note && (
          <span className="text-bone/40 text-[11px]">({note})</span>
        )}
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
  shotIndexInScene,
  globalIndex,
}: {
  shot: Shot;
  shotIndexInScene: number;
  globalIndex: number;
}) {
  const flipped = globalIndex % 2 === 1; // alternate

  return (
    <motion.section
      id={`shot-${pad(shot.shotNumber)}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative px-4 md:px-12 py-10 md:py-16"
    >
      <div
        // ltr wrapper so flex-row-reverse stays predictable.
        // Each child sets its own dir.
        dir="ltr"
        className={`max-w-[1500px] mx-auto flex flex-col gap-6 md:gap-12 ${
          flipped ? "md:flex-row-reverse" : "md:flex-row"
        } md:items-stretch`}
      >
        {/* IMAGE — 50% */}
        <motion.figure
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="relative md:flex-1 md:basis-1/2 group"
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl border-2 border-strike/40 bg-ink-900 shadow-[0_30px_80px_-30px_rgba(212,33,40,0.35)]">
            <picture>
              <source
                srcSet={`/assets/storyboard/page-${pad(shot.shotNumber)}.webp`}
                type="image/webp"
              />
              <img
                src={`/assets/storyboard/page-${pad(shot.shotNumber)}.webp`}
                alt={`Scene ${shot.sceneNumber} — shot ${shot.shotNumber}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain bg-ink-950 transition-transform duration-[1500ms] group-hover:scale-[1.02]"
              />
            </picture>
            {/* corner brackets */}
            <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-strike/70 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-strike/70 pointer-events-none" />
            {/* page tag */}
            <div className="absolute top-3 right-3 px-2 py-1 bg-ink-950/80 backdrop-blur-md rounded text-[10px] tracking-widest text-bone/80 font-mono">
              page-{pad(shot.shotNumber)}
            </div>
          </div>
        </motion.figure>

        {/* TEXT PANEL — 50%, always RTL */}
        <div
          dir="rtl"
          className="relative md:flex-1 md:basis-1/2 flex flex-col justify-center"
        >
          <div className="flex items-baseline gap-3 mb-5">
            <span className="text-strike font-black text-3xl md:text-4xl tracking-tighter">
              {pad(shotIndexInScene + 1)}
            </span>
            <span className="text-[12px] tracking-widest text-bone/40">
              لقطة · صفحة {pad(shot.shotNumber)}
            </span>
          </div>

          {/* Scenario / description */}
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

          {/* Sub-images strip — used when one panel covers multiple frames
              (e.g. page 5 carries pages 6-9 as Aziz's parking attempts). */}
          {shot.subImages && shot.subImages.length > 0 && (
            <div className="mt-6">
              <div className="flex items-center gap-2 text-[11px] tracking-widest text-strike/85 mb-3">
                <span className="inline-block w-5 h-px bg-strike" />
                <span>لقطات إضافية ({shot.subImages.length})</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
                {shot.subImages.map((name) => (
                  <a
                    key={name}
                    href={`/assets/storyboard/${name}.webp`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/sub block relative aspect-[16/10] overflow-hidden rounded-lg border border-strike/30 bg-ink-900 shadow-[0_15px_40px_-20px_rgba(212,33,40,0.35)] transition-transform duration-500 hover:scale-105 hover:border-strike/70 focus:outline-none focus:ring-2 focus:ring-strike/60"
                  >
                    <img
                      src={`/assets/storyboard/${name}.webp`}
                      alt={`Sub-frame ${name}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain bg-ink-950 transition-transform duration-700 group-hover/sub:scale-[1.04]"
                    />
                    <div
                      dir="ltr"
                      className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-ink-950/80 backdrop-blur-md rounded text-[9px] tracking-widest text-bone/75 font-mono"
                    >
                      {name}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
}

/* ───────────────────── Section root ───────────────────── */

export default function StoryboardSection() {
  // Group shots by scene for cover-then-shots rendering.
  const grouped: { sceneNumber: number; shots: Shot[] }[] = [];
  let last = -1;
  for (const s of shots) {
    if (s.sceneNumber !== last) {
      grouped.push({ sceneNumber: s.sceneNumber, shots: [] });
      last = s.sceneNumber;
    }
    grouped[grouped.length - 1].shots.push(s);
  }

  // Continuous global index so alternation doesn't reset between scenes.
  let globalIndex = 0;

  return (
    <section
      id="storyboard"
      dir="rtl"
      className="relative bg-gradient-to-b from-ink-900 via-ink-950 to-ink-900"
    >
      <StoryboardHeader />

      {grouped.map((g) => (
        <div key={g.sceneNumber}>
          <SceneCover sceneNumber={g.sceneNumber} />
          <div className="bg-gradient-to-b from-ink-950 via-ink-900/40 to-ink-950">
            {g.shots.map((shot, i) => {
              const row = (
                <ShotRow
                  key={shot.shotNumber}
                  shot={shot}
                  shotIndexInScene={i}
                  globalIndex={globalIndex}
                />
              );
              globalIndex++;
              return row;
            })}
          </div>
        </div>
      ))}

      {/* footer divider */}
      <div
        dir="rtl"
        className="px-6 md:px-12 py-10 max-w-[1600px] mx-auto flex items-center gap-4 text-[10px] tracking-widest text-bone/30"
      >
        <span className="font-mono">
          <bdi>END · {pad(shots.length)} / {pad(shots.length)}</bdi>
        </span>
        <div className="flex-1 h-px bg-white/5" />
        <span>
          مارينا آاي ريزيدينس × <bdi>DARAK</bdi>
        </span>
      </div>
    </section>
  );
}
