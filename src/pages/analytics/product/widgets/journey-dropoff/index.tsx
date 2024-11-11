import { Card } from '@/components/ui/card';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import ReactECharts from 'echarts-for-react';

const dropoffData = {
  stages: ['Landing', 'Browse', 'Search', 'Product View', 'Cart', 'Checkout'],
  metrics: {
    users: [1000, 800, 600, 400, 250, 150],
    dropoffRate: [20, 25, 33, 37, 40],
    exitPoints: [200, 200, 200, 150, 100]
  }
};

export function JourneyDropoffWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Users', 'Dropoff Rate (%)', 'Exit Points']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: dropoffData.stages
    },
    yAxis: [
      {
        type: 'value',
        name: 'Users',
        position: 'left'
      },
      {
        type: 'value',
        name: 'Rate (%)',
        min: 0,
        max: 100,
        position: 'right'
      }
    ],
    series: [
      {
        name: 'Users',
        type: 'bar',
        data: dropoffData.metrics.users,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Dropoff Rate (%)',
        type: 'line',
        yAxisIndex: 1,
        data: dropoffData.metrics.dropoffRate,
        smooth: true,
        itemStyle: { color: '#ef4444' }
      },
      {
        name: 'Exit Points',
        type: 'bar',
        data: dropoffData.metrics.exitPoints,
        itemStyle: { color: '#f59e0b' }
      }
    ]
  };

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="font-semibold">Journey Drop-off Analysis</h3>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Info className="h-4 w-4 text-muted-foreground" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Identify where users drop off in their journey and analyze exit patterns.</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <ReactECharts option={option} style={{ height: '300px' }} />
    </Card>
  );
}