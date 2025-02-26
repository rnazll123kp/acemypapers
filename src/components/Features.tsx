
import { Book, Brain, FileCheck, TestTube, Calendar } from "lucide-react";
import { Feature } from "./Feature";

export const Features = () => {
  const features = [
    {
      icon: Book,
      title: "Upload Textbooks & Past Papers",
      description: "AI scans and extracts important topics from your study materials instantly.",
    },
    {
      icon: Brain,
      title: "Predicts Likely Questions",
      description: "Advanced AI detects patterns and suggests potential exam questions.",
    },
    {
      icon: FileCheck,
      title: "Generates Answers Instantly",
      description: "Get AI-generated model answers based on your textbook content.",
    },
    {
      icon: TestTube,
      title: "Mock Test Generator",
      description: "Create practice tests from predicted questions to test your knowledge.",
    },
    {
      icon: Calendar,
      title: "Smart Revision Planner",
      description: "AI suggests personalized study schedules for better preparation.",
    },
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-background to-background/50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Feature key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};
