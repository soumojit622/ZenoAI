"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { TEMPLATE } from "./TemplateListSection";

const TemplateCard = (item: TEMPLATE) => {
  const router = useRouter();

  const handleClick = () => {
    toast.success(`${item.name} template selected!`);
    router.push(`/dashboard/content/${item.slug}`);
  };

  return (
    <div
      onClick={handleClick}
      className="p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg 
      border border-gray-200 transition-all duration-300 
      hover:shadow-xl hover:-translate-y-1 hover:bg-white/90 group cursor-pointer h-full"
    >
      {/* Icon with ring */}
      <div className="flex items-center justify-center mb-4">
        <div
          className="w-16 h-16 rounded-full bg-gradient-to-br 
          from-sky-100 to-blue-100 flex items-center justify-center 
          ring-2 ring-sky-300 group-hover:ring-sky-500 transition-all duration-300"
        >
          <Image src={item.icon} alt="icon" width={32} height={32} />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800 text-center group-hover:text-sky-700 transition">
        {item.name}
      </h2>

      {/* Description */}
      <p className="text-sm text-gray-500 text-center mt-2 group-hover:text-gray-600 line-clamp-3">
        {item.desc}
      </p>

      {/* CTA on hover */}
      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-center">
        <span className="text-sky-600 font-medium text-sm">
          Start Writing →
        </span>
      </div>
    </div>
  );
};

export default TemplateCard;
