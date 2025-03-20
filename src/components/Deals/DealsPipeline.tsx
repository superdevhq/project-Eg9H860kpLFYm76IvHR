
import { useState } from "react";
import { Deal, deals } from "@/data/mockData";
import { DealCard } from "./DealCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";

export function DealsPipeline() {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter deals based on search query
  const filteredDeals = deals.filter(deal => 
    deal.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Group deals by stage
  const stageGroups = {
    lead: filteredDeals.filter(deal => deal.stage === 'lead'),
    qualified: filteredDeals.filter(deal => deal.stage === 'qualified'),
    proposal: filteredDeals.filter(deal => deal.stage === 'proposal'),
    negotiation: filteredDeals.filter(deal => deal.stage === 'negotiation'),
    'closed-won': filteredDeals.filter(deal => deal.stage === 'closed-won'),
    'closed-lost': filteredDeals.filter(deal => deal.stage === 'closed-lost')
  };
  
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
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-3xl font-bold tracking-tight">Deals Pipeline</h1>
        <Button className="w-full sm:w-auto">
          <Plus className="mr-2 h-4 w-4" /> Add Deal
        </Button>
      </div>
      
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search deals..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <div className="grid grid-cols-1 gap-6 overflow-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {Object.entries(stageGroups).map(([stage, stageDeals]) => (
          <div key={stage} className="flex h-full flex-col">
            <div className="mb-2 flex items-center gap-2">
              <div className={`h-3 w-3 rounded-full ${getStageColor(stage)}`} />
              <h3 className="font-medium">{getStageDisplayName(stage)}</h3>
              <span className="ml-auto rounded-full bg-muted px-2 py-0.5 text-xs font-medium">
                {stageDeals.length}
              </span>
            </div>
            
            <div className="flex-1 space-y-3">
              {stageDeals.map(deal => (
                <DealCard key={deal.id} deal={deal} />
              ))}
              
              {stageDeals.length === 0 && (
                <div className="flex h-20 items-center justify-center rounded-lg border border-dashed">
                  <p className="text-xs text-muted-foreground">No deals</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
