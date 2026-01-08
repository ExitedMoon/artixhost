import { Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const Navbar = () => {
  return <nav className="glass-navbar fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Server className="h-7 w-7 text-primary" />
            <span className="text-xl font-bold text-foreground">Artix Hosting    </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Benefits
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Pricing
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              FAQ
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/dashboard">
              <Button variant="ghost" className="rounded-xl font-medium">
                Sign In
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="glass" className="rounded-xl">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navbar;