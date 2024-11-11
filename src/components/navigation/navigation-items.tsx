import {
  Home,
  Settings,
  Shield,
  History,
  Users,
  Bell,
  Key,
  Link,
  UserSearch,
  Bot,
  HeadphonesIcon,
  MessageSquare,
  Phone,
  Mail,
  Ticket,
  Heart,
  Users2,
  BookOpen,
  GraduationCap,
  LayoutDashboard,
  LineChart,
  Activity,
  Database,
  Network,
  BarChart,
  Cpu,
  AlertTriangle,
  GitBranch,
  Eye,
  Zap,
  Server,
  Cloud,
  Box,
  Thermometer,
  Scroll,
  Search,
  BarChart2,
  Archive,
  BarChart3,
  Brain,
  GitFork,
  Timer,
  Lock,
  CircleDollarSign,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';
import { NavigationItem } from './types';

export const navigationItems: NavigationItem[] = [
  {
    title: 'Overview',
    path: '/overview',
    icon: Home,
  },
  {
    title: 'Performance & Availability',
    path: '/performance',
    icon: Activity,
  },
  {
    title: 'Real-Time NOC',
    path: '/real-time',
    icon: Zap,
  },
  {
    title: 'Echo AI',
    path: '/echo-ai',
    icon: Bot,
  },
  {
    title: 'Analytics',
    path: '/analytics',
    icon: BarChart3,
    items: [
      {
        title: 'Network Analytics',
        path: '/analytics/network',
        icon: Network,
      },
      {
        title: 'Product Analytics',
        path: '/analytics/product',
        icon: BarChart,
        items: [
          {
            title: 'Usage Insights',
            path: '/analytics/product/usage-insights',
            icon: BarChart3,
          },
          {
            title: 'User Journey',
            path: '/analytics/product/user-journey',
            icon: GitFork,
          },
          {
            title: 'Cohort Analysis',
            path: '/analytics/product/cohort-analysis',
            icon: Users,
          },
          {
            title: 'Predictive Analytics',
            path: '/analytics/product/predictive',
            icon: Brain,
          },
          {
            title: 'Performance',
            path: '/analytics/product/performance',
            icon: Timer,
          },
        ],
      },
      {
        title: 'User Behavior',
        path: '/analytics/user-behavior',
        icon: UserSearch,
      },
      {
        title: 'Video Analytics',
        path: '/analytics/video',
        icon: BarChart2,
      },
    ],
  },
  {
    title: 'Observability',
    path: '/observability',
    icon: Eye,
    items: [
      {
        title: 'Overview',
        path: '/observability/overview',
        icon: LayoutDashboard,
      },
      {
        title: 'Infrastructure',
        path: '/observability/infrastructure',
        icon: Server,
        items: [
          {
            title: 'System Health',
            path: '/observability/infrastructure/system-health',
            icon: Thermometer,
          },
          {
            title: 'Network',
            path: '/observability/infrastructure/network',
            icon: Network,
          },
          {
            title: 'Cloud',
            path: '/observability/infrastructure/cloud',
            icon: Cloud,
          },
          {
            title: 'Containers',
            path: '/observability/infrastructure/containers',
            icon: Box,
          },
        ],
      },
      {
        title: 'APM',
        path: '/observability/apm',
        icon: Activity,
        items: [
          {
            title: 'Request Monitoring',
            path: '/observability/apm/request-monitoring',
            icon: Activity,
          },
          {
            title: 'Transaction Tracing',
            path: '/observability/apm/transaction-tracing',
            icon: GitBranch,
          },
          {
            title: 'Dependencies',
            path: '/observability/apm/dependency-monitoring',
            icon: Network,
          },
          {
            title: 'Real-Time',
            path: '/observability/apm/real-time-monitoring',
            icon: Zap,
          },
          {
            title: 'Errors',
            path: '/observability/apm/error-monitoring',
            icon: Server,
          },
          {
            title: 'Anomalies',
            path: '/observability/apm/anomaly-detection',
            icon: Activity,
          },
        ],
      },
      {
        title: 'Database',
        path: '/observability/database',
        icon: Database,
        items: [
          {
            title: 'Performance',
            path: '/observability/database/performance',
            icon: Activity,
          },
          {
            title: 'Query Optimization',
            path: '/observability/database/query-optimization',
            icon: Search,
          },
          {
            title: 'Health',
            path: '/observability/database/health',
            icon: Heart,
          },
          {
            title: 'Resources',
            path: '/observability/database/resource-utilization',
            icon: Cpu,
          },
          {
            title: 'Query Errors',
            path: '/observability/database/query-errors',
            icon: AlertTriangle,
          },
        ],
      },
      {
        title: 'Logs',
        path: '/observability/logs',
        icon: Scroll,
        items: [
          {
            title: 'Log Search',
            path: '/observability/logs/search',
            icon: Search,
          },
          {
            title: 'Log Analytics',
            path: '/observability/logs/analytics',
            icon: BarChart2,
          },
          {
            title: 'Log Alerts',
            path: '/observability/logs/alerts',
            icon: Bell,
          },
          {
            title: 'Log Patterns',
            path: '/observability/logs/patterns',
            icon: GitBranch,
          },
          {
            title: 'Log Archive',
            path: '/observability/logs/archive',
            icon: Archive,
          },
        ],
      },
    ],
  },
  {
    title: 'Security',
    path: '/security',
    icon: Lock,
    items: [
      {
        title: 'Overview',
        path: '/security/overview',
        icon: LayoutDashboard,
      },
      {
        title: 'Device Security',
        path: '/security/device',
        icon: Server,
      },
      {
        title: 'API Security',
        path: '/security/api',
        icon: Key,
      },
      {
        title: 'Network Security',
        path: '/security/network',
        icon: Network,
      },
      {
        title: 'Database Security',
        path: '/security/database',
        icon: Database,
      },
      {
        title: 'User Access',
        path: '/security/access',
        icon: Users,
      },
      {
        title: 'Threat Intelligence',
        path: '/security/threats',
        icon: AlertTriangle,
      },
      {
        title: 'Incident Response',
        path: '/security/incidents',
        icon: AlertCircle,
      },
      {
        title: 'Compliance',
        path: '/security/compliance',
        icon: Shield,
      },
    ],
  },
  {
    title: 'Cost Management',
    path: '/costs',
    icon: CircleDollarSign,
    items: [
      {
        title: 'Overview',
        path: '/costs/overview',
        icon: LayoutDashboard,
      },
      {
        title: 'Infrastructure',
        path: '/costs/infrastructure',
        icon: Server,
      },
      {
        title: 'Application',
        path: '/costs/application',
        icon: Box,
      },
      {
        title: 'Operational',
        path: '/costs/operational',
        icon: Activity,
      },
      {
        title: 'Third-Party Services',
        path: '/costs/third-party',
        icon: Link,
      },
      {
        title: 'Budgeting',
        path: '/costs/budgeting',
        icon: CircleDollarSign,
      },
    ],
  },
  {
    title: 'Alerts & Incidents',
    path: '/alerts',
    icon: AlertCircle,
    items: [
      {
        title: 'Alert Management',
        path: '/alerts/management',
        icon: Bell,
      },
      {
        title: 'Incident Management',
        path: '/alerts/incidents',
        icon: AlertTriangle,
      },
      {
        title: 'Notifications',
        path: '/alerts/notifications',
        icon: Bell,
      },
      {
        title: 'Cost Alerts',
        path: '/alerts/costs',
        icon: CircleDollarSign,
      },
      {
        title: 'Training',
        path: '/alerts/training',
        icon: GraduationCap,
      },
    ],
  },
  {
    title: 'User Insights',
    path: '/user-insights',
    icon: UserSearch,
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: Settings,
    items: [
      {
        title: 'General',
        path: '/settings/general',
        icon: Settings,
      },
      {
        title: 'Security',
        path: '/settings/security',
        icon: Shield,
      },
      {
        title: 'Team',
        path: '/settings/team',
        icon: Users,
      },
      {
        title: 'Notifications',
        path: '/settings/notifications',
        icon: Bell,
      },
      {
        title: 'API Keys',
        path: '/settings/api-keys',
        icon: Key,
      },
      {
        title: 'Integrations',
        path: '/settings/integrations',
        icon: Link,
      },
      {
        title: 'Activity Log',
        path: '/settings/activity-log',
        icon: History,
      },
    ],
  },
  {
    title: 'Support',
    path: '/support',
    icon: HeadphonesIcon,
    items: [
      {
        title: 'Live Chat',
        path: '/support/chat',
        icon: MessageSquare,
      },
      {
        title: 'Contact Us',
        path: '/support/contact',
        icon: Phone,
      },
      {
        title: 'Support Tickets',
        path: '/support/tickets',
        icon: Ticket,
      },
      {
        title: 'Feedback',
        path: '/support/feedback',
        icon: Heart,
      },
      {
        title: 'Community',
        path: '/support/community',
        icon: Users2,
      },
    ],
  },
  {
    title: 'Learn',
    path: '/learn',
    icon: BookOpen,
    items: [
      {
        title: 'Product Guide',
        path: '/learn/product-guide',
        icon: GraduationCap,
        items: [
          {
            title: 'Platform Overview',
            path: '/learn/product-guide/platform-overview',
            icon: LayoutDashboard,
          },
          {
            title: 'Core Features',
            path: '/learn/product-guide/core-features',
            icon: Settings,
            items: [
              {
                title: 'Dashboards',
                path: '/learn/product-guide/dashboards',
                icon: LayoutDashboard,
              },
              {
                title: 'Metrics & Analytics',
                path: '/learn/product-guide/metrics',
                icon: LineChart,
              },
              {
                title: 'Performance Monitoring',
                path: '/learn/product-guide/performance',
                icon: Activity,
              },
            ],
          },
          {
            title: 'Data Management',
            path: '/learn/product-guide/data-management',
            icon: Database,
            items: [
              {
                title: 'Data Collection',
                path: '/learn/product-guide/data-collection',
                icon: GitBranch,
              },
              {
                title: 'Data Processing',
                path: '/learn/product-guide/data-processing',
                icon: Cpu,
              },
              {
                title: 'Storage & Retention',
                path: '/learn/product-guide/storage',
                icon: Database,
              },
            ],
          },
          {
            title: 'Analytics Features',
            path: '/learn/product-guide/analytics',
            icon: BarChart,
            items: [
              {
                title: 'User Analytics',
                path: '/learn/product-guide/user-analytics',
                icon: Users,
              },
              {
                title: 'Performance Analytics',
                path: '/learn/product-guide/performance-analytics',
                icon: Activity,
              },
              {
                title: 'Network Analytics',
                path: '/learn/product-guide/network-analytics',
                icon: Network,
              },
            ],
          },
          {
            title: 'Alerting & Monitoring',
            path: '/learn/product-guide/alerting',
            icon: AlertTriangle,
            items: [
              {
                title: 'Alert Configuration',
                path: '/learn/product-guide/alert-configuration',
                icon: Bell,
              },
              {
                title: 'Monitoring Setup',
                path: '/learn/product-guide/monitoring-setup',
                icon: Activity,
              },
              {
                title: 'Incident Management',
                path: '/learn/product-guide/incident-management',
                icon: AlertTriangle,
              },
            ],
          },
        ],
      },
      {
        title: 'Tutorials',
        path: '/learn/tutorials',
        icon: BookOpen,
        items: [
          {
            title: 'Creating Dashboards',
            path: '/learn/tutorials/creating-dashboards',
            icon: LayoutDashboard,
          },
          {
            title: 'Data Analysis',
            path: '/learn/tutorials/data-analysis',
            icon: LineChart,
          },
          {
            title: 'Performance Monitoring',
            path: '/learn/tutorials/performance-monitoring',
            icon: Activity,
          },
          {
            title: 'User Tracking',
            path: '/learn/tutorials/user-tracking',
            icon: Users,
          },
        ],
      },
    ],
  },
];
