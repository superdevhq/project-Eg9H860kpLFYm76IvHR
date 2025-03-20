
export interface Company {
  id: string;
  name: string;
  industry: string;
  employees: number;
  revenue: string;
  location: string;
  website: string;
  logo: string;
  createdAt: string;
}

export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  companyId: string;
  avatar: string;
  createdAt: string;
}

export type DealStage = 'lead' | 'qualified' | 'proposal' | 'negotiation' | 'closed-won' | 'closed-lost';

export interface Deal {
  id: string;
  name: string;
  value: number;
  stage: DealStage;
  companyId: string;
  contactId: string;
  createdAt: string;
  closingDate: string;
}

export interface Activity {
  id: string;
  type: 'note' | 'call' | 'email' | 'meeting';
  title: string;
  description: string;
  createdAt: string;
  companyId?: string;
  contactId?: string;
  dealId?: string;
  userId: string;
}

// Mock Companies
export const companies: Company[] = [
  {
    id: '1',
    name: 'Acme Corporation',
    industry: 'Technology',
    employees: 250,
    revenue: '$25M',
    location: 'San Francisco, CA',
    website: 'https://acme.example.com',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300&h=300&fit=crop&q=80',
    createdAt: '2023-01-15T10:30:00Z'
  },
  {
    id: '2',
    name: 'Globex Industries',
    industry: 'Manufacturing',
    employees: 500,
    revenue: '$75M',
    location: 'Chicago, IL',
    website: 'https://globex.example.com',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300&h=300&fit=crop&q=80',
    createdAt: '2023-02-10T14:45:00Z'
  },
  {
    id: '3',
    name: 'Soylent Corp',
    industry: 'Food & Beverage',
    employees: 150,
    revenue: '$18M',
    location: 'Portland, OR',
    website: 'https://soylent.example.com',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300&h=300&fit=crop&q=80',
    createdAt: '2023-03-05T09:15:00Z'
  },
  {
    id: '4',
    name: 'Initech Software',
    industry: 'Technology',
    employees: 85,
    revenue: '$12M',
    location: 'Austin, TX',
    website: 'https://initech.example.com',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300&h=300&fit=crop&q=80',
    createdAt: '2023-04-20T11:00:00Z'
  },
  {
    id: '5',
    name: 'Umbrella Corp',
    industry: 'Pharmaceuticals',
    employees: 1200,
    revenue: '$350M',
    location: 'Boston, MA',
    website: 'https://umbrella.example.com',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300&h=300&fit=crop&q=80',
    createdAt: '2023-05-12T16:30:00Z'
  }
];

// Mock Contacts
export const contacts: Contact[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Smith',
    email: 'john.smith@acme.example.com',
    phone: '(555) 123-4567',
    position: 'CEO',
    companyId: '1',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&q=80',
    createdAt: '2023-01-20T10:30:00Z'
  },
  {
    id: '2',
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@globex.example.com',
    phone: '(555) 234-5678',
    position: 'CTO',
    companyId: '2',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80',
    createdAt: '2023-02-15T14:45:00Z'
  },
  {
    id: '3',
    firstName: 'Michael',
    lastName: 'Brown',
    email: 'michael.brown@soylent.example.com',
    phone: '(555) 345-6789',
    position: 'Marketing Director',
    companyId: '3',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&q=80',
    createdAt: '2023-03-10T09:15:00Z'
  },
  {
    id: '4',
    firstName: 'Emily',
    lastName: 'Davis',
    email: 'emily.davis@initech.example.com',
    phone: '(555) 456-7890',
    position: 'Sales Manager',
    companyId: '4',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&q=80',
    createdAt: '2023-04-25T11:00:00Z'
  },
  {
    id: '5',
    firstName: 'David',
    lastName: 'Wilson',
    email: 'david.wilson@umbrella.example.com',
    phone: '(555) 567-8901',
    position: 'COO',
    companyId: '5',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80',
    createdAt: '2023-05-17T16:30:00Z'
  },
  {
    id: '6',
    firstName: 'Jessica',
    lastName: 'Miller',
    email: 'jessica.miller@acme.example.com',
    phone: '(555) 678-9012',
    position: 'HR Director',
    companyId: '1',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&q=80',
    createdAt: '2023-01-25T13:45:00Z'
  }
];

