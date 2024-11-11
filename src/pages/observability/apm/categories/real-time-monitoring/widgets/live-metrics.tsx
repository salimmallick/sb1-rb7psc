import ReactECharts from 'echarts-for-react';

const liveData = {
  timestamps: ['00:00', '00:10', '00:20', '00:30', '00:40', '00:50'],
  metrics: {
    responseTime: [120, 125, 118, 130, 125, 122],
    throughput: [1200, 1250, 1180, 1300, 1250, 1220],
    errorRate: [0.5, 0.6, 0.4, 0.7, 0.5, 0.4],
    cpuUsage: [45, 48, 42, 50, 47, 45]
  }
};

export function LiveMetricsWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Response Time', 'Throughput', 'Error Rate', 'CPU Usage'],
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
      data: liveData.timestamps
    },
    yAxis: [
      {
        type: 'value',
        name: 'Response Time (ms)',
        position: 'left',
        axisLabel: {
          formatter: '{value} ms'
        }
      },
      {
        type: 'value',
        name: 'Throughput (req/s)',
        position: 'right',
        axisLabel: {
          formatter: '{value}/s'
        }
      }
    ],
    series: [
      {
        name: 'Response Time',
        type: 'line',
        data: liveData.metrics.responseTime,
        smooth: true,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Throughput',
        type: 'line',
        yAxisIndex: 1,
        data: liveData.metrics.throughput,
        smooth: true,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Error Rate',
        type: 'line',
        data: liveData.metrics.errorRate,
        smooth: true,
        itemStyle: { color: '#ef4444' }
      },
      {
        name: 'CPU Usage',
        type: 'line',
        data: liveData.metrics.cpuUsage,
        smooth: true,
        itemStyle: { color: '#f59e0b' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '400px' }} />;
}