import ReactECharts from 'echarts-for-react';

const securityData = {
  timestamps: ['00:00', '00:05', '00:10', '00:15', '00:20'],
  metrics: {
    blocked: [45, 52, 48, 60, 50],
    suspicious: [120, 135, 125, 140, 130],
    warnings: [80, 85, 82, 88, 84]
  }
};

export function SecurityEventsWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Blocked Threats', 'Suspicious Activities', 'Security Warnings'],
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
      data: securityData.timestamps
    },
    yAxis: {
      type: 'value',
      name: 'Events Count'
    },
    series: [
      {
        name: 'Blocked Threats',
        type: 'line',
        data: securityData.metrics.blocked,
        smooth: true,
        itemStyle: { color: '#ef4444' }
      },
      {
        name: 'Suspicious Activities',
        type: 'line',
        data: securityData.metrics.suspicious,
        smooth: true,
        itemStyle: { color: '#f59e0b' }
      },
      {
        name: 'Security Warnings',
        type: 'line',
        data: securityData.metrics.warnings,
        smooth: true,
        itemStyle: { color: '#3b82f6' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}