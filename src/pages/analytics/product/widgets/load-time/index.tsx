import { Card } from '@/components/ui/card';
import ReactECharts from 'echarts-for-react';

const loadTimeData = {
  timestamps: ['00:00', '00:05', '00:10', '00:15', '00:20'],
  metrics: {
    pageLoad: [2.5, 2.3, 2.8, 2.4, 2.6],
    apiResponse: [0.8, 0.7, 0.9, 0.75, 0.85],
    resourceLoad: [1.5, 1.4, 1.6, 1.45, 1.55]
  }
};

export function LoadTimeWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Page Load', 'API Response', 'Resource Load'],
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
      data: loadTimeData.timestamps
    },
    yAxis: {
      type: 'value',
      name: 'Time (seconds)'
    },
    series: [
      {
        name: 'Page Load',
        type: 'line',
        data: loadTimeData.metrics.pageLoad,
        smooth: true,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'API Response',
        type: 'line',
        data: loadTimeData.metrics.apiResponse,
        smooth: true,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Resource Load',
        type: 'line',
        data: loadTimeData.metrics.resourceLoad,
        smooth: true,
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