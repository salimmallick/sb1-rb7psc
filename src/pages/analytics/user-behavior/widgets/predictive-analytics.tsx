import { Card } from '@/components/ui/card';
import ReactECharts from 'echarts-for-react';

const predictiveData = {
  engagement: {
    dates: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    actual: [85, 88, 90, 92, null, null],
    predicted: [null, null, null, 92, 94, 96],
    confidence: {
      upper: [null, null, null, 95, 97, 99],
      lower: [null, null, null, 89, 91, 93]
    }
  },
  churnRisk: [
    { segment: 'New Users', riskScore: 35, probability: 25 },
    { segment: 'Casual Users', riskScore: 45, probability: 35 },
    { segment: 'Regular Users', riskScore: 25, probability: 15 },
    { segment: 'Power Users', riskScore: 15, probability: 8 }
  ]
};

export function PredictiveAnalyticsWidget() {
  const engagementForecastOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Actual', 'Predicted', 'Confidence Interval']
    },
    xAxis: {
      type: 'category',
      data: predictiveData.engagement.dates
    },
    yAxis: {
      type: 'value',
      name: 'Engagement Score'
    },
    series: [
      {
        name: 'Actual',
        type: 'line',
        data: predictiveData.engagement.actual,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Predicted',
        type: 'line',
        data: predictiveData.engagement.predicted,
        itemStyle: { color: '#22c55e' },
        lineStyle: { type: 'dashed' }
      },
      {
        name: 'Confidence Interval',
        type: 'line',
        data: predictiveData.engagement.confidence.upper,
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
        data: predictiveData.engagement.confidence.lower,
        lineStyle: { opacity: 0 },
        areaStyle: {
          color: '#22c55e',
          opacity: 0.1
        },
        stack: 'confidence'
      }
    ]
  };

  const churnRiskOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['Risk Score', 'Churn Probability']
    },
    xAxis: {
      type: 'category',
      data: predictiveData.churnRisk.map(item => item.segment)
    },
    yAxis: {
      type: 'value',
      name: 'Score/Probability (%)',
      max: 100
    },
    series: [
      {
        name: 'Risk Score',
        type: 'bar',
        data: predictiveData.churnRisk.map(item => item.riskScore),
        itemStyle: { color: '#ef4444' }
      },
      {
        name: 'Churn Probability',
        type: 'line',
        data: predictiveData.churnRisk.map(item => item.probability),
        itemStyle: { color: '#f59e0b' }
      }
    ]
  };

  return (
    <div className="grid grid-cols-2 gap-6">
      <Card className="p-6">
        <h3 className="text-sm font-semibold mb-4">Engagement Forecast</h3>
        <ReactECharts option={engagementForecastOption} style={{ height: '300px' }} />
      </Card>

      <Card className="p-6">
        <h3 className="text-sm font-semibold mb-4">Churn Risk Analysis</h3>
        <ReactECharts option={churnRiskOption} style={{ height: '300px' }} />
      </Card>
    </div>
  );
}