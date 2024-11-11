import { Card } from '@/components/ui/card';
import ReactECharts from 'echarts-for-react';

const heatmapData = {
  weekdays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  hours: Array.from({ length: 24 }, (_, i) => `${i}:00`),
  data: Array.from({ length: 7 }, () =>
    Array.from({ length: 24 }, () => Math.floor(Math.random() * 100))
  ),
  metrics: {
    timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
    sessions: [1200, 800, 2500, 3000, 2800, 1500],
    duration: [15, 12, 25, 30, 28, 18]
  }
};

export function EngagementHeatmapWidget() {
  const heatmapOption = {
    tooltip: {
      position: 'top',
      formatter: function(params: any) {
        const weekday = heatmapData.weekdays[params.data[1]];
        const hour = heatmapData.hours[params.data[0]];
        return `${weekday}, ${hour}<br/>Activity Level: ${params.data[2]}`;
      }
    },
    grid: {
      height: '70%',
      top: '10%'
    },
    xAxis: {
      type: 'category',
      data: heatmapData.hours,
      splitArea: {
        show: true
      }
    },
    yAxis: {
      type: 'category',
      data: heatmapData.weekdays,
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
      name: 'Activity Level',
      type: 'heatmap',
      data: heatmapData.data.flatMap((row, weekdayIndex) =>
        row.map((value, hourIndex) => [hourIndex, weekdayIndex, value])
      ),
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

  const metricsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Active Sessions', 'Avg Duration (min)']
    },
    xAxis: {
      type: 'category',
      data: heatmapData.metrics.timestamps
    },
    yAxis: [
      {
        type: 'value',
        name: 'Sessions',
        position: 'left'
      },
      {
        type: 'value',
        name: 'Duration (min)',
        position: 'right'
      }
    ],
    series: [
      {
        name: 'Active Sessions',
        type: 'bar',
        data: heatmapData.metrics.sessions,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Avg Duration (min)',
        type: 'line',
        yAxisIndex: 1,
        data: heatmapData.metrics.duration,
        itemStyle: { color: '#22c55e' }
      }
    ]
  };

  return (
    <div className="grid grid-cols-2 gap-6">
      <Card className="p-6">
        <h3 className="text-sm font-semibold mb-4">Weekly Activity Heatmap</h3>
        <ReactECharts option={heatmapOption} style={{ height: '300px' }} />
      </Card>

      <Card className="p-6">
        <h3 className="text-sm font-semibold mb-4">Engagement Metrics</h3>
        <ReactECharts option={metricsOption} style={{ height: '300px' }} />
      </Card>
    </div>
  );
}