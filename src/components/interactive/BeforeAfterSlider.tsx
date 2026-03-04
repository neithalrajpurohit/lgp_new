"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function BeforeAfterSlider({
  before,
  after,
}: {
  before: string;
  after: string;
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x =
      ("touches" in event ? event.touches[0].clientX : event.clientX) -
      rect.left;
    const position = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500px] overflow-hidden cursor-ew-resize select-none"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* After Image (Bottom) */}
      <img
        src={after}
        alt="After"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Before Image (Top) */}
      <div
        className="absolute inset-0 overflow-hidden border-r-2 border-brand-gold"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={before}
          alt="Before"
          className="absolute inset-0 w-[max-content] h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 text-xs uppercase tracking-widest">
          Before
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-brand-gold cursor-ew-resize z-20"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center shadow-lg">
          <svg
            className="w-5 h-5 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 9l4-4 4 4m0 6l-4 4-4-4"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
