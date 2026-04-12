"use client";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  Award,
  ChartNoAxesCombined,
  ChevronDown,
  Code,
  FileCode,
  FileText,
  LayoutDashboard,
  LifeBuoy,
  LogOut,
  Mail,
  NotebookPen,
  Send,
  Settings,
  Users,
  Video,
} from "lucide-react";
import { signOut } from "next-auth/react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function SidebarNav() {
  const pathname = usePathname();
  const [projectsOpen, setProjectsOpen] = useState(false);

  // Check if any project route is active
  const isProjectActive = pathname.startsWith("/admin/projects");
  const menuItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      href: "/admin",
      isActive: pathname === "/admin",
    },
    {
      title: "Analytics",
      icon: ChartNoAxesCombined,
      href: "/admin/analytics",
      isActive: pathname === "/analytics",
    },

    {
      title: "Response",
      icon: Mail,
      href: "/admin/response",
      isActive: pathname === "/admin/response",
    },
    {
      title: "Get Started",
      icon: Send,
      href: "/admin/get-started",
      isActive: pathname === "/admin/get-started",
    },
    {
      title: "Meeting",
      icon: Video,
      href: "/admin/meetings",
      isActive: pathname === "/admin/meetings",
    },
    {
      title: "Testimonials",
      icon: Award,
      href: "/admin/testimonials",
      isActive: pathname === "/admin/testimonials",
    },
    {
      title: "Blogs",
      icon: NotebookPen,
      href: "/admin/blogs",
      isActive: pathname === "/admin/blogs",
    },
    {
      title: "Users",
      icon: Users,
      href: "/admin/users",
      isActive: pathname === "/admin/users",
    },
  ];

  // Project sub-items
  const projectSubItems = [
    {
      title: "Web Development",
      icon: Code,
      href: "/admin/projects/web-development",
      isActive: pathname === "/admin/projects/web-development",
    },
    {
      title: "Graphic Design",
      icon: FileCode,
      href: "/admin/projects/graphic-design",
      isActive: pathname === "/admin/projects/graphic-design",
    },
  ];

  // Settings menu items
  const settingsItems = [
    {
      title: "Settings",
      icon: Settings,
      href: "#",
      isActive: false,
    },
    {
      title: "Help",
      icon: LifeBuoy,
      href: "#",
      isActive: false,
    },
  ];
  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Menu</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {/* Regular menu items */}
            {menuItems.slice(0, 4).map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  isActive={item.isActive}
                  tooltip={item.title}
                >
                  <Link href={item.href}>
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}

            {/* Collapsible Projects Menu */}
            <Collapsible
              open={projectsOpen}
              onOpenChange={setProjectsOpen}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    isActive={isProjectActive}
                    tooltip="Projects"
                  >
                    <FileText className="h-4 w-4" />
                    <span>Projects</span>
                    <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {projectSubItems.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton
                          asChild
                          isActive={subItem.isActive}
                        >
                          <Link href={subItem.href}>
                            <subItem.icon className="h-3.5 w-3.5 mr-1" />
                            {subItem.title}
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>

            {/* Remaining regular menu items */}
            {menuItems.slice(4).map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  isActive={item.isActive}
                  tooltip={item.title}
                >
                  <Link href={item.href}>
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupLabel>Settings</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {settingsItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild tooltip={item.title}>
                  <Link href={item.href}>
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip={"Sign Out"}>
                <div>
                  <LogOut className="h-4 w-4" />
                  <span className="cursor-pointer" onClick={() => signOut()}>
                    Sign Out
                  </span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  );
}
