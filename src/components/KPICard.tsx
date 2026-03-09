import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface KPICardProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
  trend?: string;
  trendUp?: boolean;
  className?: string;
  danger?: boolean;
}

export function KPICard({ title, value, icon, trend, trendUp, className, danger }: KPICardProps) {
  return (
    <div className={cn('rounded-lg border bg-card p-5 shadow-sm', className)}>
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        {icon && <span className="text-muted-foreground">{icon}</span>}
      </div>
      <p className={cn('mt-2 text-2xl font-semibold font-mono', danger && 'text-destructive')}>
        {value}
      </p>
      {trend && (
        <p className={cn('mt-1 text-xs', trendUp ? 'text-success' : 'text-destructive')}>
          {trend}
        </p>
      )}
    </div>
  );
}
