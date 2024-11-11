import ReactECharts from 'echarts-for-react';

const healthData = {
  services: [
    'Auth Service',
    'User Service',
    'Product Service',
    'Payment Service',
    'Email Service'
  ],
  metrics: {
    uptime: [99.9, 99.8, 99.95, 99.7, 99.6],
    errorRate: [0.1, 0.2, 0.05, 0.3, 0.4],
    responseTime: [120, 135, 110, 145, 155]
  }
};

export function DependencyHealthWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['Uptime', 'Error Rate', 'Response Time'],
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
      data: healthData.services
    },
    yAxis: [
      {
        type: 'value',
        name: 'Uptime (%)',
        min: 99,
        max: 100,
        position: 'left'
      },
      {
        type: 'value',
        name: 'Response Time (ms)',
        position: 'right'
      }
    ],
    series: [
      {
        name: 'Uptime',
        type: 'bar',
        data: healthData.metrics.uptime,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Error Rate',
        type: 'line',
        data: healthData.metrics.errorRate,
        itemStyle: { color: '#ef4444' }
      },
      {
        name: 'Response Time',
        type: 'line',
        yAxisIndex: 1,
        data: healthData.metrics.responseTime,
        itemStyle: { color: '#3b82f6' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}