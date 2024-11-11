import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';

const productGuideLinks = [
  {
    title: 'Platform Overview',
    href: '/learn/product-guide/platform-overview',
  },
  {
    title: 'Core Features',
    href: '/learn/product-guide/core-features',
  },
  {
    title: 'Dashboards',
    href: '/learn/product-guide/dashboards',
  },
  {
    title: 'Metrics',
    href: '/learn/product-guide/metrics',
  },
  {
    title: 'Performance',
    href: '/learn/product-guide/performance',
  },
  {
    title: 'Data Processing',
    href: '/learn/product-guide/data-processing',
  },
  {
    title: 'Storage',
    href: '/learn/product-guide/storage',
  },
  {
    title: 'User Analytics',
    href: '/learn/product-guide/user-analytics',
  },
  {
    title: 'Performance Analytics',
    href: '/learn/product-guide/performance-analytics',
  },
  {
    title: 'Network Analytics',
    href: '/learn/product-guide/network-analytics',
  },
  {
    title: 'Alert Configuration',
    href: '/learn/product-guide/alert-configuration',
  },
  {
    title: 'Monitoring Setup',
    href: '/learn/product-guide/monitoring-setup',
  },
  {
    title: 'Incident Management',
    href: '/learn/product-guide/incident-management',
  },
  {
    title: 'Data Collection',
    href: '/learn/product-guide/data-collection',
  },
];

const tutorialLinks = [
  {
    title: 'Creating Dashboards',
    href: '/learn/tutorials/creating-dashboards',
  },
  {
    title: 'Data Analysis',
    href: '/learn/tutorials/data-analysis',
  },
  {
    title: 'Performance Monitoring',
    href: '/learn/tutorials/performance-monitoring',
  },
  {
    title: 'User Tracking',
    href: '/learn/tutorials/user-tracking',
  },
];

export function LearnSidebar() {
  return (
    <ScrollArea className="h-[calc(100vh-12rem)]">
      <div className="space-y-6 p-2">
        <div>
          <h4 className="mb-2 text-sm font-semibold">Product Guide</h4>
          <nav className="space-y-1">
            {productGuideLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  cn(
                    'block rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground',
                    isActive ? 'bg-accent' : 'transparent'
                  )
                }
              >
                {link.title}
              </NavLink>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="mb-2 text-sm font-semibold">Tutorials</h4>
          <nav className="space-y-1">
            {tutorialLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  cn(
                    'block rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground',
                    isActive ? 'bg-accent' : 'transparent'
                  )
                }
              >
                {link.title}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </ScrollArea>
  );
}