import { Navigate, RouteObject } from 'react-router-dom';
import DatabasePerformance from './categories/performance';
import QueryOptimization from './categories/query-optimization';
import DatabaseHealth from './categories/health';
import ResourceUtilization from './categories/resource-utilization';
import QueryErrors from './categories/query-errors';

export const databaseRoutes: RouteObject[] = [
  {
    path: '',
    element: <Navigate to="performance" replace />
  },
  {
    path: 'performance',
    element: <DatabasePerformance />
  },
  {
    path: 'query-optimization',
    element: <QueryOptimization />
  },
  {
    path: 'health',
    element: <DatabaseHealth />
  },
  {
    path: 'resource-utilization',
    element: <ResourceUtilization />
  },
  {
    path: 'query-errors',
    element: <QueryErrors />
  }
];