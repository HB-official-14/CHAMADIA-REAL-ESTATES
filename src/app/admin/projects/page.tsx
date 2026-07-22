"use client";

import { Building2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <main className="flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-navy-900">Projects</h1>
            <p className="text-gray-500">Manage your real estate projects</p>
          </div>
          <Button variant="primary">
            <Plus className="w-4 h-4" />
            Add Project
          </Button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
          <Building2 className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-navy-900 mb-2">No Projects Added</h3>
          <p className="text-gray-500 mb-4">Start by adding your first project.</p>
          <Button variant="primary">Add Your First Project</Button>
        </div>
      </main>
    </div>
  );
}
