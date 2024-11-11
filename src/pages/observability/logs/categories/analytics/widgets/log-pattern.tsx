import ReactECharts from 'echarts-for-react';

const patternData = {
  patterns: [
    { name: 'Authentication Failure', count: 450 },
    { name: 'API Timeout', count: 380 },
    { name: 'Database Error', count: 320 },
    { name: 'Invalid Request', count: 280 },
    { name: 'Rate Limit Exceeded', count: 250 },
    { name: 'Cache Miss', count: 220 },
    { name: 'Network Error', count: 180 },
    { name: 'Permission Denied', count: 150 }
  ]
};

export function LogPatternWidget() {
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
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      name: 'Occurrences'
    },
    yAxis: {
      type: 'category',
      data: patternData.patterns.map(p => p.name)
    },
    series: [
      {
        type: 'bar',
        data: patternData.patterns.map(p => ({
          value: p.count,
          itemStyle: {
            color: '#3b82f6'
          }
        })),
        label: {
          show: true,
          position: 'right'
        }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '400px' }} />;
}