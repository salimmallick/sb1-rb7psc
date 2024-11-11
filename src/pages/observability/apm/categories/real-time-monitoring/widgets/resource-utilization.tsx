import ReactECharts from 'echarts-for-react';

const resourceData = {
  timestamps: ['00:00', '00:10', '00:20', '00:30', '00:40', '00:50'],
  metrics: {
    cpu: [45, 48, 42, 50, 47, 45],
    memory: [62, 65, 60, 68, 64, 63],
    disk: [35, 36, 34, 37, 35, 36],
    network: [28, 30, 27, 32, 29, 28]
  }
};

export function ResourceUtilizationWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['CPU', 'Memory', 'Disk I/O', 'Network I/O'],
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
      data: resourceData.timestamps
    },
    yAxis: {
      type: 'value',
      name: 'Utilization (%)',
      max: 100,
      axisLabel: {
        formatter: '{value}%'
      }
    },
    series: [
      {
        name: 'CPU',
        type: 'line',
        data: resourceData.metrics.cpu,
        smooth: true,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Memory',
        type: 'line',
        data: resourceData.metrics.memory,
        smooth: true,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Disk I/O',
        type: 'line',
        data: resourceData.metrics.disk,
        smooth: true,
        itemStyle: { color: '#f59e0b' }
      },
      {
        name: 'Network I/O',
        type: 'line',
        data: resourceData.metrics.network,
        smooth: true,
        itemStyle: { color: '#8b5cf6' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}