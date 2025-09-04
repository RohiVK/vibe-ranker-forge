import { Button } from "@/components/ui/button";
import { Star, TrendingUp, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Faculty ranking platform" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float-slow">
        <div className="w-16 h-16 rounded-full bg-gradient-primary opacity-20 blur-xl" />
      </div>
      <div className="absolute bottom-32 right-16 animate-float-slower">
        <div className="w-24 h-24 rounded-full bg-accent/20 blur-2xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-8 transition-smooth hover:shadow-glow">
          <TrendingUp className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-muted-foreground">
            Trusted by 50,000+ students
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 leading-tight">
          <span className="text-foreground">Rate Your</span>
          <br />
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Professors
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          Make informed decisions about your education. Discover top-rated faculty, 
          read authentic student reviews, and find the perfect professors for your academic journey.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button variant="hero" size="lg" className="min-w-48">
            Start Rating Now
          </Button>
          <Button variant="secondary" size="lg" className="min-w-48">
            Browse Professors
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center gap-1 text-accent mb-1">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
            <div className="text-2xl font-bold text-foreground">1M+</div>
            <div className="text-sm text-muted-foreground">Professor Reviews</div>
          </div>
          
          <div className="flex flex-col items-center space-y-2">
            <Users className="w-6 h-6 text-primary mb-1" />
            <div className="text-2xl font-bold text-foreground">50K+</div>
            <div className="text-sm text-muted-foreground">Active Students</div>
          </div>
          
          <div className="flex flex-col items-center space-y-2">
            <TrendingUp className="w-6 h-6 text-accent mb-1" />
            <div className="text-2xl font-bold text-foreground">2K+</div>
            <div className="text-sm text-muted-foreground">Universities</div>
          </div>
        </div>
      </div>
    </section>
  );
};