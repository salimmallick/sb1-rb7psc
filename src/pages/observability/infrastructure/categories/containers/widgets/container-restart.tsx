import ReactECharts from 'echarts-for-react';

const restartData = {
  timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  containers: ['web-app', 'api-server', 'database', 'cache', 'queue'],
  metrics: {
    'web-app': [1, 0, 2, 1, 0, 1],
    'api-server': [0, 1, 0, 1, 0, 0],
    'database': [0, 0, 1, 0, 0, 1],
    'cache': [1, 0, 0, 0, 1, 0],
    'queue': [0, 1, 0, 0, 1, 1]
  }
};

export function ContainerRestartWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: restartData.containers,
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
      data: restartData.timestamps
    },
    yAxis: {
      type: 'value',
      name: 'Restart Count',
      minInterval: 1
    },
    series: restartData.containers.map(container => ({
      name: container,
      type: 'line',
      data: restartData.metrics[container],
      smooth: true,
      markPoint: {
        data: [
          { type: 'max', name: 'Max' },
          { type: 'min', name: 'Min' }
        ]
      }
    }))
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}