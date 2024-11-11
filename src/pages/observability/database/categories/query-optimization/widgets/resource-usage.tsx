import ReactECharts from 'echarts-for-react';

const resourceData = {
  queries: [
    'SELECT FROM orders',
    'JOIN products categories',
    'UPDATE inventory',
    'INSERT users',
    'DELETE activities'
  ],
  metrics: {
    cpu: [45, 35, 25, 15, 10],
    memory: [60, 45, 30, 20, 15],
    io: [30, 40, 35, 25, 20],
    time: [250, 180, 120, 90, 60]
  }
};

export function ResourceUsageWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['CPU Usage (%)', 'Memory Usage (%)', 'I/O Usage (%)', 'Execution Time (ms)'],
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
      data: resourceData.queries,
      axisLabel: {
        interval: 0,
        rotate: 30
      }
    },
    yAxis: [
      {
        type: 'value',
        name: 'Usage (%)',
        position: 'left',
        max: 100
      },
      {
        type: 'value',
        name: 'Time (ms)',
        position: 'right'
      }
    ],
    series: [
      {
        name: 'CPU Usage (%)',
        type: 'bar',
        data: resourceData.metrics.cpu,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Memory Usage (%)',
        type: 'bar',
        data: resourceData.metrics.memory,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'I/O Usage (%)',
        type: 'bar',
        data: resourceData.metrics.io,
        itemStyle: { color: '#f59e0b' }
      },
      {
        name: 'Execution Time (ms)',
        type: 'line',
        yAxisIndex: 1,
        data: resourceData.metrics.time,
        itemStyle: { color: '#ef4444' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '400px' }} />;
}