"use client";

import dynamic from "next/dynamic";

const AIAssistant = dynamic(
  () => import("@/components/ai/ai-assistant").then((mod) => ({ default: mod.AIAssistant })),
  { ssr: false }
);

export function AIAssistantWrapper() {
  return <AIAssistant />;
}
