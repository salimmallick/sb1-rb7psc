import ReactECharts from 'echarts-for-react';

const metricsData = {
  timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  metrics: {
    archiveRate: [240, 260, 280, 250, 270, 250],
    compressionRatio: [2.8, 2.9, 2.7, 2.8, 2.9, 2.8],
    searchLatency: [1.2, 1.5, 1.3, 1.4, 1.3, 1.2]
  }
};

export function ArchiveMetricsWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Archive Rate', 'Compression Ratio', 'Search Latency'],
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
      data: metricsData.timestamps
    },
    yAxis: [
      {
        type: 'value',
        name: 'GB/day',
        position: 'left'
      },
      {
        type: 'value',
        name: 'Ratio/Seconds',
        position: 'right'
      }
    ],
    series: [
      {
        name: 'Archive Rate',
        type: 'line',
        data: metricsData.metrics.archiveRate,
        smooth: true,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Compression Ratio',
        type: 'line',
        yAxisIndex: 1,
        data: metricsData.metrics.compressionRatio,
        smooth: true,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Search Latency',
        type: 'line',
        yAxisIndex: 1,
        data: metricsData.metrics.searchLatency,
        smooth: true,
        itemStyle: { color: '#f59e0b' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}