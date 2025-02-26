
import { FileText, Brain, Calendar, Settings, Upload, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface SidebarLinkProps {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

const SidebarLink = ({ href, icon: Icon, children, active, onClick }: SidebarLinkProps) => (
  <Button
    asChild
    variant="ghost"
    className={cn(
      "w-full justify-start gap-2",
      active && "bg-primary/10 text-primary"
    )}
    onClick={onClick}
  >
    <Link to={href}>
      <Icon className="h-4 w-4" />
      {children}
    </Link>
  </Button>
);

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={toggleSidebar}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Sidebar */}
      <div className={cn(
        "fixed inset-0 z-40 transform transition-transform duration-200 ease-in-out md:translate-x-0 md:static",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="h-screen w-64 border-r border-white/10 bg-background/80 backdrop-blur-lg p-4 flex flex-col gap-2">
          <div className="h-16 flex items-center px-2">
            <Link to="/" className="font-bold text-xl">
              ExamAI
            </Link>
          </div>
          <nav className="space-y-1">
            <SidebarLink href="/dashboard" icon={Upload} active onClick={() => setIsOpen(false)}>
              My Uploads
            </SidebarLink>
            <SidebarLink href="/dashboard/questions" icon={Brain} onClick={() => setIsOpen(false)}>
              Predicted Questions
            </SidebarLink>
            <SidebarLink href="/dashboard/planner" icon={Calendar} onClick={() => setIsOpen(false)}>
              Study Planner
            </SidebarLink>
            <SidebarLink href="/dashboard/settings" icon={Settings} onClick={() => setIsOpen(false)}>
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
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
