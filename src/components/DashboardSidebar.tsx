import { LayoutDashboard, Server, Wallet, User } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    title: "Dashboard",
    url: "https://my.artix.host/",
    icon: LayoutDashboard,
    external: true,
  },
  {
    title: "My Servers",
    url: "/dashboard",
    icon: Server,
    external: false,
  },
  {
    title: "Finance",
    url: "/dashboard/finance",
    icon: Wallet,
    external: false,
  },
  {
    title: "Account",
    url: "/dashboard/account",
    icon: User,
    external: false,
  },
];

export function DashboardSidebar() {
  return (
    <Sidebar collapsible="none" className="border-r border-border/50 bg-background/50 backdrop-blur-sm pt-16">
      <SidebarContent className="pt-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    {item.external ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.title}</span>
                      </a>
                    ) : (
                      <NavLink
                        to={item.url}
                        end
                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                        activeClassName="bg-primary/10 text-primary font-medium"
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.title}</span>
                      </NavLink>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
