import { GridLayoutWrapper } from '@/components/dashboard/grid-layout-wrapper';
import { useLayoutStore } from '@/store/layout-store';
import { BaseWidget } from '@/components/dashboard/base-widget';
import { LoadTimeWidget } from '../widgets/load-time';
import { ErrorReportWidget } from '../widgets/error-report';
import { NetworkLatencyWidget } from '../widgets/network-latency';
import { ResourceUsageWidget } from '../widgets/resource-usage';

export function PerformanceMonitoring() {
  const { layouts, updateLayout } = useLayoutStore();
  const pageLayouts = layouts['performance-monitoring'] || {
    lg: [
      { i: 'load-time', x: 0, y: 0, w: 12, h: 16, minH: 14 },
      { i: 'error-report', x: 0, y: 16, w: 6, h: 14, minH: 12 },
      { i: 'network-latency', x: 6, y: 16, w: 6, h: 14, minH: 12 },
      { i: 'resource-usage', x: 0, y: 30, w: 12, h: 16, minH: 14 }
    ]
  };

  const handleLayoutChange = (currentLayout: any, allLayouts: any) => {
    updateLayout('performance-monitoring', allLayouts);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Performance Monitoring</h1>
          <p className="mt-2 text-muted-foreground">
            Monitor and analyze application performance metrics
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <BaseWidget
          title="Load Time Analysis"
          description="Measure loading times across features"
          fullWidth
          className="h-full"
        >
          <div className="h-[400px]">
            <LoadTimeWidget />
          </div>
        </BaseWidget>

        <div className="grid gap-6 grid-cols-2">
          <BaseWidget
            title="Error & Crash Report"
            description="Track errors and crashes"
            className="h-full"
          >
            <div className="h-[350px]">
              <ErrorReportWidget />
            </div>
          </BaseWidget>

          <BaseWidget
            title="Network Latency"
            description="Monitor network performance"
            className="h-full"
          >
            <div className="h-[350px]">
              <NetworkLatencyWidget />
            </div>
          </BaseWidget>
        </div>

        <BaseWidget
          title="Resource Usage"
          description="Monitor CPU and memory usage"
          fullWidth
          className="h-full"
        >
          <div className="h-[400px]">
            <ResourceUsageWidget />
          </div>
        </BaseWidget>
      </div>
    </div>
  );
}