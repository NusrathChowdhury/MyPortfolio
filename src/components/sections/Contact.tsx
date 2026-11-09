"use client";

import React, { useState } from "react";
import {
  IconMail,
  IconPhone,
  IconLinkedin,
  IconGithub,
  IconMapPin,
  IconCopy,
  IconCheck,
  IconExternalLink,
} from "@/components/ui/Icons";

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("fouzianusrathchowdhury@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 px-6 max-w-5xl mx-auto border-t border-[#E8E2D9]">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B58A62]">
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#25231F] tracking-tight">
            Contact
          </h2>
          <p className="text-base text-[#6B665E] max-w-xl">
            Feel free to connect regarding junior web development opportunities, collaborations, or technical questions.
          </p>
        </div>

        {/* Contact Information Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Email Card */}
          <div className="bg-white p-6 rounded-3xl border border-[#E8E2D9] shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#F7F3EE] border border-[#E8E2D9] flex items-center justify-center text-[#B58A62]">
                <IconMail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-[#6B665E] uppercase tracking-wider">
                  Email
                </span>
                <p className="text-xs font-bold text-[#25231F] break-all mt-0.5">
                  fouzianusrathchowdhury@gmail.com
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 border-t border-[#E8E2D9]">
              <a
                href="mailto:fouzianusrathchowdhury@gmail.com"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#25231F] text-[#F7F3EE] text-xs font-semibold hover:bg-[#B58A62] transition"
              >
                <span>Email</span>
                <IconExternalLink className="w-3 h-3" />
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2 rounded-xl bg-[#F7F3EE] border border-[#E8E2D9] text-[#25231F] hover:border-[#B58A62] hover:text-[#B58A62] transition"
                aria-label="Copy Email Address"
                title="Copy Email"
              >
                {copiedEmail ? <IconCheck className="w-4 h-4 text-emerald-600" /> : <IconCopy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-white p-6 rounded-3xl border border-[#E8E2D9] shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#F7F3EE] border border-[#E8E2D9] flex items-center justify-center text-[#B58A62]">
                <IconPhone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-[#6B665E] uppercase tracking-wider">
                  Phone
                </span>
                <p className="text-xs font-bold text-[#25231F] mt-0.5">
                  +880 1302712645
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-[#E8E2D9]">
              <a
                href="tel:+8801302712645"
                className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#25231F] text-[#F7F3EE] text-xs font-semibold hover:bg-[#B58A62] transition"
              >
                <span>Call</span>
                <IconExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="bg-white p-6 rounded-3xl border border-[#E8E2D9] shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#F7F3EE] border border-[#E8E2D9] flex items-center justify-center text-[#B58A62]">
                <IconLinkedin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-[#6B665E] uppercase tracking-wider">
                  LinkedIn
                </span>
                <p className="text-xs font-bold text-[#25231F] mt-0.5">
                  Fouzia Nusrath Chowdhury
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-[#E8E2D9]">
              <a
                href="https://www.linkedin.com/in/fouzia-nusrath-chowdhury/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#25231F] text-[#F7F3EE] text-xs font-semibold hover:bg-[#B58A62] transition"
              >
                <span>LinkedIn Profile</span>
                <IconExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="bg-white p-6 rounded-3xl border border-[#E8E2D9] shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#F7F3EE] border border-[#E8E2D9] flex items-center justify-center text-[#B58A62]">
                <IconGithub className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-[#6B665E] uppercase tracking-wider">
                  GitHub
                </span>
                <p className="text-xs font-bold text-[#25231F] mt-0.5">
                  @NusrathChowdhury
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-[#E8E2D9]">
              <a
                href="https://github.com/NusrathChowdhury"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#25231F] text-[#F7F3EE] text-xs font-semibold hover:bg-[#B58A62] transition"
              >
                <span>GitHub Repositories</span>
                <IconExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Location Banner */}
        <div className="p-5 rounded-2xl bg-white border border-[#E8E2D9] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6B665E]">
          <div className="flex items-center gap-2">
            <IconMapPin className="w-4 h-4 text-[#B58A62]" />
            <span className="font-semibold text-[#25231F]">Location:</span>
            <span>Sylhet, Bangladesh (UTC+6)</span>
          </div>
          <p className="text-[11px]">Direct communications answered promptly.</p>
        </div>
      </div>
    </section>
  );
};
