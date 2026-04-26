import React from "react";

// Wraps each contiguous run of Latin/digit text inside Arabic text with <bdi>
// so brand names ("GETOUR T2", "Sky Lounge", "QR code", "Gen Z") render in
// correct LTR order without breaking the surrounding Arabic flow.
//
// Usage:  <p>{ar("الـ Sky Lounge جميل")}</p>
//
// Notes:
// - Arabic letters are in U+0600–U+06FF, never overlap with /[A-Za-z0-9]/
// - We greedily capture Latin runs that may contain spaces/punct to keep
//   "Sky Lounge" or "Powered by Strike Media" together as one isolated unit.
// - Pure-Arabic strings cost nothing — the regex finds no matches.
const LATIN_RUN = /[A-Za-z][A-Za-z0-9 .,'/!?\-:&_]*[A-Za-z0-9]|[A-Za-z]/g;

export function ar(text: string): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  LATIN_RUN.lastIndex = 0;
  while ((m = LATIN_RUN.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    out.push(<bdi key={`b${m.index}`}>{m[0]}</bdi>);
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

// Convenience: pad a number to 2 digits in Latin script.
export function pad(n: number): string {
  return n.toString().padStart(2, "0");
}
