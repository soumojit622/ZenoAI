"use client";

import React, { useState } from "react";
import DashboardHeader from "./components/DashboardHeader";
import SideNav from "./components/SideNav";
import { TotalUsageContext } from "../(context)/TotalUsageContext";
import { UserSubscriptionContext } from "../(context)/UserSubscriptionContext";
import { UpdateCreditUsageContext } from "../(context)/UpdateCreditUsageContext";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [totalUsage, setTotalUsage] = useState<Number>(0);
  const [userSubscription, setUserSubscription] = useState<boolean>(false);
  const [updateCreditUsage, setUpdateCreditUsage] = useState<any>();
  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      <UserSubscriptionContext.Provider
        value={{ userSubscription, setUserSubscription }}
      >
        <UpdateCreditUsageContext.Provider
          value={{ updateCreditUsage, setUpdateCreditUsage }}
        >
          <div className=" min-h-screen flex flex-col md:flex-row">
            {/* Sidebar */}
            <aside className="hidden md:block md:w-64 fixed h-full">
              <SideNav />
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 md:ml-64">
              {/* Header */}
              <header className="sticky top-0 z-50 bg-white shadow-sm">
                <DashboardHeader />
              </header>

              {/* Page Content */}
              <main className="p-4">{children}</main>
            </div>
          </div>
        </UpdateCreditUsageContext.Provider>
      </UserSubscriptionContext.Provider>
    </TotalUsageContext.Provider>
  );
};

export default DashboardLayout;
