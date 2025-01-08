// ?? Step 7 - Membuat Component DashboardSidebar (2)
// Import Component DashboardSidebar
// Delete component Link
import DashboardSidebar from "@/components/DashboardSidebar";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    // Whole Screen
    <section className={`w-full h-screen flex ${jetbrainsMono.className}`}>
      {/* Left Side */}
      {/* Step 7 - Membuat Component DashboardSidebar (3) */}
      {/* Mengganti aside yang ada dengan component DashboardSidebar */}
      <DashboardSidebar />

      {/* Right Side */}
      <main className="w-full h-full bg-white dark:bg-zinc-900/30 p-4">
        {/* Content */}
        {children}
      </main>
    </section>
  );
};

export default DashboardLayout;