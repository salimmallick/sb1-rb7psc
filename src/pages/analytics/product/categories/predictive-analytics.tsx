import { GridLayoutWrapper } from '@/components/dashboard/grid-layout-wrapper';
import { useLayoutStore } from '@/store/layout-store';
import { BaseWidget } from '@/components/dashboard/base-widget';
import { ChurnPredictionWidget } from '../widgets/churn-prediction';
import { EngagementForecastWidget } from '../widgets/engagement-forecast';
import { ConversionProbabilityWidget } from '../widgets/conversion-probability';
import { LifetimeValueWidget } from '../widgets/lifetime-value';

export function PredictiveAnalytics() {
  const { layouts, updateLayout } = useLayoutStore();
  const pageLayouts = layouts['predictive-analytics'] || {
    lg: [
      { i: 'churn', x: 0, y: 0, w: 12, h: 16, minH: 14 },
      { i: 'engagement', x: 0, y: 16, w: 6, h: 14, minH: 12 },
      { i: 'conversion', x: 6, y: 16, w: 6, h: 14, minH: 12 },
      { i: 'lifetime-value', x: 0, y: 30, w: 12, h: 16, minH: 14 }
    ]
  };

  const handleLayoutChange = (currentLayout: any, allLayouts: any) => {
    updateLayout('predictive-analytics', allLayouts);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Predictive Analytics</h1>
          <p className="mt-2 text-muted-foreground">
            AI-driven insights and predictions for user behavior and business metrics
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <BaseWidget
          title="Churn Prediction"
          description="Predict user churn likelihood"
          fullWidth
          className="h-full"
        >
          <div className="h-[400px]">
            <ChurnPredictionWidget />
          </div>
        </BaseWidget>

        <div className="grid gap-6 grid-cols-2">
          <BaseWidget
            title="Engagement Score Forecasting"
            description="Forecast future engagement levels"
            className="h-full"
          >
            <div className="h-[350px]">
              <EngagementForecastWidget />
            </div>
          </BaseWidget>

          <BaseWidget
            title="Conversion Probability"
            description="Estimate conversion likelihood"
            className="h-full"
          >
            <div className="h-[350px]">
              <ConversionProbabilityWidget />
            </div>
          </BaseWidget>
        </div>

        <BaseWidget
          title="Lifetime Value Estimator"
          description="Predict potential revenue contributions"
          fullWidth
          className="h-full"
        >
          <div className="h-[400px]">
            <LifetimeValueWidget />
          </div>
        </BaseWidget>
      </div>
    </div>
  );
}