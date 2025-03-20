
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Deal, formatCurrency, formatDate, getCompanyById, getContactById } from "@/data/mockData";
import { Building2, Calendar, DollarSign, User } from "lucide-react";

interface DealCardProps {
  deal: Deal;
}

export function DealCard({ deal }: DealCardProps) {
  const company = getCompanyById(deal.companyId);
  const contact = getContactById(deal.contactId);
  
  const getStageBadgeVariant = (stage: string) => {
    switch (stage) {
      case 'lead':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'qualified':
        return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300';
      case 'proposal':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'negotiation':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300';
      case 'closed-won':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'closed-lost':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };
  
  const getStageLabel = (stage: string) => {
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
  
  return (
    <Card className="cursor-pointer transition-all hover:shadow-md">
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold">{deal.name}</h3>
          <Badge className={`${getStageBadgeVariant(deal.stage)}`}>
            {getStageLabel(deal.stage)}
          </Badge>
        </div>
        
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">{formatCurrency(deal.value)}</span>
          </div>
          
          {company && (
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{company.name}</span>
            </div>
          )}
          
          {contact && (
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{contact.firstName} {contact.lastName}</span>
            </div>
          )}
          
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Closing: {formatDate(deal.closingDate)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
