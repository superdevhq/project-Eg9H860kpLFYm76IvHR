
import { DashboardStats } from "@/components/Dashboard/DashboardStats";
import { RecentActivity } from "@/components/Dashboard/RecentActivity";
import { DealsByStage } from "@/components/Dashboard/DealsByStage";

const Index = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      
      <DashboardStats />
      
      <div className="grid gap-6 lg:grid-cols-3">
        <RecentActivity />
        <DealsByStage />
      </div>
    </div>
  );
};

export default Index;
