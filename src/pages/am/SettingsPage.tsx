import { Breadcrumbs } from '@/components/Breadcrumbs';

export default function SettingsPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: 'Home' }, { label: 'Settings' }]} />
      <h1 className="text-xl font-semibold mb-5">Settings</h1>
      <div className="rounded-lg border bg-card p-8 text-center text-muted-foreground">
        <p>Settings configuration coming soon.</p>
      </div>
    </div>
  );
}
