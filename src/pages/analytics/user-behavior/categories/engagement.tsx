import { BaseWidget } from '@/components/dashboard/base-widget';
import { ActiveUserWidget } from '../widgets/active-user';
import { EngagementHeatmapWidget } from '../widgets/engagement-heatmap';
import { InteractionAnalysisWidget } from '../widgets/interaction-analysis';

export function EngagementAnalysis() {
  return (
    <div className="space-y-6">
      <BaseWidget
        title="Active Users Overview"
        description="Track daily, weekly, and monthly active users"
        fullWidth
      >
        <ActiveUserWidget />
      </BaseWidget>

      <BaseWidget
        title="Engagement Patterns"
        description="Visualize user engagement patterns across time periods"
        fullWidth
      >
        <EngagementHeatmapWidget />
      </BaseWidget>

      <BaseWidget
        title="Feature Interaction Analysis"
        description="Track detailed user interactions with features"
        fullWidth
      >
        <InteractionAnalysisWidget />
      </BaseWidget>
    </div>
  );
}