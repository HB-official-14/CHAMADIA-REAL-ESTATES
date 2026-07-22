"use client";

import { Home, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminPropertiesPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <main className="flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-navy-900">Properties</h1>
            <p className="text-gray-500">Manage your property listings</p>
          </div>
          <Button variant="primary">
            <Plus className="w-4 h-4" />
            Add Property
          </Button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
          <Home className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-navy-900 mb-2">No Properties Added</h3>
          <p className="text-gray-500 mb-4">Start by adding your first property listing.</p>
          <Button variant="primary">Add Your First Property</Button>
        </div>
      </main>
    </div>
  );
}
