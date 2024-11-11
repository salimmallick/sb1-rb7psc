import ReactECharts from 'echarts-for-react';

const latencyData = {
  timestamps: ['00:00', '00:05', '00:10', '00:15', '00:20'],
  metrics: {
    latency: [45, 48, 43, 50, 45],
    jitter: [5, 6, 4, 7, 5]
  }
};

export function LatencyJitterWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Latency', 'Jitter'],
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
      data: latencyData.timestamps
    },
    yAxis: [
      {
        type: 'value',
        name: 'Latency (ms)',
        position: 'left',
        axisLabel: {
          formatter: '{value} ms'
        }
      },
      {
        type: 'value',
        name: 'Jitter (ms)',
        position: 'right',
        axisLabel: {
          formatter: '{value} ms'
        }
      }
    ],
    series: [
      {
        name: 'Latency',
        type: 'line',
        data: latencyData.metrics.latency,
        smooth: true,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Jitter',
        type: 'line',
        yAxisIndex: 1,
        data: latencyData.metrics.jitter,
        smooth: true,
        itemStyle: { color: '#f59e0b' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}