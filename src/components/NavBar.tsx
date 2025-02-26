
import { Button } from "@/components/ui/button";

export const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-bold text-xl">ExamAI</div>
        <div className="flex items-center gap-4">
          <Button variant="ghost">Features</Button>
          <Button variant="ghost">Pricing</Button>
          <Button variant="ghost">Contact</Button>
          <Button>Sign In</Button>
        </div>
      </div>
    </nav>
  );
};
