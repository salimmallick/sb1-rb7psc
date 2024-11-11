import ReactECharts from 'echarts-for-react';

const transactionData = {
  timestamps: ['00:00', '00:10', '00:20', '00:30', '00:40', '00:50'],
  types: {
    http: [450, 480, 420, 500, 470, 450],
    database: [280, 300, 260, 320, 290, 285],
    cache: [180, 190, 170, 200, 185, 182],
    external: [90, 95, 85, 100, 92, 91]
  }
};

export function ActiveTransactionsWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['HTTP', 'Database', 'Cache', 'External API'],
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
      data: transactionData.timestamps
    },
    yAxis: {
      type: 'value',
      name: 'Active Transactions'
    },
    series: [
      {
        name: 'HTTP',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: { focus: 'series' },
        data: transactionData.types.http,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Database',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: { focus: 'series' },
        data: transactionData.types.database,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Cache',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: { focus: 'series' },
        data: transactionData.types.cache,
        itemStyle: { color: '#f59e0b' }
      },
      {
        name: 'External API',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: { focus: 'series' },
        data: transactionData.types.external,
        itemStyle: { color: '#8b5cf6' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}