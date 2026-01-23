import { Link } from "react-router-dom";
import { User } from "lucide-react";
import logo from "@/assets/logo.png";

export function DashboardHeader() {
  return (
    <header className="glass-navbar fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Artix Hosting" className="h-10 w-10" />
            <span className="text-xl font-bold text-foreground">Artix Hosting</span>
          </Link>

          <div className="flex items-center gap-3 text-muted-foreground">
            <User className="h-5 w-5" />
            <span className="font-medium">Username</span>
          </div>
        </div>
      </div>
    </header>
  );
}
