import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BaseWidget } from '@/components/dashboard/base-widget';
import { LiveMetricsWidget } from './widgets/live-metrics';
import { ResourceUtilizationWidget } from './widgets/resource-utilization';
import { ActiveTransactionsWidget } from './widgets/active-transactions';
import { ErrorRateWidget } from './widgets/error-rate';
import { ThroughputWidget } from './widgets/throughput';
import { MemoryUsageWidget } from './widgets/memory-usage';

export function RealTimeMonitoring() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4k</div>
            <p className="text-xs text-muted-foreground">+200 from last minute</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Response Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127ms</div>
            <p className="text-xs text-muted-foreground">-5ms from last minute</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Error Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0.12%</div>
            <p className="text-xs text-muted-foreground">+0.02% from last minute</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">CPU Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45%</div>
            <p className="text-xs text-muted-foreground">+5% from last minute</p>
          </CardContent>
        </Card>
      </div>

      <BaseWidget
        title="Live Application Metrics"
        description="Monitor real-time application performance metrics"
        fullWidth
      >
        <LiveMetricsWidget />
      </BaseWidget>

      <div className="grid gap-4 md:grid-cols-2">
        <BaseWidget
          title="Resource Utilization"
          description="Track CPU, memory, and I/O usage in real-time"
        >
          <ResourceUtilizationWidget />
        </BaseWidget>

        <BaseWidget
          title="Active Transactions"
          description="Monitor ongoing transactions and their status"
        >
          <ActiveTransactionsWidget />
        </BaseWidget>
      </div>

      <BaseWidget
        title="Error Rate Analysis"
        description="Track error rates and patterns in real-time"
        fullWidth
      >
        <ErrorRateWidget />
      </BaseWidget>

      <div className="grid gap-4 md:grid-cols-2">
        <BaseWidget
          title="Throughput"
          description="Monitor request throughput and processing rates"
        >
          <ThroughputWidget />
        </BaseWidget>

        <BaseWidget
          title="Memory Usage"
          description="Track memory allocation and garbage collection"
        >
          <MemoryUsageWidget />
        </BaseWidget>
      </div>
    </div>
  );
}