"use client";

import { Button } from "@/components/ui/button";
import { openContactPopup } from "@/components/layout/page-layout";

export function PlotDetailContact() {
  return (
    <Button
      variant="secondary"
      size="lg"
      className="w-full md:w-auto md:min-w-[280px]"
      onClick={(e) => { e.stopPropagation(); openContactPopup(); }}
      type="button"
    >
      Contact Us
    </Button>
  );
}
