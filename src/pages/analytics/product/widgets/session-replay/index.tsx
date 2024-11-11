import { Card } from '@/components/ui/card';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import ReactECharts from 'echarts-for-react';

const sessionData = {
  metrics: {
    avgDuration: [180, 195, 185, 190, 188, 192],
    interactions: [450, 480, 465, 470, 460, 475],
    bounceRate: [25, 23, 24, 22, 25, 21]
  },
  timestamps: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00']
};

export function SessionReplayWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Avg Duration (s)', 'Interactions', 'Bounce Rate (%)']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: sessionData.timestamps
    },
    yAxis: [
      {
        type: 'value',
        name: 'Duration/Interactions',
        position: 'left'
      },
      {
        type: 'value',
        name: 'Bounce Rate (%)',
        min: 0,
        max: 100,
        position: 'right'
      }
    ],
    series: [
      {
        name: 'Avg Duration (s)',
        type: 'line',
        data: sessionData.metrics.avgDuration,
        smooth: true,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Interactions',
        type: 'bar',
        data: sessionData.metrics.interactions,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Bounce Rate (%)',
        type: 'line',
        yAxisIndex: 1,
        data: sessionData.metrics.bounceRate,
        smooth: true,
        itemStyle: { color: '#ef4444' }
      }
    ]
  };

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="font-semibold">Session Behavior Analysis</h3>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Info className="h-4 w-4 text-muted-foreground" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Analyze user session patterns including duration, interactions, and bounce rates.</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <ReactECharts option={option} style={{ height: '300px' }} />
    </Card>
  );
}