import { motion } from "framer-motion";
import { useOption, type OptionId } from "../context/OptionContext";

const OPTIONS: { id: OptionId; label: string; sub: string }[] = [
  { id: 1, label: "Option 1", sub: "كوميديا · العواجيز" },
  { id: 2, label: "Option 2", sub: "كشف الطبيب" },
];

export default function OptionToggle() {
  const { option, setOption } = useOption();

  return (
    <div
      dir="rtl"
      className="sticky top-0 z-50 w-full bg-ink-950/85 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-[1600px] mx-auto px-4 md:px-12 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-[11px] tracking-widest text-bone/50">
          <span className="hidden md:inline">
            مارينا آي ريزيدنس × <bdi>DARAK</bdi>
          </span>
          <span className="md:hidden">
            <bdi>DARAK</bdi>
          </span>
          <span className="inline-block w-6 h-px bg-bone/20" />
          <span className="text-bone/65">اختار التريتمنت</span>
        </div>

        <div
          className="relative flex items-center gap-1 p-1 rounded-full bg-ink-900/80 border border-white/10"
          role="tablist"
          aria-label="Treatment options"
        >
          {OPTIONS.map((o) => {
            const active = o.id === option;
            return (
              <button
                key={o.id}
                role="tab"
                aria-selected={active}
                onClick={() => setOption(o.id)}
                className="relative z-10 px-3 md:px-5 py-2 rounded-full text-[12px] md:text-[13px] font-medium tracking-wide transition-colors duration-300"
              >
                {active && (
                  <motion.span
                    layoutId="optionPill"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 32,
                    }}
                    className="absolute inset-0 rounded-full bg-strike shadow-[0_8px_24px_-8px_rgba(212,33,40,0.65)]"
                    aria-hidden
                  />
                )}
                <span
                  className={`relative flex items-baseline gap-2 ${
                    active ? "text-white" : "text-bone/60 hover:text-bone/85"
                  }`}
                >
                  <bdi>{o.label}</bdi>
                  <span
                    className={`hidden md:inline text-[11px] ${
                      active ? "text-white/80" : "text-bone/40"
                    }`}
                  >
                    · {o.sub}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
