
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
    <div className="py-24" style={{ 
      background: "repeating-linear-gradient(45deg, #ff0000, #ff0000 10px, #ffff00 10px, #ffff00 20px)",
      border: "15px ridge #00ffff"
    }}>
      <div className="container" style={{ maxWidth: "95%" }}>
        <h2 className="text-4xl font-bold text-center mb-12 blink-text zigzag-border" style={{ 
          color: "#0000ff", 
          textShadow: "3px 3px 0 #ff00ff",
          marginBottom: "50px",
          padding: "20px",
          background: "#00ff00",
          fontFamily: "Impact, fantasy"
        }}>
          ⭐⭐⭐ KEY FEATURES ⭐⭐⭐
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" style={{
          padding: "0 20px"
        }}>
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};
