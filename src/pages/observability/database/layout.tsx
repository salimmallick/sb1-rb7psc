import { Outlet } from 'react-router-dom';
import { DatabaseNav } from './components/database-nav';

export function DatabaseLayout() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Database Monitoring</h1>
        <p className="mt-2 text-muted-foreground">
          Monitor and analyze database performance, health, and query optimization across your databases.
        </p>
      </div>

      <DatabaseNav />
      
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
}