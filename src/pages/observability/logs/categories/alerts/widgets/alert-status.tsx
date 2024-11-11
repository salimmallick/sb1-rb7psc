import ReactECharts from 'echarts-for-react';

const statusData = {
  services: [
    'Web Server',
    'API Gateway',
    'Database',
    'Cache',
    'Authentication'
  ],
  metrics: {
    active: [3, 2, 1, 0, 1],
    acknowledged: [1, 1, 2, 1, 0],
    resolved: [12, 8, 5, 4, 6]
  }
};

export function AlertStatusWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['Active', 'Acknowledged', 'Resolved'],
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
      data: statusData.services
    },
    yAxis: {
      type: 'value',
      name: 'Alert Count'
    },
    series: [
      {
        name: 'Active',
        type: 'bar',
        stack: 'total',
        data: statusData.metrics.active,
        itemStyle: { color: '#ef4444' }
      },
      {
        name: 'Acknowledged',
        type: 'bar',
        stack: 'total',
        data: statusData.metrics.acknowledged,
        itemStyle: { color: '#f59e0b' }
      },
      {
        name: 'Resolved',
        type: 'bar',
        stack: 'total',
        data: statusData.metrics.resolved,
        itemStyle: { color: '#22c55e' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '400px' }} />;
}