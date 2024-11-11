import ReactECharts from 'echarts-for-react';

const podData = {
  pods: ['web-app-1', 'api-server', 'database', 'cache', 'queue'],
  metrics: {
    cpu: [65, 45, 85, 35, 55],
    memory: [75, 55, 90, 40, 60],
    limits: {
      cpu: [100, 80, 100, 50, 80],
      memory: [100, 80, 100, 50, 80]
    }
  }
};

export function PodResourceUsageWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['CPU Usage', 'Memory Usage', 'CPU Limit', 'Memory Limit'],
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
      data: podData.pods
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
        name: 'CPU Usage',
        type: 'bar',
        data: podData.metrics.cpu,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Memory Usage',
        type: 'bar',
        data: podData.metrics.memory,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'CPU Limit',
        type: 'line',
        data: podData.metrics.limits.cpu,
        itemStyle: { color: '#f59e0b' }
      },
      {
        name: 'Memory Limit',
        type: 'line',
        data: podData.metrics.limits.memory,
        itemStyle: { color: '#ef4444' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}