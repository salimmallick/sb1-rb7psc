import ReactECharts from 'echarts-for-react';

const trendData = {
  timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  patterns: {
    'Authentication Failed': [120, 135, 128, 142, 138, 124],
    'Connection Timeout': [90, 95, 88, 100, 95, 92],
    'Resource Not Found': [75, 80, 73, 85, 82, 78],
    'Permission Denied': [60, 65, 58, 70, 67, 63],
    'Database Error': [45, 50, 43, 55, 52, 48]
  }
};

export function PatternTrendsWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: Object.keys(trendData.patterns),
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
      name: 'Occurrences'
    },
    series: Object.entries(trendData.patterns).map(([name, data]) => ({
      name,
      type: 'line',
      data,
      smooth: true
    }))
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}