"use client";

import { BarChart3 } from "lucide-react";

export default function AdminAnalyticsPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-navy-900">Analytics</h1>
          <p className="text-gray-500">View website analytics and insights</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
          <BarChart3 className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-navy-900 mb-2">Analytics Coming Soon</h3>
          <p className="text-gray-500">Detailed analytics dashboard is under development.</p>
        </div>
      </main>
    </div>
  );
}
