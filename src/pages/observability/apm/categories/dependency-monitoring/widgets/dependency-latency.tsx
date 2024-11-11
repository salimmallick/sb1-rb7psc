import ReactECharts from 'echarts-for-react';

const latencyData = {
  timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  services: {
    'Auth Service': [120, 125, 118, 130, 125, 122],
    'User Service': [95, 98, 92, 105, 100, 97],
    'Product Service': [150, 155, 148, 160, 155, 152],
    'Payment Service': [180, 185, 178, 190, 185, 182],
    'Email Service': [90, 95, 88, 100, 95, 92]
  }
};

export function DependencyLatencyWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
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
      boundaryGap: false,
      data: latencyData.timestamps
    },
    yAxis: {
      type: 'value',
      name: 'Latency (ms)',
      axisLabel: {
        formatter: '{value} ms'
      }
    },
    series: Object.entries(latencyData.services).map(([name, data]) => ({
      name,
      type: 'line',
      data,
      smooth: true
    }))
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}