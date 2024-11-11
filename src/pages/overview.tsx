import { BaseWidget } from '@/components/dashboard/base-widget';
import { GridLayoutWrapper } from '@/components/dashboard/grid-layout-wrapper';
import { ExecutiveSummary } from '@/components/overview/executive-summary';
import { PerformanceOverview } from '@/components/overview/performance-overview';
import { UserEngagement } from '@/components/overview/user-engagement';
import { VideoPerformance } from '@/components/overview/video-performance';
import { NetworkPerformance } from '@/components/overview/network-performance';
import { IncidentsAlerts } from '@/components/overview/incidents-alerts';
import { CostManagement } from '@/components/overview/cost-management';
import { ObservabilityInsights } from '@/components/overview/observability-insights';
import { TrafficInsights } from '@/components/overview/traffic-insights';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Overview() {
  const layouts = {
    lg: [
      { i: 'executive', x: 0, y: 0, w: 12, h: 3, minH: 3 },
      { i: 'performance', x: 0, y: 3, w: 12, h: 7, minH: 7 },
      { i: 'engagement', x: 0, y: 10, w: 12, h: 7, minH: 7 },
      { i: 'video', x: 0, y: 17, w: 12, h: 7, minH: 7 },
      { i: 'network', x: 0, y: 24, w: 12, h: 7, minH: 7 },
      { i: 'incidents', x: 0, y: 31, w: 12, h: 7, minH: 7 },
      { i: 'cost', x: 0, y: 38, w: 12, h: 7, minH: 7 },
      { i: 'observability', x: 0, y: 45, w: 12, h: 7, minH: 7 },
      { i: 'traffic', x: 0, y: 52, w: 12, h: 7, minH: 7 }
    ]
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Overview</h1>
        <p className="mt-2 text-muted-foreground">
          Welcome to theData.io platform. This is your central dashboard for monitoring and analyzing your application's performance.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Health</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98%</div>
            <p className="text-xs text-muted-foreground">+2% from last hour</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Services</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45/47</div>
            <p className="text-xs text-muted-foreground">2 services degraded</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">-2 from last hour</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Response Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">145ms</div>
            <p className="text-xs text-muted-foreground">-10ms from last hour</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6">
        <div key="executive">
          <BaseWidget 
            title="Executive Summary" 
            description="High-level overview of key business metrics and performance indicators"
          >
            <ExecutiveSummary hideTitle />
          </BaseWidget>
        </div>

        <div key="performance">
          <BaseWidget 
            title="Performance Overview" 
            description="System-wide performance metrics and trends"
          >
            <PerformanceOverview hideTitle />
          </BaseWidget>
        </div>

        <div key="engagement">
          <BaseWidget 
            title="User Engagement" 
            description="User activity and engagement metrics"
          >
            <UserEngagement hideTitle />
          </BaseWidget>
        </div>

        <div key="video">
          <BaseWidget 
            title="Video Performance" 
            description="Video streaming and playback metrics"
          >
            <VideoPerformance hideTitle />
          </BaseWidget>
        </div>

        <div key="network">
          <BaseWidget 
            title="Network Performance" 
            description="Network health and performance indicators"
          >
            <NetworkPerformance hideTitle />
          </BaseWidget>
        </div>

        <div key="incidents">
          <BaseWidget 
            title="Incidents & Alerts" 
            description="Active incidents and recent alerts"
          >
            <IncidentsAlerts hideTitle />
          </BaseWidget>
        </div>

        <div key="cost">
          <BaseWidget 
            title="Cost Management" 
            description="Resource utilization and cost analysis"
          >
            <CostManagement hideTitle />
          </BaseWidget>
        </div>

        <div key="observability">
          <BaseWidget 
            title="Observability Insights" 
            description="System observability and monitoring metrics"
          >
            <ObservabilityInsights hideTitle />
          </BaseWidget>
        </div>

        <div key="traffic">
          <BaseWidget 
            title="Traffic Insights" 
            description="Traffic patterns and analysis"
          >
            <TrafficInsights hideTitle />
          </BaseWidget>
        </div>
      </div>
    </div>
  );
}