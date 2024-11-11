import { DashboardTemplate } from '@/components/dashboard/dashboard-template';
import { useLayoutStore } from '@/store/layout-store';
import { BaseWidget } from '@/components/dashboard/base-widget';
import { FeatureAdoptionWidget } from '../widgets/feature-adoption';
import { EngagementHeatmapWidget } from '../widgets/engagement-heatmap';
import { InteractiveFunnelWidget } from '../widgets/interactive-funnel';

export function UsageInsights() {
  const { layouts, updateLayout } = useLayoutStore();
  const pageLayouts = layouts['usage-insights'] || {
    lg: [
      { i: 'feature-adoption', x: 0, y: 0, w: 12, h: 6 },
      { i: 'engagement-heatmap', x: 0, y: 6, w: 12, h: 6 },
      { i: 'interactive-funnel', x: 0, y: 12, w: 12, h: 6 }
    ]
  };

  const handleLayoutChange = (currentLayout: any, allLayouts: any) => {
    updateLayout('usage-insights', allLayouts);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Usage Insights</h1>
          <p className="mt-2 text-muted-foreground">
            Track and analyze feature adoption, engagement patterns, and user behavior.
          </p>
        </div>
      </div>

      <div className="grid gap-6">
        <BaseWidget
          title="Feature Adoption"
          description="Track usage and engagement metrics per feature"
          fullWidth
        >
          <FeatureAdoptionWidget />
        </BaseWidget>

        <BaseWidget
          title="Engagement Patterns"
          description="Analyze user engagement patterns"
          fullWidth
        >
          <EngagementHeatmapWidget />
        </BaseWidget>

        <BaseWidget
          title="Conversion Funnel"
          description="Track user progression through key workflows"
          fullWidth
        >
          <InteractiveFunnelWidget />
        </BaseWidget>
      </div>
    </div>
  );
}