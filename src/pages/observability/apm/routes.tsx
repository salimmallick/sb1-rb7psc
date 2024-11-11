import { Navigate, RouteObject } from 'react-router-dom';
import { RequestMonitoring } from './categories/request-monitoring';
import { TransactionTracing } from './categories/transaction-tracing';
import { DependencyMonitoring } from './categories/dependency-monitoring';
import { RealTimeMonitoring } from './categories/real-time-monitoring';
import { ErrorMonitoring } from './categories/error-monitoring';
import { AnomalyDetection } from './categories/anomaly-detection';

export const apmRoutes: RouteObject[] = [
  {
    path: '',
    element: <Navigate to="request-monitoring" replace />
  },
  {
    path: 'request-monitoring',
    element: <RequestMonitoring />
  },
  {
    path: 'transaction-tracing',
    element: <TransactionTracing />
  },
  {
    path: 'dependency-monitoring',
    element: <DependencyMonitoring />
  },
  {
    path: 'real-time-monitoring',
    element: <RealTimeMonitoring />
  },
  {
    path: 'error-monitoring',
    element: <ErrorMonitoring />
  },
  {
    path: 'anomaly-detection',
    element: <AnomalyDetection />
  }
];