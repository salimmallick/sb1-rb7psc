import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BaseWidget } from '@/components/dashboard/base-widget';
import { CPUUsageWidget } from './system-health/widgets/cpu-usage';
import { MemoryUsageWidget } from './system-health/widgets/memory-usage';
import { DiskUtilizationWidget } from './system-health/widgets/disk-utilization';
import { NetworkThroughputWidget } from './system-health/widgets/network-throughput';
import { TemperatureWidget } from './system-health/widgets/temperature';
import { PowerUsageWidget } from './system-health/widgets/power-usage';
import { ProcessMonitoringWidget } from './system-health/widgets/process-monitoring';

export function SystemHealth() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">CPU Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">65%</div>
            <p className="text-xs text-muted-foreground">+5% from last hour</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Memory Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-muted-foreground">-2% from last hour</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Disk Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">82%</div>
            <p className="text-xs text-muted-foreground">+1% from last hour</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Network Load</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.1 GB/s</div>
            <p className="text-xs text-muted-foreground">+0.3 GB/s from last hour</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <BaseWidget
          title="CPU Utilization"
          description="Monitor CPU usage across all cores"
        >
          <CPUUsageWidget />
        </BaseWidget>

        <BaseWidget
          title="Memory Usage"
          description="Track memory utilization and distribution"
        >
          <MemoryUsageWidget />
        </BaseWidget>
      </div>

      <BaseWidget
        title="Process Monitoring"
        description="Monitor system processes and resource consumption"
        fullWidth
      >
        <ProcessMonitoringWidget />
      </BaseWidget>

      <div className="grid gap-4 md:grid-cols-2">
        <BaseWidget
          title="Disk Utilization"
          description="Monitor disk usage and I/O performance"
        >
          <DiskUtilizationWidget />
        </BaseWidget>

        <BaseWidget
          title="Network Throughput"
          description="Monitor network traffic and bandwidth usage"
        >
          <NetworkThroughputWidget />
        </BaseWidget>
      </div>

      <BaseWidget
        title="Temperature and Power Monitoring"
        description="Monitor system temperature, fan speeds, and power consumption"
        fullWidth
      >
        <div className="grid gap-4 md:grid-cols-2">
          <TemperatureWidget />
          <PowerUsageWidget />
        </div>
      </BaseWidget>
    </div>
  );
}