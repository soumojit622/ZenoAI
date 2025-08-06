"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

// ✅ React Icons
import { AiOutlineHome } from "react-icons/ai";
import { FiClock, FiSettings } from "react-icons/fi";
import { RiWallet3Line } from "react-icons/ri";
import UsageTrack from "./UsageTrack";

const SideNav = () => {
  const path = usePathname();

  const MenuList = [
    { name: "Home", icon: AiOutlineHome, path: "/dashboard" },
    { name: "History", icon: FiClock, path: "/dashboard/history" },
    { name: "Billing", icon: RiWallet3Line, path: "/dashboard/billing" },
    { name: "Settings", icon: FiSettings, path: "/dashboard/settings" },
  ];

  return (
    <aside className="h-screen w-full max-w-[260px] bg-white border-r border-gray-200 shadow-md flex flex-col justify-between px-6 py-8">
      {/* Logo + Branding */}
      <div>
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="p-[6px] border-2 border-sky-500 rounded-2xl bg-white shadow-md">
            <Image
              src="/favicon.svg"
              alt="ZenoAI logo"
              width={40}
              height={40}
              className="rounded-xl"
            />
          </div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent">
            ZenoAI
          </h1>
        </div>
        <hr className="my-6 border" />

        {/* Navigation Menu */}
        <nav className="flex flex-col gap-5">
          {MenuList.map((menu, index) => {
            const isActive = path === menu.path;
            return (
              <Link key={index} href={menu.path}>
                <div
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer group transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-sky-600 to-sky-700 text-white shadow-md"
                      : "text-gray-700 hover:bg-sky-50"
                  }`}
                >
                  <menu.icon
                    className={`w-5 h-5 ${
                      isActive
                        ? "text-white"
                        : "text-sky-600 group-hover:text-sky-700"
                    }`}
                  />
                  <span className="text-base font-medium">{menu.name}</span>
                </div>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer Note */}
      <div className="pt-10 text-center text-xs text-gray-400">
        <div className="absolute bottom-10 left-0 w-full">
          <UsageTrack />
        </div>
      </div>
    </aside>
  );
};

export default SideNav;
