import logo from "@/assets/logo.png";

const Footer = () => {
  return <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Artix Hosting" className="h-6 w-6" />
            <span className="text-lg font-bold text-foreground">Artix Hosting </span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="https://discord.gg/lovable-dev" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-1">
              💬 Discord
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2026 artix.host. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;