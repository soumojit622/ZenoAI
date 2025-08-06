"use client";

import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { toast } from "sonner";

interface CopyButtonProps {
  aiResponse: string;
}

const CopyButton = ({ aiResponse }: CopyButtonProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(aiResponse);
    toast.success(" Copied to clipboard!");
  };

  return (
    <Button
      variant="ghost"
      className="text-sky-600 hover:bg-sky-100 transition rounded-md px-3 py-1 text-sm font-medium flex items-center gap-1"
      onClick={handleCopy}
    >
      <Copy className="w-4 h-4" />
      Copy
    </Button>
  );
};

export default CopyButton;
