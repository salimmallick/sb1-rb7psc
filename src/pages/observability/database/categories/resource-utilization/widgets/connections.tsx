import ReactECharts from 'echarts-for-react';

const connectionData = {
  timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  metrics: {
    active: [245, 280, 320, 290, 260, 245],
    idle: [55, 20, 30, 60, 40, 55],
    total: 300,
    waiting: [5, 8, 12, 7, 6, 5]
  }
};

export function ConnectionsWidget() {
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
      data: connectionData.timestamps
    },
    yAxis: {
      type: 'value',
      name: 'Connections',
      max: connectionData.total
    },
    series: [
      {
        name: 'Active',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: { focus: 'series' },
        data: connectionData.metrics.active,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Idle',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: { focus: 'series' },
        data: connectionData.metrics.idle,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Waiting',
        type: 'line',
        data: connectionData.metrics.waiting,
        itemStyle: { color: '#f59e0b' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}