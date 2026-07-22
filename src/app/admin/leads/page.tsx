"use client";

import { Users, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LeadsPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-navy-900">Leads</h1>
          <p className="text-gray-500">Manage your leads and inquiries</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search leads..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy-900/50"
                />
              </div>
              <Button variant="primary" size="sm">Export</Button>
            </div>
          </div>
          <div className="p-12 text-center">
            <Users className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-navy-900 mb-2">No Leads Yet</h3>
            <p className="text-gray-500">Leads will appear here once visitors start submitting forms.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
