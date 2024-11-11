import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  Activity,
  GitBranch,
  Network,
  Zap,
  AlertTriangle,
  LineChart
} from 'lucide-react';

const navItems = [
  {
    title: 'Request Monitoring',
    href: 'request-monitoring',
    icon: Activity,
    description: 'Monitor request and response metrics'
  },
  {
    title: 'Transaction Tracing',
    href: 'transaction-tracing',
    icon: GitBranch,
    description: 'Track distributed transactions'
  },
  {
    title: 'Dependencies',
    href: 'dependency-monitoring',
    icon: Network,
    description: 'Monitor service dependencies'
  },
  {
    title: 'Real-Time',
    href: 'real-time-monitoring',
    icon: Zap,
    description: 'Real-time application metrics'
  },
  {
    title: 'Errors',
    href: 'error-monitoring',
    icon: AlertTriangle,
    description: 'Track errors and exceptions'
  },
  {
    title: 'Anomalies',
    href: 'anomaly-detection',
    icon: LineChart,
    description: 'Detect anomalies and patterns'
  }
];

export function APMNav() {
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