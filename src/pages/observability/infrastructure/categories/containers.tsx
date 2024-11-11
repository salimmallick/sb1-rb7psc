import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BaseWidget } from '@/components/dashboard/base-widget';
import { PodResourceUsageWidget } from './containers/widgets/pod-resource-usage';
import { NodeHealthWidget } from './containers/widgets/node-health';
import { ContainerRestartWidget } from './containers/widgets/container-restart';
import { KubernetesEventsWidget } from './containers/widgets/kubernetes-events';
import { ClusterNetworkWidget } from './containers/widgets/cluster-network';

export function ContainerMonitoring() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Pods</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">245</div>
            <p className="text-xs text-muted-foreground">+12 from last hour</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Node Health</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98%</div>
            <p className="text-xs text-muted-foreground">-1% from last check</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Container Restarts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Last 24 hours</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cluster Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">Last hour</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <BaseWidget
          title="Pod Resource Usage"
          description="Monitor pod CPU and memory utilization"
        >
          <PodResourceUsageWidget />
        </BaseWidget>

        <BaseWidget
          title="Node Health Status"
          description="Track node availability and performance"
        >
          <NodeHealthWidget />
        </BaseWidget>
      </div>

      <BaseWidget
        title="Container Restart Analysis"
        description="Monitor container stability and restart patterns"
        fullWidth
      >
        <ContainerRestartWidget />
      </BaseWidget>

      <div className="grid gap-4 md:grid-cols-2">
        <BaseWidget
          title="Kubernetes Events"
          description="Track and analyze Kubernetes cluster events"
        >
          <KubernetesEventsWidget />
        </BaseWidget>

        <BaseWidget
          title="Cluster Network Traffic"
          description="Monitor inter-pod network performance"
        >
          <ClusterNetworkWidget />
        </BaseWidget>
      </div>
    </div>
  );
}