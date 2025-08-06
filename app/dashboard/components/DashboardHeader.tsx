import { UserButton } from "@clerk/nextjs";
import { Sparkles } from "lucide-react";
import React from "react";

const DashboardHeader = () => {
  return (
    <header className="px-6 py-4 shadow-sm border-b bg-white flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      {/* Left: Announcements */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 bg-gradient-to-r from-sky-500 to-sky-700 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-md">
          <Sparkles className="w-4 h-4" />
          <span>Join ZenoAI Pro for just ₹99/month — Limited Time Offer!</span>
        </div>
      </div>

      {/* Right: User Profile */}
      <div className="flex items-center justify-end">
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              userButtonAvatarBox:
                "ring-2 ring-sky-500 rounded-full transition-transform hover:scale-105",
              userButtonPopoverCard: "bg-white border shadow-lg rounded-xl",
              userButtonPopoverActionButton:
                "text-sm text-gray-700 hover:bg-sky-100 hover:text-sky-700 transition-colors",
              userButtonPopoverFooter: "hidden",
            },
            variables: {
              colorPrimary: "#3b82f6",
              colorBackground: "#ffffff",
              colorText: "#1e293b",
              borderRadius: "0.75rem",
              fontSize: "14px",
            },
          }}
        />
      </div>
    </header>
  );
};

export default DashboardHeader;