// Mock Deals
export const deals: Deal[] = [
  {
    id: '1',
    name: 'Enterprise Software Implementation',
    value: 75000,
    stage: 'proposal',
    companyId: '1',
    contactId: '1',
    createdAt: '2023-01-25T10:30:00Z',
    closingDate: '2023-07-15T00:00:00Z'
  },
  {
    id: '2',
    name: 'Manufacturing Equipment Upgrade',
    value: 250000,
    stage: 'negotiation',
    companyId: '2',
    contactId: '2',
    createdAt: '2023-02-20T14:45:00Z',
    closingDate: '2023-08-10T00:00:00Z'
  },
  {
    id: '3',
    name: 'Food Processing System',
    value: 120000,
    stage: 'qualified',
    companyId: '3',
    contactId: '3',
    createdAt: '2023-03-15T09:15:00Z',
    closingDate: '2023-09-05T00:00:00Z'
  },
  {
    id: '4',
    name: 'Software License Renewal',
    value: 45000,
    stage: 'closed-won',
    companyId: '4',
    contactId: '4',
    createdAt: '2023-04-30T11:00:00Z',
    closingDate: '2023-05-30T00:00:00Z'
  },
  {
    id: '5',
    name: 'Research Partnership',
    value: 500000,
    stage: 'lead',
    companyId: '5',
    contactId: '5',
    createdAt: '2023-05-20T16:30:00Z',
    closingDate: '2023-11-15T00:00:00Z'
  },
  {
    id: '6',
    name: 'HR Software Implementation',
    value: 65000,
    stage: 'closed-lost',
    companyId: '1',
    contactId: '6',
    createdAt: '2023-02-05T13:45:00Z',
    closingDate: '2023-04-10T00:00:00Z'
  }
];

// Mock Activities
export const activities: Activity[] = [
  {
    id: '1',
    type: 'call',
    title: 'Initial discovery call',
    description: 'Discussed current software needs and pain points',
    createdAt: '2023-01-26T10:30:00Z',
    companyId: '1',
    contactId: '1',
    dealId: '1',
    userId: 'user1'
  },
  {
    id: '2',
    type: 'meeting',
    title: 'On-site equipment assessment',
    description: 'Evaluated current manufacturing setup and identified upgrade opportunities',
    createdAt: '2023-02-22T14:45:00Z',
    companyId: '2',
    contactId: '2',
    dealId: '2',
    userId: 'user1'
  },
  {
    id: '3',
    type: 'email',
    title: 'Proposal follow-up',
    description: 'Sent additional information about food processing system specifications',
    createdAt: '2023-03-17T09:15:00Z',
    companyId: '3',
    contactId: '3',
    dealId: '3',
    userId: 'user1'
  },
  {
    id: '4',
    type: 'note',
    title: 'License renewal terms',
    description: 'Client agreed to 3-year renewal with 10% discount',
    createdAt: '2023-04-28T11:00:00Z',
    companyId: '4',
    contactId: '4',
    dealId: '4',
    userId: 'user1'
  },
  {
    id: '5',
    type: 'meeting',
    title: 'Initial research discussion',
    description: 'Explored potential partnership opportunities in pharmaceutical research',
    createdAt: '2023-05-22T16:30:00Z',
    companyId: '5',
    contactId: '5',
    dealId: '5',
    userId: 'user1'
  }
];

// Helper function to get company by ID
export const getCompanyById = (id: string): Company | undefined => {
  return companies.find(company => company.id === id);
};

// Helper function to get contact by ID
export const getContactById = (id: string): Contact | undefined => {
  return contacts.find(contact => contact.id === id);
};

// Helper function to get deal by ID
export const getDealById = (id: string): Deal | undefined => {
  return deals.find(deal => deal.id === id);
};

// Helper function to get contacts by company ID
export const getContactsByCompanyId = (companyId: string): Contact[] => {
  return contacts.filter(contact => contact.companyId === companyId);
};

// Helper function to get deals by company ID
export const getDealsByCompanyId = (companyId: string): Deal[] => {
  return deals.filter(deal => deal.companyId === companyId);
};

// Helper function to get deals by contact ID
export const getDealsByContactId = (contactId: string): Deal[] => {
  return deals.filter(deal => deal.contactId === contactId);
};

// Helper function to get activities by company ID
export const getActivitiesByCompanyId = (companyId: string): Activity[] => {
  return activities.filter(activity => activity.companyId === companyId);
};

// Helper function to get activities by contact ID
export const getActivitiesByContactId = (contactId: string): Activity[] => {
  return activities.filter(activity => activity.contactId === contactId);
};

// Helper function to get activities by deal ID
export const getActivitiesByDealId = (dealId: string): Activity[] => {
  return activities.filter(activity => activity.dealId === dealId);
};

// Helper function to format currency
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
};

// Helper function to format date
export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};
