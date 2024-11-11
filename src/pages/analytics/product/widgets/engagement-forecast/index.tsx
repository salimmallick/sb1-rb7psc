import { Card } from '@/components/ui/card';
import ReactECharts from 'echarts-for-react';

const forecastData = {
  dates: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  metrics: {
    actual: [85, 88, 90, 92, null, null],
    predicted: [null, null, null, 92, 94, 96],
    confidence: {
      upper: [null, null, null, 95, 97, 99],
      lower: [null, null, null, 89, 91, 93]
    }
  }
};

export function EngagementForecastWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Actual', 'Predicted', 'Confidence Interval']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: forecastData.dates
    },
    yAxis: {
      type: 'value',
      name: 'Engagement Score'
    },
    series: [
      {
        name: 'Actual',
        type: 'line',
        data: forecastData.metrics.actual,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Predicted',
        type: 'line',
        data: forecastData.metrics.predicted,
        itemStyle: { color: '#22c55e' },
        lineStyle: { type: 'dashed' }
      },
      {
        name: 'Confidence Interval',
        type: 'line',
        data: forecastData.metrics.confidence.upper,
        lineStyle: { opacity: 0 },
        areaStyle: {
          color: '#22c55e',
          opacity: 0.1
        },
        stack: 'confidence'
      },
      {
        name: 'Confidence Interval',
        type: 'line',
        data: forecastData.metrics.confidence.lower,
        lineStyle: { opacity: 0 },
        areaStyle: {
          color: '#22c55e',
          opacity: 0.1
        },
        stack: 'confidence'
      }
    ]
  };

  return (
    <Card className="p-6">
      <ReactECharts option={option} style={{ height: '300px' }} />
    </Card>
  );
}