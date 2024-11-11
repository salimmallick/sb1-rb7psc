import { Outlet } from 'react-router-dom';
import { InfrastructureNav } from './components/infrastructure-nav';

export function InfrastructureLayout() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Infrastructure Monitoring</h1>
        <p className="mt-2 text-muted-foreground">
          Monitor and analyze infrastructure health, performance, and resource utilization across your systems.
        </p>
      </div>

      <InfrastructureNav />
      
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
}