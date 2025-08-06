import { UserProfile } from "@clerk/nextjs";
import React from "react";

const SettingsPage = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <UserProfile
        appearance={{
          elements: {
            card: "shadow-none border border-gray-200",
            headerTitle: "text-sky-700 font-semibold text-2xl",
            profileSectionPrimaryButton:
              "bg-sky-600 hover:bg-sky-700 text-white",
          },
          variables: {
            colorPrimary: "#0ea5e9",
          },
        }}
      />
    </div>
  );
};

export default SettingsPage;
