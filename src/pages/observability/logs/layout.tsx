import { Outlet } from 'react-router-dom';
import { LogsNav } from './components/logs-nav';

export function LogsLayout() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Log Management</h1>
        <p className="mt-2 text-muted-foreground">
          Search, analyze, and manage log data across your applications and infrastructure.
        </p>
      </div>

      <LogsNav />
      
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
}