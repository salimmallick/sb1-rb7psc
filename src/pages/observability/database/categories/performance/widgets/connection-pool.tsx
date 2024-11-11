import ReactECharts from 'echarts-for-react';

const poolData = {
  timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  metrics: {
    active: [45, 52, 48, 55, 50, 47],
    idle: [15, 8, 12, 5, 10, 13],
    waiting: [2, 4, 3, 5, 3, 2]
  }
};

export function ConnectionPoolWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Active', 'Idle', 'Waiting'],
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
      data: poolData.timestamps
    },
    yAxis: {
      type: 'value',
      name: 'Connections'
    },
    series: [
      {
        name: 'Active',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: { focus: 'series' },
        data: poolData.metrics.active,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Idle',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: { focus: 'series' },
        data: poolData.metrics.idle,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Waiting',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: { focus: 'series' },
        data: poolData.metrics.waiting,
        itemStyle: { color: '#f59e0b' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}