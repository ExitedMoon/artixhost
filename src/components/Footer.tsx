import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Artix Hosting" className="h-10 w-10" />
            <span className="text-lg font-bold text-foreground">Artix Hosting</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/tos" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <a href="mailto:abuse@artix.host" className="hover:text-foreground transition-colors">
              abuse@artix.host
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2026 artix.host. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;