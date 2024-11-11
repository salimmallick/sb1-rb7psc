import ReactECharts from 'echarts-for-react';

const distributionData = {
  services: [
    'API Gateway',
    'Auth Service',
    'User Service',
    'Product Service',
    'Payment Service'
  ],
  types: {
    performance: [5, 3, 4, 2, 3],
    resource: [3, 2, 2, 4, 1],
    error: [2, 1, 3, 1, 2]
  }
};

export function AnomalyDistributionWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['Performance', 'Resource', 'Error'],
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
      data: distributionData.services
    },
    yAxis: {
      type: 'value',
      name: 'Anomaly Count'
    },
    series: [
      {
        name: 'Performance',
        type: 'bar',
        stack: 'total',
        data: distributionData.types.performance,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Resource',
        type: 'bar',
        stack: 'total',
        data: distributionData.types.resource,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Error',
        type: 'bar',
        stack: 'total',
        data: distributionData.types.error,
        itemStyle: { color: '#ef4444' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}