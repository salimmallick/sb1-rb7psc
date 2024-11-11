import ReactECharts from 'echarts-for-react';

const errorData = {
  services: ['API Gateway', 'Auth Service', 'User Service', 'Product Service', 'Database'],
  types: {
    validation: [10, 15, 8, 12, 5],
    timeout: [5, 3, 4, 6, 8],
    connection: [3, 2, 5, 4, 7],
    other: [2, 1, 3, 2, 1]
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
      data: ['Validation', 'Timeout', 'Connection', 'Other'],
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
      data: errorData.services
    },
    yAxis: {
      type: 'value',
      name: 'Error Count'
    },
    series: [
      {
        name: 'Validation',
        type: 'bar',
        stack: 'total',
        data: errorData.types.validation,
        itemStyle: { color: '#f59e0b' }
      },
      {
        name: 'Timeout',
        type: 'bar',
        stack: 'total',
        data: errorData.types.timeout,
        itemStyle: { color: '#ef4444' }
      },
      {
        name: 'Connection',
        type: 'bar',
        stack: 'total',
        data: errorData.types.connection,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Other',
        type: 'bar',
        stack: 'total',
        data: errorData.types.other,
        itemStyle: { color: '#94a3b8' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}