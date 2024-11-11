import ReactECharts from 'echarts-for-react';

const cpuData = {
  timestamps: ['00:00', '00:05', '00:10', '00:15', '00:20'],
  metrics: {
    usage: [65, 68, 62, 70, 65],
    user: [45, 48, 42, 50, 45],
    system: [20, 20, 20, 20, 20]
  }
};

export function CPUUsageWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Total Usage', 'User Space', 'System Space'],
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
      data: cpuData.timestamps,
      boundaryGap: false
    },
    yAxis: {
      type: 'value',
      name: 'Usage (%)',
      max: 100,
      axisLabel: {
        formatter: '{value}%'
      }
    },
    series: [
      {
        name: 'Total Usage',
        type: 'line',
        data: cpuData.metrics.usage,
        smooth: true,
        areaStyle: { opacity: 0.2 },
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'User Space',
        type: 'line',
        data: cpuData.metrics.user,
        smooth: true,
        areaStyle: { opacity: 0.2 },
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'System Space',
        type: 'line',
        data: cpuData.metrics.system,
        smooth: true,
        areaStyle: { opacity: 0.2 },
        itemStyle: { color: '#f59e0b' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}