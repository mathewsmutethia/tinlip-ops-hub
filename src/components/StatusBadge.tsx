import { cn } from '@/lib/utils';

type StatusType = 'Active' | 'Pending' | 'Rejected' | 'Inactive' | 'Waiting Period' | 'Expired' | 'Closed' | 'Approved' | 'Open' | 'In Progress' | 'Service Assigned' | 'Completed' | 'Overdue' | 'Paid' | 'Pending Review' | 'Failed' | 'Sent' | 'Confirmed' | 'Dormant' | 'Covered' | 'Not Started' | 'Complete' | 'Incomplete' | 'Pending Review' | string;

const statusConfig: Record<string, { dot: string; bg: string; text: string }> = {
  'Active': { dot: 'bg-success', bg: 'bg-success/10', text: 'text-success' },
  'Approved': { dot: 'bg-success', bg: 'bg-success/10', text: 'text-success' },
  'Completed': { dot: 'bg-success', bg: 'bg-success/10', text: 'text-success' },
  'Paid': { dot: 'bg-success', bg: 'bg-success/10', text: 'text-success' },
  'Confirmed': { dot: 'bg-success', bg: 'bg-success/10', text: 'text-success' },
  'Covered': { dot: 'bg-success', bg: 'bg-success/10', text: 'text-success' },
  'Complete': { dot: 'bg-success', bg: 'bg-success/10', text: 'text-success' },
  'Pending': { dot: 'bg-primary', bg: 'bg-primary/10', text: 'text-primary' },
  'Pending Review': { dot: 'bg-primary', bg: 'bg-primary/10', text: 'text-primary' },
  'Sent': { dot: 'bg-primary', bg: 'bg-primary/10', text: 'text-primary' },
  'Prospects': { dot: 'bg-primary', bg: 'bg-primary/10', text: 'text-primary' },
  'In Progress': { dot: 'bg-warning', bg: 'bg-warning/10', text: 'text-warning' },
  'Service Assigned': { dot: 'bg-warning', bg: 'bg-warning/10', text: 'text-warning' },
  'Open': { dot: 'bg-warning', bg: 'bg-warning/10', text: 'text-warning' },
  'Overdue': { dot: 'bg-destructive', bg: 'bg-destructive/10', text: 'text-destructive' },
  'Rejected': { dot: 'bg-destructive', bg: 'bg-destructive/10', text: 'text-destructive' },
  'Failed': { dot: 'bg-destructive', bg: 'bg-destructive/10', text: 'text-destructive' },
  'Expired': { dot: 'bg-destructive', bg: 'bg-destructive/10', text: 'text-destructive' },
  'Incomplete': { dot: 'bg-destructive', bg: 'bg-destructive/10', text: 'text-destructive' },
  'Closed': { dot: 'bg-muted-foreground', bg: 'bg-muted', text: 'text-muted-foreground' },
  'Inactive': { dot: 'bg-muted-foreground', bg: 'bg-muted', text: 'text-muted-foreground' },
  'Dormant': { dot: 'bg-muted-foreground', bg: 'bg-muted', text: 'text-muted-foreground' },
  'Not Started': { dot: 'bg-muted-foreground', bg: 'bg-muted', text: 'text-muted-foreground' },
  'Waiting Period': { dot: 'bg-blue-500', bg: 'bg-blue-500/10', text: 'text-blue-600' },
};

const defaultConfig = { dot: 'bg-muted-foreground', bg: 'bg-muted', text: 'text-muted-foreground' };

export function StatusBadge({ status, className }: { status: StatusType; className?: string }) {
  const config = statusConfig[status] || defaultConfig;
  
  return (
    <span className={cn('inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium', config.bg, config.text, className)}>
      <span className={cn('h-1.5 w-1.5 rounded-full', config.dot)} />
      {status}
    </span>
  );
}
