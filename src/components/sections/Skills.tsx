import React from "react";
import { IconCode, IconServer, IconTools, IconSparkles } from "@/components/ui/Icons";

interface SkillCategory {
  title: string;
  description: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Component-driven architecture and responsive UI development.",
    icon: <IconCode className="w-5 h-5 text-[#B58A62]" />,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
    ],
  },
  {
    title: "Backend",
    description: "RESTful server services, secure authentication, and databases.",
    icon: <IconServer className="w-5 h-5 text-[#B58A62]" />,
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB",
      "Better Auth",
      "JWT",
    ],
  },
  {
    title: "Tools",
    description: "Version control workflows and modern development tooling.",
    icon: <IconTools className="w-5 h-5 text-[#B58A62]" />,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
    ],
  },
  {
    title: "Other Competencies",
    description: "Search discoverability, content strategy, and domain dataset development.",
    icon: <IconSparkles className="w-5 h-5 text-[#B58A62]" />,
    skills: [
      "SEO",
      "Keyword Research",
      "On-Page SEO",
      "Content Marketing",
      "Technical Writing",
      "Dataset Curation",
    ],
  },
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-28 px-6 max-w-5xl mx-auto border-t border-[#E8E2D9]">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B58A62]">
            <span>Technical Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#25231F] tracking-tight">
            Skills
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white p-7 sm:p-8 rounded-3xl border border-[#E8E2D9] shadow-xs space-y-6"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-[#F7F3EE] border border-[#E8E2D9] flex items-center justify-center shrink-0">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#25231F] tracking-tight">
                    {category.title}
                  </h3>
                  <p className="text-xs text-[#6B665E]">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-xl bg-[#F7F3EE] border border-[#E8E2D9] text-xs font-medium text-[#25231F]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
