import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BaseWidget } from '@/components/dashboard/base-widget';
import { TraceTimelineWidget } from './widgets/trace-timeline';
import { ServiceMapWidget } from './widgets/service-map';
import { SpanBreakdownWidget } from './widgets/span-breakdown';
import { TraceListWidget } from './widgets/trace-list';
import { ErrorDistributionWidget } from './widgets/error-distribution';
import { LatencyDistributionWidget } from './widgets/latency-distribution';

export function TransactionTracing() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Trace Duration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">245ms</div>
            <p className="text-xs text-muted-foreground">-15ms from last hour</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Traces</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.2k</div>
            <p className="text-xs text-muted-foreground">+100 from last hour</p>
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
            <CardTitle className="text-sm font-medium">Services Involved</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 new services</p>
          </CardContent>
        </Card>
      </div>

      <BaseWidget
        title="Trace Timeline"
        description="Visualize transaction trace timeline"
        fullWidth
      >
        <TraceTimelineWidget />
      </BaseWidget>

      <BaseWidget
        title="Service Map"
        description="View service dependencies and interactions"
        fullWidth
      >
        <ServiceMapWidget />
      </BaseWidget>

      <BaseWidget
        title="Span Breakdown"
        description="Analyze span durations and dependencies"
        fullWidth
      >
        <SpanBreakdownWidget />
      </BaseWidget>

      <div className="grid gap-4 md:grid-cols-2">
        <BaseWidget
          title="Error Distribution"
          description="View error patterns across services"
        >
          <ErrorDistributionWidget />
        </BaseWidget>

        <BaseWidget
          title="Latency Distribution"
          description="Analyze latency patterns across traces"
        >
          <LatencyDistributionWidget />
        </BaseWidget>
      </div>

      <BaseWidget
        title="Recent Traces"
        description="View and analyze recent transaction traces"
        fullWidth
      >
        <TraceListWidget />
      </BaseWidget>
    </div>
  );
}