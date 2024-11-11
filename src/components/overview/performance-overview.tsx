import ReactECharts from 'echarts-for-react';

interface PerformanceOverviewProps {
  hideTitle?: boolean;
}

export function PerformanceOverview({ hideTitle = false }: PerformanceOverviewProps) {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Response Time', 'Error Rate', 'CPU Usage']
    },
    xAxis: {
      type: 'category',
      data: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '23:59']
    },
    yAxis: [
      {
        type: 'value',
        name: 'Response Time (ms)',
        position: 'left'
      },
      {
        type: 'value',
        name: 'Percentage',
        position: 'right',
        max: 100
      }
    ],
    series: [
      {
        name: 'Response Time',
        type: 'line',
        data: [120, 140, 150, 160, 145, 160, 130],
        smooth: true
      },
      {
        name: 'Error Rate',
        type: 'line',
        yAxisIndex: 1,
        data: [2, 2, 3, 2, 2, 2, 2],
        smooth: true
      },
      {
        name: 'CPU Usage',
        type: 'line',
        yAxisIndex: 1,
        data: [45, 50, 55, 60, 55, 50, 45],
        smooth: true
      }
    ]
  };

  return (
    <div className="space-y-4">
      <ReactECharts option={option} style={{ height: '300px' }} />
    </div>
  );
}