import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BaseWidget } from '@/components/dashboard/base-widget';
import { ResourceUsageWidget } from './cloud/widgets/resource-usage';
import { CostAnalysisWidget } from './cloud/widgets/cost-analysis';
import { InstanceHealthWidget } from './cloud/widgets/instance-health';
import { AutoScalingWidget } from './cloud/widgets/auto-scaling';
import { ApiMetricsWidget } from './cloud/widgets/api-metrics';
import { StorageUtilizationWidget } from './cloud/widgets/storage-utilization';

export function CloudMonitoring() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Cost (MTD)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,450</div>
            <p className="text-xs text-muted-foreground">+$1,250 from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Instances</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">245</div>
            <p className="text-xs text-muted-foreground">+12 from last hour</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Storage Used</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.2 TB</div>
            <p className="text-xs text-muted-foreground">+200 GB from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">API Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.2M/hr</div>
            <p className="text-xs text-muted-foreground">+50K from last hour</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <BaseWidget
          title="Resource Usage by Service"
          description="Monitor service-specific resource usage"
        >
          <ResourceUsageWidget />
        </BaseWidget>

        <BaseWidget
          title="Cost Analysis"
          description="Track and forecast cloud expenditure"
        >
          <CostAnalysisWidget />
        </BaseWidget>
      </div>

      <BaseWidget
        title="Instance Health Status"
        description="Monitor instance health across regions"
        fullWidth
      >
        <InstanceHealthWidget />
      </BaseWidget>

      <div className="grid gap-4 md:grid-cols-2">
        <BaseWidget
          title="Auto-Scaling Events"
          description="Track auto-scaling activities"
        >
          <AutoScalingWidget />
        </BaseWidget>

        <BaseWidget
          title="API Call Metrics"
          description="Monitor API usage and errors"
        >
          <ApiMetricsWidget />
        </BaseWidget>
      </div>

      <BaseWidget
        title="Storage Utilization"
        description="Monitor storage usage and costs"
        fullWidth
      >
        <StorageUtilizationWidget />
      </BaseWidget>
    </div>
  );
}