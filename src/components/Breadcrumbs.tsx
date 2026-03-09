import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <ChevronRight className="h-3.5 w-3.5" />}
          {i === items.length - 1 ? (
            <span className="font-medium text-foreground">{item.label}</span>
          ) : (
            <span className="hover:text-foreground cursor-pointer">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
