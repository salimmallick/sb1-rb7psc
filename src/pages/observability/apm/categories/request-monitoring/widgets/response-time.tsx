import ReactECharts from 'echarts-for-react';

const responseTimeData = {
  timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  metrics: {
    p50: [120, 125, 118, 130, 125, 122],
    p90: [180, 185, 178, 190, 185, 182],
    p95: [220, 225, 218, 230, 225, 222],
    p99: [280, 285, 278, 290, 285, 282]
  }
};

export function ResponseTimeWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['P50', 'P90', 'P95', 'P99'],
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
      data: responseTimeData.timestamps
    },
    yAxis: {
      type: 'value',
      name: 'Response Time (ms)',
      axisLabel: {
        formatter: '{value} ms'
      }
    },
    series: [
      {
        name: 'P50',
        type: 'line',
        data: responseTimeData.metrics.p50,
        smooth: true,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'P90',
        type: 'line',
        data: responseTimeData.metrics.p90,
        smooth: true,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'P95',
        type: 'line',
        data: responseTimeData.metrics.p95,
        smooth: true,
        itemStyle: { color: '#f59e0b' }
      },
      {
        name: 'P99',
        type: 'line',
        data: responseTimeData.metrics.p99,
        smooth: true,
        itemStyle: { color: '#ef4444' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}