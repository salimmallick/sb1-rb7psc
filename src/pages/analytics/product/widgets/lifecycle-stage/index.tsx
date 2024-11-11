import { Card } from '@/components/ui/card';
import ReactECharts from 'echarts-for-react';

const lifecycleData = {
  stages: ['Acquisition', 'Activation', 'Retention', 'Revenue', 'Referral'],
  metrics: {
    currentStage: [1000, 750, 500, 300, 150],
    previousStage: [900, 700, 450, 250, 120],
    conversion: [75, 67, 60, 50, 0]
  }
};

export function LifecycleStageWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['Current Period', 'Previous Period', 'Conversion Rate']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: lifecycleData.stages
    },
    yAxis: [
      {
        type: 'value',
        name: 'Users',
        position: 'left'
      },
      {
        type: 'value',
        name: 'Conversion Rate',
        min: 0,
        max: 100,
        position: 'right',
        axisLabel: {
          formatter: '{value}%'
        }
      }
    ],
    series: [
      {
        name: 'Current Period',
        type: 'bar',
        data: lifecycleData.metrics.currentStage,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Previous Period',
        type: 'bar',
        data: lifecycleData.metrics.previousStage,
        itemStyle: { color: '#94a3b8' }
      },
      {
        name: 'Conversion Rate',
        type: 'line',
        yAxisIndex: 1,
        data: lifecycleData.metrics.conversion,
        itemStyle: { color: '#22c55e' }
      }
    ]
  };

  return (
    <Card className="p-6">
      <ReactECharts option={option} style={{ height: '300px' }} />
    </Card>
  );
}