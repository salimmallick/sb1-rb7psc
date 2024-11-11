import { BaseWidget } from '@/components/dashboard/base-widget';
import { RetentionAnalysisWidget } from '../widgets/retention-analysis';

export function RetentionAnalysis() {
  return (
    <div className="space-y-6">
      <BaseWidget
        title="Retention Analysis"
        description="Monitor user retention and identify churn risks"
        fullWidth
      >
        <RetentionAnalysisWidget />
      </BaseWidget>
    </div>
  );
}