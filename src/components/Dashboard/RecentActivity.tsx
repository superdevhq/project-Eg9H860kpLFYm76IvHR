
import { formatDate, activities, getCompanyById, getContactById, getDealById } from "@/data/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Calendar, FileText } from "lucide-react";

export function RecentActivity() {
  // Sort activities by date (newest first)
  const sortedActivities = [...activities].sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'call':
        return <Phone className="h-4 w-4" />;
      case 'email':
        return <Mail className="h-4 w-4" />;
      case 'meeting':
        return <Calendar className="h-4 w-4" />;
      case 'note':
        return <FileText className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const getActivityDetails = (activity: typeof activities[0]) => {
    const company = activity.companyId ? getCompanyById(activity.companyId) : null;
    const contact = activity.contactId ? getContactById(activity.contactId) : null;
    const deal = activity.dealId ? getDealById(activity.dealId) : null;

    return {
      company,
      contact,
      deal
    };
  };

  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {sortedActivities.map((activity) => {
            const { company, contact, deal } = getActivityDetails(activity);
            
            return (
              <div key={activity.id} className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  {getActivityIcon(activity.type)}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{activity.title}</p>
                    <span className="text-xs text-muted-foreground">
                      {formatDate(activity.createdAt)}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {activity.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {company && (
                      <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                        {company.name}
                      </span>
                    )}
                    {contact && (
                      <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-800 dark:bg-green-900 dark:text-green-300">
                        {contact.firstName} {contact.lastName}
                      </span>
                    )}
                    {deal && (
                      <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs text-purple-800 dark:bg-purple-900 dark:text-purple-300">
                        {deal.name}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
