import { Navigate, RouteObject } from 'react-router-dom';
import { UsageInsights } from './categories/usage-insights';
import { UserJourneyMapping } from './categories/user-journey-mapping';
import { CohortAnalysis } from './categories/cohort-analysis';
import { PredictiveAnalytics } from './categories/predictive-analytics';
import { PerformanceMonitoring } from './categories/performance-monitoring';

export const productAnalyticsRoutes: RouteObject[] = [
  {
    path: '',
    element: <Navigate to="usage-insights" replace />
  },
  {
    path: 'usage-insights',
    element: <UsageInsights />
  },
  {
    path: 'user-journey',
    element: <UserJourneyMapping />
  },
  {
    path: 'cohort-analysis',
    element: <CohortAnalysis />
  },
  {
    path: 'predictive',
    element: <PredictiveAnalytics />
  },
  {
    path: 'performance',
    element: <PerformanceMonitoring />
  }
];