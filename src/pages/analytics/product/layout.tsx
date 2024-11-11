import { Outlet } from 'react-router-dom';
import { ProductAnalyticsNav } from './components/product-analytics-nav';

export function ProductAnalyticsLayout() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Product Analytics</h1>
        <p className="mt-2 text-muted-foreground">
          Track and analyze product usage, engagement, and user behavior patterns.
        </p>
      </div>

      <ProductAnalyticsNav />
      
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
}