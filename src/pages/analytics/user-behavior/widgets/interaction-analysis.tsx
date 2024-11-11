import { Card } from '@/components/ui/card';
import ReactECharts from 'echarts-for-react';

const interactionData = {
  features: [
    { name: 'Feature A', clicks: 15000, duration: 45, satisfaction: 85 },
    { name: 'Feature B', clicks: 12000, duration: 35, satisfaction: 78 },
    { name: 'Feature C', clicks: 9000, duration: 25, satisfaction: 82 },
    { name: 'Feature D', clicks: 7500, duration: 20, satisfaction: 75 }
  ],
  hourly: Array.from({ length: 24 }, (_, i) => ({
    hour: `${i}:00`,
    interactions: Math.floor(Math.random() * 1000) + 500
  }))
};

export function InteractionAnalysisWidget() {
  const featureMetricsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['Clicks', 'Avg Duration (s)', 'Satisfaction (%)']
    },
    xAxis: {
      type: 'category',
      data: interactionData.features.map(f => f.name)
    },
    yAxis: [
      {
        type: 'value',
        name: 'Clicks',
        position: 'left'
      },
      {
        type: 'value',
        name: 'Score',
        position: 'right',
        max: 100
      }
    ],
    series: [
      {
        name: 'Clicks',
        type: 'bar',
        data: interactionData.features.map(f => f.clicks),
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Avg Duration (s)',
        type: 'line',
        yAxisIndex: 1,
        data: interactionData.features.map(f => f.duration),
        itemStyle: { color: '#f59e0b' }
      },
      {
        name: 'Satisfaction (%)',
        type: 'line',
        yAxisIndex: 1,
        data: interactionData.features.map(f => f.satisfaction),
        itemStyle: { color: '#22c55e' }
      }
    ]
  };

  const hourlyInteractionsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    xAxis: {
      type: 'category',
      data: interactionData.hourly.map(h => h.hour)
    },
    yAxis: {
      type: 'value',
      name: 'Interactions'
    },
    series: [
      {
        type: 'bar',
        data: interactionData.hourly.map(h => ({
          value: h.interactions,
          itemStyle: {
            color: '#3b82f6'
          }
        }))
      }
    ]
  };

  return (
    <div className="grid grid-cols-2 gap-6">
      <Card className="p-6">
        <h3 className="text-sm font-semibold mb-4">Feature Interaction Metrics</h3>
        <ReactECharts option={featureMetricsOption} style={{ height: '300px' }} />
      </Card>

      <Card className="p-6">
        <h3 className="text-sm font-semibold mb-4">Hourly Interaction Distribution</h3>
        <ReactECharts option={hourlyInteractionsOption} style={{ height: '300px' }} />
      </Card>
    </div>
  );
}