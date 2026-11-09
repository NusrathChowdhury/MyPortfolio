import React from "react";
import Link from "next/link";
import {
  IconArrowRight,
  IconExternalLink,
  IconGithub,
  IconLinkedin,
  IconMapPin,
} from "@/components/ui/Icons";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-24 md:pt-28 md:pb-32 px-6 max-w-5xl mx-auto">
      <div className="space-y-8 text-left">
        {/* Location & Title Meta */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8E2D9] text-[#6B665E] text-xs font-medium shadow-2xs">
          <IconMapPin className="w-3.5 h-3.5 text-[#B58A62]" />
          <span>Sylhet, Bangladesh</span>
          <span className="text-[#E8E2D9]">•</span>
          <span className="text-[#25231F] font-semibold">Junior Full-Stack Web Developer</span>
        </div>

        {/* Main Name & Designation Typography */}
        <div className="space-y-4 max-w-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#25231F] tracking-tight leading-[1.12]">
            Fouzia Nusrath <br />
            <span className="text-[#B58A62]">Chowdhury</span>
          </h1>
          <p className="text-xl sm:text-2xl font-medium text-[#25231F]/90 tracking-tight">
            Building responsive, reliable, and user-centric web applications.
          </p>
        </div>

        {/* Concise Introduction */}
        <p className="text-base sm:text-lg text-[#6B665E] max-w-2xl leading-relaxed">
          I am a Junior Full-Stack Web Developer focusing on modern frontend
          engineering with Next.js, React, and TypeScript, backed by robust API
          design, database integration, and search engine optimization awareness.
        </p>

        {/* Action Buttons & Social Links */}
        <div className="pt-2 flex flex-wrap items-center gap-4">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3.5 rounded-xl bg-[#25231F] text-[#F7F3EE] hover:bg-[#B58A62] transition shadow-xs group"
          >
            <span>View Projects</span>
            <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Functional Resume Button linking directly to Google Drive */}
          <a
            href="https://drive.google.com/file/d/1DLE14Xn31Mr0iqsII5Pur9kIDhkgWy_p/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3.5 rounded-xl bg-white text-[#25231F] border border-[#E8E2D9] hover:border-[#B58A62] hover:text-[#B58A62] transition shadow-xs"
          >
            <span>Resume</span>
            <IconExternalLink className="w-4 h-4 text-[#B58A62]" />
          </a>

          {/* Divider */}
          <div className="hidden sm:block w-px h-8 bg-[#E8E2D9] mx-1" />

          {/* Social Links */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://github.com/NusrathChowdhury"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white border border-[#E8E2D9] text-[#25231F] hover:text-[#B58A62] hover:border-[#B58A62] transition shadow-2xs"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <IconGithub className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/fouzia-nusrath-chowdhury/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white border border-[#E8E2D9] text-[#25231F] hover:text-[#B58A62] hover:border-[#B58A62] transition shadow-2xs"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <IconLinkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
