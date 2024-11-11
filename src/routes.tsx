import { createBrowserRouter, Navigate } from 'react-router-dom';
import { DashboardLayout } from './layouts/dashboard-layout';
import { Overview } from './pages/overview';
import { GeneralSettings } from './pages/settings/general';
import { NotificationSettings } from './pages/settings/notifications';
import { TeamSettings } from './pages/settings/team';
import { ApiKeySettings } from './pages/settings/api-keys';
import { IntegrationSettings } from './pages/settings/integrations';
import { SecuritySettings } from './pages/settings/security';
import { ActivityLog } from './pages/settings/activity-log';
import { UserInsights } from './pages/user-insights';
import { EchoAI } from './components/echo-ai';
import { LiveChat } from './pages/support/chat';
import { ContactUs } from './pages/support/contact';
import { SupportTickets } from './pages/support/tickets';
import { Feedback } from './pages/support/feedback';
import { Community } from './pages/support/community';
import { ProductAnalyticsLayout } from './pages/analytics/product/layout';

// Learn section imports
import { LearnLayout } from './pages/learn/layout';
import { PlatformOverview } from './pages/learn/product-guide/platform-overview';
import { CoreFeatures } from './pages/learn/product-guide/core-features';
import { Dashboards } from './pages/learn/product-guide/dashboards';
import { Metrics } from './pages/learn/product-guide/metrics';
import { Performance } from './pages/learn/product-guide/performance';
import { DataProcessing } from './pages/learn/product-guide/data-processing';
import { Storage } from './pages/learn/product-guide/storage';
import { UserAnalytics } from './pages/learn/product-guide/user-analytics';
import { PerformanceAnalytics } from './pages/learn/product-guide/performance-analytics';
import { NetworkAnalytics as LearnNetworkAnalytics } from './pages/learn/product-guide/network-analytics';
import { AlertConfiguration } from './pages/learn/product-guide/alert-configuration';
import { MonitoringSetup } from './pages/learn/product-guide/monitoring-setup';
import { IncidentManagement as LearnIncidentManagement } from './pages/learn/product-guide/incident-management';
import { DataCollection } from './pages/learn/product-guide/data-collection';
import { CreatingDashboards } from './pages/learn/tutorials/creating-dashboards';
import { DataAnalysis } from './pages/learn/tutorials/data-analysis';
import { PerformanceMonitoring as LearnPerformanceMonitoring } from './pages/learn/tutorials/performance-monitoring';
import { UserTracking } from './pages/learn/tutorials/user-tracking';

// Performance & Availability Routes
import PerformanceOverview from './pages/performance/overview';
import ResponseTimes from './pages/performance/response-times';
import ErrorRates from './pages/performance/errors';
import ServiceHealth from './pages/performance/health';

// Real-Time Routes
import RealTimeNOC from './pages/real-time';
import RealTimeMonitoring from './pages/real-time/monitoring';
import RealTimeIncidents from './pages/real-time/incidents';
import RealTimeAlerts from './pages/real-time/alerts';
import ServiceStatus from './pages/real-time/status';

// Observability Routes
import ObservabilityOverview from './pages/observability/overview';
import { InfrastructureLayout } from './pages/observability/infrastructure/layout';
import { infrastructureRoutes } from './pages/observability/infrastructure/routes';
import { APMLayout } from './pages/observability/apm/layout';
import { apmRoutes } from './pages/observability/apm/routes';
import { DatabaseLayout } from './pages/observability/database/layout';
import { databaseRoutes } from './pages/observability/database/routes';
import { LogsLayout } from './pages/observability/logs/layout';
import { logsRoutes } from './pages/observability/logs/routes';

// Analytics Routes
import NetworkAnalytics from './pages/analytics/network';
import { UsageInsights } from './pages/analytics/product/categories/usage-insights';
import { UserJourneyMapping } from './pages/analytics/product/categories/user-journey-mapping';
import { CohortAnalysis } from './pages/analytics/product/categories/cohort-analysis';
import { PredictiveAnalytics } from './pages/analytics/product/categories/predictive-analytics';
import { PerformanceMonitoring as ProductPerformanceMonitoring } from './pages/analytics/product/categories/performance-monitoring';
import UserBehaviorAnalytics from './pages/analytics/user-behavior';
import VideoAnalytics from './pages/analytics/video';

