import ReactECharts from 'echarts-for-react';

const packetLossData = {
  timestamps: ['00:00', '00:05', '00:10', '00:15', '00:20'],
  metrics: {
    packetLoss: [0.05, 0.08, 0.04, 0.06, 0.05],
    retransmission: [0.02, 0.03, 0.02, 0.04, 0.02],
    errorRate: [0.01, 0.02, 0.01, 0.02, 0.01]
  }
};

export function PacketLossWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      },
      formatter: (params: any) => {
        return params.map((param: any) => {
          return `${param.seriesName}: ${(param.value * 100).toFixed(2)}%`;
        }).join('<br/>');
      }
    },
    legend: {
      data: ['Packet Loss', 'Retransmission Rate', 'Error Rate'],
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
      data: packetLossData.timestamps
    },
    yAxis: {
      type: 'value',
      name: 'Rate (%)',
      axisLabel: {
        formatter: (value: number) => `${(value * 100).toFixed(2)}%`
      }
    },
    series: [
      {
        name: 'Packet Loss',
        type: 'line',
        data: packetLossData.metrics.packetLoss,
        smooth: true,
        itemStyle: { color: '#ef4444' }
      },
      {
        name: 'Retransmission Rate',
        type: 'line',
        data: packetLossData.metrics.retransmission,
        smooth: true,
        itemStyle: { color: '#f59e0b' }
      },
      {
        name: 'Error Rate',
        type: 'line',
        data: packetLossData.metrics.errorRate,
        smooth: true,
        itemStyle: { color: '#3b82f6' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}