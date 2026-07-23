"use client";

import { Button } from "@/components/ui/button";
import { openContactPopup } from "@/components/layout/page-layout";

export function ProjectDetailInquire() {
  return (
    <Button
      variant="primary"
      size="lg"
      className="w-full"
      onClick={(e) => { e.stopPropagation(); openContactPopup(); }}
      type="button"
    >
      Inquire Now
    </Button>
  );
}
