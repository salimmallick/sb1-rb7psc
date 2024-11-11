import { BaseWidget } from '@/components/dashboard/base-widget';
import { PredictiveAnalyticsWidget } from '../widgets/predictive-analytics';
import { AnomalyDetectionWidget } from '../widgets/anomaly-detection';

export function PredictiveInsights() {
  return (
    <div className="space-y-6">
      <BaseWidget
        title="Predictive Analytics"
        description="AI-driven predictions for user behavior"
        fullWidth
      >
        <PredictiveAnalyticsWidget />
      </BaseWidget>

      <BaseWidget
        title="Anomaly Detection"
        description="Detect and analyze unusual behavior patterns"
        fullWidth
      >
        <AnomalyDetectionWidget />
      </BaseWidget>
    </div>
  );
}