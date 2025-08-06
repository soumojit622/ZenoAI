"use client";

import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { UserSubscription } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import axio from "axios";
import {
  Download,
  FileText,
  History,
  LayoutTemplate,
  Loader2Icon,
} from "lucide-react";
import moment from "moment";
import { useContext, useState } from "react";
import { toast } from "sonner";

const BillingPage = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const { userSubscription } = useContext(UserSubscriptionContext);

  const CreateSubscription = () => {
    setLoading(true);
    axio.post("/api/create-subscription", {}).then(
      (resp) => {
        OnPayment(resp.data.id);
      },
      (error) => {
        setLoading(false);
        toast.error("Failed to create subscription. Please try again.");
      }
    );
  };

  const loadScript = (src: any) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const OnPayment = async (subId: string) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      toast.error("Razorpay SDK failed to load.");
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      subscription_id: subId,
      name: "ZenoAI",
      description: "Monthly Pro Plan",
      handler: async (resp: any) => {
        if (resp?.razorpay_payment_id) {
          await SaveSubcription(resp.razorpay_payment_id);
        } else {
          toast.error("Payment failed. Please try again.");
        }
        setLoading(false);
      },
      prefill: {
        name: user?.fullName,
        email: user?.primaryEmailAddress?.emailAddress,
      },
      theme: {
        color: "#3b82f6",
      },
    };

    try {
      // @ts-expect-error Razorpay not typed
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (e) {
      toast.error("Payment initialization failed.");
      setLoading(false);
    }
  };

  const SaveSubcription = async (paymentId: string) => {
    try {
      const result = await db.insert(UserSubscription).values({
        email: user?.primaryEmailAddress?.emailAddress,
        userName: user?.fullName,
        active: true,
        paymentId,
        joinDate: moment().format("DD/MM/yyyy"),
      });

      if (result) {
        toast.success("🎉 Subscription activated!");
        window.location.reload();
      }
    } catch (error) {
      toast.error("Something went wrong saving your subscription.");
    }
  };

  const Feature = ({
    icon: Icon,
    label,
    color,
  }: {
    icon: any;
    label: string;
    color: string;
  }) => (
    <li className="flex items-center gap-2">
      <Icon className={`w-5 h-5 ${color}`} />
      {label}
    </li>
  );

  return (
    <div className="min-h-screen py-14 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-5xl font-extrabold bg-gradient-to-r from-sky-500 to-sky-600 bg-clip-text text-transparent mb-12 drop-shadow">
          Choose Your Plan
        </h2>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {/* Starter Plan */}
          <div className="rounded-3xl bg-white border border-gray-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800">Starter Plan</h3>
              <p className="mt-2 text-gray-600">
                <span className="text-4xl font-bold text-gray-900">$0</span>
                <span className="ml-1 text-sm text-gray-500">/month</span>
              </p>
            </div>

            <ul className="mt-6 space-y-4 text-sm text-gray-700">
              <Feature
                icon={FileText}
                label="Up to 10,000 Words/Month"
                color="text-sky-600"
              />
              <Feature
                icon={LayoutTemplate}
                label="Access to 50+ Basic Templates"
                color="text-sky-600"
              />
              <Feature
                icon={Download}
                label="Limited Download & Copy Access"
                color="text-sky-600"
              />
              <Feature
                icon={History}
                label="1 Month Activity History"
                color="text-sky-600"
              />
            </ul>

            <div className="mt-8">
              <span className="block w-full text-center rounded-full bg-gray-400 text-white py-3 font-medium cursor-not-allowed">
                Currently Active Plan
              </span>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="rounded-3xl bg-white border-2 border-sky-600 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform">
            <div className="text-center">
              <h3 className="text-xl font-bold text-sky-700">Pro Plan</h3>
              <p className="mt-2 text-gray-600">
                <span className="text-4xl font-bold text-gray-900">$99.9</span>
                <span className="ml-1 text-sm text-gray-500">/month</span>
              </p>
            </div>

            <ul className="mt-6 space-y-4 text-sm text-gray-700">
              <Feature
                icon={FileText}
                label="Up to 100,000 Words/Month"
                color="text-sky-600"
              />
              <Feature
                icon={LayoutTemplate}
                label="Access to All 50+ Premium Templates"
                color="text-sky-600"
              />
              <Feature
                icon={Download}
                label="Unlimited Download & Copy Privileges"
                color="text-sky-600"
              />
              <Feature
                icon={History}
                label="Full 1-Year Content History"
                color="text-sky-600"
              />
            </ul>

            <div className="mt-8">
              <Button
                disabled={loading}
                onClick={() => CreateSubscription()}
                className="w-full rounded-full py-4 text-base font-semibold bg-gradient-to-r from-sky-500 to-sky-600 text-white hover:from-sky-600 hover:to-sky-700"
              >
                {loading && (
                  <Loader2Icon className="w-4 h-4 mr-2 animate-spin" />
                )}
                {userSubscription ? "Active Plan" : "Upgrade Now"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;
