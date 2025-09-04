import { Card } from "@/components/ui/card";
import { UserPlus, Search, MessageSquare, Trophy } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Sign Up",
    description: "Create your account with your university email to join our verified student community."
  },
  {
    icon: Search,
    step: "02", 
    title: "Find Professors",
    description: "Search for professors by name, subject, or university using our comprehensive database."
  },
  {
    icon: MessageSquare,
    step: "03",
    title: "Read & Rate",
    description: "Read authentic reviews from fellow students and share your own experiences."
  },
  {
    icon: Trophy,
    step: "04",
    title: "Make Better Choices",
    description: "Use insights to choose the best professors and courses for your academic success."
  }
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            <span className="text-foreground">How It</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Getting started is simple. Follow these four easy steps to begin 
            making smarter academic decisions.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="p-8 bg-card border-border hover:shadow-card hover:shadow-primary/20 transition-all duration-500 text-center group relative hover:-translate-y-3 hover:scale-105 cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 group-hover:shadow-glow">
                {step.step}
              </div>

              <div className="pt-4">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-xl bg-gradient-primary/10 group-hover:bg-gradient-primary/30 group-hover:scale-110 transition-all duration-300 group-hover:-rotate-6">
                    <step.icon className="w-8 h-8 text-primary group-hover:text-primary-glow transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {step.description}
                </p>
              </div>

              {/* Connector Line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-primary/30 transform -translate-y-1/2 group-hover:bg-gradient-primary/60 transition-colors duration-300" />
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};