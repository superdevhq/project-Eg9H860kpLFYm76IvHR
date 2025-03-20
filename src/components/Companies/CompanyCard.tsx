
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Company, formatDate, getContactsByCompanyId, getDealsByCompanyId } from "@/data/mockData";
import { Building2, Users, BarChart3, ExternalLink } from "lucide-react";

interface CompanyCardProps {
  company: Company;
}

export function CompanyCard({ company }: CompanyCardProps) {
  const contacts = getContactsByCompanyId(company.id);
  const deals = getDealsByCompanyId(company.id);
  
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative h-32 bg-gradient-to-r from-primary/20 to-primary/5">
        <div className="absolute -bottom-10 left-4 h-20 w-20 overflow-hidden rounded-md border-4 border-background bg-background">
          <img 
            src={company.logo} 
            alt={company.name} 
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      
      <CardContent className="mt-12 pt-2">
        <h3 className="text-xl font-semibold">{company.name}</h3>
        <p className="text-sm text-muted-foreground">{company.industry}</p>
        
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{company.employees} employees</span>
          </div>
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{company.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{contacts.length} contacts</span>
          </div>
          <div className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{deals.length} deals</span>
          </div>
        </div>
        
        <div className="mt-4 flex items-center gap-2">
          <span className="text-xs text-muted-foreground">Added on {formatDate(company.createdAt)}</span>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between border-t bg-muted/50 px-6 py-3">
        <Button asChild variant="ghost" size="sm">
          <a href={company.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
            <ExternalLink className="h-3 w-3" />
            <span>Website</span>
          </a>
        </Button>
        <Button asChild size="sm">
          <Link to={`/companies/${company.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
