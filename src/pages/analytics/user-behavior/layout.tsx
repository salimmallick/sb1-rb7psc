import { Outlet } from 'react-router-dom';
import { UserBehaviorNav } from './components/user-behavior-nav';

export function UserBehaviorLayout() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">User Behavior Analytics</h1>
        <p className="mt-2 text-muted-foreground">
          Analyze user behavior patterns, engagement, and interactions across your platform
        </p>
      </div>

      <UserBehaviorNav />
      
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
}