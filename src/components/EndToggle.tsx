import { motion } from "framer-motion";
import { useOption, type OptionId } from "../context/OptionContext";

const SUBTITLES: Record<OptionId, string> = {
  1: "كوميديا · العواجيز",
  2: "كشف الطبيب",
};

/**
 * End-of-option toggle. Sits at the very bottom of each option's storyline.
 * Switches the option AND auto-scrolls back to top so the viewer immediately
 * starts the alternate treatment from its hero.
 */
export default function EndToggle() {
  const { option, setOption } = useOption();
  const otherOption: OptionId = option === 1 ? 2 : 1;

  const switchAndJumpTop = () => {
    setOption(otherOption);
    // Wait for the cross-fade to start before scrolling so the user sees
    // the new option from frame 0.
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  };

  return (
    <section
      dir="rtl"
      className="relative bg-ink-950 border-t border-white/10 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.18]"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(212,33,40,0.30), transparent 55%)",
        }}
      />
      <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-12 py-24 md:py-36 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center justify-center gap-3 text-[12px] tracking-widest text-strike mb-6"
        >
          <span className="inline-block w-10 h-px bg-strike" />
          <span>وصلت لنهاية <bdi>Option {option}</bdi></span>
          <span className="inline-block w-10 h-px bg-strike" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-black leading-[1.2] tracking-tight"
        >
          شوف التريتمنت التاني
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.0, delay: 0.25 }}
          className="mt-5 text-bone/70 text-base md:text-lg leading-relaxed max-w-xl mx-auto"
        >
          نفس المشروع، نفس الـ <bdi>tagline</bdi>، روح مختلفة. اضغط للتبديل وتبدأ من البداية.
        </motion.p>

        <motion.button
          type="button"
          onClick={switchAndJumpTop}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="mt-12 group inline-flex items-center gap-4 rounded-full border border-strike/40 bg-strike/10 hover:bg-strike hover:border-strike px-7 md:px-10 py-4 md:py-5 transition-colors duration-500"
        >
          <span className="text-[11px] tracking-widest text-strike group-hover:text-white/90 uppercase">
            <bdi>Switch to</bdi>
          </span>
          <span className="text-xl md:text-2xl font-bold text-white">
            <bdi>Option {otherOption}</bdi>
          </span>
          <span className="text-[12px] text-bone/55 group-hover:text-white/85 hidden md:inline">
            · {SUBTITLES[otherOption]}
          </span>
          <motion.span
            animate={{ x: [0, -8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="text-strike group-hover:text-white text-2xl"
            aria-hidden
          >
            ←
          </motion.span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.0, delay: 0.7 }}
          className="mt-10 text-[11px] tracking-widest text-bone/40 uppercase"
        >
          <bdi>Auto-scrolls to top</bdi>
        </motion.div>
      </div>
    </section>
  );
}
