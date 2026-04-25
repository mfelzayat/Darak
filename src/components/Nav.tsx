import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Intro" },
  { id: "concept", label: "Concept" },
  { id: "cast", label: "Cast" },
  { id: "storyboard", label: "Storyboard" },
  { id: "tagline", label: "Tagline" },
  { id: "production", label: "Production" },
];

export default function Nav() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink-950/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
        <a
          href="#hero"
          className="flex items-center gap-2 text-bone/90 hover:text-bone transition"
        >
          <span className="w-2 h-2 rounded-full bg-strike animate-glow" />
          <span className="text-[11px] tracking-widest2 uppercase font-medium">
            Darak × Strike
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-7 text-[11px] tracking-widest2 uppercase">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`transition ${
                  active === s.id
                    ? "text-bone"
                    : "text-bone/40 hover:text-bone/80"
                }`}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#storyboard"
          className="text-[11px] tracking-widest2 uppercase border border-white/15 hover:border-strike hover:text-strike transition rounded-full px-3 py-1.5 text-bone/80"
        >
          View boards
        </a>
      </div>
    </nav>
  );
}
