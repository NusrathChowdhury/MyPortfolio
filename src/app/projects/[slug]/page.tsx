import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  IconArrowLeft,
  IconArrowRight,
  IconExternalLink,
  IconGithub,
  IconCheckCircle,
} from "@/components/ui/Icons";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Fouzia Nusrath Chowdhury`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const prevProject =
    projectIndex > 0 ? projects[projectIndex - 1] : projects[projects.length - 1];
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : projects[0];

  return (
    <>
      <Navbar />
      <main className="flex-1 py-12 md:py-20 px-6 max-w-4xl mx-auto space-y-10">
        {/* Navigation Breadcrumb */}
        <div>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#6B665E] hover:text-[#B58A62] transition group"
          >
            <IconArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Project Header Card */}
        <header className="bg-white rounded-3xl border border-[#E8E2D9] p-8 sm:p-12 shadow-xs space-y-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F3EE] text-[#B58A62] border border-[#E8E2D9] text-xs font-semibold">
              <span>{project.category}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#25231F] tracking-tight">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg text-[#6B665E] font-medium leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold px-5 py-3 rounded-xl bg-[#25231F] text-[#F7F3EE] hover:bg-[#B58A62] transition shadow-xs"
            >
              <span>Visit Live Platform</span>
              <IconExternalLink className="w-3.5 h-3.5" />
            </a>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold px-5 py-3 rounded-xl bg-white text-[#25231F] border border-[#E8E2D9] hover:border-[#B58A62] hover:text-[#B58A62] transition shadow-xs"
              >
                <IconGithub className="w-4 h-4" />
                <span>Client Repository</span>
              </a>
            )}
          </div>
        </header>

        {/* Large Visual Preview (Browser Frame Mockup) */}
        <div className="bg-white rounded-3xl border border-[#E8E2D9] shadow-xs overflow-hidden">
          <div className="border-b border-[#E8E2D9] bg-[#F7F3EE] px-5 py-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E8E2D9]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#E8E2D9]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#E8E2D9]"></span>
            <span className="ml-2 text-xs font-mono text-[#6B665E] truncate">
              {project.liveUrl}
            </span>
          </div>
          <div className="relative w-full aspect-[16/9] bg-[#F7F3EE]">
            <Image
              src={project.image}
              alt={`${project.title} application screenshot`}
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* Statistics Bar (if applicable) */}
        {project.stats && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {project.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white p-5 rounded-2xl border border-[#E8E2D9] shadow-xs space-y-1"
              >
                <span className="text-2xl font-serif font-bold text-[#25231F]">
                  {stat.value}
                </span>
                <p className="text-xs text-[#6B665E]">{stat.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Professional Overview */}
        <section className="bg-white rounded-3xl border border-[#E8E2D9] p-8 sm:p-12 shadow-xs space-y-6">
          <div className="space-y-1 border-b border-[#E8E2D9] pb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#25231F] tracking-tight">
              Project Overview
            </h2>
            <p className="text-xs text-[#6B665E] uppercase tracking-wider font-semibold">
              Purpose &amp; Architecture
            </p>
          </div>
          <p className="text-sm sm:text-base text-[#25231F] leading-relaxed">
            {project.fullOverview}
          </p>
        </section>

        {/* Technology Stack */}
        <section className="bg-white rounded-3xl border border-[#E8E2D9] p-8 sm:p-12 shadow-xs space-y-6">
          <div className="space-y-1 border-b border-[#E8E2D9] pb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#25231F] tracking-tight">
              Technology Stack
            </h2>
            <p className="text-xs text-[#6B665E] uppercase tracking-wider font-semibold">
              Implementation Technologies
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {project.technologies.frontend && (
              <div className="p-5 rounded-2xl bg-[#F7F3EE] border border-[#E8E2D9] space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B58A62] block">
                  Frontend
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.frontend.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md bg-white border border-[#E8E2D9] text-[#25231F] font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.technologies.backend && (
              <div className="p-5 rounded-2xl bg-[#F7F3EE] border border-[#E8E2D9] space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B58A62] block">
                  Backend &amp; APIs
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.backend.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md bg-white border border-[#E8E2D9] text-[#25231F] font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.technologies.databaseAuth && (
              <div className="p-5 rounded-2xl bg-[#F7F3EE] border border-[#E8E2D9] space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B58A62] block">
                  Database &amp; Auth
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.databaseAuth.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md bg-white border border-[#E8E2D9] text-[#25231F] font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.technologies.researchNLP && (
              <div className="p-5 rounded-2xl bg-[#F7F3EE] border border-[#E8E2D9] space-y-2 sm:col-span-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B58A62] block">
                  Research &amp; NLP Frameworks
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.researchNLP.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md bg-white border border-[#E8E2D9] text-[#25231F] font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Key Features */}
        <section className="bg-white rounded-3xl border border-[#E8E2D9] p-8 sm:p-12 shadow-xs space-y-6">
          <div className="space-y-1 border-b border-[#E8E2D9] pb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#25231F] tracking-tight">
              Implemented Features
            </h2>
            <p className="text-xs text-[#6B665E] uppercase tracking-wider font-semibold">
              Verified Functionality
            </p>
          </div>

          <ul className="space-y-3">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-sm text-[#25231F] leading-relaxed"
              >
                <IconCheckCircle className="w-5 h-5 text-[#B58A62] shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Role & Contribution Attribution */}
        {project.myContribution && (
          <section className="bg-white rounded-3xl border border-[#E8E2D9] p-8 sm:p-12 shadow-xs space-y-6">
            <div className="space-y-1 border-b border-[#E8E2D9] pb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#25231F] tracking-tight">
                My Contribution &amp; Responsibilities
              </h2>
              <p className="text-xs text-[#B58A62] uppercase tracking-wider font-semibold">
                Transparent Attribution
              </p>
            </div>
            <div className="text-sm sm:text-base text-[#25231F] leading-relaxed bg-[#F7F3EE] p-6 rounded-2xl border border-[#E8E2D9]">
              {project.myContribution}
            </div>
          </section>
        )}

        {/* Verified Technical Challenges */}
        <section className="bg-white rounded-3xl border border-[#E8E2D9] p-8 sm:p-12 shadow-xs space-y-6">
          <div className="space-y-1 border-b border-[#E8E2D9] pb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#25231F] tracking-tight">
              Technical &amp; Research Challenges
            </h2>
            <p className="text-xs text-[#6B665E] uppercase tracking-wider font-semibold">
              Obstacles Addressed During Development
            </p>
          </div>

          <div className="space-y-4">
            {project.challenges.map((challenge, idx) => (
              <div
                key={challenge.title}
                className="p-6 rounded-2xl bg-[#F7F3EE] border border-[#E8E2D9] space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-white border border-[#E8E2D9] text-[#B58A62] flex items-center justify-center text-xs font-bold">
                    {idx + 1}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-[#25231F]">
                    {challenge.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#6B665E] pl-7 leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Proposed Future Improvements */}
        <section className="bg-white rounded-3xl border border-[#E8E2D9] p-8 sm:p-12 shadow-xs space-y-6">
          <div className="space-y-1 border-b border-[#E8E2D9] pb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#25231F] tracking-tight">
              Proposed Future Improvements
            </h2>
            <p className="text-xs text-[#6B665E] uppercase tracking-wider font-semibold">
              Roadmap Enhancements
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.futureImprovements.map((imp) => (
              <div
                key={imp}
                className="flex items-start gap-2.5 p-4 rounded-xl bg-[#F7F3EE] border border-[#E8E2D9] text-xs sm:text-sm text-[#25231F]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#B58A62] shrink-0 mt-2"></span>
                <span>{imp}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Prev / Next Navigation */}
        <nav className="flex items-center justify-between gap-4 pt-6 border-t border-[#E8E2D9]">
          <Link
            href={`/projects/${prevProject.slug}`}
            className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-white border border-[#E8E2D9] text-[#25231F] hover:border-[#B58A62] hover:text-[#B58A62] transition shadow-xs group"
          >
            <IconArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Prev: {prevProject.title}</span>
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-white border border-[#E8E2D9] text-[#25231F] hover:border-[#B58A62] hover:text-[#B58A62] transition shadow-xs group"
          >
            <span>Next: {nextProject.title}</span>
            <IconArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </nav>
      </main>
      <Footer />
    </>
  );
}
