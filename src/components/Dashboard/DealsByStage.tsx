
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { deals, formatCurrency } from "@/data/mockData";

export function DealsByStage() {
  // Group deals by stage
  const stageGroups = {
    lead: deals.filter(deal => deal.stage === 'lead'),
    qualified: deals.filter(deal => deal.stage === 'qualified'),
    proposal: deals.filter(deal => deal.stage === 'proposal'),
    negotiation: deals.filter(deal => deal.stage === 'negotiation'),
    'closed-won': deals.filter(deal => deal.stage === 'closed-won'),
    'closed-lost': deals.filter(deal => deal.stage === 'closed-lost')
  };

  // Calculate total value for each stage
  const stageValues = Object.entries(stageGroups).map(([stage, stageDeals]) => {
    const totalValue = stageDeals.reduce((sum, deal) => sum + deal.value, 0);
    const count = stageDeals.length;
    
    return {
      stage,
      totalValue,
      count,
      formattedValue: formatCurrency(totalValue)
    };
  });

  // Get stage display names
  const getStageDisplayName = (stage: string) => {
    switch (stage) {
      case 'lead': return 'Lead';
      case 'qualified': return 'Qualified';
      case 'proposal': return 'Proposal';
      case 'negotiation': return 'Negotiation';
      case 'closed-won': return 'Closed Won';
      case 'closed-lost': return 'Closed Lost';
      default: return stage;
    }
  };

  // Get stage color
  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'lead': return 'bg-blue-500';
      case 'qualified': return 'bg-indigo-500';
      case 'proposal': return 'bg-purple-500';
      case 'negotiation': return 'bg-amber-500';
      case 'closed-won': return 'bg-green-500';
      case 'closed-lost': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Deals by Stage</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {stageValues.map(({ stage, totalValue, count, formattedValue }) => (
            <div key={stage} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`h-3 w-3 rounded-full ${getStageColor(stage)}`} />
                  <span className="text-sm font-medium">{getStageDisplayName(stage)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">{formattedValue}</span>
                  <span className="text-xs text-muted-foreground">({count} deals)</span>
                </div>
              </div>
              <div className="h-2 w-full rounded-full bg-secondary">
                <div 
                  className={`h-2 rounded-full ${getStageColor(stage)}`} 
                  style={{ 
                    width: `${Math.min(100, (totalValue / 500000) * 100)}%` 
                  }} 
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
