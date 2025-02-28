
import { LucideIcon } from "lucide-react";

interface FeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const Feature = ({ icon: Icon, title, description }: FeatureProps) => {
  // Generate random rotation between -5 and 5 degrees
  const rotation = Math.floor(Math.random() * 10) - 5;
  
  // Generate ugly background color
  const colors = ["#ff00ff", "#00ffff", "#ffff00", "#ff0000", "#00ff00"];
  const bgColor = colors[Math.floor(Math.random() * colors.length)];
  
  // Generate contrasting text color
  const textColor = bgColor === "#ff00ff" || bgColor === "#ff0000" ? "#00ff00" : "#ff00ff";
  
  return (
    <div 
      className="p-6 rounded-xl border-4 border-dashed transition-all duration-300 hover:transform hover:-translate-y-1 animate-fade-in ugly-shadow"
      style={{ 
        backgroundColor: bgColor,
        transform: `rotate(${rotation}deg)`,
        transition: "transform 0.3s ease"
      }}
    >
      <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center mb-4 mx-auto" style={{
        border: "3px dotted #000000"
      }}>
        <Icon className="w-8 h-8" style={{ color: textColor }} />
      </div>
      <h3 className="text-xl font-bold mb-2" style={{ 
        color: "#000000",
        textAlign: "center",
        textDecoration: "underline wavy",
        fontFamily: "Courier New, monospace"
      }}>
        {title.toUpperCase()}
      </h3>
      <p style={{ 
        color: textColor,
        fontWeight: "bold",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        fontSize: "18px",
        letterSpacing: "1px"
      }}>
        {description}
      </p>
    </div>
  );
};
