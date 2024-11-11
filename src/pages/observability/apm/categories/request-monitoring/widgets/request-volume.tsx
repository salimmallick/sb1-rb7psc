import ReactECharts from 'echarts-for-react';

const volumeData = {
  timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  metrics: {
    total: [2500, 2800, 3200, 3500, 3200, 2700],
    successful: [2450, 2744, 3136, 3430, 3136, 2646],
    failed: [50, 56, 64, 70, 64, 54]
  }
};

export function RequestVolumeWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Total Requests', 'Successful', 'Failed'],
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
      data: volumeData.timestamps
    },
    yAxis: {
      type: 'value',
      name: 'Requests/s',
      axisLabel: {
        formatter: '{value}/s'
      }
    },
    series: [
      {
        name: 'Total Requests',
        type: 'line',
        data: volumeData.metrics.total,
        smooth: true,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Successful',
        type: 'line',
        data: volumeData.metrics.successful,
        smooth: true,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Failed',
        type: 'line',
        data: volumeData.metrics.failed,
        smooth: true,
        itemStyle: { color: '#ef4444' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}