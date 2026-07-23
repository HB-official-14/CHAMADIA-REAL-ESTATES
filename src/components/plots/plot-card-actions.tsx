"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openContactPopup } from "@/components/layout/page-layout";

interface PlotCardActionsProps {
  slug: string;
}

export function PlotCardActions({ slug }: PlotCardActionsProps) {
  return (
    <div className="flex gap-3 pt-4 border-t border-gray-100">
      <Link href={`/plots/${slug}`} className="flex-1">
        <Button variant="outline" size="sm" className="w-full group">
          View Information
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
      <Button
        variant="secondary"
        size="sm"
        className="flex-1"
        onClick={(e) => { e.stopPropagation(); openContactPopup(); }}
        type="button"
      >
        <Phone className="w-4 h-4 mr-1" />
        Contact Us
      </Button>
    </div>
  );
}
