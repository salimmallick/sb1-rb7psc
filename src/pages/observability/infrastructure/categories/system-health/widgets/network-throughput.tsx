import ReactECharts from 'echarts-for-react';

const networkData = {
  timestamps: ['00:00', '00:05', '00:10', '00:15', '00:20'],
  metrics: {
    incoming: [1.2, 1.5, 1.3, 1.8, 1.4],
    outgoing: [0.8, 1.1, 0.9, 1.2, 1.0]
  }
};

export function NetworkThroughputWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Incoming Traffic', 'Outgoing Traffic'],
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
      data: networkData.timestamps,
      boundaryGap: false
    },
    yAxis: {
      type: 'value',
      name: 'Throughput (GB/s)',
      axisLabel: {
        formatter: '{value} GB/s'
      }
    },
    series: [
      {
        name: 'Incoming Traffic',
        type: 'line',
        data: networkData.metrics.incoming,
        smooth: true,
        areaStyle: { opacity: 0.2 },
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Outgoing Traffic',
        type: 'line',
        data: networkData.metrics.outgoing,
        smooth: true,
        areaStyle: { opacity: 0.2 },
        itemStyle: { color: '#22c55e' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}