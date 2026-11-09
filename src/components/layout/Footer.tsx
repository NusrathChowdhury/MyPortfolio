import React from "react";
import Link from "next/link";
import { IconGithub, IconLinkedin, IconMail } from "@/components/ui/Icons";

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto border-t border-[#E8E2D9] bg-white py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#6B665E]">
        {/* Left: Brand Identity */}
        <div className="space-y-1 text-center md:text-left">
          <p className="font-serif font-bold text-sm text-[#25231F]">
            Fouzia Nusrath Chowdhury
          </p>
          <p className="text-[11px] text-[#6B665E]">
            Junior Full-Stack Web Developer • Sylhet, Bangladesh
          </p>
        </div>

        {/* Center: Quick Navigation */}
        <div className="flex flex-wrap justify-center items-center gap-6 font-medium">
          <Link href="/#about" className="hover:text-[#25231F] transition">
            About
          </Link>
          <Link href="/#skills" className="hover:text-[#25231F] transition">
            Skills
          </Link>
          <Link href="/#education" className="hover:text-[#25231F] transition">
            Education
          </Link>
          <Link href="/#projects" className="hover:text-[#25231F] transition">
            Projects
          </Link>
          <Link href="/#research" className="hover:text-[#25231F] transition">
            Research
          </Link>
          <Link href="/#contact" className="hover:text-[#25231F] transition">
            Contact
          </Link>
        </div>

        {/* Right: Social & Attribution */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/NusrathChowdhury"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#F7F3EE] border border-[#E8E2D9] text-[#25231F] hover:text-[#B58A62] hover:border-[#B58A62] transition"
            aria-label="GitHub Profile"
          >
            <IconGithub className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://www.linkedin.com/in/fouzia-nusrath-chowdhury/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#F7F3EE] border border-[#E8E2D9] text-[#25231F] hover:text-[#B58A62] hover:border-[#B58A62] transition"
            aria-label="LinkedIn Profile"
          >
            <IconLinkedin className="w-3.5 h-3.5" />
          </a>
          <a
            href="mailto:fouzianusrathchowdhury@gmail.com"
            className="p-2 rounded-lg bg-[#F7F3EE] border border-[#E8E2D9] text-[#25231F] hover:text-[#B58A62] hover:border-[#B58A62] transition"
            aria-label="Email"
          >
            <IconMail className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-8 pt-6 border-t border-[#E8E2D9]/70 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#6B665E] gap-3 text-center sm:text-left">
        <p>© {new Date().getFullYear()} Fouzia Nusrath Chowdhury. All rights reserved.</p>
        <p>Built with Next.js, TypeScript &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
};
