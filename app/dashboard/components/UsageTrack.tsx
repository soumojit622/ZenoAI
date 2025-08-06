"use client";

import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { UpdateCreditUsageContext } from "@/app/(context)/UpdateCreditUsageContext";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import React, { useContext, useEffect, useState } from "react";
import { HISTORY } from "../history/page";
import { db } from "@/utils/db";
import { AIOutput, UserSubscription } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { Gauge, Zap } from "lucide-react";

const UsageTrack = () => {
  const { user } = useUser();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const { userSubscription, setUserSubscription } = useContext(
    UserSubscriptionContext
  );
  const { updateCreditUsage } = useContext(UpdateCreditUsageContext);
  const [maxWords, setMaxWords] = useState(10000);

  useEffect(() => {
    if (user) {
      GetData();
      IsUserSubscribe();
    }
  }, [user]);

  useEffect(() => {
    if (user) GetData();
  }, [updateCreditUsage && user]);

  const GetData = async () => {
    /* @ts-expect-error */
    const result: HISTORY[] = await db
      .select()
      .from(AIOutput)
      /* @ts-expect-error */
      .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));
    GetTotalUsage(result);
  };

  const IsUserSubscribe = async () => {
    const result = await db.select().from(UserSubscription).where(
      /* @ts-expect-error */
      eq(UserSubscription.email, user?.primaryEmailAddress?.emailAddress)
    );
    if (result.length > 0) {
      setUserSubscription(true);
      setMaxWords(1000000);
    }
  };

  const GetTotalUsage = (result: HISTORY[]) => {
    const total = result.reduce(
      (acc, item) => acc + item.aiResponse?.length,
      0
    );
    setTotalUsage(total);
  };

  const progressPercent = Math.min((totalUsage / maxWords) * 100, 100);
  const usageText =
    progressPercent >= 100
      ? "You've used all your credits! ⚠️ Upgrade to continue."
      : progressPercent > 80
      ? "Almost there! 🚀 Consider upgrading."
      : "You're on track! 🎯";

  return (
    <div className="m-5 rounded-3xl bg-white/80 backdrop-blur border border-sky-200 p-6 shadow-2xl transition duration-300">
      <div className="flex items-center gap-2 mb-4 text-sky-600">
        <Gauge className="w-5 h-5" />
        <h2 className="text-lg font-semibold text-gray-800">Usage Summary</h2>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between text-xs font-medium text-gray-600">
          <span>Credits Used</span>
          <span className="text-gray-800">
            {totalUsage.toLocaleString()} / {maxWords.toLocaleString()}
          </span>
        </div>

        <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden shadow-inner">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 transition-all duration-700 ease-out"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>

        <p
          className={`text-xs mt-1 italic ${
            progressPercent >= 100 ? "text-red-500" : "text-gray-500"
          }`}
        >
          {usageText}
        </p>

        {!userSubscription && (
          <Button
            className="mt-3 w-full bg-gradient-to-r from-sky-500 to-sky-600
            hover:from-sky-600 hover:to-sky-700 text-white font-semibold py-2 rounded-xl shadow-lg transition-all duration-300"
          >
            <Zap className="w-4 h-4" />
            Upgrade to Pro
          </Button>
        )}
      </div>
    </div>
  );
};

export default UsageTrack;
