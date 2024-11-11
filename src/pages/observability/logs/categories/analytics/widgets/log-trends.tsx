import ReactECharts from 'echarts-for-react';

const trendData = {
  timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  metrics: {
    errorRate: [2.5, 2.8, 2.3, 3.0, 2.7, 2.4],
    avgResponseTime: [120, 135, 115, 150, 130, 125],
    requestRate: [1000, 1100, 950, 1200, 1050, 1000]
  }
};

export function LogTrendsWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Error Rate', 'Avg Response Time', 'Request Rate'],
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
      data: trendData.timestamps
    },
    yAxis: [
      {
        type: 'value',
        name: 'Error Rate (%)',
        position: 'left',
        axisLabel: {
          formatter: '{value}%'
        }
      },
      {
        type: 'value',
        name: 'Response Time (ms)',
        position: 'right',
        axisLabel: {
          formatter: '{value} ms'
        }
      }
    ],
    series: [
      {
        name: 'Error Rate',
        type: 'line',
        data: trendData.metrics.errorRate,
        smooth: true,
        itemStyle: { color: '#ef4444' }
      },
      {
        name: 'Avg Response Time',
        type: 'line',
        yAxisIndex: 1,
        data: trendData.metrics.avgResponseTime,
        smooth: true,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Request Rate',
        type: 'bar',
        data: trendData.metrics.requestRate,
        itemStyle: { color: '#22c55e' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}