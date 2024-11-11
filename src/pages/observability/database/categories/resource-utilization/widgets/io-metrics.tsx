import ReactECharts from 'echarts-for-react';

const ioData = {
  timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  metrics: {
    readThroughput: [250, 280, 320, 290, 260, 250],
    writeThroughput: [150, 180, 220, 190, 160, 150],
    readLatency: [2.5, 2.8, 3.2, 2.9, 2.6, 2.5],
    writeLatency: [3.5, 3.8, 4.2, 3.9, 3.6, 3.5]
  }
};

export function IOMetricsWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Read Throughput', 'Write Throughput', 'Read Latency', 'Write Latency'],
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
      data: ioData.timestamps
    },
    yAxis: [
      {
        type: 'value',
        name: 'Throughput (MB/s)',
        position: 'left'
      },
      {
        type: 'value',
        name: 'Latency (ms)',
        position: 'right'
      }
    ],
    series: [
      {
        name: 'Read Throughput',
        type: 'bar',
        data: ioData.metrics.readThroughput,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Write Throughput',
        type: 'bar',
        data: ioData.metrics.writeThroughput,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Read Latency',
        type: 'line',
        yAxisIndex: 1,
        data: ioData.metrics.readLatency,
        smooth: true,
        itemStyle: { color: '#f59e0b' }
      },
      {
        name: 'Write Latency',
        type: 'line',
        yAxisIndex: 1,
        data: ioData.metrics.writeLatency,
        smooth: true,
        itemStyle: { color: '#ef4444' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}