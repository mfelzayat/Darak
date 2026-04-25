import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Concept from "./components/Concept";
import CastGrid from "./components/CastGrid";
import StoryboardSection from "./components/Storyboard";
import TaglineReveal from "./components/TaglineReveal";
import Production from "./components/Production";

export default function App() {
  return (
    <main className="bg-ink-950 text-bone min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <Concept />
      <CastGrid />
      <StoryboardSection />
      <TaglineReveal />
      <Production />
    </main>
  );
}
