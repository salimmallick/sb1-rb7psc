import ReactECharts from 'echarts-for-react';

const availabilityData = {
  timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  metrics: {
    uptime: [100, 100, 99.98, 100, 100, 99.99],
    latency: [45, 48, 52, 47, 45, 46],
    connections: [245, 280, 260, 290, 270, 255],
    errors: [0, 0, 2, 0, 0, 1]
  }
};

export function AvailabilityWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Uptime', 'Latency', 'Connections', 'Errors'],
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
      data: availabilityData.timestamps
    },
    yAxis: [
      {
        type: 'value',
        name: 'Uptime (%)',
        min: 99.5,
        max: 100,
        position: 'left'
      },
      {
        type: 'value',
        name: 'Count',
        position: 'right'
      }
    ],
    series: [
      {
        name: 'Uptime',
        type: 'line',
        data: availabilityData.metrics.uptime,
        smooth: true,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Latency',
        type: 'line',
        yAxisIndex: 1,
        data: availabilityData.metrics.latency,
        smooth: true,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Connections',
        type: 'line',
        yAxisIndex: 1,
        data: availabilityData.metrics.connections,
        smooth: true,
        itemStyle: { color: '#f59e0b' }
      },
      {
        name: 'Errors',
        type: 'bar',
        yAxisIndex: 1,
        data: availabilityData.metrics.errors,
        itemStyle: { color: '#ef4444' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '400px' }} />;
}