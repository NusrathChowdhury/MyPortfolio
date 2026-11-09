"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ProfilePlaceholderProps {
  imageSrc?: string;
  alt?: string;
  className?: string;
}

export const ProfilePlaceholder: React.FC<ProfilePlaceholderProps> = ({
  imageSrc = "/profile.jpg",
  alt = "Fouzia Nusrath Chowdhury - Junior Full-Stack Web Developer",
  className = "",
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className={`relative w-full max-w-sm sm:max-w-md aspect-square rounded-3xl bg-white border border-[#E8E2D9] shadow-sm overflow-hidden p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-[#B58A62]/40 ${className}`}
    >
      {/* Background Architectural Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#25231F 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      {/* If real photo exists and loads successfully */}
      {!imageError && imageSrc ? (
        <div className="absolute inset-0 z-10 bg-white">
          <Image
            src={imageSrc}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover rounded-3xl transition duration-500 hover:scale-105"
            onError={() => setImageError(true)}
            priority
          />
        </div>
      ) : null}

      {/* Editorial Monogram Visual Card (Displayed when no image is placed) */}
      <div className="relative z-0 h-full flex flex-col justify-between">
        {/* Top Header Row */}
        <div className="flex items-center justify-between border-b border-[#E8E2D9]/70 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B58A62]"></span>
            <span className="text-xs font-semibold tracking-wider uppercase text-[#6B665E]">
              Developer Identity
            </span>
          </div>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#F7F3EE] text-[#6B665E] border border-[#E8E2D9]">
            Sylhet, BD
          </span>
        </div>

        {/* Center Monogram Typography */}
        <div className="my-auto py-8 text-center space-y-2">
          <div className="inline-flex items-center justify-center w-28 h-28 rounded-2xl bg-[#F7F3EE] border border-[#E8E2D9] shadow-inner mb-2 group-hover:border-[#B58A62]/50 transition">
            <span className="text-4xl font-serif font-bold text-[#25231F] tracking-tight">
              F<span className="text-[#B58A62]">N</span>C
            </span>
          </div>
          <h3 className="text-base font-semibold text-[#25231F] tracking-tight">
            Fouzia Nusrath Chowdhury
          </h3>
          <p className="text-xs text-[#6B665E] max-w-xs mx-auto">
            Junior Full-Stack Web Developer
          </p>
        </div>

        {/* Bottom Technical Spec Footer */}
        <div className="pt-4 border-t border-[#E8E2D9]/70 flex items-center justify-between text-xs text-[#6B665E]">
          <span className="font-mono text-[11px]">Next.js • TypeScript</span>
          <span className="font-mono text-[11px]">React • Node.js</span>
        </div>
      </div>
    </div>
  );
};
