import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BaseWidget } from '@/components/dashboard/base-widget';
import { QueryPerformanceWidget } from './widgets/query-performance';
import { ConnectionPoolWidget } from './widgets/connection-pool';
import { TransactionAnalysisWidget } from './widgets/transaction-analysis';
import { CachePerformanceWidget } from './widgets/cache-performance';
import { LockAnalysisWidget } from './widgets/lock-analysis';
import { QueryThroughputWidget } from './widgets/query-throughput';

export default function DatabasePerformance() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Query Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45ms</div>
            <p className="text-xs text-muted-foreground">-5ms from last hour</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Queries/Second</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.2k</div>
            <p className="text-xs text-muted-foreground">+100 from last hour</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Connections</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">245</div>
            <p className="text-xs text-muted-foreground">+12 from last hour</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cache Hit Ratio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92.5%</div>
            <p className="text-xs text-muted-foreground">+1.5% from last hour</p>
          </CardContent>
        </Card>
      </div>

      <BaseWidget
        title="Query Performance Trends"
        description="Monitor query execution time and performance patterns"
        fullWidth
      >
        <QueryPerformanceWidget />
      </BaseWidget>

      <div className="grid gap-4 md:grid-cols-2">
        <BaseWidget
          title="Connection Pool Metrics"
          description="Track database connection pool status"
        >
          <ConnectionPoolWidget />
        </BaseWidget>

        <BaseWidget
          title="Transaction Analysis"
          description="Monitor transaction performance and status"
        >
          <TransactionAnalysisWidget />
        </BaseWidget>
      </div>

      <BaseWidget
        title="Cache Performance"
        description="Analyze cache efficiency and hit rates"
        fullWidth
      >
        <CachePerformanceWidget />
      </BaseWidget>

      <div className="grid gap-4 md:grid-cols-2">
        <BaseWidget
          title="Lock Analysis"
          description="Monitor database locks and contentions"
        >
          <LockAnalysisWidget />
        </BaseWidget>

        <BaseWidget
          title="Query Throughput"
          description="Track query execution rates"
        >
          <QueryThroughputWidget />
        </BaseWidget>
      </div>
    </div>
  );
}