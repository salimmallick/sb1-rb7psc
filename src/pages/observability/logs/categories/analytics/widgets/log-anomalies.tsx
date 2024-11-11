import ReactECharts from 'echarts-for-react';

const anomalyData = {
  timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  metrics: {
    baseline: [100, 100, 100, 100, 100, 100],
    actual: [98, 145, 102, 95, 178, 103],
    anomalies: [
      { value: [1, 145], itemStyle: { color: '#ef4444' } },
      { value: [4, 178], itemStyle: { color: '#ef4444' } }
    ]
  }
};

export function LogAnomaliesWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Baseline', 'Actual', 'Anomalies'],
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
    yAxis: {
      type: 'value',
      name: 'Log Volume'
    },
    series: [
      {
        name: 'Baseline',
        type: 'line',
        data: anomalyData.metrics.baseline,
        smooth: true,
        itemStyle: { color: '#94a3b8' },
        lineStyle: { type: 'dashed' }
      },
      {
        name: 'Actual',
        type: 'line',
        data: anomalyData.metrics.actual,
        smooth: true,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Anomalies',
        type: 'scatter',
        data: anomalyData.metrics.anomalies,
        symbolSize: 20
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}