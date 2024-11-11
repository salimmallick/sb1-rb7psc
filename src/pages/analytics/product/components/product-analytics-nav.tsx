import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  BarChart3, 
  GitFork, 
  Users, 
  Brain, 
  Activity 
} from 'lucide-react';

const navItems = [
  {
    title: 'Usage Insights',
    href: 'usage-insights',
    icon: BarChart3,
    description: 'Track feature adoption and engagement'
  },
  {
    title: 'User Journey',
    href: 'user-journey',
    icon: GitFork,
    description: 'Analyze user flows and paths'
  },
  {
    title: 'Cohort Analysis',
    href: 'cohort-analysis',
    icon: Users,
    description: 'Segment and analyze user groups'
  },
  {
    title: 'Predictive Analytics',
    href: 'predictive',
    icon: Brain,
    description: 'AI-driven insights and forecasts'
  },
  {
    title: 'Performance',
    href: 'performance',
    icon: Activity,
    description: 'Monitor app performance metrics'
  }
];

export function ProductAnalyticsNav() {
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