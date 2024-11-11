import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ReactECharts from 'echarts-for-react';

export function UserEngagement() {
  const option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Active Users', 'Session Duration', 'Conversion Rate']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: [
      {
        type: 'value',
        name: 'Users',
        position: 'left'
      },
      {
        type: 'value',
        name: 'Minutes',
        position: 'right'
      }
    ],
    series: [
      {
        name: 'Active Users',
        type: 'bar',
        data: [1200, 1320, 1010, 1340, 900, 2300, 2100]
      },
      {
        name: 'Session Duration',
        type: 'line',
        yAxisIndex: 1,
        data: [45, 48, 42, 50, 47, 55, 52]
      },
      {
        name: 'Conversion Rate',
        type: 'line',
        data: [5.2, 5.5, 4.8, 6.0, 5.5, 6.2, 6.0]
      }
    ]
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>User Engagement</CardTitle>
      </CardHeader>
      <CardContent>
        <ReactECharts option={option} style={{ height: '300px' }} />
      </CardContent>
    </Card>
  );
}