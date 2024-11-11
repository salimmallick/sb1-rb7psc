import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BaseWidget } from '@/components/dashboard/base-widget';
import { TrafficAnalysisWidget } from './network/widgets/traffic-analysis';
import { LatencyJitterWidget } from './network/widgets/latency-jitter';
import { PacketLossWidget } from './network/widgets/packet-loss';
import { DeviceUptimeWidget } from './network/widgets/device-uptime';
import { SecurityEventsWidget } from './network/widgets/security-events';
import { BandwidthByAppWidget } from './network/widgets/bandwidth-by-app';

export function NetworkMonitoring() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Network Traffic</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4 GB/s</div>
            <p className="text-xs text-muted-foreground">+0.3 GB/s from last hour</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Latency</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45ms</div>
            <p className="text-xs text-muted-foreground">-5ms from last hour</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Packet Loss</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0.05%</div>
            <p className="text-xs text-muted-foreground">-0.01% from last hour</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Devices</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,245</div>
            <p className="text-xs text-muted-foreground">+23 from last hour</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <BaseWidget
          title="Traffic Analysis"
          description="Monitor network traffic patterns and volume"
        >
          <TrafficAnalysisWidget />
        </BaseWidget>

        <BaseWidget
          title="Latency & Jitter"
          description="Track network latency and jitter metrics"
        >
          <LatencyJitterWidget />
        </BaseWidget>
      </div>

      <BaseWidget
        title="Packet Loss Analysis"
        description="Monitor packet loss across network segments"
        fullWidth
      >
        <PacketLossWidget />
      </BaseWidget>

      <div className="grid gap-4 md:grid-cols-2">
        <BaseWidget
          title="Device Uptime/Downtime"
          description="Track device availability and reliability"
        >
          <DeviceUptimeWidget />
        </BaseWidget>

        <BaseWidget
          title="Security Events"
          description="Monitor firewall and security incidents"
        >
          <SecurityEventsWidget />
        </BaseWidget>
      </div>

      <BaseWidget
        title="Bandwidth Utilization by Application"
        description="Monitor bandwidth consumption per application"
        fullWidth
      >
        <BandwidthByAppWidget />
      </BaseWidget>
    </div>
  );
}