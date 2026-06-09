import { SidebarInset } from "@/components/ui/sidebar";
import type React from "react";

interface DashboardShellProps {
  children: React.ReactNode;
}

export function DashboardShell({ children }: DashboardShellProps) {
  return <SidebarInset className="bg-background">{children}</SidebarInset>;
}
