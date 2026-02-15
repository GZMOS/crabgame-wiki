"use client";

import { useEffect, useState } from "react";

export function MouseGlow() {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/20 dark:bg-pink-500/25 blur-[100px] transition-transform duration-75"
      style={{ left: pos.x, top: pos.y }}
    />
  );
}
