import ReactECharts from 'echarts-for-react';

const cpuData = {
  timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  metrics: {
    user: [35, 38, 42, 39, 37, 35],
    system: [10, 10, 10, 10, 10, 10],
    iowait: [5, 6, 8, 7, 6, 5],
    load: [1.2, 1.4, 1.6, 1.5, 1.3, 1.2]
  }
};

export function CPUUtilizationWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['User CPU', 'System CPU', 'I/O Wait', 'Load Average'],
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
      data: cpuData.timestamps
    },
    yAxis: [
      {
        type: 'value',
        name: 'Usage (%)',
        max: 100,
        position: 'left'
      },
      {
        type: 'value',
        name: 'Load',
        position: 'right'
      }
    ],
    series: [
      {
        name: 'User CPU',
        type: 'line',
        stack: 'CPU',
        areaStyle: {},
        emphasis: { focus: 'series' },
        data: cpuData.metrics.user,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'System CPU',
        type: 'line',
        stack: 'CPU',
        areaStyle: {},
        emphasis: { focus: 'series' },
        data: cpuData.metrics.system,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'I/O Wait',
        type: 'line',
        stack: 'CPU',
        areaStyle: {},
        emphasis: { focus: 'series' },
        data: cpuData.metrics.iowait,
        itemStyle: { color: '#f59e0b' }
      },
      {
        name: 'Load Average',
        type: 'line',
        yAxisIndex: 1,
        data: cpuData.metrics.load,
        itemStyle: { color: '#ef4444' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}