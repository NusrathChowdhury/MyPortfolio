import React from "react";
import { IconAcademic, IconCheckCircle } from "@/components/ui/Icons";

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 px-6 max-w-5xl mx-auto border-t border-[#E8E2D9]">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B58A62]">
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#25231F] tracking-tight">
            Education
          </h2>
        </div>

        {/* Education Highlight Card */}
        <div className="bg-white rounded-3xl border border-[#E8E2D9] p-8 sm:p-10 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 pb-6 border-b border-[#E8E2D9]">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F7F3EE] border border-[#E8E2D9] flex items-center justify-center text-[#B58A62] shrink-0">
                <IconAcademic className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold text-[#25231F] tracking-tight">
                  Bachelor of Science in Computer Science and Engineering
                </h3>
                <p className="text-base font-medium text-[#6B665E]">
                  North East University Bangladesh
                </p>
                <p className="text-xs text-[#6B665E]/80">
                  Sylhet, Bangladesh
                </p>
              </div>
            </div>

            <div>
              <span className="inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-full bg-[#F7F3EE] text-[#25231F] border border-[#E8E2D9]">
                January 2022 – February 2026
              </span>
            </div>
          </div>

          {/* Academic Focus Foundation */}
          <div className="pt-6 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#6B665E]">
              Core Computer Science Curriculum
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-1">
              {[
                "Data Structures & Algorithms",
                "Object-Oriented Programming (OOP)",
                "Database Management Systems (DBMS)",
                "Web Engineering & Software Design",
                "Natural Language Processing (NLP)",
                "Software Engineering Principles",
              ].map((course) => (
                <div
                  key={course}
                  className="flex items-center gap-2 text-xs text-[#25231F] bg-[#F7F3EE] p-2.5 rounded-xl border border-[#E8E2D9]/70"
                >
                  <IconCheckCircle className="w-4 h-4 text-[#B58A62] shrink-0" />
                  <span className="font-medium">{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
