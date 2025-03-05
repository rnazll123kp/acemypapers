
import { LucideIcon } from "lucide-react";

interface FeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const Feature = ({ icon: Icon, title, description }: FeatureProps) => {
  return (
    <div className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 transition-all duration-300 hover:transform hover:-translate-y-1 animate-fade-in">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};
