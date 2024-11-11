import { BaseWidget } from '@/components/dashboard/base-widget';
import { UserJourneyWidget } from '../widgets/user-journey';
import { SessionReplayWidget } from '../widgets/session-replay';

export function UserJourneyAnalysis() {
  return (
    <div className="space-y-6">
      <BaseWidget
        title="User Journey Flow"
        description="Visualize user paths through your application"
        fullWidth
      >
        <UserJourneyWidget />
      </BaseWidget>

      <BaseWidget
        title="Session Analysis"
        description="Analyze user session patterns and behaviors"
        fullWidth
      >
        <SessionReplayWidget />
      </BaseWidget>
    </div>
  );
}