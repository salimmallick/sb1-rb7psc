import { GridLayoutWrapper } from '@/components/dashboard/grid-layout-wrapper';
import { useLayoutStore } from '@/store/layout-store';
import { BaseWidget } from '@/components/dashboard/base-widget';
import { RetentionAnalysisWidget } from '../widgets/retention-analysis';
import { BehavioralSegmentationWidget } from '../widgets/behavioral-segmentation';
import { LifecycleStageWidget } from '../widgets/lifecycle-stage';
import { CustomSegmentWidget } from '../widgets/custom-segment';

export function CohortAnalysis() {
  const { layouts, updateLayout } = useLayoutStore();
  const pageLayouts = layouts['cohort-analysis'] || {
    lg: [
      { i: 'retention', x: 0, y: 0, w: 12, h: 24, minH: 20 },
      { i: 'behavioral', x: 0, y: 24, w: 6, h: 14, minH: 12 },
      { i: 'lifecycle', x: 6, y: 24, w: 6, h: 14, minH: 12 },
      { i: 'custom-segment', x: 0, y: 38, w: 12, h: 16, minH: 14 }
    ]
  };

  const handleLayoutChange = (currentLayout: any, allLayouts: any) => {
    updateLayout('cohort-analysis', allLayouts);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Cohort Analysis</h1>
          <p className="mt-2 text-muted-foreground">
            Analyze user retention and behavior patterns across different cohorts
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <BaseWidget
          title="Cohort Retention Tracking"
          description="Track retention across time for specific user cohorts"
          fullWidth
          className="h-full"
        >
          <div className="h-[800px] min-h-[700px]">
            <RetentionAnalysisWidget />
          </div>
        </BaseWidget>

        <div className="grid gap-6 grid-cols-2">
          <BaseWidget
            title="Behavioral Segmentation"
            description="Create dynamic segments based on behavior patterns"
            className="h-full"
          >
            <div className="h-[400px] min-h-[350px]">
              <BehavioralSegmentationWidget />
            </div>
          </BaseWidget>

          <BaseWidget
            title="Lifecycle Stage Distribution"
            description="Visualize user lifecycle stages"
            className="h-full"
          >
            <div className="h-[400px] min-h-[350px]">
              <LifecycleStageWidget />
            </div>
          </BaseWidget>
        </div>

        <BaseWidget
          title="Custom Segment Comparison"
          description="Compare engagement metrics across cohorts"
          fullWidth
          className="h-full"
        >
          <div className="h-[500px] min-h-[400px]">
            <CustomSegmentWidget />
          </div>
        </BaseWidget>
      </div>
    </div>
  );
}