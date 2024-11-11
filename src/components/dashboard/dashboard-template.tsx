import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { GridLayoutWrapper } from './grid-layout-wrapper';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface DashboardTemplateProps {
  title: string;
  description: string;
  children: ReactNode;
  layouts: {
    lg: Array<{
      i: string;
      x: number;
      y: number;
      w: number;
      h: number;
      minH?: number;
      maxH?: number;
    }>;
    md?: Array<{
      i: string;
      x: number;
      y: number;
      w: number;
      h: number;
      minH?: number;
      maxH?: number;
    }>;
  };
  onLayoutChange?: (currentLayout: any, allLayouts: any) => void;
}

export function DashboardTemplate({
  title,
  description,
  children,
  layouts,
  onLayoutChange
}: DashboardTemplateProps) {
  const exportDashboard = async () => {
    const dashboard = document.getElementById('dashboard-content');
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
    pdf.save(`${title.toLowerCase().replace(/\s+/g, '-')}.pdf`);
  };

  return (
    <div className="space-y-4 h-full">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="mt-2 text-muted-foreground">{description}</p>
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

      <div id="dashboard-content" className="h-full">
        <GridLayoutWrapper
          layouts={layouts}
          onLayoutChange={onLayoutChange}
          className="h-full"
        >
          {children}
        </GridLayoutWrapper>
      </div>
    </div>
  );
}