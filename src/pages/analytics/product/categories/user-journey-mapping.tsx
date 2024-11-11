import { DashboardTemplate } from '@/components/dashboard/dashboard-template';
import { useLayoutStore } from '@/store/layout-store';
import { BaseWidget } from '@/components/dashboard/base-widget';
import { UserFlowWidget } from '../widgets/user-flow';
import { SessionReplayWidget } from '../widgets/session-replay';
import { JourneyDropoffWidget } from '../widgets/journey-dropoff';
import { MultiDevicePathingWidget } from '../widgets/multi-device-pathing';

export function UserJourneyMapping() {
  const { layouts, updateLayout } = useLayoutStore();
  const pageLayouts = layouts['user-journey'] || {
    lg: [
      { i: 'user-flow', x: 0, y: 0, w: 12, h: 24, minH: 20 },
      { i: 'session-replay', x: 0, y: 24, w: 6, h: 16, minH: 12 },
      { i: 'journey-dropoff', x: 6, y: 24, w: 6, h: 16, minH: 12 },
      { i: 'multi-device', x: 0, y: 40, w: 12, h: 24, minH: 20 }
    ],
    md: [
      { i: 'user-flow', x: 0, y: 0, w: 12, h: 24, minH: 20 },
      { i: 'session-replay', x: 0, y: 24, w: 6, h: 16, minH: 12 },
      { i: 'journey-dropoff', x: 6, y: 24, w: 6, h: 16, minH: 12 },
      { i: 'multi-device', x: 0, y: 40, w: 12, h: 24, minH: 20 }
    ]
  };

  const handleLayoutChange = (currentLayout: any, allLayouts: any) => {
    updateLayout('user-journey', allLayouts);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">User Journey Analysis</h1>
          <p className="mt-2 text-muted-foreground">
            Analyze user flows, paths and behaviors across your application
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <BaseWidget
          title="User Flow Map"
          description="Visual representation of user navigation paths"
          fullWidth
          className="h-full"
        >
          <div className="h-[800px] min-h-[600px]">
            <UserFlowWidget />
          </div>
        </BaseWidget>

        <div className="grid gap-6 grid-cols-2">
          <BaseWidget
            title="Session Analytics"
            description="Analyze user session patterns and behaviors"
            className="h-full"
          >
            <div className="h-[400px] min-h-[350px]">
              <SessionReplayWidget />
            </div>
          </BaseWidget>

          <BaseWidget
            title="Drop-off Analysis" 
            description="Identify and analyze journey drop-off points"
            className="h-full"
          >
            <div className="h-[400px] min-h-[350px]">
              <JourneyDropoffWidget />
            </div>
          </BaseWidget>
        </div>

        <BaseWidget
          title="Multi-Device Journeys"
          description="Track user journeys across different devices"
          fullWidth
          className="h-full"
        >
          <div className="h-[800px] min-h-[600px]">
            <MultiDevicePathingWidget />
          </div>
        </BaseWidget>
      </div>
    </div>
  );
}