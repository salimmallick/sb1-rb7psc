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
    title: 'Engagement Analysis',
    href: 'engagement',
    icon: BarChart3,
    description: 'Track user activity and engagement patterns'
  },
  {
    title: 'User Journey',
    href: 'journey',
    icon: GitFork,
    description: 'Analyze user paths and flows'
  },
  {
    title: 'Behavioral Segments',
    href: 'segments',
    icon: Users,
    description: 'Analyze user segments and cohorts'
  },
  {
    title: 'Retention & Churn',
    href: 'retention',
    icon: Activity,
    description: 'Monitor retention and predict churn'
  },
  {
    title: 'Predictive Insights',
    href: 'predictive',
    icon: Brain,
    description: 'AI-driven behavior predictions'
  }
];

export function UserBehaviorNav() {
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