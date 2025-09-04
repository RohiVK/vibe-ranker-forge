import { GraduationCap, Twitter, Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-16 px-6 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold font-display text-foreground">
                FacultyRank
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Empowering students to make informed academic decisions through 
              authentic professor reviews and ratings.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-smooth">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-smooth">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-smooth">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <div className="space-y-3">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-smooth">
                Features
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-smooth">
                Pricing
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-smooth">
                API
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-smooth">
                Mobile App
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <div className="space-y-3">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-smooth">
                About
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-smooth">
                Careers
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-smooth">
                Privacy
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-smooth">
                Terms
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 FacultyRank. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-4 sm:mt-0">
            Made with ❤️ for students everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};