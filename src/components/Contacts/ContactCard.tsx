
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Contact, getCompanyById } from "@/data/mockData";
import { Building2, Mail, Phone } from "lucide-react";

interface ContactCardProps {
  contact: Contact;
}

export function ContactCard({ contact }: ContactCardProps) {
  const company = getCompanyById(contact.companyId);
  
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center">
          <Avatar className="h-20 w-20">
            <AvatarImage src={contact.avatar} alt={`${contact.firstName} ${contact.lastName}`} />
            <AvatarFallback>
              {contact.firstName.charAt(0)}
              {contact.lastName.charAt(0)}
            </AvatarFallback>
          </Avatar>
          
          <h3 className="mt-4 text-xl font-semibold">
            {contact.firstName} {contact.lastName}
          </h3>
          <p className="text-sm text-muted-foreground">{contact.position}</p>
          
          {company && (
            <div className="mt-2 flex items-center gap-1">
              <Building2 className="h-3 w-3 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{company.name}</span>
            </div>
          )}
        </div>
        
        <div className="mt-6 space-y-2">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <a 
              href={`mailto:${contact.email}`} 
              className="text-sm hover:underline"
            >
              {contact.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <a 
              href={`tel:${contact.phone}`} 
              className="text-sm hover:underline"
            >
              {contact.phone}
            </a>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between border-t bg-muted/50 px-6 py-3">
        <Button asChild variant="ghost" size="sm">
          <a href={`mailto:${contact.email}`}>
            Email
          </a>
        </Button>
        <Button asChild size="sm">
          <Link to={`/contacts/${contact.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
