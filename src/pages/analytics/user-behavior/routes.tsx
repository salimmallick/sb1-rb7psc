import { Navigate, RouteObject } from 'react-router-dom';
import { EngagementAnalysis } from './categories/engagement';
import { UserJourneyAnalysis } from './categories/journey';
import { BehavioralSegments } from './categories/segments';
import { RetentionAnalysis } from './categories/retention';
import { PredictiveInsights } from './categories/predictive';

export const userBehaviorRoutes: RouteObject[] = [
  {
    path: '',
    element: <Navigate to="engagement" replace />
  },
  {
    path: 'engagement',
    element: <EngagementAnalysis />
  },
  {
    path: 'journey',
    element: <UserJourneyAnalysis />
  },
  {
    path: 'segments',
    element: <BehavioralSegments />
  },
  {
    path: 'retention',
    element: <RetentionAnalysis />
  },
  {
    path: 'predictive',
    element: <PredictiveInsights />
  }
];