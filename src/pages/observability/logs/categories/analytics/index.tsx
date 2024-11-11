import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BaseWidget } from '@/components/dashboard/base-widget';
import { LogVolumeWidget } from './widgets/log-volume';
import { LogSeverityWidget } from './widgets/log-severity';
import { LogSourceWidget } from './widgets/log-source';
import { LogTrendsWidget } from './widgets/log-trends';
import { LogAnomaliesWidget } from './widgets/log-anomalies';
import { LogPatternWidget } from './widgets/log-pattern';

export default function LogAnalytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Log Analytics</h1>
        <p className="mt-2 text-muted-foreground">
          Analyze log patterns, trends, and anomalies across your systems.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Log Volume</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.2M</div>
            <p className="text-xs text-muted-foreground">+50K from last hour</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Error Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.5%</div>
            <p className="text-xs text-muted-foreground">+0.2% from last hour</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unique Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">+2 new sources</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Anomalies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">+3 from last hour</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <BaseWidget
          title="Log Volume Trends"
          description="Monitor log volume patterns across different sources"
        >
          <LogVolumeWidget />
        </BaseWidget>

        <BaseWidget
          title="Severity Distribution"
          description="Analyze log severity levels and their distribution"
        >
          <LogSeverityWidget />
        </BaseWidget>
      </div>

      <BaseWidget
        title="Log Source Analysis"
        description="Track log generation patterns across different services"
        fullWidth
      >
        <LogSourceWidget />
      </BaseWidget>

      <div className="grid gap-4 md:grid-cols-2">
        <BaseWidget
          title="Log Trends"
          description="Analyze correlations between different log metrics"
        >
          <LogTrendsWidget />
        </BaseWidget>

        <BaseWidget
          title="Anomaly Detection"
          description="Identify unusual patterns in log data"
        >
          <LogAnomaliesWidget />
        </BaseWidget>
      </div>

      <BaseWidget
        title="Pattern Analysis"
        description="Discover common patterns and sequences in logs"
        fullWidth
      >
        <LogPatternWidget />
      </BaseWidget>
    </div>
  );
}