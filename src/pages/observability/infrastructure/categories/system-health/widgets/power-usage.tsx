import ReactECharts from 'echarts-for-react';

const powerData = {
  timestamps: ['00:00', '00:05', '00:10', '00:15', '00:20'],
  metrics: {
    totalPower: [420, 450, 430, 460, 440],
    cpuPower: [180, 200, 190, 210, 195],
    gpuPower: [150, 160, 155, 165, 158],
    otherPower: [90, 90, 85, 85, 87]
  }
};

export function PowerUsageWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Total Power', 'CPU Power', 'GPU Power', 'Other Components'],
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
      data: powerData.timestamps,
      boundaryGap: false
    },
    yAxis: {
      type: 'value',
      name: 'Power (W)',
      axisLabel: {
        formatter: '{value}W'
      }
    },
    series: [
      {
        name: 'Total Power',
        type: 'line',
        data: powerData.metrics.totalPower,
        smooth: true,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'CPU Power',
        type: 'line',
        data: powerData.metrics.cpuPower,
        smooth: true,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'GPU Power',
        type: 'line',
        data: powerData.metrics.gpuPower,
        smooth: true,
        itemStyle: { color: '#f59e0b' }
      },
      {
        name: 'Other Components',
        type: 'line',
        data: powerData.metrics.otherPower,
        smooth: true,
        itemStyle: { color: '#94a3b8' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}