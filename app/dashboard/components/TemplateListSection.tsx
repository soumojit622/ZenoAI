"use client";

import Templates from "@/app/(data)/Templates";
import React, { useEffect, useState } from "react";
import TemplateCard from "./TemplateCard";
import { BrainCog } from "lucide-react";

export interface TEMPLATE {
  name: string;
  desc: string;
  icon: string;
  category: string;
  slug: string;
  aiPrompt: string;
  form?: FORM[];
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

const TemplateListSection = ({
  userSearchInput = "",
}: {
  userSearchInput?: string;
}) => {
  const [templateList, setTemplateList] = useState<TEMPLATE[]>(Templates);

  useEffect(() => {
    const filtered = userSearchInput
      ? Templates.filter((item) =>
          item.name.toLowerCase().includes(userSearchInput.toLowerCase())
        )
      : Templates;
    setTemplateList(filtered);
  }, [userSearchInput]);

  return (
    <section className="px-6 py-12">
      {/* Heading */}
      <div className="text-center mb-12">
        {/* Icon Badge */}
        <div className="flex justify-center mb-4">
          <div className="p-4 rounded-full bg-sky-100 shadow-md">
            <BrainCog className="h-8 w-8 text-sky-600" />
          </div>
        </div>

        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-sky-500 to-sky-600 bg-clip-text text-transparent drop-shadow-md">
          Explore AI Templates
        </h2>
        <p className="mt-3 text-slate-600 text-sm md:text-base max-w-xl mx-auto">
          Turn your ideas into content instantly. Choose from powerful,
          AI-optimized templates crafted to boost your productivity and
          creativity.
        </p>
      </div>

      {/* Templates Grid */}
      {templateList.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {templateList.map((item: TEMPLATE) => (
            <TemplateCard key={item.slug} {...item} />
          ))}
        </div>
      ) : (
        <div className="text-center mt-16 text-gray-500 animate-fadeIn">
          <h3 className="text-xl font-semibold">
            😢 No matching templates found
          </h3>
          <p className="text-sm mt-2">
            Try adjusting your search query or filters.
          </p>
        </div>
      )}
    </section>
  );
};

export default TemplateListSection;
