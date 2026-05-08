import React from "react";

export default function Wallpaper() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">

      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-3xl"></div>
      </div>

      {/* Grid */}
      <div className="grid h-full w-full grid-cols-12 auto-rows-[120px]">
        {Array.from({ length: 120 }).map((_, index) => (
          <div
            key={index}
            className={`
              border border-white/5
              transition-all duration-300
              hover:scale-105 hover:brightness-125
              ${
                index % 2 === 0
                  ? "bg-gradient-to-br from-[#2b2b2b] to-[#1a1a1a]"
                  : "bg-gradient-to-br from-[#353535] to-[#202020]"
              }
            `}
          />
        ))}
      </div>

    </div>
  );
}