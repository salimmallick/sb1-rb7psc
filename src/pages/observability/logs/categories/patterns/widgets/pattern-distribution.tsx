import ReactECharts from 'echarts-for-react';

const distributionData = {
  patterns: [
    'Authentication Failed',
    'Connection Timeout',
    'Resource Not Found',
    'Permission Denied',
    'Database Error'
  ],
  metrics: {
    occurrence: [2500, 1800, 1500, 1200, 1000],
    severity: ['high', 'medium', 'medium', 'high', 'critical']
  }
};

export function PatternDistributionWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '15%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: distributionData.patterns,
      axisLabel: {
        interval: 0,
        rotate: 30
      }
    },
    yAxis: {
      type: 'value',
      name: 'Occurrences'
    },
    series: [
      {
        type: 'bar',
        data: distributionData.metrics.occurrence.map((value, index) => ({
          value,
          itemStyle: {
            color: distributionData.metrics.severity[index] === 'critical' 
              ? '#ef4444' 
              : distributionData.metrics.severity[index] === 'high'
              ? '#f59e0b'
              : '#3b82f6'
          }
        }))
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}