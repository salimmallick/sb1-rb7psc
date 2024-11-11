import ReactECharts from 'echarts-for-react';

const trendData = {
  timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  metrics: {
    total: [1200, 1350, 1280, 1420, 1380, 1245],
    critical: [120, 135, 128, 142, 138, 124],
    warning: [360, 405, 384, 426, 414, 373],
    info: [720, 810, 768, 852, 828, 748]
  }
};

export function ErrorTrendsWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Total Errors', 'Critical', 'Warning', 'Info'],
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
      data: trendData.timestamps
    },
    yAxis: {
      type: 'value',
      name: 'Error Count'
    },
    series: [
      {
        name: 'Total Errors',
        type: 'line',
        data: trendData.metrics.total,
        smooth: true,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Critical',
        type: 'line',
        data: trendData.metrics.critical,
        smooth: true,
        itemStyle: { color: '#ef4444' }
      },
      {
        name: 'Warning',
        type: 'line',
        data: trendData.metrics.warning,
        smooth: true,
        itemStyle: { color: '#f59e0b' }
      },
      {
        name: 'Info',
        type: 'line',
        data: trendData.metrics.info,
        smooth: true,
        itemStyle: { color: '#22c55e' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '400px' }} />;
}