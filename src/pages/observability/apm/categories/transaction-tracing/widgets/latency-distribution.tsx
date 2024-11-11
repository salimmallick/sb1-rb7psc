import ReactECharts from 'echarts-for-react';

const latencyData = {
  ranges: ['0-50ms', '50-100ms', '100-200ms', '200-500ms', '>500ms'],
  services: {
    'API Gateway': [20, 35, 25, 15, 5],
    'Auth Service': [30, 40, 20, 8, 2],
    'User Service': [25, 45, 20, 8, 2],
    'Product Service': [15, 40, 30, 12, 3],
    'Database': [40, 35, 15, 8, 2]
  }
};

export function LatencyDistributionWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: Object.keys(latencyData.services),
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
      data: latencyData.ranges
    },
    yAxis: {
      type: 'value',
      name: 'Percentage (%)'
    },
    series: Object.entries(latencyData.services).map(([name, data]) => ({
      name,
      type: 'bar',
      data,
      emphasis: {
        focus: 'series'
      }
    }))
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}