import ReactECharts from 'echarts-for-react';

const externalData = {
  services: ['Stripe API', 'Email Service', 'SMS Gateway', 'CDN', 'Analytics'],
  metrics: {
    availability: [99.95, 99.8, 99.9, 99.99, 99.85],
    latency: [250, 180, 200, 50, 150],
    requests: [1200, 800, 600, 2500, 1500]
  }
};

export function ExternalServicesWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Availability', 'Latency', 'Requests/min'],
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
      data: externalData.services
    },
    yAxis: [
      {
        type: 'value',
        name: 'Availability (%)',
        min: 99,
        max: 100,
        position: 'left'
      },
      {
        type: 'value',
        name: 'Latency (ms)',
        position: 'right'
      }
    ],
    series: [
      {
        name: 'Availability',
        type: 'bar',
        data: externalData.metrics.availability,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Latency',
        type: 'line',
        yAxisIndex: 1,
        data: externalData.metrics.latency,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Requests/min',
        type: 'line',
        data: externalData.metrics.requests,
        itemStyle: { color: '#f59e0b' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}