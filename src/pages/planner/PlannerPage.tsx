
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const PlannerPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="p-4 md:pl-64 md:p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Study Planner</h1>
            <p className="text-muted-foreground">
              AI-powered study schedule based on your goals
            </p>
          </div>
          <Button className="gap-2">
            <CalendarIcon className="w-4 h-4" />
            Generate Plan
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Study Sessions */}
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg p-4 md:p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">Study Session {index}</h3>
                  <div className="flex items-center text-muted-foreground gap-2 mb-4">
                    <Clock className="w-4 h-4" />
                    <span>2 hours</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Focus on key topics and practice questions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default PlannerPage;
