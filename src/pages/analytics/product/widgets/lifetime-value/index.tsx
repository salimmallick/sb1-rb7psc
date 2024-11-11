import { Card } from '@/components/ui/card';
import ReactECharts from 'echarts-for-react';

const ltvData = {
  segments: ['Low Value', 'Medium Value', 'High Value', 'VIP'],
  metrics: {
    current: [100, 500, 2000, 5000],
    predicted: [150, 750, 3000, 7500],
    probability: [60, 75, 85, 90]
  }
};

export function LifetimeValueWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Current LTV', 'Predicted LTV', 'Probability'],
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
      data: ltvData.segments
    },
    yAxis: [
      {
        type: 'value',
        name: 'Value ($)',
        position: 'left'
      },
      {
        type: 'value',
        name: 'Probability (%)',
        min: 0,
        max: 100,
        position: 'right'
      }
    ],
    series: [
      {
        name: 'Current LTV',
        type: 'bar',
        data: ltvData.metrics.current,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Predicted LTV',
        type: 'bar',
        data: ltvData.metrics.predicted,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Probability',
        type: 'line',
        yAxisIndex: 1,
        data: ltvData.metrics.probability,
        itemStyle: { color: '#f59e0b' }
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