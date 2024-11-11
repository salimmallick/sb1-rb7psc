import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  Search,
  BarChart2,
  Bell,
  GitBranch,
  Archive
} from 'lucide-react';

const navItems = [
  {
    title: 'Log Search',
    href: 'search',
    icon: Search,
    description: 'Search and filter log data'
  },
  {
    title: 'Log Analytics',
    href: 'analytics',
    icon: BarChart2,
    description: 'Analyze log patterns and trends'
  },
  {
    title: 'Log Alerts',
    href: 'alerts',
    icon: Bell,
    description: 'Configure and manage log alerts'
  },
  {
    title: 'Log Patterns',
    href: 'patterns',
    icon: GitBranch,
    description: 'Discover and analyze log patterns'
  },
  {
    title: 'Log Archive',
    href: 'archive',
    icon: Archive,
    description: 'Manage archived logs'
  }
];

export function LogsNav() {
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop();

  return (
    <nav className="flex space-x-2 lg:space-x-4 overflow-x-auto pb-2">
      {navItems.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className="min-w-[120px] lg:min-w-[150px]"
        >
          <Button
            variant={currentPath === item.href ? 'default' : 'outline'}
            className={cn(
              'w-full justify-start gap-2',
              currentPath === item.href && 'bg-primary text-primary-foreground'
            )}
          >
            <item.icon className="h-4 w-4" />
            <span>{item.title}</span>
          </Button>
        </Link>
      ))}
    </nav>
  );
}