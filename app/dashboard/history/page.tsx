import Templates from "@/app/(data)/Templates";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { currentUser } from "@clerk/nextjs/server";
import { desc, eq } from "drizzle-orm";
import { ScrollText } from "lucide-react";
import { TEMPLATE } from "../components/TemplateListSection";
import CopyButton from "./components/CopyButton";

export interface HISTORY {
  id: number;
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdBy: string;
  createdAt: string;
}

const HistoryPage = async () => {
  const user = await currentUser();
  if (!user) return null;

  // ✅ Safely serialize the DB result
  const rawHistory = await db
    .select()
    .from(AIOutput)
    .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress!))
    .orderBy(desc(AIOutput.id));

  const HistoryList: HISTORY[] = JSON.parse(JSON.stringify(rawHistory));

  const GetTemplate = (slug: string): TEMPLATE | undefined =>
    Templates.find((item) => item.slug === slug);

  return (
    <div className="m-5 p-6 sm:p-8 bg-white border border-gray-100 rounded-3xl shadow-xl transition-all duration-300">
      <div className="text-center mb-8">
        <h2 className="flex justify-center items-center gap-2 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-600">
          <ScrollText className="w-8 h-8 text-sky-500 drop-shadow-sm" />
          AI Content History
        </h2>
        <p className="mt-2 text-gray-500 text-sm sm:text-base">
          Review and manage your previously generated content.
        </p>
      </div>

      {HistoryList.length === 0 ? (
        <div className="text-center py-24">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            No content history yet
          </h3>
          <p className="text-sm text-gray-500 max-w-md mx-auto">
            You haven’t generated any content yet. Start by selecting a template
            and generating AI-powered content.
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-7 text-center font-semibold text-sky-800 bg-gradient-to-r from-sky-100 via-white to-indigo-100 border border-sky-200 px-4 py-3 rounded-xl text-xs sm:text-sm uppercase tracking-wide shadow-sm">
            <div className="col-span-2">Template</div>
            <div className="col-span-2">Response</div>
            <div>Date</div>
            <div>Words</div>
            <div>Copy</div>
          </div>

          <div className="divide-y divide-gray-100 mt-2">
            {HistoryList.map((item) => {
              const template = GetTemplate(item.templateSlug);
              return (
                <div
                  key={item.id}
                  className="grid grid-cols-7 gap-4 px-4 py-5 hover:bg-gray-50 transition-all duration-200 rounded-lg text-center items-start sm:items-center"
                >
                  <div className="col-span-2 flex items-center gap-3 justify-start text-left">
                    {template?.icon && (
                      <img
                        src={template.icon}
                        alt="icon"
                        width={32}
                        height={32}
                      />
                    )}
                    <span className="font-medium text-gray-800 truncate">
                      {template?.name}
                    </span>
                  </div>

                  <div
                    className="col-span-2 prose prose-sm max-w-none text-left text-gray-700 bg-white px-3 py-2 rounded-md border border-gray-200 overflow-hidden line-clamp-2 hover:line-clamp-none hover:bg-sky-50 transition-all duration-300 cursor-pointer"
                    dangerouslySetInnerHTML={{ __html: item.aiResponse }}
                    title="Click to expand"
                  ></div>

                  <div className="flex justify-center items-center text-sm text-gray-500">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </div>

                  <div className="flex justify-center items-center text-sm text-gray-700">
                    {item.aiResponse.trim().split(/\s+/).length}
                  </div>

                  <div className="flex justify-center items-center">
                    <CopyButton aiResponse={item.aiResponse} />
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default HistoryPage;
