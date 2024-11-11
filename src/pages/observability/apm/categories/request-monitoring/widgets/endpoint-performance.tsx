import ReactECharts from 'echarts-for-react';

const endpointData = {
  endpoints: [
    '/api/users',
    '/api/products',
    '/api/orders',
    '/api/auth',
    '/api/payments'
  ],
  metrics: {
    responseTime: [120, 145, 180, 95, 160],
    throughput: [1200, 980, 750, 1500, 600],
    errorRate: [0.5, 0.8, 1.2, 0.3, 0.9]
  }
};

export function EndpointPerformanceWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['Response Time (ms)', 'Throughput (req/s)', 'Error Rate (%)'],
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
      data: endpointData.endpoints
    },
    yAxis: [
      {
        type: 'value',
        name: 'Response Time',
        position: 'left',
        axisLabel: {
          formatter: '{value} ms'
        }
      },
      {
        type: 'value',
        name: 'Throughput',
        position: 'right',
        axisLabel: {
          formatter: '{value}/s'
        }
      }
    ],
    series: [
      {
        name: 'Response Time (ms)',
        type: 'bar',
        data: endpointData.metrics.responseTime,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Throughput (req/s)',
        type: 'bar',
        yAxisIndex: 1,
        data: endpointData.metrics.throughput,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Error Rate (%)',
        type: 'line',
        data: endpointData.metrics.errorRate,
        itemStyle: { color: '#ef4444' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '400px' }} />;
}