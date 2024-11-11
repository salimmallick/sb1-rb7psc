import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BaseWidget } from '@/components/dashboard/base-widget';
import { DependencyMapWidget } from './widgets/dependency-map';
import { DependencyHealthWidget } from './widgets/dependency-health';
import { ExternalServicesWidget } from './widgets/external-services';
import { DatabaseConnectionsWidget } from './widgets/database-connections';
import { DependencyLatencyWidget } from './widgets/dependency-latency';
import { CircuitBreakerWidget } from './widgets/circuit-breaker';

export function DependencyMonitoring() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Dependencies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+2 from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Health Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98.5%</div>
            <p className="text-xs text-muted-foreground">+0.5% from last hour</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Failed Dependencies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">-2 from last hour</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">145ms</div>
            <p className="text-xs text-muted-foreground">-15ms from last hour</p>
          </CardContent>
        </Card>
      </div>

      <BaseWidget
        title="Dependency Map"
        description="Visualize service dependencies and their relationships"
        fullWidth
      >
        <DependencyMapWidget />
      </BaseWidget>

      <div className="grid gap-4 md:grid-cols-2">
        <BaseWidget
          title="Dependency Health"
          description="Monitor health status of dependencies"
        >
          <DependencyHealthWidget />
        </BaseWidget>

        <BaseWidget
          title="External Services"
          description="Track external service performance"
        >
          <ExternalServicesWidget />
        </BaseWidget>
      </div>

      <BaseWidget
        title="Database Connections"
        description="Monitor database connection pools and performance"
        fullWidth
      >
        <DatabaseConnectionsWidget />
      </BaseWidget>

      <div className="grid gap-4 md:grid-cols-2">
        <BaseWidget
          title="Dependency Latency"
          description="Track latency across service dependencies"
        >
          <DependencyLatencyWidget />
        </BaseWidget>

        <BaseWidget
          title="Circuit Breaker Status"
          description="Monitor circuit breaker states"
        >
          <CircuitBreakerWidget />
        </BaseWidget>
      </div>
    </div>
  );
}