import ReactECharts from 'echarts-for-react';

const volumeData = {
  timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  metrics: {
    total: [1200000, 980000, 1500000, 1800000, 1600000, 1100000],
    system: [600000, 490000, 750000, 900000, 800000, 550000],
    application: [400000, 320000, 500000, 600000, 530000, 360000],
    security: [200000, 170000, 250000, 300000, 270000, 190000]
  }
};

export function LogVolumeWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Total', 'System', 'Application', 'Security'],
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
      data: volumeData.timestamps
    },
    yAxis: {
      type: 'value',
      name: 'Log Count',
      axisLabel: {
        formatter: (value: number) => `${value/1000}K`
      }
    },
    series: [
      {
        name: 'Total',
        type: 'line',
        data: volumeData.metrics.total,
        smooth: true,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'System',
        type: 'line',
        data: volumeData.metrics.system,
        smooth: true,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Application',
        type: 'line',
        data: volumeData.metrics.application,
        smooth: true,
        itemStyle: { color: '#f59e0b' }
      },
      {
        name: 'Security',
        type: 'line',
        data: volumeData.metrics.security,
        smooth: true,
        itemStyle: { color: '#ef4444' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}