"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IconMenu, IconClose } from "@/components/ui/Icons";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Education", href: "/#education" },
  { label: "Projects", href: "/#projects" },
  { label: "Research", href: "/#research" },
  { label: "Contact", href: "/#contact" },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F7F3EE]/90 backdrop-blur-md border-b border-[#E8E2D9] transition-colors">
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-base sm:text-lg font-bold tracking-tight text-[#25231F] hover:text-[#B58A62] transition"
        >
          <span className="w-8 h-8 rounded-lg bg-[#25231F] text-[#F7F3EE] flex items-center justify-center font-serif text-sm group-hover:bg-[#B58A62] transition">
            F
          </span>
          <span>
            Fouzia N.<span className="text-[#B58A62]"> Chowdhury</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-semibold text-[#6B665E] uppercase tracking-wider">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-[#25231F] hover:underline decoration-[#B58A62] underline-offset-8 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center text-xs font-semibold px-4 py-2.5 rounded-xl bg-[#25231F] text-[#F7F3EE] hover:bg-[#B58A62] transition shadow-xs"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#25231F] hover:bg-black/5 transition"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <IconClose className="w-6 h-6" /> : <IconMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E8E2D9] bg-[#F7F3EE] px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-[#25231F] hover:text-[#B58A62] py-1 transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-4 border-t border-[#E8E2D9]">
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center text-xs font-semibold px-5 py-3 rounded-xl bg-[#25231F] text-[#F7F3EE] hover:bg-[#B58A62] transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
