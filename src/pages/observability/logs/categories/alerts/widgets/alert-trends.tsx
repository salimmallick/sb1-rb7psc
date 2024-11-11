import ReactECharts from 'echarts-for-react';

const trendData = {
  timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  metrics: {
    critical: [5, 8, 6, 9, 7, 5],
    warning: [12, 15, 13, 16, 14, 12],
    info: [25, 28, 26, 29, 27, 25]
  }
};

export function AlertTrendsWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
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
      boundaryGap: false,
      data: trendData.timestamps
    },
    yAxis: {
      type: 'value',
      name: 'Alert Count'
    },
    series: [
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
        itemStyle: { color: '#3b82f6' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}