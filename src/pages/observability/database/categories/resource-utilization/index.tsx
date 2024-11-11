import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BaseWidget } from '@/components/dashboard/base-widget';
import { CPUUtilizationWidget } from './widgets/cpu-utilization';
import { MemoryUsageWidget } from './widgets/memory-usage';
import { DiskUtilizationWidget } from './widgets/disk-utilization';
import { ConnectionsWidget } from './widgets/connections';
import { IOMetricsWidget } from './widgets/io-metrics';
import { ResourceTrendsWidget } from './widgets/resource-trends';

export default function ResourceUtilization() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">CPU Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45%</div>
            <p className="text-xs text-muted-foreground">+5% from last hour</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Memory Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">72%</div>
            <p className="text-xs text-muted-foreground">+3% from last hour</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Disk Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68%</div>
            <p className="text-xs text-muted-foreground">+1% from last hour</p>
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
      </div>

      <BaseWidget
        title="Resource Utilization Trends"
        description="Monitor resource usage patterns over time"
        fullWidth
      >
        <ResourceTrendsWidget />
      </BaseWidget>

      <div className="grid gap-4 md:grid-cols-2">
        <BaseWidget
          title="CPU Utilization"
          description="Track CPU usage and load"
        >
          <CPUUtilizationWidget />
        </BaseWidget>

        <BaseWidget
          title="Memory Usage"
          description="Monitor memory allocation and usage"
        >
          <MemoryUsageWidget />
        </BaseWidget>
      </div>

      <BaseWidget
        title="Disk Utilization"
        description="Monitor disk space and I/O patterns"
        fullWidth
      >
        <DiskUtilizationWidget />
      </BaseWidget>

      <div className="grid gap-4 md:grid-cols-2">
        <BaseWidget
          title="Connection Pool"
          description="Track database connections"
        >
          <ConnectionsWidget />
        </BaseWidget>

        <BaseWidget
          title="I/O Metrics"
          description="Monitor I/O operations and throughput"
        >
          <IOMetricsWidget />
        </BaseWidget>
      </div>
    </div>
  );
}