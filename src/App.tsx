import { AnimatePresence, motion } from "framer-motion";

import Hero from "./components/Hero";
import Concept from "./components/Concept";
import CastGrid from "./components/CastGrid";
import StoryboardSection from "./components/Storyboard";
import TaglineReveal from "./components/TaglineReveal";
import Production from "./components/Production";

import Option2Hero from "./components/Option2Hero";
import Option2Concept from "./components/Option2Concept";
import Option2CastGrid from "./components/Option2CastGrid";
import Option2StoryboardSection from "./components/Option2Storyboard";
import Option2TaglineReveal from "./components/Option2TaglineReveal";

import OptionToggle from "./components/OptionToggle";
import { OptionProvider, useOption } from "./context/OptionContext";

function OptionView() {
  const { option } = useOption();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={option}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        {option === 1 ? (
          <>
            <Hero />
            <Concept />
            <CastGrid />
            <StoryboardSection />
            <TaglineReveal />
          </>
        ) : (
          <>
            <Option2Hero />
            <Option2Concept />
            <Option2CastGrid />
            <Option2StoryboardSection />
            <Option2TaglineReveal />
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <OptionProvider>
      <main
        dir="rtl"
        className="bg-ink-950 text-bone min-h-screen overflow-x-hidden font-ar"
      >
        <OptionToggle />
        <OptionView />
        <Production />
      </main>
    </OptionProvider>
  );
}
