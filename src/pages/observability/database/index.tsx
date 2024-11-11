import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { QueryPerformanceWidget } from './categories/performance/widgets/query-performance';
import { AvailabilityWidget } from './categories/health/widgets/availability';
import { ResourceTrendsWidget } from './categories/resource-utilization/widgets/resource-trends';
import { ErrorTrendsWidget } from './categories/query-errors/widgets/error-trends';
import { ConnectionPoolWidget } from './categories/performance/widgets/connection-pool';
import { ReplicationStatusWidget } from './categories/health/widgets/replication-status';

export default function Database() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Database Monitoring</h1>
        <p className="mt-2 text-muted-foreground">
          Monitor database performance, queries, and health metrics.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Query Response Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45ms</div>
            <p className="text-xs text-muted-foreground">-5ms from last hour</p>
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
            <CardTitle className="text-sm font-medium">Error Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0.5%</div>
            <p className="text-xs text-muted-foreground">-0.1% from last hour</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">CPU Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45%</div>
            <p className="text-xs text-muted-foreground">+5% from last hour</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Query Performance</CardTitle>
            <CardDescription>Monitor query execution time and patterns</CardDescription>
          </CardHeader>
          <CardContent>
            <QueryPerformanceWidget />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Database Health</CardTitle>
            <CardDescription>Track database availability and uptime</CardDescription>
          </CardHeader>
          <CardContent>
            <AvailabilityWidget />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Resource Utilization</CardTitle>
          <CardDescription>Monitor system resource usage trends</CardDescription>
        </CardHeader>
        <CardContent>
          <ResourceTrendsWidget />
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Error Trends</CardTitle>
            <CardDescription>Track query errors and exceptions</CardDescription>
          </CardHeader>
          <CardContent>
            <ErrorTrendsWidget />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Connection Pool</CardTitle>
            <CardDescription>Monitor database connections</CardDescription>
          </CardHeader>
          <CardContent>
            <ConnectionPoolWidget />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Replication Status</CardTitle>
          <CardDescription>Monitor database replication health</CardDescription>
        </CardHeader>
        <CardContent>
          <ReplicationStatusWidget />
        </CardContent>
      </Card>
    </div>
  );
}