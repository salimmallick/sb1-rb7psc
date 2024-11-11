import { Navigate, RouteObject } from 'react-router-dom';
import { SystemHealth } from './categories/system-health';
import { NetworkMonitoring } from './categories/network';
import { CloudMonitoring } from './categories/cloud';
import { ContainerMonitoring } from './categories/containers';

export const infrastructureRoutes: RouteObject[] = [
  {
    path: '',
    element: <Navigate to="system-health" replace />
  },
  {
    path: 'system-health',
    element: <SystemHealth />
  },
  {
    path: 'network',
    element: <NetworkMonitoring />
  },
  {
    path: 'cloud',
    element: <CloudMonitoring />
  },
  {
    path: 'containers',
    element: <ContainerMonitoring />
  }
];