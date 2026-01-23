import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Server } from "lucide-react";

const Dashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <DashboardSidebar />
        
        <div className="flex-1 flex flex-col">
          <DashboardHeader />
          
          <main className="flex-1 pt-24 px-6 pb-6">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-3xl font-bold mb-6 text-foreground">My Servers</h1>
              
              <div className="glass-card p-8 text-center">
                <Server className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <h2 className="text-xl font-semibold mb-2 text-foreground">No servers yet</h2>
                <p className="text-muted-foreground">
                  You don't have any servers. Create your first server to get started!
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
