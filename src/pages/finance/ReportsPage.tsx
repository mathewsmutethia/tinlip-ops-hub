import { Breadcrumbs } from '@/components/Breadcrumbs';

export default function ReportsPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: 'Home' }, { label: 'Reports' }]} />
      <h1 className="text-xl font-semibold mb-5">Reports</h1>
      <div className="rounded-lg border bg-card p-8 text-center text-muted-foreground">
        <p>Reports module coming soon.</p>
      </div>
    </div>
  );
}
