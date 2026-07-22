"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Building2, Home, Users, Calendar, BarChart3, FileText, LogOut, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const sidebarLinks = [
  { href: "/admin", label: "Dashboard", icon: BarChart3 },
  { href: "/admin/properties", label: "Properties", icon: Home },
  { href: "/admin/projects", label: "Projects", icon: Building2 },
  { href: "/admin/leads", label: "Leads", icon: Users },
  { href: "/admin/appointments", label: "Appointments", icon: Calendar },
  { href: "/admin/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/admin/content", label: "Content", icon: FileText },
];

export default function AdminDashboard() {
  const router = useRouter();
  const [admin, setAdmin] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => {
        if (data.admin) setAdmin(data.admin);
        else router.push("/admin/login");
      })
      .catch(() => router.push("/admin/login"));
  }, [router]);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    toast.success("Logged out");
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-64 bg-navy-900 text-white flex flex-col">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-lg font-bold">Chamadia Admin</h2>
          {admin && <p className="text-white/60 text-sm mt-1">{admin.name}</p>}
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {sidebarLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors text-sm"
            >
              <link.icon className="w-5 h-5" />
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10 space-y-2">
          <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors text-sm w-full">
            <Settings className="w-5 h-5" />
            Settings
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:text-white hover:bg-red-500/20 transition-colors text-sm w-full"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-navy-900">Dashboard</h1>
          <p className="text-gray-500">Welcome back, {admin?.name || "Admin"}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Total Properties", value: "0", icon: Home },
            { label: "Total Leads", value: "0", icon: Users },
            { label: "Appointments", value: "0", icon: Calendar },
            { label: "Projects", value: "0", icon: Building2 },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-gray-500">{stat.label}</p>
                <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-navy-900" />
                </div>
              </div>
              <p className="text-3xl font-bold text-navy-900">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
          <BarChart3 className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-navy-900 mb-2">Analytics Coming Soon</h3>
          <p className="text-gray-500">Detailed analytics and reports will be available soon.</p>
        </div>
      </main>
    </div>
  );
}
