import ReactECharts from 'echarts-for-react';

const distributionData = {
  services: [
    'API Gateway',
    'Auth Service',
    'User Service',
    'Product Service',
    'Payment Service'
  ],
  metrics: {
    critical: [12, 8, 15, 10, 5],
    warning: [25, 18, 30, 22, 15],
    info: [45, 35, 55, 40, 25]
  }
};

export function ErrorDistributionWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['Critical', 'Warning', 'Info'],
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
      name: 'Error Count'
    },
    series: [
      {
        name: 'Critical',
        type: 'bar',
        stack: 'total',
        data: distributionData.metrics.critical,
        itemStyle: { color: '#ef4444' }
      },
      {
        name: 'Warning',
        type: 'bar',
        stack: 'total',
        data: distributionData.metrics.warning,
        itemStyle: { color: '#f59e0b' }
      },
      {
        name: 'Info',
        type: 'bar',
        stack: 'total',
        data: distributionData.metrics.info,
        itemStyle: { color: '#22c55e' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}