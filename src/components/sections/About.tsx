import React from "react";
import { IconCode, IconServer, IconSparkles } from "@/components/ui/Icons";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 px-6 max-w-5xl mx-auto border-t border-[#E8E2D9]">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B58A62]">
            <span>Background &amp; Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#25231F] tracking-tight">
            About Me
          </h2>
        </div>

        {/* Text-Focused Professional Statement Card */}
        <div className="bg-white rounded-3xl border border-[#E8E2D9] p-8 sm:p-12 shadow-xs space-y-8">
          {/* Main Statement */}
          <div className="space-y-6 text-[#25231F] text-lg sm:text-xl font-normal leading-relaxed border-b border-[#E8E2D9] pb-8">
            <p className="font-serif italic text-xl sm:text-2xl text-[#25231F]">
              &ldquo;I enjoy building responsive and user-friendly web applications,
              working with modern JavaScript technologies, and solving practical
              problems through code.&rdquo;
            </p>
            <p className="text-base sm:text-lg text-[#6B665E] leading-relaxed font-sans">
              I&apos;m a Junior Full-Stack Web Developer based in Sylhet, Bangladesh.
              My development foundation comes from engineering practical projects
              involving responsive frontend interfaces, RESTful backend APIs, database
              integration, and secure user authentication.
            </p>
            <p className="text-base sm:text-lg text-[#6B665E] leading-relaxed font-sans">
              I am continuously improving my development skills and exploring ways
              to build useful, performant digital solutions. Alongside full-stack
              web development, I apply search engine optimization awareness to ensure
              applications are discoverable, and I have contributed to academic NLP
              research curating large-scale agricultural datasets in Bengali.
            </p>
          </div>

          {/* Three Focused Principles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#B58A62]">
                <IconCode className="w-5 h-5" />
                <h3 className="text-sm font-bold text-[#25231F] uppercase tracking-wider">
                  Frontend
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#6B665E] leading-relaxed">
                Building component-driven, responsive user interfaces with Next.js, React, TypeScript, and Tailwind CSS.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#B58A62]">
                <IconServer className="w-5 h-5" />
                <h3 className="text-sm font-bold text-[#25231F] uppercase tracking-wider">
                  Backend &amp; Auth
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#6B665E] leading-relaxed">
                Developing clean REST APIs, database models with MongoDB, and session management with Better Auth and JWT.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#B58A62]">
                <IconSparkles className="w-5 h-5" />
                <h3 className="text-sm font-bold text-[#25231F] uppercase tracking-wider">
                  NLP &amp; SEO
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#6B665E] leading-relaxed">
                Applying domain data curation for applied NLP research alongside technical SEO fundamentals for web discoverability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
