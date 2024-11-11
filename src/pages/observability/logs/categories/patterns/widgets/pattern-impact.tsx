import ReactECharts from 'echarts-for-react';

const impactData = {
  patterns: [
    'Authentication Failed',
    'Connection Timeout',
    'Resource Not Found',
    'Permission Denied',
    'Database Error'
  ],
  metrics: {
    userImpact: [85, 65, 45, 75, 90],
    systemImpact: [75, 80, 40, 60, 95],
    businessImpact: [80, 70, 35, 65, 85]
  }
};

export function PatternImpactWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['User Impact', 'System Impact', 'Business Impact'],
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
      data: impactData.patterns,
      axisLabel: {
        interval: 0,
        rotate: 30
      }
    },
    yAxis: {
      type: 'value',
      name: 'Impact Score',
      max: 100
    },
    series: [
      {
        name: 'User Impact',
        type: 'bar',
        data: impactData.metrics.userImpact,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'System Impact',
        type: 'bar',
        data: impactData.metrics.systemImpact,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Business Impact',
        type: 'bar',
        data: impactData.metrics.businessImpact,
        itemStyle: { color: '#f59e0b' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '400px' }} />;
}