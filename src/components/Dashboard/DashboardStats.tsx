
import { 
  Building2, 
  Users, 
  BarChart3, 
  TrendingUp 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { companies, contacts, deals, formatCurrency } from "@/data/mockData";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  description: string;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
}

const StatCard = ({ title, value, icon, description, trend, trendValue }: StatCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="h-8 w-8 rounded-md bg-primary/10 p-1.5 text-primary">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
        {trend && trendValue && (
          <div className="mt-2 flex items-center gap-1 text-xs">
            <span
              className={
                trend === "up"
                  ? "text-green-500"
                  : trend === "down"
                  ? "text-red-500"
                  : "text-muted-foreground"
              }
            >
              {trend === "up" ? "↑" : trend === "down" ? "↓" : "→"} {trendValue}
            </span>
            <span className="text-muted-foreground">vs last month</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export function DashboardStats() {
  // Calculate total deal value
  const totalDealValue = deals.reduce((sum, deal) => sum + deal.value, 0);
  
  // Calculate open deals value (not closed-won or closed-lost)
  const openDeals = deals.filter(
    (deal) => deal.stage !== "closed-won" && deal.stage !== "closed-lost"
  );
  const openDealsValue = openDeals.reduce((sum, deal) => sum + deal.value, 0);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Companies"
        value={companies.length}
        icon={<Building2 className="h-full w-full" />}
        description="Total companies in your CRM"
        trend="up"
        trendValue="12%"
      />
      <StatCard
        title="Total Contacts"
        value={contacts.length}
        icon={<Users className="h-full w-full" />}
        description="Total contacts in your CRM"
        trend="up"
        trendValue="8%"
      />
      <StatCard
        title="Open Deals"
        value={openDeals.length}
        icon={<BarChart3 className="h-full w-full" />}
        description={`Worth ${formatCurrency(openDealsValue)}`}
        trend="neutral"
        trendValue="0%"
      />
      <StatCard
        title="Total Pipeline"
        value={formatCurrency(totalDealValue)}
        icon={<TrendingUp className="h-full w-full" />}
        description="Total value of all deals"
        trend="up"
        trendValue="15%"
      />
    </div>
  );
}
