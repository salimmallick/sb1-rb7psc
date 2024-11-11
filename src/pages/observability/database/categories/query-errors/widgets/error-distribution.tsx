import ReactECharts from 'echarts-for-react';

const distributionData = {
  queries: [
    'SELECT users',
    'INSERT orders',
    'UPDATE products',
    'DELETE items',
    'JOIN tables'
  ],
  metrics: {
    syntax: [12, 8, 15, 10, 5],
    constraint: [8, 12, 6, 8, 4],
    timeout: [5, 4, 8, 6, 3]
  }
};

export function ErrorDistributionWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['Syntax', 'Constraint', 'Timeout'],
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
      data: distributionData.queries
    },
    yAxis: {
      type: 'value',
      name: 'Error Count'
    },
    series: [
      {
        name: 'Syntax',
        type: 'bar',
        stack: 'total',
        data: distributionData.metrics.syntax,
        itemStyle: { color: '#ef4444' }
      },
      {
        name: 'Constraint',
        type: 'bar',
        stack: 'total',
        data: distributionData.metrics.constraint,
        itemStyle: { color: '#f59e0b' }
      },
      {
        name: 'Timeout',
        type: 'bar',
        stack: 'total',
        data: distributionData.metrics.timeout,
        itemStyle: { color: '#22c55e' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}