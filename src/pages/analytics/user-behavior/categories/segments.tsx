import { BaseWidget } from '@/components/dashboard/base-widget';
import { BehavioralSegmentationWidget } from '../widgets/behavioral-segmentation';

export function BehavioralSegments() {
  return (
    <div className="space-y-6">
      <BaseWidget
        title="Behavioral Segmentation"
        description="Analyze user segments based on behavior patterns"
        fullWidth
      >
        <BehavioralSegmentationWidget />
      </BaseWidget>
    </div>
  );
}