import { auth } from "@/auth";
import {
  Sidebar,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import SidebarNav from "./sidebar/sidebar-nav";

export async function DashboardSidebar() {
  const session = await auth();

  return (
    <Sidebar variant="inset" collapsible="icon">
      <SidebarHeader className=" h-14 ">
        <div className="md:hidden flex">
          <SidebarTrigger />
        </div>
      </SidebarHeader>
      <SidebarNav />
      <SidebarFooter className="border-t p-4">
        <div className="flex items-center gap-2 text-sm">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            A
          </div>
          {/* Add group-data-[collapsible=icon]:hidden to hide text in collapsed mode */}
          <div className="flex flex-col group-data-[collapsible=icon]:hidden">
            <span className="font-medium">{session?.user.name}</span>
            <span className="text-xs text-muted-foreground">
              {session?.user.email}
            </span>
          </div>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
