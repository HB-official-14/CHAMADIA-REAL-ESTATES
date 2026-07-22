"use client";

import { FileText } from "lucide-react";

export default function AdminContentPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-navy-900">Content Management</h1>
          <p className="text-gray-500">Manage website content</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
          <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-navy-900 mb-2">Content Management Coming Soon</h3>
          <p className="text-gray-500">Content management system is under development.</p>
        </div>
      </main>
    </div>
  );
}
