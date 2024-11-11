import ReactECharts from 'echarts-for-react';

const predictionData = {
  timestamps: ['Now', '+1h', '+2h', '+3h', '+4h', '+5h'],
  metrics: {
    actual: [120, 125, null, null, null, null],
    predicted: [120, 125, 130, 128, 132, 135],
    confidence: {
      upper: [120, 128, 135, 135, 140, 145],
      lower: [120, 122, 125, 121, 124, 125]
    }
  }
};

export function PredictiveAnalysisWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Actual', 'Predicted', 'Confidence Interval'],
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
      data: predictionData.timestamps
    },
    yAxis: {
      type: 'value',
      name: 'Response Time (ms)'
    },
    series: [
      {
        name: 'Actual',
        type: 'line',
        data: predictionData.metrics.actual,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Predicted',
        type: 'line',
        data: predictionData.metrics.predicted,
        itemStyle: { color: '#f59e0b' }
      },
      {
        name: 'Confidence Interval',
        type: 'line',
        data: predictionData.metrics.confidence.upper,
        lineStyle: { opacity: 0 },
        stack: 'confidence',
        symbol: 'none'
      },
      {
        name: 'Confidence Interval',
        type: 'line',
        data: predictionData.metrics.confidence.lower,
        lineStyle: { opacity: 0 },
        areaStyle: {
          color: '#f59e0b',
          opacity: 0.1
        },
        stack: 'confidence',
        symbol: 'none'
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}