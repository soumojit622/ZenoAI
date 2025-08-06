"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FileText, Loader2Icon, ScrollText, Sparkles } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { TEMPLATE } from "../../components/TemplateListSection";

interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormInput: any;
  loading: boolean;
}

const FormSection = ({ selectedTemplate, userFormInput, loading }: PROPS) => {
  const [formData, setFormData] = useState<any>({});

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    userFormInput(formData);
  };

  return (
    <div className="w-full md:max-w-lg mx-auto p-6 sm:p-8 bg-white/90 backdrop-blur-xl border border-sky-100 rounded-3xl shadow-xl transition-all duration-300">
      {/* Icon */}
      <div className="flex justify-center mb-5">
        <Image
          src={selectedTemplate?.icon ?? "/fallback.png"} // ← fallback icon
          alt="icon"
          width={60}
          height={60}
          className="rounded-full border border-sky-200 p-3 bg-white shadow-sm"
        />
      </div>

      {/* Title */}
      <h2 className="text-xl sm:text-2xl font-extrabold text-center bg-gradient-to-r from-sky-600 to-sky-800 text-transparent bg-clip-text mb-2">
        {selectedTemplate?.name}
      </h2>

      {/* Description */}
      <p className="text-center text-gray-500 text-sm sm:text-base mb-6 leading-relaxed">
        {selectedTemplate?.desc}
      </p>

      {/* Form Fields */}
      <form className="space-y-6" onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item) => (
          <div key={item.name} className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              {item.field === "input" && (
                <FileText className="w-4 h-4 text-sky-500" />
              )}
              {item.field === "textarea" && (
                <ScrollText className="w-4 h-4 text-sky-500" />
              )}
              {item.label}
            </label>

            {item.field === "input" ? (
              <Input
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
                placeholder="Type here..."
                className="rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-400 focus:border-sky-500 transition-all"
              />
            ) : item.field === "textarea" ? (
              <>
                <Textarea
                  name={item.name}
                  required={item?.required}
                  rows={5}
                  maxLength={2000}
                  onChange={handleInputChange}
                  placeholder="Write your content here..."
                  className="rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-400 focus:border-sky-500 transition-all"
                />
                <span className="text-xs text-gray-400 mt-1">
                  Max 2000 characters
                </span>
              </>
            ) : null}
          </div>
        ))}

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={loading}
          className="w-full py-4 sm:py-5 mt-4 bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 transition-all duration-300 text-white text-base font-semibold flex justify-center items-center gap-2 rounded-xl shadow-md"
        >
          {loading ? (
            <>
              <Loader2Icon className="animate-spin w-5 h-5" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              Generate Content
            </>
          )}
        </Button>
      </form>
    </div>
  );
};

export default FormSection;
