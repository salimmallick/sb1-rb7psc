import ReactECharts from 'echarts-for-react';

const anomalyData = {
  timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  metrics: {
    expected: [100, 105, 102, 108, 104, 103],
    actual: [98, 140, 105, 95, 180, 102],
    anomalyScore: [0.2, 0.8, 0.3, 0.4, 0.9, 0.2]
  }
};

export function PatternAnomaliesWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Expected', 'Actual', 'Anomaly Score'],
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
        name: 'Pattern Count',
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
        name: 'Expected',
        type: 'line',
        data: anomalyData.metrics.expected,
        smooth: true,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Actual',
        type: 'line',
        data: anomalyData.metrics.actual,
        smooth: true,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Anomaly Score',
        type: 'line',
        yAxisIndex: 1,
        data: anomalyData.metrics.anomalyScore,
        smooth: true,
        itemStyle: { color: '#ef4444' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}