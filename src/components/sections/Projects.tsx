import React from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { IconArrowRight, IconExternalLink, IconGithub } from "@/components/ui/Icons";

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-28 px-6 max-w-5xl mx-auto border-t border-[#E8E2D9]">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B58A62]">
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#25231F] tracking-tight">
            Projects
          </h2>
          <p className="text-base text-[#6B665E] max-w-xl">
            A showcase of web applications and applied NLP research featuring real-world deployments, responsive interfaces, and backend integration.
          </p>
        </div>

        {/* Product Showcase Gallery */}
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <article
              key={project.id}
              className="bg-white rounded-3xl border border-[#E8E2D9] shadow-xs overflow-hidden transition-all duration-300 hover:border-[#B58A62]/40 hover:shadow-md"
            >
              {/* Browser Window Frame Header */}
              <div className="border-b border-[#E8E2D9] bg-[#F7F3EE]/70 px-6 py-3.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#E8E2D9]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#E8E2D9]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#E8E2D9]"></span>
                  <span className="ml-3 text-xs font-mono text-[#6B665E] truncate hidden sm:inline">
                    {project.liveUrl.replace("https://", "")}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-xs text-[#6B665E]">
                  <span className="font-mono uppercase tracking-wider text-[11px] font-semibold text-[#B58A62]">
                    Project 0{idx + 1}
                  </span>
                </div>
              </div>

              {/* Large Application Screenshot Preview */}
              <div className="relative w-full aspect-[16/9] sm:aspect-[16/8] bg-[#F7F3EE] overflow-hidden border-b border-[#E8E2D9] group">
                <Image
                  src={project.image}
                  alt={`${project.title} live interface preview`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-cover object-top transition duration-500 group-hover:scale-[1.01]"
                  priority={idx === 0}
                />
              </div>

              {/* Project Details Content Area */}
              <div className="p-8 sm:p-10 space-y-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-2 max-w-2xl">
                    <div className="inline-flex items-center gap-2">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#F7F3EE] text-[#B58A62] border border-[#E8E2D9]">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#25231F] tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#6B665E] leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Primary Link Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-2 md:pt-0 shrink-0">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-white text-[#25231F] border border-[#E8E2D9] hover:border-[#B58A62] hover:text-[#B58A62] transition shadow-2xs"
                        aria-label={`${project.title} Client GitHub Repository`}
                      >
                        <IconGithub className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    )}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-xl bg-[#25231F] text-[#F7F3EE] hover:bg-[#B58A62] transition shadow-2xs"
                    >
                      <span>Live Demo</span>
                      <IconExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Tech Stack Tags & View Details Row */}
                <div className="pt-4 border-t border-[#E8E2D9] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-xs font-semibold text-[#6B665E] mr-1">Stack:</span>
                    {project.technologies.all.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-lg bg-[#F7F3EE] border border-[#E8E2D9] text-[#25231F] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#25231F] hover:text-[#B58A62] transition group/link shrink-0"
                  >
                    <span>View Case Study</span>
                    <IconArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
