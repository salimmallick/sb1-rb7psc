import ReactECharts from 'echarts-for-react';

const apiData = {
  timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  metrics: {
    requests: [1200000, 980000, 1500000, 1800000, 1600000, 1100000],
    errors: [12000, 9800, 15000, 18000, 16000, 11000],
    latency: [120, 115, 135, 145, 130, 110]
  }
};

export function ApiMetricsWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Requests', 'Errors', 'Avg Latency'],
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
      data: apiData.timestamps
    },
    yAxis: [
      {
        type: 'value',
        name: 'Requests',
        position: 'left',
        axisLabel: {
          formatter: (value: number) => `${value/1000}K`
        }
      },
      {
        type: 'value',
        name: 'Latency (ms)',
        position: 'right'
      }
    ],
    series: [
      {
        name: 'Requests',
        type: 'bar',
        data: apiData.metrics.requests,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Errors',
        type: 'bar',
        data: apiData.metrics.errors,
        itemStyle: { color: '#ef4444' }
      },
      {
        name: 'Avg Latency',
        type: 'line',
        yAxisIndex: 1,
        data: apiData.metrics.latency,
        smooth: true,
        itemStyle: { color: '#f59e0b' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}