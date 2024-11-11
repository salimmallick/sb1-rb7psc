import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ReactECharts from 'echarts-for-react';

export function TrafficInsights() {
  const option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Total Traffic', 'Unique Users', 'Bandwidth']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00']
    },
    yAxis: [
      {
        type: 'value',
        name: 'Requests',
        position: 'left'
      },
      {
        type: 'value',
        name: 'Bandwidth (GB)',
        position: 'right'
      }
    ],
    series: [
      {
        name: 'Total Traffic',
        type: 'line',
        data: [1200, 1320, 1010, 1340, 900, 2300],
        smooth: true
      },
      {
        name: 'Unique Users',
        type: 'line',
        data: [500, 550, 450, 580, 400, 950],
        smooth: true
      },
      {
        name: 'Bandwidth',
        type: 'line',
        yAxisIndex: 1,
        data: [2.5, 2.8, 2.2, 3.0, 2.0, 4.5],
        smooth: true
      }
    ]
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Traffic Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <ReactECharts option={option} style={{ height: '300px' }} />
      </CardContent>
    </Card>
  );
}