import ReactECharts from 'echarts-for-react';

const severityData = {
  timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  metrics: {
    critical: [5, 8, 6, 9, 7, 5],
    high: [8, 10, 9, 12, 10, 8],
    medium: [15, 18, 16, 20, 17, 15],
    low: [25, 30, 28, 32, 29, 26]
  }
};

export function AlertSeverityWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['Critical', 'High', 'Medium', 'Low'],
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
      data: severityData.timestamps
    },
    yAxis: {
      type: 'value',
      name: 'Alert Count'
    },
    series: [
      {
        name: 'Critical',
        type: 'bar',
        stack: 'total',
        emphasis: { focus: 'series' },
        data: severityData.metrics.critical,
        itemStyle: { color: '#ef4444' }
      },
      {
        name: 'High',
        type: 'bar',
        stack: 'total',
        emphasis: { focus: 'series' },
        data: severityData.metrics.high,
        itemStyle: { color: '#f59e0b' }
      },
      {
        name: 'Medium',
        type: 'bar',
        stack: 'total',
        emphasis: { focus: 'series' },
        data: severityData.metrics.medium,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Low',
        type: 'bar',
        stack: 'total',
        emphasis: { focus: 'series' },
        data: severityData.metrics.low,
        itemStyle: { color: '#22c55e' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '400px' }} />;
}