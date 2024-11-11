import { Card } from '@/components/ui/card';
import ReactECharts from 'echarts-for-react';

const errorData = {
  errors: [
    { type: 'API Errors', count: 45, trend: -5 },
    { type: 'JS Exceptions', count: 32, trend: -2 },
    { type: 'Network Errors', count: 28, trend: -3 },
    { type: 'Resource Errors', count: 15, trend: -1 }
  ]
};

export function ErrorReportWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '10%',
      top: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value'
    },
    yAxis: {
      type: 'category',
      data: errorData.errors.map(error => error.type)
    },
    series: [
      {
        type: 'bar',
        data: errorData.errors.map(error => ({
          value: error.count,
          itemStyle: {
            color: error.trend < 0 ? '#22c55e' : '#ef4444'
          }
        })),
        label: {
          show: true,
          position: 'right',
          formatter: '{c} errors'
        }
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