import ReactECharts from 'echarts-for-react';

const trendData = {
  timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  metrics: {
    total: [245, 258, 252, 268, 260, 245],
    syntax: [120, 125, 122, 130, 126, 120],
    constraint: [80, 85, 82, 88, 84, 80],
    timeout: [45, 48, 48, 50, 50, 45]
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
      data: ['Total Errors', 'Syntax Errors', 'Constraint Violations', 'Timeouts'],
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
        name: 'Syntax Errors',
        type: 'line',
        data: trendData.metrics.syntax,
        smooth: true,
        itemStyle: { color: '#ef4444' }
      },
      {
        name: 'Constraint Violations',
        type: 'line',
        data: trendData.metrics.constraint,
        smooth: true,
        itemStyle: { color: '#f59e0b' }
      },
      {
        name: 'Timeouts',
        type: 'line',
        data: trendData.metrics.timeout,
        smooth: true,
        itemStyle: { color: '#22c55e' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '400px' }} />;
}