import { Card } from '@/components/ui/card';
import ReactECharts from 'echarts-for-react';

const churnData = {
  segments: ['New Users', 'Casual Users', 'Regular Users', 'Power Users'],
  metrics: {
    riskScore: [65, 45, 25, 15],
    churnProbability: [45, 30, 15, 8],
    retentionRate: [55, 70, 85, 92]
  }
};

export function ChurnPredictionWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['Risk Score', 'Churn Probability', 'Retention Rate'],
      bottom: 0
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '10%',
      top: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: churnData.segments
    },
    yAxis: {
      type: 'value',
      name: 'Percentage (%)',
      max: 100
    },
    series: [
      {
        name: 'Risk Score',
        type: 'bar',
        data: churnData.metrics.riskScore,
        itemStyle: { color: '#ef4444' }
      },
      {
        name: 'Churn Probability',
        type: 'line',
        data: churnData.metrics.churnProbability,
        itemStyle: { color: '#f59e0b' }
      },
      {
        name: 'Retention Rate',
        type: 'line',
        data: churnData.metrics.retentionRate,
        itemStyle: { color: '#22c55e' }
      }
    ]
  };

  return (
    <div className="h-full w-full">
      <ReactECharts 
        option={option} 
        style={{ height: '100%', width: '100%' }}
      />
    </div>
  );
}