import ReactECharts from 'echarts-for-react';

const replicationData = {
  timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  replicas: {
    'Replica 1': [45, 48, 52, 47, 45, 46],
    'Replica 2': [48, 51, 55, 50, 48, 49],
    'Replica 3': [50, 53, 57, 52, 50, 51]
  }
};

export function ReplicationStatusWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: Object.keys(replicationData.replicas),
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
      data: replicationData.timestamps
    },
    yAxis: {
      type: 'value',
      name: 'Lag (ms)',
      axisLabel: {
        formatter: '{value} ms'
      }
    },
    series: Object.entries(replicationData.replicas).map(([name, data]) => ({
      name,
      type: 'line',
      data,
      smooth: true
    }))
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}