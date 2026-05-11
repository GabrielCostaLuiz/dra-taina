"use client";

import { Plus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div className="group bg-white rounded-3xl border border-outline-variant/20 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-secondary/20">
      {/* Desktop Version: Details/Accordion */}
      <details className="hidden md:block group/details" open={false}>
        <summary className="flex justify-between items-center p-8 cursor-pointer list-none">
          <h3 className="font-display text-xl lg:text-2xl text-on-surface group-hover/details:text-secondary transition-colors pr-8">
            {question}
          </h3>
          <div className="shrink-0 w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-secondary transition-all duration-500 group-open/details:rotate-45 group-open/details:bg-secondary group-open/details:text-white">
            <Plus className="w-5 h-5" />
          </div>
        </summary>
        <div className="px-8 pb-10">
          <div className="h-px bg-linear-to-r from-outline-variant/30 to-transparent mb-8"></div>
          <p className="font-body text-lg text-on-surface-variant leading-relaxed">
            {answer}
          </p>
        </div>
      </details>

      {/* Mobile Version: Always Open Card */}
      <div className="md:hidden p-7">
        <h3 className="font-display text-xl text-on-surface mb-4 leading-tight">
          {question}
        </h3>
        <p className="font-body text-base text-on-surface-variant leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}
