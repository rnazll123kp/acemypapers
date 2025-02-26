
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export const Welcome = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold">Welcome, User!</h1>
        <p className="text-muted-foreground">
          Upload your study materials and let AI predict your exam questions.
        </p>
      </div>
      <Button className="gap-2">
        <MessageSquare className="w-4 h-4" />
        Ask AI
      </Button>
    </div>
  );
};
