import ReactECharts from 'echarts-for-react';

const statsData = {
  services: ['API Gateway', 'Auth Service', 'User Service', 'Payment Service', 'Notification'],
  metrics: {
    error: [25, 18, 15, 30, 12],
    warning: [45, 35, 40, 50, 30],
    info: [180, 150, 160, 200, 140]
  }
};

export function LogStats() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['Error', 'Warning', 'Info'],
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
      data: statsData.services
    },
    yAxis: {
      type: 'value',
      name: 'Log Count'
    },
    series: [
      {
        name: 'Error',
        type: 'bar',
        stack: 'total',
        data: statsData.metrics.error,
        itemStyle: { color: '#ef4444' }
      },
      {
        name: 'Warning',
        type: 'bar',
        stack: 'total',
        data: statsData.metrics.warning,
        itemStyle: { color: '#f59e0b' }
      },
      {
        name: 'Info',
        type: 'bar',
        stack: 'total',
        data: statsData.metrics.info,
        itemStyle: { color: '#22c55e' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}