import ReactECharts from 'echarts-for-react';

const networkData = {
  timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  metrics: {
    ingress: [250, 280, 260, 290, 270, 265],
    egress: [220, 240, 230, 250, 235, 225],
    latency: [12, 15, 13, 16, 14, 13]
  }
};

export function ClusterNetworkWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Ingress Traffic', 'Egress Traffic', 'Pod Latency'],
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
      data: networkData.timestamps
    },
    yAxis: [
      {
        type: 'value',
        name: 'Traffic (MB/s)',
        position: 'left',
        axisLabel: {
          formatter: '{value} MB/s'
        }
      },
      {
        type: 'value',
        name: 'Latency (ms)',
        position: 'right',
        axisLabel: {
          formatter: '{value} ms'
        }
      }
    ],
    series: [
      {
        name: 'Ingress Traffic',
        type: 'bar',
        data: networkData.metrics.ingress,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Egress Traffic',
        type: 'bar',
        data: networkData.metrics.egress,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Pod Latency',
        type: 'line',
        yAxisIndex: 1,
        data: networkData.metrics.latency,
        smooth: true,
        itemStyle: { color: '#f59e0b' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}