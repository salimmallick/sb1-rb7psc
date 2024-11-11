import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BaseWidget } from '@/components/dashboard/base-widget';
import { ResponseTimeWidget } from './widgets/response-time';
import { RequestVolumeWidget } from './widgets/request-volume';
import { EndpointPerformanceWidget } from './widgets/endpoint-performance';
import { StatusCodesWidget } from './widgets/status-codes';
import { GeographicDistributionWidget } from './widgets/geographic-distribution';
import { RequestBreakdownWidget } from './widgets/request-breakdown';

export function RequestMonitoring() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127ms</div>
            <p className="text-xs text-muted-foreground">-12ms from last hour</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Request Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.5k/s</div>
            <p className="text-xs text-muted-foreground">+300/s from last hour</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Error Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0.12%</div>
            <p className="text-xs text-muted-foreground">-0.05% from last hour</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">99.88%</div>
            <p className="text-xs text-muted-foreground">+0.05% from last hour</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <BaseWidget
          title="Response Time Distribution"
          description="Monitor response time patterns and percentiles"
        >
          <ResponseTimeWidget />
        </BaseWidget>

        <BaseWidget
          title="Request Volume"
          description="Track request volume and throughput"
        >
          <RequestVolumeWidget />
        </BaseWidget>
      </div>

      <BaseWidget
        title="Endpoint Performance"
        description="Monitor performance metrics by endpoint"
        fullWidth
      >
        <EndpointPerformanceWidget />
      </BaseWidget>

      <div className="grid gap-4 md:grid-cols-2">
        <BaseWidget
          title="Status Code Distribution"
          description="Analyze HTTP status code patterns"
        >
          <StatusCodesWidget />
        </BaseWidget>

        <BaseWidget
          title="Geographic Distribution"
          description="Monitor request patterns by region"
        >
          <GeographicDistributionWidget />
        </BaseWidget>
      </div>

      <BaseWidget
        title="Request Breakdown"
        description="Analyze request patterns and characteristics"
        fullWidth
      >
        <RequestBreakdownWidget />
      </BaseWidget>
    </div>
  );
}