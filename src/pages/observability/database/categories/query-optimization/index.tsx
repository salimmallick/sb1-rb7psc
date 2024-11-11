import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BaseWidget } from '@/components/dashboard/base-widget';
import { SlowQueriesWidget } from './widgets/slow-queries';
import { QueryPlanAnalysisWidget } from './widgets/query-plan-analysis';
import { IndexUsageWidget } from './widgets/index-usage';
import { TableStatisticsWidget } from './widgets/table-statistics';
import { QueryOptimizationWidget } from './widgets/query-optimization';
import { ResourceUsageWidget } from './widgets/resource-usage';

export default function QueryOptimization() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Slow Queries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+3 from last hour</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Missing Indexes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">-2 from last check</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Table Scans</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15%</div>
            <p className="text-xs text-muted-foreground">-5% from last hour</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Query Cache Hit</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85%</div>
            <p className="text-xs text-muted-foreground">+2% from last hour</p>
          </CardContent>
        </Card>
      </div>

      <BaseWidget
        title="Slow Queries Analysis"
        description="Monitor and analyze slow running queries"
        fullWidth
      >
        <SlowQueriesWidget />
      </BaseWidget>

      <BaseWidget
        title="Query Plan Analysis"
        description="Analyze query execution plans and optimization opportunities"
        fullWidth
      >
        <QueryPlanAnalysisWidget />
      </BaseWidget>

      <div className="grid gap-4 md:grid-cols-2">
        <BaseWidget
          title="Index Usage Statistics"
          description="Monitor index utilization and effectiveness"
        >
          <IndexUsageWidget />
        </BaseWidget>

        <BaseWidget
          title="Table Statistics"
          description="View table-level performance metrics"
        >
          <TableStatisticsWidget />
        </BaseWidget>
      </div>

      <BaseWidget
        title="Query Optimization Recommendations"
        description="View suggested optimizations for queries"
        fullWidth
      >
        <QueryOptimizationWidget />
      </BaseWidget>

      <BaseWidget
        title="Resource Usage by Query"
        description="Analyze resource consumption patterns"
        fullWidth
      >
        <ResourceUsageWidget />
      </BaseWidget>
    </div>
  );
}