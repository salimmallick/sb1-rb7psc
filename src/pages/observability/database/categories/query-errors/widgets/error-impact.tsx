import ReactECharts from 'echarts-for-react';

const impactData = {
  timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  metrics: {
    queryTime: [120, 135, 128, 142, 138, 124],
    throughput: [1000, 950, 900, 850, 900, 950],
    errorRate: [0.5, 0.6, 0.55, 0.65, 0.6, 0.52]
  }
};

export function ErrorImpactWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Query Time', 'Throughput', 'Error Rate'],
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
      data: impactData.timestamps
    },
    yAxis: [
      {
        type: 'value',
        name: 'Query Time (ms)',
        position: 'left',
        axisLabel: {
          formatter: '{value} ms'
        }
      },
      {
        type: 'value',
        name: 'Throughput/Error Rate',
        position: 'right',
        axisLabel: {
          formatter: '{value}%'
        }
      }
    ],
    series: [
      {
        name: 'Query Time',
        type: 'line',
        data: impactData.metrics.queryTime,
        smooth: true,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Throughput',
        type: 'line',
        yAxisIndex: 1,
        data: impactData.metrics.throughput,
        smooth: true,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Error Rate',
        type: 'line',
        yAxisIndex: 1,
        data: impactData.metrics.errorRate,
        smooth: true,
        itemStyle: { color: '#ef4444' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}