import { Card } from "@/components/ui/card";
import { Search, MessageSquare, TrendingUp, Shield, BookOpen, Users } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Smart Search",
    description: "Find professors by subject, rating, or teaching style with our advanced filtering system."
  },
  {
    icon: MessageSquare,
    title: "Authentic Reviews",
    description: "Read genuine student feedback verified through our academic email verification system."
  },
  {
    icon: TrendingUp,
    title: "Rating Analytics",
    description: "See detailed breakdowns of teaching quality, difficulty, and overall satisfaction ratings."
  },
  {
    icon: Shield,
    title: "Verified Students",
    description: "All reviews come from verified university students to ensure authenticity and quality."
  },
  {
    icon: BookOpen,
    title: "Course Insights",
    description: "Get specific feedback about courses, assignments, and teaching methodologies."
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Join a community of students helping each other make better academic choices."
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            <span className="text-foreground">Why Choose</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              FacultyRank?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We've built the most comprehensive platform for student feedback, 
            helping you make informed decisions about your education.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card border-border hover:shadow-card hover:shadow-glow/50 transition-all duration-500 hover:-translate-y-2 hover:scale-105 group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-start space-y-4">
                <div className="p-3 rounded-xl bg-gradient-primary/10 group-hover:bg-gradient-primary/30 group-hover:scale-110 transition-all duration-300 group-hover:rotate-3">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-glow transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};