
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Welcome } from "@/components/dashboard/Welcome";
import { FileUpload } from "@/components/dashboard/FileUpload";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="p-4 md:pl-64 md:p-8">
        <Welcome />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
          <div className="lg:col-span-2 space-y-4 md:space-y-8">
            <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg p-4 md:p-6">
              <h2 className="text-xl font-semibold mb-4">Upload Study Materials</h2>
              <FileUpload />
            </div>
          </div>
          <div className="space-y-4 md:space-y-8">
            <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg p-4 md:p-6">
              <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Files Uploaded</span>
                  <span className="font-medium">0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Questions Generated</span>
                  <span className="font-medium">0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Mock Tests Created</span>
                  <span className="font-medium">0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
