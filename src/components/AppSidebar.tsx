import { useRole, UserRole } from '@/contexts/RoleContext';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import {
  LayoutDashboard, ClipboardCheck, Users, Car, AlertTriangle, Wrench, Settings,
  FileText, CreditCard, Receipt, ArrowLeftRight, BarChart3, Eye, Shield,
  ScrollText, Download, LogOut, ChevronDown
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const roleLabels: Record<UserRole, string> = {
  account_manager: 'Account Manager',
  finance: 'Finance',
  ceo: 'CEO',
};

interface NavItem {
  label: string;
  path: string;
  icon: React.ElementType;
  badge?: number;
}

const navItems: Record<UserRole, NavItem[]> = {
  account_manager: [
    { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { label: 'Pending Approvals', path: '/approvals', icon: ClipboardCheck, badge: 20 },
    { label: 'Clients', path: '/clients', icon: Users },
    { label: 'Vehicles', path: '/vehicles', icon: Car },
    { label: 'Incidents', path: '/incidents', icon: AlertTriangle },
    { label: 'Service Providers', path: '/providers', icon: Wrench },
    { label: 'Settings', path: '/settings', icon: Settings },
  ],
  finance: [
    { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { label: 'Invoices', path: '/invoices', icon: FileText },
    { label: 'Payments', path: '/payments', icon: CreditCard },
    { label: 'Claims & Payouts', path: '/claims', icon: Receipt },
    { label: 'Reconciliation', path: '/reconciliation', icon: ArrowLeftRight },
    { label: 'Reports', path: '/reports', icon: BarChart3 },
  ],
  ceo: [
    { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { label: 'Clients Overview', path: '/clients-overview', icon: Users },
    { label: 'Incidents Overview', path: '/incidents-overview', icon: Eye },
    { label: 'Financial Summary', path: '/financial-summary', icon: BarChart3 },
    { label: 'Audit Logs', path: '/audit-logs', icon: ScrollText },
    { label: 'Export Reports', path: '/export-reports', icon: Download },
  ],
};

export function AppSidebar() {
  const { role, setRole, setIsLoggedIn } = useRole();
  const location = useLocation();
  const navigate = useNavigate();
  const [roleSwitcherOpen, setRoleSwitcherOpen] = useState(false);
  const items = navItems[role];

  const handleRoleChange = (newRole: UserRole) => {
    setRole(newRole);
    setRoleSwitcherOpen(false);
    navigate('/dashboard');
  };

  return (
    <aside className="fixed left-0 top-0 z-30 flex h-screen w-60 flex-col bg-sidebar text-sidebar-foreground">
      {/* Logo */}
      <div className="flex items-center gap-2 border-b border-sidebar-border px-5 py-4">
        <div className="flex items-center gap-1.5 text-sidebar-primary">
          <Shield className="h-5 w-5" />
          <Car className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-sm font-bold text-sidebar-accent-foreground">Tinlip Autocare</h2>
          <p className="text-[10px] uppercase tracking-wider text-sidebar-muted">{roleLabels[role]}</p>
        </div>
      </div>

      {/* Role Switcher (for demo) */}
      <div className="relative border-b border-sidebar-border px-3 py-2">
        <button
          onClick={() => setRoleSwitcherOpen(!roleSwitcherOpen)}
          className="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-xs text-sidebar-muted hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        >
          <span>Switch Role</span>
          <ChevronDown className="h-3 w-3" />
        </button>
        {roleSwitcherOpen && (
          <div className="absolute left-3 right-3 top-full z-50 mt-1 rounded-md border border-sidebar-border bg-sidebar shadow-lg">
            {(Object.keys(roleLabels) as UserRole[]).map(r => (
              <button
                key={r}
                onClick={() => handleRoleChange(r)}
                className={cn(
                  'flex w-full items-center px-3 py-2 text-xs hover:bg-sidebar-accent',
                  r === role && 'text-sidebar-primary font-medium'
                )}
              >
                {roleLabels[r]}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-3 space-y-0.5">
        {items.map(item => {
          const active = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors',
                active
                  ? 'border-l-2 border-sidebar-primary bg-sidebar-primary/10 text-sidebar-primary font-medium'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
              )}
            >
              <item.icon className="h-4 w-4 shrink-0" />
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <span className="rounded-full bg-sidebar-primary px-1.5 py-0.5 text-[10px] font-semibold text-sidebar-primary-foreground">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="border-t border-sidebar-border px-3 py-3">
        <button
          onClick={() => setIsLoggedIn(false)}
          className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        >
          <LogOut className="h-4 w-4" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
