import ReactECharts from 'echarts-for-react';

const timelineData = {
  timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  metrics: {
    error: [45, 52, 48, 58, 50, 47],
    warning: [120, 135, 125, 140, 130, 128],
    info: [850, 920, 880, 950, 900, 880]
  }
};

export function LogTimeline() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
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
      boundaryGap: false,
      data: timelineData.timestamps
    },
    yAxis: {
      type: 'value',
      name: 'Log Count'
    },
    series: [
      {
        name: 'Error',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: { focus: 'series' },
        data: timelineData.metrics.error,
        itemStyle: { color: '#ef4444' }
      },
      {
        name: 'Warning',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: { focus: 'series' },
        data: timelineData.metrics.warning,
        itemStyle: { color: '#f59e0b' }
      },
      {
        name: 'Info',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: { focus: 'series' },
        data: timelineData.metrics.info,
        itemStyle: { color: '#22c55e' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}