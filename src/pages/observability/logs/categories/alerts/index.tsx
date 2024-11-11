import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BaseWidget } from '@/components/dashboard/base-widget';
import { AlertRulesWidget } from './widgets/alert-rules';
import { AlertHistoryWidget } from './widgets/alert-history';
import { AlertStatusWidget } from './widgets/alert-status';
import { NotificationChannelsWidget } from './widgets/notification-channels';
import { AlertTrendsWidget } from './widgets/alert-trends';
import { AlertSeverityWidget } from './widgets/alert-severity';

export default function LogAlerts() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Log Alerts</h1>
        <p className="mt-2 text-muted-foreground">
          Configure and manage alerts based on log patterns and thresholds.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+3 from last hour</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Alert Rules</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">+2 new rules</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Triggered Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">128</div>
            <p className="text-xs text-muted-foreground">-12 from yesterday</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Notification Channels</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">All operational</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <BaseWidget
          title="Alert Rules"
          description="Configure and manage alert rules"
        >
          <AlertRulesWidget />
        </BaseWidget>

        <BaseWidget
          title="Alert History"
          description="View recent alert history and status"
        >
          <AlertHistoryWidget />
        </BaseWidget>
      </div>

      <BaseWidget
        title="Alert Status Overview"
        description="Monitor current alert status across systems"
        fullWidth
      >
        <AlertStatusWidget />
      </BaseWidget>

      <div className="grid gap-4 md:grid-cols-2">
        <BaseWidget
          title="Notification Channels"
          description="Manage alert notification channels"
        >
          <NotificationChannelsWidget />
        </BaseWidget>

        <BaseWidget
          title="Alert Trends"
          description="Analyze alert frequency and patterns"
        >
          <AlertTrendsWidget />
        </BaseWidget>
      </div>

      <BaseWidget
        title="Alert Severity Distribution"
        description="Monitor alerts by severity level"
        fullWidth
      >
        <AlertSeverityWidget />
      </BaseWidget>
    </div>
  );
}