// Security Routes
import SecurityOverview from './pages/security/overview';
import DeviceSecurity from './pages/security/device';
import APISecurity from './pages/security/api';
import NetworkSecurity from './pages/security/network';
import DatabaseSecurity from './pages/security/database';
import UserAccess from './pages/security/access';
import ThreatIntelligence from './pages/security/threats';
import IncidentResponse from './pages/security/incidents';
import Compliance from './pages/security/compliance';

// Cost Management Routes
import CostOverview from './pages/costs/overview';
import InfrastructureCosts from './pages/costs/infrastructure';
import ApplicationCosts from './pages/costs/application';
import OperationalCosts from './pages/costs/operational';
import ThirdPartyCosts from './pages/costs/third-party';
import Budgeting from './pages/costs/budgeting';

// Alerts & Incidents Routes
import AlertManagement from './pages/alerts/management';
import IncidentManagement from './pages/alerts/incidents';
import Notifications from './pages/alerts/notifications';
import CostAlerts from './pages/alerts/costs';
import AlertsTraining from './pages/alerts/training';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/overview" replace />,
      },
      {
        path: '/overview',
        element: <Overview />,
      },
      {
        path: '/user-insights',
        element: <UserInsights />,
      },
      {
        path: '/echo-ai',
        element: <EchoAI />,
      },
      {
        path: '/settings/general',
        element: <GeneralSettings />,
      },
      {
        path: '/settings/notifications',
        element: <NotificationSettings />,
      },
      {
        path: '/settings/team',
        element: <TeamSettings />,
      },
      {
        path: '/settings/api-keys',
        element: <ApiKeySettings />,
      },
      {
        path: '/settings/integrations',
        element: <IntegrationSettings />,
      },
      {
        path: '/settings/security',
        element: <SecuritySettings />,
      },
      {
        path: '/settings/activity-log',
        element: <ActivityLog />,
      },
      {
        path: '/support/chat',
        element: <LiveChat />,
      },
      {
        path: '/support/contact',
        element: <ContactUs />,
      },
      {
        path: '/support/tickets',
        element: <SupportTickets />,
      },
      {
        path: '/support/feedback',
        element: <Feedback />,
      },
      {
        path: '/support/community',
        element: <Community />,
      },
      // Learn section routes
      {
        path: '/learn',
        element: <LearnLayout />,
        children: [
          {
            path: '/learn',
            element: (
              <Navigate to="/learn/product-guide/platform-overview" replace />
            ),
          },
          {
            path: '/learn/product-guide/platform-overview',
            element: <PlatformOverview />,
          },
          {
            path: '/learn/product-guide/core-features',
            element: <CoreFeatures />,
          },
          {
            path: '/learn/product-guide/dashboards',
            element: <Dashboards />,
          },
          {
            path: '/learn/product-guide/metrics',
            element: <Metrics />,
          },
          {
            path: '/learn/product-guide/performance',
            element: <Performance />,
          },
          {
            path: '/learn/product-guide/data-processing',
            element: <DataProcessing />,
          },
          {
            path: '/learn/product-guide/storage',
            element: <Storage />,
          },
          {
            path: '/learn/product-guide/user-analytics',
            element: <UserAnalytics />,
          },
          {
            path: '/learn/product-guide/performance-analytics',
            element: <PerformanceAnalytics />,
          },
          {
            path: '/learn/product-guide/network-analytics',
            element: <LearnNetworkAnalytics />,
          },
          {
            path: '/learn/product-guide/alert-configuration',
            element: <AlertConfiguration />,
          },
          {
            path: '/learn/product-guide/monitoring-setup',
            element: <MonitoringSetup />,
          },
          {
            path: '/learn/product-guide/incident-management',
            element: <LearnIncidentManagement />,
          },
          {
            path: '/learn/product-guide/data-collection',
            element: <DataCollection />,
          },
          {
            path: '/learn/tutorials/creating-dashboards',
            element: <CreatingDashboards />,
          },
          {
            path: '/learn/tutorials/data-analysis',
            element: <DataAnalysis />,
          },
          {
            path: '/learn/tutorials/performance-monitoring',
            element: <LearnPerformanceMonitoring />,
          },
          {
            path: '/learn/tutorials/user-tracking',
            element: <UserTracking />,
          },
        ],
      },
      // Performance & Availability
      {
        path: '/performance',
        children: [
          {
            path: '',
            element: <PerformanceOverview />,
          },
          {
            path: 'response-times',
            element: <ResponseTimes />,
          },
          {
            path: 'errors',
            element: <ErrorRates />,
          },
          {
            path: 'health',
            element: <ServiceHealth />,
          },
        ],
      },
      // Real-Time NOC
      {
        path: '/real-time',
        children: [
          {
            path: '',
            element: <RealTimeNOC />,
          },
          {
            path: 'monitoring',
            element: <RealTimeMonitoring />,
          },
          {
            path: 'incidents',
            element: <RealTimeIncidents />,
          },
          {
            path: 'alerts',
            element: <RealTimeAlerts />,
          },
          {
            path: 'status',
            element: <ServiceStatus />,
          },
        ],
      },
      // Observability
      {
        path: '/observability',
        children: [
          {
            path: 'overview',
            element: <ObservabilityOverview />,
          },
          {
            path: 'infrastructure/*',
            element: <InfrastructureLayout />,
            children: infrastructureRoutes,
          },
          {
            path: 'apm/*',
            element: <APMLayout />,
            children: apmRoutes,
          },
          {
            path: 'database/*',
            element: <DatabaseLayout />,
            children: databaseRoutes,
          },
          {
            path: 'logs/*',
            element: <LogsLayout />,
            children: logsRoutes,
          },
        ],
      },
      // Analytics
      {
        path: '/analytics',
        children: [
          {
            path: 'network',
            element: <NetworkAnalytics />,
          },
          {
            path: 'product',
            element: <ProductAnalyticsLayout />,
            children: [
              {
                path: '',
                element: <UsageInsights />,
              },
              {
                path: 'usage-insights',
                element: <UsageInsights />,
              },
              {
                path: 'user-journey',
                element: <UserJourneyMapping />,
              },
              {
                path: 'cohort-analysis',
                element: <CohortAnalysis />,
              },
              {
                path: 'predictive',
                element: <PredictiveAnalytics />,
              },
              {
                path: 'performance',
                element: <ProductPerformanceMonitoring />,
              },
            ],
          },
          {
            path: 'user-behavior',
            element: <UserBehaviorAnalytics />,
          },
          {
            path: 'video',
            element: <VideoAnalytics />,
          },
        ],
      },
      // Security
      {
        path: '/security',
        children: [
          {
            path: 'overview',
            element: <SecurityOverview />,
          },
          {
            path: 'device',
            element: <DeviceSecurity />,
          },
          {
            path: 'api',
            element: <APISecurity />,
          },
          {
            path: 'network',
            element: <NetworkSecurity />,
          },
          {
            path: 'database',
            element: <DatabaseSecurity />,
          },
          {
            path: 'access',
            element: <UserAccess />,
          },
          {
            path: 'threats',
            element: <ThreatIntelligence />,
          },
          {
            path: 'incidents',
            element: <IncidentResponse />,
          },
          {
            path: 'compliance',
            element: <Compliance />,
          },
        ],
      },
      // Cost Management
      {
        path: '/costs',
        children: [
          {
            path: 'overview',
            element: <CostOverview />,
          },
          {
            path: 'infrastructure',
            element: <InfrastructureCosts />,
          },
          {
            path: 'application',
            element: <ApplicationCosts />,
          },
          {
            path: 'operational',
            element: <OperationalCosts />,
          },
          {
            path: 'third-party',
            element: <ThirdPartyCosts />,
          },
          {
            path: 'budgeting',
            element: <Budgeting />,
          },
        ],
      },
      // Alerts & Incidents
      {
        path: '/alerts',
        children: [
          {
            path: 'management',
            element: <AlertManagement />,
          },
          {
            path: 'incidents',
            element: <IncidentManagement />,
          },
          {
            path: 'notifications',
            element: <Notifications />,
          },
          {
            path: 'costs',
            element: <CostAlerts />,
          },
          {
            path: 'training',
            element: <AlertsTraining />,
          },
        ],
      },
    ],
  },
]);
