import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Artix Hosting" className="h-10 w-10" />
            <span className="text-lg font-bold text-foreground">Artix Hosting</span>
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