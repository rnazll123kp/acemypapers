
import { FileText, Brain, Calendar, Settings, Upload } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarLinkProps {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
  active?: boolean;
}

const SidebarLink = ({ href, icon: Icon, children, active }: SidebarLinkProps) => (
  <Button
    asChild
    variant="ghost"
    className={cn(
      "w-full justify-start gap-2",
      active && "bg-primary/10 text-primary"
    )}
  >
    <Link to={href}>
      <Icon className="h-4 w-4" />
      {children}
    </Link>
  </Button>
);

export const Sidebar = () => {
  return (
    <div className="h-screen w-64 border-r border-white/10 bg-background/80 backdrop-blur-lg p-4 flex flex-col gap-2 fixed left-0 top-0">
      <div className="h-16 flex items-center px-2">
        <Link to="/" className="font-bold text-xl">
          ExamAI
        </Link>
      </div>
      <nav className="space-y-1">
        <SidebarLink href="/dashboard" icon={Upload} active>
          My Uploads
        </SidebarLink>
        <SidebarLink href="/dashboard/questions" icon={Brain}>
          Predicted Questions
        </SidebarLink>
        <SidebarLink href="/dashboard/planner" icon={Calendar}>
          Study Planner
        </SidebarLink>
        <SidebarLink href="/dashboard/settings" icon={Settings}>
          Settings
        </SidebarLink>
      </nav>
      <div className="mt-auto space-y-2">
        <Button className="w-full">
          <FileText className="mr-2 h-4 w-4" />
          Upgrade to Premium
        </Button>
      </div>
    </div>
  );
};
