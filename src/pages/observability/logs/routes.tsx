import { Navigate, RouteObject } from 'react-router-dom';
import LogSearch from './categories/search';
import LogAnalytics from './categories/analytics';
import LogAlerts from './categories/alerts';
import LogPatterns from './categories/patterns';
import LogArchive from './categories/archive';

export const logsRoutes: RouteObject[] = [
  {
    path: '',
    element: <Navigate to="search" replace />
  },
  {
    path: 'search',
    element: <LogSearch />
  },
  {
    path: 'analytics',
    element: <LogAnalytics />
  },
  {
    path: 'alerts',
    element: <LogAlerts />
  },
  {
    path: 'patterns',
    element: <LogPatterns />
  },
  {
    path: 'archive',
    element: <LogArchive />
  }
];