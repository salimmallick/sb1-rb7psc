import ReactECharts from 'echarts-for-react';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';

const mockEngagementData = {
  weekdays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  hours: Array.from({ length: 24 }, (_, i) => `${i}:00`),
  data: Array.from({ length: 7 }, () =>
    Array.from({ length: 24 }, () => Math.floor(Math.random() * 100))
  )
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

  const activityTrendOption = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Weekday Average', 'Weekend Average']
    },
    xAxis: {
      type: 'category',
      data: mockEngagementData.hours
    },
    yAxis: {
      type: 'value',
      name: 'Active Users'
    },
    series: [
      {
        name: 'Weekday Average',
        type: 'line',
        data: Array.from({ length: 24 }, () => 
          Math.floor(Math.random() * 50 + 50)
        ),
        smooth: true,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Weekend Average',
        type: 'line',
        data: Array.from({ length: 24 }, () => 
          Math.floor(Math.random() * 30 + 20)
        ),
        smooth: true,
        itemStyle: { color: '#22c55e' }
      }
    ]
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
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
        <Card className="p-4">
          <h3 className="text-sm font-semibold mb-4">Weekly Activity Heatmap</h3>
          <ReactECharts option={heatmapOption} style={{ height: '400px' }} />
        </Card>

        <Card className="p-4">
          <h3 className="text-sm font-semibold mb-4">Daily Activity Trends</h3>
          <ReactECharts option={activityTrendOption} style={{ height: '300px' }} />
        </Card>
      </div>
    </div>
  );
}