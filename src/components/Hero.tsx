
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4" style={{ 
      background: "repeating-radial-gradient(circle, #ff00ff, #ffff00 30px, #00ffff 30px, #ff00ff 60px)"
    }}>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-transparent" style={{
        backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><text y=\".9em\" font-size=\"90\">💩</text></svg>')",
        backgroundSize: "100px 100px"
      }} />
      <div className="relative space-y-6 max-w-4xl mx-auto animate-fade-in p-8" style={{
        backgroundColor: "rgba(0,0,0,0.7)",
        border: "10px solid",
        borderImageSlice: "1",
        borderImageSource: "linear-gradient(to right, #ff0000, #00ff00, #0000ff, #ff0000)"
      }}>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight" style={{
          color: "#ffff00",
          textShadow: "5px 5px 0px #ff0000, 10px 10px 0px #00ff00",
          fontFamily: "Impact, fantasy"
        }}>
          Ace Your Exams with AI-Powered Question Prediction
        </h1>
        <p className="text-xl text-white max-w-2xl mx-auto" style={{
          fontFamily: "Papyrus, fantasy",
          letterSpacing: "2px",
          wordSpacing: "5px"
        }}>
          Upload your textbooks & past papers, and let AI predict exam questions with answers. Start preparing smarter today.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button 
            size="lg" 
            className="gap-2 animate-pulse"
            onClick={() => navigate("/auth")}
            style={{
              background: "linear-gradient(to right, #ff0000, #ffff00)",
              color: "#0000ff",
              fontWeight: "bold",
              fontSize: "24px",
              padding: "20px 30px",
              border: "5px dashed #00ff00"
            }}
          >
            Get Started for Free
            <ArrowRight className="w-8 h-8" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            style={{
              background: "#00ff00",
              color: "#ff00ff",
              fontWeight: "bold",
              fontSize: "24px",
              padding: "20px 30px",
              border: "5px dotted #ff0000",
              transform: "rotate(-5deg)"
            }}
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};
