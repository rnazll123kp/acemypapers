
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Button } from "@/components/ui/button";
import { Bell, User, Lock, Mail } from "lucide-react";

const SettingsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="p-4 md:pl-64 md:p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground">
            Manage your account preferences and notifications
          </p>
        </div>

        <div className="space-y-4 md:space-y-8 max-w-3xl">
          {/* Profile Settings */}
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg p-4 md:p-6">
            <div className="flex items-center gap-4 mb-4">
              <User className="w-5 h-5" />
              <h2 className="text-xl font-semibold">Profile Settings</h2>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <h3 className="font-medium">Display Name</h3>
                  <p className="text-sm text-muted-foreground">
                    How your name appears to other users
                  </p>
                </div>
                <Button variant="outline">Update</Button>
              </div>
            </div>
          </div>

          {/* Account Security */}
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg p-4 md:p-6">
            <div className="flex items-center gap-4 mb-4">
              <Lock className="w-5 h-5" />
              <h2 className="text-xl font-semibold">Security</h2>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <h3 className="font-medium">Password</h3>
                  <p className="text-sm text-muted-foreground">
                    Update your password regularly
                  </p>
                </div>
                <Button variant="outline">Change</Button>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg p-4 md:p-6">
            <div className="flex items-center gap-4 mb-4">
              <Bell className="w-5 h-5" />
              <h2 className="text-xl font-semibold">Notifications</h2>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <h3 className="font-medium">Email Notifications</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive updates about your study progress
                  </p>
                </div>
                <Button variant="outline">Configure</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SettingsPage;
