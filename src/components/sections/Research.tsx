import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IconExternalLink, IconSparkles, IconArrowRight } from "@/components/ui/Icons";

export const Research: React.FC = () => {
  return (
    <section id="research" className="py-20 md:py-28 px-6 max-w-5xl mx-auto border-t border-[#E8E2D9]">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B58A62]">
            <span>Academic Research</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#25231F] tracking-tight">
            Research Contribution
          </h2>
          <p className="text-base text-[#6B665E] max-w-xl">
            Applied Natural Language Processing research focused on agricultural disease identification and treatment guidance in Bangladesh.
          </p>
        </div>

        {/* Research Showcase Card */}
        <div className="bg-white rounded-3xl border border-[#E8E2D9] shadow-xs overflow-hidden">
          {/* Header Row */}
          <div className="p-8 sm:p-10 border-b border-[#E8E2D9] flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F3EE] border border-[#E8E2D9] text-[#B58A62] text-xs font-semibold">
                <IconSparkles className="w-3.5 h-3.5" />
                <span>Submitted Paper • Under Review</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#25231F] tracking-tight">
                Bangla CropAssist
              </h3>
              <p className="text-sm font-medium text-[#6B665E]">
                Multi-Crop Disease Detection &amp; Treatment Advisory via Bangla Symptom Descriptions
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="https://huggingface.co/spaces/CRop-p/bangla-crop-disease"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-[#25231F] text-[#F7F3EE] hover:bg-[#B58A62] transition shadow-2xs"
              >
                <span>Hugging Face Space</span>
                <IconExternalLink className="w-3.5 h-3.5" />
              </a>
              <Link
                href="/projects/bangla-cropassist"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-xl bg-white text-[#25231F] border border-[#E8E2D9] hover:border-[#B58A62] hover:text-[#B58A62] transition shadow-2xs"
              >
                <span>Details</span>
                <IconArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Research Preview Image */}
          <div className="relative w-full aspect-[16/7] bg-[#F7F3EE] border-b border-[#E8E2D9] overflow-hidden">
            <Image
              src="/projects/bangla-cropassist.png"
              alt="Bangla CropAssist live Hugging Face Space application preview"
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover object-top"
            />
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-8 sm:p-10 border-b border-[#E8E2D9] bg-[#F7F3EE]/40">
            <div className="p-4 rounded-2xl bg-white border border-[#E8E2D9] space-y-1">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-[#25231F]">
                73,000+
              </span>
              <p className="text-xs text-[#6B665E]">
                Curated Bangla Symptom Descriptions
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#E8E2D9] space-y-1">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-[#25231F]">
                34
              </span>
              <p className="text-xs text-[#6B665E]">
                Target Crop Disease Classes
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#E8E2D9] space-y-1">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-[#25231F]">
                3 Crops
              </span>
              <p className="text-xs text-[#6B665E]">
                Rice (ধান), Potato (আলু), Lentil (ডাল)
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#E8E2D9] space-y-1">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-[#B58A62]">
                98.96%
              </span>
              <p className="text-xs text-[#6B665E]">
                Proposed Model Reported Accuracy
              </p>
            </div>
          </div>

          {/* Transparent Contribution Statement */}
          <div className="p-8 sm:p-10 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#B58A62]">
              My Research Contribution
            </h4>
            <div className="p-6 rounded-2xl bg-[#F7F3EE] border border-[#E8E2D9] space-y-2 text-sm text-[#25231F] leading-relaxed">
              <p>
                I contributed to the <strong>dataset development and curation</strong>—sourcing, standardizing, and verifying over 73,000 localized agricultural symptom descriptions in Bangla across 34 disease classes—and participated in <strong>research paper preparation</strong>. The paper has been submitted for publication and is currently under review.
              </p>
              <p className="text-xs text-[#6B665E] border-t border-[#E8E2D9] pt-2">
                <em>Note:</em> The proposed BanglaBERT + LSTM machine learning model was developed and trained by research collaborators. The 98.96% classification accuracy reflects the reported findings of the proposed model.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
