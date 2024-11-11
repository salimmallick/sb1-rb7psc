import ReactECharts from 'echarts-for-react';

const anomalyData = {
  timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  metrics: {
    responseTime: [120, 125, 180, 130, 125, 122],
    throughput: [1000, 980, 750, 950, 980, 990],
    anomalyScores: [0.2, 0.3, 0.8, 0.4, 0.3, 0.2]
  }
};

export function PerformanceAnomaliesWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Response Time', 'Throughput', 'Anomaly Score'],
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
      data: anomalyData.timestamps
    },
    yAxis: [
      {
        type: 'value',
        name: 'Response Time (ms)',
        position: 'left'
      },
      {
        type: 'value',
        name: 'Anomaly Score',
        min: 0,
        max: 1,
        position: 'right'
      }
    ],
    series: [
      {
        name: 'Response Time',
        type: 'line',
        data: anomalyData.metrics.responseTime,
        smooth: true,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Throughput',
        type: 'line',
        data: anomalyData.metrics.throughput,
        smooth: true,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Anomaly Score',
        type: 'line',
        yAxisIndex: 1,
        data: anomalyData.metrics.anomalyScores,
        smooth: true,
        itemStyle: { color: '#ef4444' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}