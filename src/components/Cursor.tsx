"use client";

import { useEffect, useRef } from "react";

export function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only activate on pointer-capable, hover-capable devices
    if (window.matchMedia("(hover: none)").matches) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX  = 0;
    let ringY  = 0;
    let rafId: number;
    let expanded = false;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%))`;
      }
    };

    const animate = () => {
      // Ring lerps toward mouse at 12% per frame
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(calc(${ringX}px - 50%), calc(${ringY}px - 50%))`;
      }
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    // Expand ring when hovering interactive elements
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, input, textarea, select, [data-cursor='expand']")) {
        if (!expanded) {
          expanded = true;
          ringRef.current?.classList.add("!w-14", "!h-14", "!border-[#0ea5a0]", "!bg-[#0ea5a0]/10");
          dotRef.current?.classList.add("!opacity-0");
        }
      } else {
        if (expanded) {
          expanded = false;
          ringRef.current?.classList.remove("!w-14", "!h-14", "!border-[#0ea5a0]", "!bg-[#0ea5a0]/10");
          dotRef.current?.classList.remove("!opacity-0");
        }
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <>
      {/* Ring — lerps, expands on hover */}
      <div
        ref={ringRef}
        className="
          fixed top-0 left-0 z-[9998]
          w-8 h-8 rounded-full
          border border-white/30
          bg-white/[0.03]
          pointer-events-none
          transition-[width,height,border-color,background-color] duration-200
          hidden md:block
        "
        style={{ willChange: "transform" }}
      />
      {/* Dot — snaps instantly */}
      <div
        ref={dotRef}
        className="
          fixed top-0 left-0 z-[9999]
          w-[6px] h-[6px] rounded-full
          bg-white
          pointer-events-none
          transition-opacity duration-150
          hidden md:block
        "
        style={{ willChange: "transform" }}
      />
    </>
  );
}
