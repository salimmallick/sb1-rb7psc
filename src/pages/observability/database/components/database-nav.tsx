import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  Activity, 
  Search, 
  Heart, 
  Cpu, 
  AlertTriangle
} from 'lucide-react';

const navItems = [
  {
    title: 'Performance',
    href: 'performance',
    icon: Activity,
    description: 'Monitor database performance metrics'
  },
  {
    title: 'Query Optimization',
    href: 'query-optimization',
    icon: Search,
    description: 'Analyze and optimize query performance'
  },
  {
    title: 'Health',
    href: 'health',
    icon: Heart,
    description: 'Monitor database health and availability'
  },
  {
    title: 'Resources',
    href: 'resource-utilization',
    icon: Cpu,
    description: 'Track resource usage and capacity'
  },
  {
    title: 'Query Errors',
    href: 'query-errors',
    icon: AlertTriangle,
    description: 'Monitor query errors and exceptions'
  }
];

export function DatabaseNav() {
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