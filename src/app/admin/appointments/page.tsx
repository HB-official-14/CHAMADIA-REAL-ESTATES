"use client";

import { Calendar } from "lucide-react";

export default function AdminAppointmentsPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-navy-900">Appointments</h1>
          <p className="text-gray-500">Manage site visit appointments</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
          <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-navy-900 mb-2">No Appointments</h3>
          <p className="text-gray-500">Site visit bookings will appear here.</p>
        </div>
      </main>
    </div>
  );
}
