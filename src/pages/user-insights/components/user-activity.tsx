import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ReactECharts from 'echarts-for-react';

interface UserActivityProps {
  userId: string;
}

export function UserActivity({ userId }: UserActivityProps) {
  const activityData = {
    dates: ['Jan 1', 'Jan 2', 'Jan 3', 'Jan 4', 'Jan 5', 'Jan 6', 'Jan 7'],
    sessions: [5, 8, 3, 10, 6, 4, 7],
    actions: [25, 45, 15, 60, 35, 20, 40],
    duration: [45, 75, 30, 90, 60, 40, 65]
  };

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Sessions', 'Actions', 'Duration (min)']
    },
    xAxis: {
      type: 'category',
      data: activityData.dates
    },
    yAxis: [
      {
        type: 'value',
        name: 'Count',
        position: 'left'
      },
      {
        type: 'value',
        name: 'Duration (min)',
        position: 'right'
      }
    ],
    series: [
      {
        name: 'Sessions',
        type: 'bar',
        data: activityData.sessions
      },
      {
        name: 'Actions',
        type: 'bar',
        data: activityData.actions
      },
      {
        name: 'Duration (min)',
        type: 'line',
        yAxisIndex: 1,
        data: activityData.duration
      }
    ]
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Activity Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <ReactECharts option={option} style={{ height: '400px' }} />
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Avg. Daily Sessions</p>
            <p className="text-2xl font-bold">6.1</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Avg. Actions/Session</p>
            <p className="text-2xl font-bold">5.8</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Avg. Session Duration</p>
            <p className="text-2xl font-bold">58m</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}