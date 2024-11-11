import { Outlet } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { LearnSidebar } from './components/learn-sidebar';
import { LearnSearch } from './components/learn-search';

export function LearnLayout() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Documentation</h1>
        <p className="mt-2 text-muted-foreground">
          Explore guides, tutorials, and detailed documentation about theData.io platform.
        </p>
      </div>
      
      <div className="max-w-2xl mx-auto mb-6">
        <LearnSearch />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6">
        <LearnSidebar />
        <Card className="p-6">
          <Outlet />
        </Card>
      </div>
    </div>
  );
}