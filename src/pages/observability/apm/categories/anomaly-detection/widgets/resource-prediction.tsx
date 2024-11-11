import ReactECharts from 'echarts-for-react';

const resourceData = {
  timestamps: ['Now', '+2h', '+4h', '+6h', '+8h', '+10h'],
  resources: {
    cpu: {
      actual: [65, null, null, null, null, null],
      predicted: [65, 70, 75, 80, 78, 72],
      threshold: 85
    },
    memory: {
      actual: [45, null, null, null, null, null],
      predicted: [45, 48, 52, 55, 58, 60],
      threshold: 75
    }
  }
};

export function ResourcePredictionWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['CPU Actual', 'CPU Predicted', 'Memory Actual', 'Memory Predicted', 'Thresholds'],
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
      data: resourceData.timestamps
    },
    yAxis: {
      type: 'value',
      name: 'Usage (%)',
      max: 100
    },
    series: [
      {
        name: 'CPU Actual',
        type: 'line',
        data: resourceData.resources.cpu.actual,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'CPU Predicted',
        type: 'line',
        data: resourceData.resources.cpu.predicted,
        lineStyle: { type: 'dashed' },
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Memory Actual',
        type: 'line',
        data: resourceData.resources.memory.actual,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Memory Predicted',
        type: 'line',
        data: resourceData.resources.memory.predicted,
        lineStyle: { type: 'dashed' },
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Thresholds',
        type: 'line',
        markLine: {
          silent: true,
          data: [
            { yAxis: resourceData.resources.cpu.threshold },
            { yAxis: resourceData.resources.memory.threshold }
          ]
        }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}