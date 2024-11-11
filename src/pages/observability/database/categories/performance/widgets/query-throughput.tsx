import ReactECharts from 'echarts-for-react';

const throughputData = {
  timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  metrics: {
    select: [850, 920, 880, 980, 920, 890],
    insert: [250, 280, 260, 300, 270, 260],
    update: [150, 180, 160, 200, 170, 160],
    delete: [50, 60, 55, 70, 58, 54]
  }
};

export function QueryThroughputWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['SELECT', 'INSERT', 'UPDATE', 'DELETE'],
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
      data: throughputData.timestamps
    },
    yAxis: {
      type: 'value',
      name: 'Queries/s'
    },
    series: [
      {
        name: 'SELECT',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: { focus: 'series' },
        data: throughputData.metrics.select,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'INSERT',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: { focus: 'series' },
        data: throughputData.metrics.insert,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'UPDATE',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: { focus: 'series' },
        data: throughputData.metrics.update,
        itemStyle: { color: '#f59e0b' }
      },
      {
        name: 'DELETE',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: { focus: 'series' },
        data: throughputData.metrics.delete,
        itemStyle: { color: '#ef4444' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}