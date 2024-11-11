import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ReactECharts from 'echarts-for-react';

export function ObservabilityInsights() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['Errors', 'Warnings', 'Info']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Errors',
        type: 'bar',
        stack: 'total',
        data: [12, 15, 8, 10, 7, 11]
      },
      {
        name: 'Warnings',
        type: 'bar',
        stack: 'total',
        data: [30, 35, 25, 28, 22, 32]
      },
      {
        name: 'Info',
        type: 'bar',
        stack: 'total',
        data: [45, 50, 40, 42, 38, 48]
      }
    ]
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Observability Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <ReactECharts option={option} style={{ height: '300px' }} />
      </CardContent>
    </Card>
  );
}