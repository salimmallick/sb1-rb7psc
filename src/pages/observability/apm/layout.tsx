import { Outlet } from 'react-router-dom';
import { APMNav } from './components/apm-nav';

export function APMLayout() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Application Performance Monitoring</h1>
        <p className="mt-2 text-muted-foreground">
          Monitor and analyze application performance, traces, and dependencies across your services.
        </p>
      </div>

      <APMNav />
      
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
}