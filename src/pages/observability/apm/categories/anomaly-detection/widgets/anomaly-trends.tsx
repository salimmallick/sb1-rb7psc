import ReactECharts from 'echarts-for-react';

const trendData = {
  timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  metrics: {
    anomalies: [8, 12, 10, 15, 11, 9],
    predictions: [7, 11, 9, 14, 10, 8],
    baseline: [6, 6, 6, 6, 6, 6]
  }
};

export function AnomalyTrendsWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Detected Anomalies', 'Predicted Anomalies', 'Baseline'],
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
    yAxis: {
      type: 'value',
      name: 'Count'
    },
    series: [
      {
        name: 'Detected Anomalies',
        type: 'line',
        data: trendData.metrics.anomalies,
        smooth: true,
        itemStyle: { color: '#ef4444' }
      },
      {
        name: 'Predicted Anomalies',
        type: 'line',
        data: trendData.metrics.predictions,
        smooth: true,
        itemStyle: { color: '#f59e0b' }
      },
      {
        name: 'Baseline',
        type: 'line',
        data: trendData.metrics.baseline,
        smooth: true,
        itemStyle: { color: '#3b82f6' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '400px' }} />;
}