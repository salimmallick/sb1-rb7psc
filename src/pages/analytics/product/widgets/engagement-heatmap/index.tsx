import { Card } from '@/components/ui/card';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import ReactECharts from 'echarts-for-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';

const mockEngagementData = {
  weekdays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  hours: Array.from({ length: 24 }, (_, i) => `${i}:00`),
  data: Array.from({ length: 7 }, () =>
    Array.from({ length: 24 }, () => Math.floor(Math.random() * 100))
  ),
  dailyTrends: {
    weekday: [50, 65, 55, 70, 60, 75, 45, 80, 70, 65, 75, 80],
    weekend: [30, 40, 35, 45, 40, 50, 35, 55, 45, 40, 50, 55]
  }
};

export function EngagementHeatmapWidget() {
  const [selectedMetric, setSelectedMetric] = useState('users');

  const heatmapData = mockEngagementData.data.flatMap((row, weekdayIndex) =>
    row.map((value, hourIndex) => [hourIndex, weekdayIndex, value])
  );

  const heatmapOption = {
    tooltip: {
      position: 'top',
      formatter: function(params: any) {
        const weekday = mockEngagementData.weekdays[params.data[1]];
        const hour = mockEngagementData.hours[params.data[0]];
        return `${weekday}, ${hour}<br/>Active Users: ${params.data[2]}`;
      }
    },
    grid: {
      height: '70%',
      top: '10%'
    },
    xAxis: {
      type: 'category',
      data: mockEngagementData.hours,
      splitArea: {
        show: true
      }
    },
    yAxis: {
      type: 'category',
      data: mockEngagementData.weekdays,
      splitArea: {
        show: true
      }
    },
    visualMap: {
      min: 0,
      max: 100,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: '5%',
      inRange: {
        color: ['#3b82f6', '#22c55e']
      }
    },
    series: [{
      name: 'User Activity',
      type: 'heatmap',
      data: heatmapData,
      label: {
        show: false
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };

  const trendsOption = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Weekday Average', 'Weekend Average']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: mockEngagementData.hours,
      boundaryGap: false
    },
    yAxis: {
      type: 'value',
      name: 'Active Users'
    },
    series: [
      {
        name: 'Weekday Average',
        type: 'line',
        data: mockEngagementData.dailyTrends.weekday,
        smooth: true,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Weekend Average',
        type: 'line',
        data: mockEngagementData.dailyTrends.weekend,
        smooth: true,
        itemStyle: { color: '#22c55e' }
      }
    ]
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold">User Activity Patterns</h3>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info className="h-4 w-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Analyze user engagement patterns across different time periods.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <Select
          value={selectedMetric}
          onValueChange={setSelectedMetric}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select metric" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="users">Active Users</SelectItem>
            <SelectItem value="sessions">Sessions</SelectItem>
            <SelectItem value="duration">Session Duration</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6">
        <Card className="p-6">
          <h3 className="text-sm font-semibold mb-4">Weekly Activity Heatmap</h3>
          <ReactECharts option={heatmapOption} style={{ height: '300px' }} />
        </Card>

        <Card className="p-6">
          <h3 className="text-sm font-semibold mb-4">Daily Activity Trends</h3>
          <ReactECharts option={trendsOption} style={{ height: '300px' }} />
        </Card>
      </div>
    </div>
  );
}