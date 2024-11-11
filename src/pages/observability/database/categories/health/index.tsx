import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BaseWidget } from '@/components/dashboard/base-widget';
import { AvailabilityWidget } from './widgets/availability';
import { ReplicationStatusWidget } from './widgets/replication-status';
import { BackupStatusWidget } from './widgets/backup-status';
import { HealthChecksWidget } from './widgets/health-checks';
import { MaintenanceWindowsWidget } from './widgets/maintenance-windows';
import { IncidentHistoryWidget } from './widgets/incident-history';

export default function DatabaseHealth() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Uptime</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">99.99%</div>
            <p className="text-xs text-muted-foreground">Last 30 days</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Replication Lag</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45ms</div>
            <p className="text-xs text-muted-foreground">-5ms from last check</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Last Backup</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2h ago</div>
            <p className="text-xs text-muted-foreground">100% successful</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Health Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98/100</div>
            <p className="text-xs text-muted-foreground">+2 from last check</p>
          </CardContent>
        </Card>
      </div>

      <BaseWidget
        title="Database Availability"
        description="Monitor database uptime and availability metrics"
        fullWidth
      >
        <AvailabilityWidget />
      </BaseWidget>

      <div className="grid gap-4 md:grid-cols-2">
        <BaseWidget
          title="Replication Status"
          description="Monitor replication health and lag"
        >
          <ReplicationStatusWidget />
        </BaseWidget>

        <BaseWidget
          title="Backup Status"
          description="Track backup jobs and recovery points"
        >
          <BackupStatusWidget />
        </BaseWidget>
      </div>

      <BaseWidget
        title="Health Checks"
        description="View database health check results"
        fullWidth
      >
        <HealthChecksWidget />
      </BaseWidget>

      <div className="grid gap-4 md:grid-cols-2">
        <BaseWidget
          title="Maintenance Windows"
          description="Track scheduled maintenance activities"
        >
          <MaintenanceWindowsWidget />
        </BaseWidget>

        <BaseWidget
          title="Incident History"
          description="View past incidents and resolutions"
        >
          <IncidentHistoryWidget />
        </BaseWidget>
      </div>
    </div>
  );
}