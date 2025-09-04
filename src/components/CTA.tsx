import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 mb-8">
          <Star className="w-4 h-4 text-accent fill-current" />
          <span className="text-sm font-medium text-muted-foreground">
            Join thousands of successful students
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl font-bold font-display mb-6 leading-tight">
          <span className="text-foreground">Ready to Find Your</span>
          <br />
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Perfect Professor?
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Don't leave your education to chance. Join FacultyRank today and start 
          making informed decisions about your academic future.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button variant="hero" size="lg" className="min-w-48 group">
            Get Started Free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
          </Button>
          <Button variant="outline" size="lg" className="min-w-48">
            Browse Reviews
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-accent fill-current" />
            <span>Free to use</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-muted-foreground/30 rounded-full" />
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-accent fill-current" />
            <span>Verified students only</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-muted-foreground/30 rounded-full" />
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-accent fill-current" />
            <span>No spam, ever</span>
          </div>
        </div>
      </div>
    </section>
  );
};