import ReactECharts from 'echarts-for-react';

const trendData = {
  timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  metrics: {
    cpu: [45, 48, 52, 49, 47, 45],
    memory: [72, 75, 78, 76, 74, 72],
    disk: [68, 68, 69, 69, 68, 68],
    connections: [245, 280, 320, 290, 260, 245]
  }
};

export function ResourceTrendsWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['CPU Usage', 'Memory Usage', 'Disk Usage', 'Connections'],
      bottom: 0
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '15%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: trendData.timestamps
    },
    yAxis: [
      {
        type: 'value',
        name: 'Usage (%)',
        max: 100,
        position: 'left'
      },
      {
        type: 'value',
        name: 'Connections',
        position: 'right'
      }
    ],
    series: [
      {
        name: 'CPU Usage',
        type: 'line',
        data: trendData.metrics.cpu,
        smooth: true,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Memory Usage',
        type: 'line',
        data: trendData.metrics.memory,
        smooth: true,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Disk Usage',
        type: 'line',
        data: trendData.metrics.disk,
        smooth: true,
        itemStyle: { color: '#f59e0b' }
      },
      {
        name: 'Connections',
        type: 'line',
        yAxisIndex: 1,
        data: trendData.metrics.connections,
        smooth: true,
        itemStyle: { color: '#8b5cf6' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '400px' }} />;
}