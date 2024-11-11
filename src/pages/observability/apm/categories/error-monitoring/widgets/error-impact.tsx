import ReactECharts from 'echarts-for-react';

const impactData = {
  timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  metrics: {
    responseTime: [120, 135, 128, 142, 138, 124],
    userSessions: [1000, 950, 900, 850, 900, 950],
    systemLoad: [45, 50, 48, 52, 49, 47]
  }
};

export function ErrorImpactWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Response Time', 'User Sessions', 'System Load'],
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
      data: impactData.timestamps
    },
    yAxis: [
      {
        type: 'value',
        name: 'Response Time (ms)',
        position: 'left',
        axisLabel: {
          formatter: '{value} ms'
        }
      },
      {
        type: 'value',
        name: 'Sessions/Load',
        position: 'right'
      }
    ],
    series: [
      {
        name: 'Response Time',
        type: 'line',
        data: impactData.metrics.responseTime,
        smooth: true,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'User Sessions',
        type: 'line',
        yAxisIndex: 1,
        data: impactData.metrics.userSessions,
        smooth: true,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'System Load',
        type: 'line',
        yAxisIndex: 1,
        data: impactData.metrics.systemLoad,
        smooth: true,
        itemStyle: { color: '#f59e0b' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}