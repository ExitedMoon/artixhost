import { Button } from "@/components/ui/button";
import { Server, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="glass-navbar fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Server className="h-7 w-7 text-primary" />
              <span className="text-xl font-bold text-foreground">artix.host</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-24 container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="glass-card">
            <h1 className="text-3xl font-bold mb-4 text-foreground">Dashboard</h1>
            <p className="text-muted-foreground mb-6">
              Welcome to your personal account! Server management coming soon.
            </p>
            <Link to="/">
              <Button variant="outline" className="rounded-xl">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
