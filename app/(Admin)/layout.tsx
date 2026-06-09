import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Logo from "../(Main)/components/logo";
import "../globals.css";
import { DashboardShell } from "./Component/dashboard-shell";
import { DashboardSidebar } from "./Component/dashboard-sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  title: "Admin Dashboard",
  description: "Admin Dashboard - Private Area",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          <div className="flex min-h-screen w-full flex-col">
            <div className="sticky bg-sidebar px-[18px] z-[50] h-14 justify-between top-0 left-0 w-full items-center flex">
              <SidebarTrigger />
              <Link href="/">
                <Logo />
              </Link>
            </div>
            <div className="flex relative flex-1">
              <DashboardSidebar />
              <DashboardShell>{children}</DashboardShell>
            </div>
          </div>
        </SidebarProvider>
        <Toaster />
      </body>
    </html>
  );
}
