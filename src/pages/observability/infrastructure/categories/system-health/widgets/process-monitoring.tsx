import ReactECharts from 'echarts-for-react';

const processData = {
  processes: [
    { name: 'nginx', cpu: 25, memory: 512, threads: 8 },
    { name: 'mongodb', cpu: 40, memory: 1024, threads: 12 },
    { name: 'node', cpu: 30, memory: 768, threads: 6 },
    { name: 'redis', cpu: 15, memory: 256, threads: 4 },
    { name: 'postgres', cpu: 35, memory: 896, threads: 10 }
  ]
};

export function ProcessMonitoringWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['CPU Usage (%)', 'Memory (MB)', 'Threads'],
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
      data: processData.processes.map(p => p.name)
    },
    yAxis: [
      {
        type: 'value',
        name: 'CPU & Threads',
        position: 'left',
        axisLabel: {
          formatter: '{value}'
        }
      },
      {
        type: 'value',
        name: 'Memory (MB)',
        position: 'right',
        axisLabel: {
          formatter: '{value} MB'
        }
      }
    ],
    series: [
      {
        name: 'CPU Usage (%)',
        type: 'bar',
        data: processData.processes.map(p => p.cpu),
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Memory (MB)',
        type: 'bar',
        yAxisIndex: 1,
        data: processData.processes.map(p => p.memory),
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Threads',
        type: 'bar',
        data: processData.processes.map(p => p.threads),
        itemStyle: { color: '#f59e0b' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '400px' }} />;
}