import ReactECharts from 'echarts-for-react';

const resourceData = {
  timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  services: ['Compute', 'Database', 'Storage', 'Networking', 'Analytics'],
  metrics: {
    compute: [45, 48, 52, 49, 53, 50],
    database: [30, 32, 35, 33, 34, 31],
    storage: [20, 22, 21, 23, 22, 21],
    networking: [15, 16, 17, 16, 18, 17],
    analytics: [25, 27, 29, 28, 30, 29]
  }
};

export function ResourceUsageWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: resourceData.services,
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
      data: resourceData.timestamps
    },
    yAxis: {
      type: 'value',
      name: 'Usage (%)',
      max: 100,
      axisLabel: {
        formatter: '{value}%'
      }
    },
    series: [
      {
        name: 'Compute',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: { focus: 'series' },
        data: resourceData.metrics.compute,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Database',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: { focus: 'series' },
        data: resourceData.metrics.database,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Storage',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: { focus: 'series' },
        data: resourceData.metrics.storage,
        itemStyle: { color: '#f59e0b' }
      },
      {
        name: 'Networking',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: { focus: 'series' },
        data: resourceData.metrics.networking,
        itemStyle: { color: '#ef4444' }
      },
      {
        name: 'Analytics',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: { focus: 'series' },
        data: resourceData.metrics.analytics,
        itemStyle: { color: '#8b5cf6' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}