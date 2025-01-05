import DashboardContent from "@/components/Dashboard";
import { Suspense } from "react";

export const revalidate = 10; // Revalidate every 60 seconds

export default function DashboardPage() {
  return (
    <Suspense
      fallback={
        <div className="bg-black min-h-screen flex items-center justify-center text-white font-relish text-xl sm:text-2xl animate-pulse px-4 text-center">
          Its Agentic Apps szn
        </div>
      }
    >
      <DashboardContent />
    </Suspense>
  );
}
