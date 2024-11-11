import { BaseWidget } from '@/components/dashboard/base-widget';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

// Import widgets
import { ActiveUserWidget } from './widgets/active-user';
import { EngagementHeatmapWidget } from './widgets/engagement-heatmap';
import { BehavioralSegmentationWidget } from './widgets/behavioral-segmentation';
import { UserJourneyWidget } from './widgets/user-journey';
import { RetentionAnalysisWidget } from './widgets/retention-analysis';
import { InteractionAnalysisWidget } from './widgets/interaction-analysis';
import { AnomalyDetectionWidget } from './widgets/anomaly-detection';
import { PredictiveAnalyticsWidget } from './widgets/predictive-analytics';

export default function UserBehaviorAnalytics() {
  const exportDashboard = async () => {
    const dashboard = document.getElementById('user-behavior-dashboard');
    if (!dashboard) return;

    const canvas = await html2canvas(dashboard, {
      scale: 2,
      useCORS: true,
      logging: false,
      windowWidth: dashboard.scrollWidth,
      windowHeight: dashboard.scrollHeight
    });
    
    const imgData = canvas.toDataURL('image/png');
    
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: [canvas.width, canvas.height]
    });
    
    pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
    pdf.save('user-behavior-analytics.pdf');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">User Behavior Analytics</h1>
          <p className="mt-2 text-muted-foreground">
            Analyze user behavior patterns, engagement, and interactions across your platform
          </p>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon" variant="outline" onClick={exportDashboard}>
                <Download className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Export Dashboard</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div id="user-behavior-dashboard" className="space-y-6">
        <BaseWidget
          title="Active Users Overview"
          description="Track daily, weekly, and monthly active users (DAU, WAU, MAU)"
          fullWidth
        >
          <ActiveUserWidget />
        </BaseWidget>

        <BaseWidget
          title="Engagement Patterns"
          description="Visualize user engagement intensity across different time periods"
          fullWidth
        >
          <EngagementHeatmapWidget />
        </BaseWidget>

        <BaseWidget
          title="Behavioral Segmentation"
          description="Analyze user segments based on behavior patterns"
          fullWidth
        >
          <BehavioralSegmentationWidget />
        </BaseWidget>

        <BaseWidget
          title="User Journey Analysis"
          description="Track and analyze user paths through your application"
          fullWidth
        >
          <UserJourneyWidget />
        </BaseWidget>

        <BaseWidget
          title="Retention Analysis"
          description="Monitor user retention and identify churn risks"
          fullWidth
        >
          <RetentionAnalysisWidget />
        </BaseWidget>

        <BaseWidget
          title="Feature Interaction Analysis"
          description="Track detailed user interactions with features"
          fullWidth
        >
          <InteractionAnalysisWidget />
        </BaseWidget>

        <BaseWidget
          title="Behavior Anomalies"
          description="Detect and analyze unusual user behavior patterns"
          fullWidth
        >
          <AnomalyDetectionWidget />
        </BaseWidget>

        <BaseWidget
          title="Predictive Insights"
          description="AI-driven predictions for user behavior and engagement"
          fullWidth
        >
          <PredictiveAnalyticsWidget />
        </BaseWidget>
      </div>
    </div>
  );
}