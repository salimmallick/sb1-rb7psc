import ReactECharts from 'echarts-for-react';

const trafficData = {
  timestamps: ['00:00', '00:05', '00:10', '00:15', '00:20'],
  metrics: {
    inbound: [1.8, 2.2, 1.9, 2.4, 2.1],
    outbound: [1.2, 1.5, 1.3, 1.6, 1.4],
    total: [3.0, 3.7, 3.2, 4.0, 3.5]
  }
};

export function TrafficAnalysisWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Inbound', 'Outbound', 'Total'],
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
      data: trafficData.timestamps
    },
    yAxis: {
      type: 'value',
      name: 'Traffic (GB/s)',
      axisLabel: {
        formatter: '{value} GB/s'
      }
    },
    series: [
      {
        name: 'Inbound',
        type: 'line',
        data: trafficData.metrics.inbound,
        smooth: true,
        areaStyle: { opacity: 0.2 },
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Outbound',
        type: 'line',
        data: trafficData.metrics.outbound,
        smooth: true,
        areaStyle: { opacity: 0.2 },
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Total',
        type: 'line',
        data: trafficData.metrics.total,
        smooth: true,
        areaStyle: { opacity: 0.2 },
        itemStyle: { color: '#f59e0b' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}