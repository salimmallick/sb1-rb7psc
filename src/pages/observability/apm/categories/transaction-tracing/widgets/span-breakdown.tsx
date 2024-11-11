import ReactECharts from 'echarts-for-react';

const spanData = {
  services: ['API Gateway', 'Auth Service', 'User Service', 'Product Service', 'Database'],
  metrics: {
    avgDuration: [45, 35, 25, 30, 20],
    p95Duration: [80, 65, 45, 55, 35],
    errorRate: [0.5, 0.3, 0.2, 0.4, 0.1]
  }
};

export function SpanBreakdownWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Avg Duration', 'P95 Duration', 'Error Rate'],
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
      data: spanData.services
    },
    yAxis: [
      {
        type: 'value',
        name: 'Duration (ms)',
        position: 'left',
        axisLabel: {
          formatter: '{value} ms'
        }
      },
      {
        type: 'value',
        name: 'Error Rate (%)',
        position: 'right',
        axisLabel: {
          formatter: '{value}%'
        }
      }
    ],
    series: [
      {
        name: 'Avg Duration',
        type: 'bar',
        data: spanData.metrics.avgDuration,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'P95 Duration',
        type: 'bar',
        data: spanData.metrics.p95Duration,
        itemStyle: { color: '#f59e0b' }
      },
      {
        name: 'Error Rate',
        type: 'line',
        yAxisIndex: 1,
        data: spanData.metrics.errorRate,
        itemStyle: { color: '#ef4444' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '400px' }} />;
}