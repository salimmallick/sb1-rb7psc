import ReactECharts from 'echarts-for-react';

const scalingData = {
  timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  metrics: {
    instanceCount: [50, 48, 65, 75, 60, 45],
    scaleUpEvents: [0, 0, 2, 1, 0, 0],
    scaleDownEvents: [0, 1, 0, 0, 2, 1]
  }
};

export function AutoScalingWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Instance Count', 'Scale Up Events', 'Scale Down Events'],
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
      data: scalingData.timestamps
    },
    yAxis: [
      {
        type: 'value',
        name: 'Instance Count',
        position: 'left'
      },
      {
        type: 'value',
        name: 'Scaling Events',
        position: 'right',
        max: 5
      }
    ],
    series: [
      {
        name: 'Instance Count',
        type: 'line',
        data: scalingData.metrics.instanceCount,
        smooth: true,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Scale Up Events',
        type: 'bar',
        yAxisIndex: 1,
        data: scalingData.metrics.scaleUpEvents,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Scale Down Events',
        type: 'bar',
        yAxisIndex: 1,
        data: scalingData.metrics.scaleDownEvents,
        itemStyle: { color: '#f59e0b' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}