import { BaseWidget } from '@/components/dashboard/base-widget';
import { GridLayoutWrapper } from '@/components/dashboard/grid-layout-wrapper';
import { useLayoutStore } from '@/store/layout-store';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { FeatureAdoptionWidget } from './widgets/feature-adoption';
import { RetentionAnalysisWidget } from './widgets/retention-analysis';
import { EngagementHeatmapWidget } from './widgets/engagement-heatmap';
import { InteractiveFunnelWidget } from './widgets/interactive-funnel';

export default function ProductAnalytics() {
  const { layouts, updateLayout } = useLayoutStore();
  const pageLayouts = layouts['product-analytics'] || {
    lg: [
      { i: 'feature-adoption', x: 0, y: 0, w: 12, h: 8, minH: 8 },
      { i: 'retention-analysis', x: 0, y: 8, w: 6, h: 8, minH: 8 },
      { i: 'engagement-heatmap', x: 6, y: 8, w: 6, h: 8, minH: 8 },
      { i: 'interactive-funnel', x: 0, y: 16, w: 12, h: 8, minH: 8 }
    ],
    md: [
      { i: 'feature-adoption', x: 0, y: 0, w: 10, h: 8, minH: 8 },
      { i: 'retention-analysis', x: 0, y: 8, w: 10, h: 8, minH: 8 },
      { i: 'engagement-heatmap', x: 0, y: 16, w: 10, h: 8, minH: 8 },
      { i: 'interactive-funnel', x: 0, y: 24, w: 10, h: 8, minH: 8 }
    ],
    sm: [
      { i: 'feature-adoption', x: 0, y: 0, w: 6, h: 8, minH: 8 },
      { i: 'retention-analysis', x: 0, y: 8, w: 6, h: 8, minH: 8 },
      { i: 'engagement-heatmap', x: 0, y: 16, w: 6, h: 8, minH: 8 },
      { i: 'interactive-funnel', x: 0, y: 24, w: 6, h: 8, minH: 8 }
    ]
  };

  const handleLayoutChange = (currentLayout: any, allLayouts: any) => {
    updateLayout('product-analytics', allLayouts);
  };

  const exportDashboard = async () => {
    const dashboard = document.getElementById('product-analytics-dashboard');
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
    pdf.save('product-analytics.pdf');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Product Analytics</h1>
          <p className="mt-2 text-muted-foreground">
            Track and analyze product usage, engagement, and user behavior patterns.
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

      <div id="product-analytics-dashboard" className="h-full">
        <GridLayoutWrapper
          layouts={pageLayouts}
          onLayoutChange={handleLayoutChange}
          className="h-full"
        >
          <div key="feature-adoption" className="h-full">
            <BaseWidget
              title="Feature Adoption"
              description="Track usage and engagement metrics per feature"
              fullWidth
              className="h-full"
            >
              <FeatureAdoptionWidget />
            </BaseWidget>
          </div>

          <div key="retention-analysis" className="h-full">
            <BaseWidget
              title="Retention Analysis"
              description="Analyze user retention rates and patterns"
              className="h-full"
            >
              <RetentionAnalysisWidget />
            </BaseWidget>
          </div>

          <div key="engagement-heatmap" className="h-full">
            <BaseWidget
              title="Engagement Heatmap"
              description="Visualize user engagement patterns"
              className="h-full"
            >
              <EngagementHeatmapWidget />
            </BaseWidget>
          </div>

          <div key="interactive-funnel" className="h-full">
            <BaseWidget
              title="Interactive Funnels"
              description="Track user progression through key workflows"
              fullWidth
              className="h-full"
            >
              <InteractiveFunnelWidget />
            </BaseWidget>
          </div>
        </GridLayoutWrapper>
      </div>
    </div>
  );
}