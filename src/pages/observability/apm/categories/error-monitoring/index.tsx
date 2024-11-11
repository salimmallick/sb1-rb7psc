import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BaseWidget } from '@/components/dashboard/base-widget';
import { ErrorTrendsWidget } from './widgets/error-trends';
import { ErrorBreakdownWidget } from './widgets/error-breakdown';
import { ErrorStackTraceWidget } from './widgets/error-stack-trace';
import { ErrorDistributionWidget } from './widgets/error-distribution';
import { ErrorTimelineWidget } from './widgets/error-timeline';
import { ErrorImpactWidget } from './widgets/error-impact';

export function ErrorMonitoring() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Errors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,245</div>
            <p className="text-xs text-muted-foreground">+82 from last hour</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Error Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0.52%</div>
            <p className="text-xs text-muted-foreground">+0.08% from last hour</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Affected Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">328</div>
            <p className="text-xs text-muted-foreground">+45 from last hour</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unique Errors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+3 new errors</p>
          </CardContent>
        </Card>
      </div>

      <BaseWidget
        title="Error Trends"
        description="Monitor error patterns and trends over time"
        fullWidth
      >
        <ErrorTrendsWidget />
      </BaseWidget>

      <div className="grid gap-4 md:grid-cols-2">
        <BaseWidget
          title="Error Breakdown"
          description="Analyze errors by type and severity"
        >
          <ErrorBreakdownWidget />
        </BaseWidget>

        <BaseWidget
          title="Error Distribution"
          description="View error distribution across services"
        >
          <ErrorDistributionWidget />
        </BaseWidget>
      </div>

      <BaseWidget
        title="Error Timeline"
        description="Track error occurrences and patterns"
        fullWidth
      >
        <ErrorTimelineWidget />
      </BaseWidget>

      <BaseWidget
        title="Error Stack Trace Analysis"
        description="Analyze error stack traces and frequencies"
        fullWidth
      >
        <ErrorStackTraceWidget />
      </BaseWidget>

      <BaseWidget
        title="Error Impact Analysis"
        description="Assess error impact on system performance"
        fullWidth
      >
        <ErrorImpactWidget />
      </BaseWidget>
    </div>
  );
}