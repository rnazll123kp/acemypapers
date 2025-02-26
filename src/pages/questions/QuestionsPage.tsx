
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Button } from "@/components/ui/button";
import { Brain, Download } from "lucide-react";

const QuestionsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="p-4 md:pl-64 md:p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Predicted Questions</h1>
            <p className="text-muted-foreground">
              AI-generated questions based on your study materials
            </p>
          </div>
          <Button className="gap-2">
            <Download className="w-4 h-4" />
            Export All
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {/* Question Cards */}
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg p-4 md:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Sample Question {index}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    This is a sample predicted question based on your uploads.
                  </p>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Brain className="w-4 h-4" />
                      Generate Answer
                    </Button>
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

export default QuestionsPage;
