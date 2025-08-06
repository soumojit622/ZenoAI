"use client";

import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Button } from "@/components/ui/button";
import { Copy, FileText } from "lucide-react";
import { toast } from "sonner";

const Editor = dynamic(
  () => import("@toast-ui/react-editor").then((mod) => mod.Editor),
  {
    ssr: false,
  }
);

interface Props {
  aiOutput: string;
}

const OutputSection = ({ aiOutput }: Props) => {
  const editorRef = useRef<any>(null);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.getInstance().setMarkdown(aiOutput);
    }
  }, [aiOutput]);

  const handleCopy = () => {
    navigator.clipboard.writeText(aiOutput);
    toast.success("Copied to clipboard");
  };

  return (
    <div className="bg-white border border-gray-100 rounded-3xl shadow-xl overflow-hidden transition-all duration-300">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-sky-100 to-indigo-100 border-b border-sky-200">
        <div className="flex items-center gap-3 text-sky-800 font-bold text-lg tracking-wide">
          <FileText className="w-5 h-5" />
          <span>Your Result</span>
        </div>
        <Button
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-400 to-indigo-500 text-white text-sm font-medium rounded-lg shadow-md hover:from-sky-500 hover:to-indigo-600 hover:shadow-lg transition-all duration-300 ring-1 ring-sky-300"
          onClick={handleCopy}
        >
          <Copy className="w-4 h-4" />
          Copy to Clipboard
        </Button>
      </div>

      {/* Markdown Output Editor */}
      <div className="p-4 sm:p-6">
        <Editor
          ref={editorRef}
          initialValue="Sit tight! Your content will appear here shortly."
          initialEditType="wysiwyg"
          height="600px"
          useCommandShortcut
          previewStyle="vertical"
        />
      </div>
    </div>
  );
};

export default OutputSection;
