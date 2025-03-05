
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="relative space-y-6 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Ace Your Exams with AI-Powered Question Prediction
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Upload your textbooks & past papers, and let AI predict exam questions with answers. Start preparing smarter today.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" className="gap-2">
            Get Started for Free
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};
