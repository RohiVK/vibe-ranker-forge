import { GraduationCap, Instagram, Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-16 px-6 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Brand */}
          <div className="text-center md:text-left mb-8 md:mb-0">
            <div className="flex items-center space-x-2 mb-4 justify-center md:justify-start">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold font-display text-foreground">
                FacultyRank
              </span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Empowering students to make informed academic decisions through 
              authentic professor reviews and ratings.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a href="#" className="p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-smooth">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-smooth">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-smooth">
              <Instagram className="w-5 h-5" />
            </a>
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