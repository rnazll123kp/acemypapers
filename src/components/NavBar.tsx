
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b-8 border-dashed border-primary">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="font-bold text-3xl blink-text" style={{ letterSpacing: "-2px", transform: "rotate(-2deg)" }}>
          ExamAI
        </div>
        <div className="flex items-center gap-1">
          <Button 
            variant="outline" 
            className="text-lg uppercase" 
            style={{ 
              background: "linear-gradient(to right, #ff0000, #00ff00)", 
              transform: "skewX(-10deg)",
              border: "3px dotted #ff00ff"
            }}
          >
            Features
          </Button>
          <Button 
            variant="ghost" 
            className="text-lg uppercase"
            style={{ 
              background: "repeating-linear-gradient(45deg, #ff00ff, #ff00ff 10px, #00ffff 10px, #00ffff 20px)",
              transform: "skewX(10deg)"
            }}
          >
            Pricing
          </Button>
          <Button 
            variant="ghost" 
            className="text-lg uppercase"
            style={{ border: "5px double #ff0000", padding: "0 25px" }}
          >
            Contact
          </Button>
          <Button 
            onClick={() => navigate("/auth")}
            className="text-lg uppercase ugly-shadow"
            style={{ 
              background: "#ffff00", 
              color: "#ff00ff",
              fontWeight: "bold",
              border: "3px solid #000",
              transform: "rotate(2deg)"
            }}
          >
            Sign In
          </Button>
        </div>
      </div>
    </nav>
  );
};
