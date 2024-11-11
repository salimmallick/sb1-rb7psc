import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  Activity, 
  Network, 
  Cloud, 
  Box
} from 'lucide-react';

const navItems = [
  {
    title: 'System Health',
    href: 'system-health',
    icon: Activity,
    description: 'Monitor system health and performance'
  },
  {
    title: 'Network',
    href: 'network',
    icon: Network,
    description: 'Track network performance and connectivity'
  },
  {
    title: 'Cloud',
    href: 'cloud',
    icon: Cloud,
    description: 'Monitor cloud resources and services'
  },
  {
    title: 'Containers',
    href: 'containers',
    icon: Box,
    description: 'Track container and Kubernetes metrics'
  }
];

export function InfrastructureNav() {
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