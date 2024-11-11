import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ReactECharts from 'echarts-for-react';

interface InteractionTrackingProps {
  userId: string;
}

export function InteractionTracking({ userId }: InteractionTrackingProps) {
  const interactionData = [
    { value: 30, name: 'Page Views' },
    { value: 25, name: 'Feature Usage' },
    { value: 20, name: 'Form Submissions' },
    { value: 15, name: 'API Calls' },
    { value: 10, name: 'Downloads' }
  ];

  const option = {
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        type: 'pie',
        radius: '50%',
        data: interactionData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Interaction Tracking</CardTitle>
      </CardHeader>
      <CardContent>
        <ReactECharts option={option} style={{ height: '300px' }} />
        <div className="mt-4 space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Most Used Feature:</span>
            <span className="font-medium">Dashboard Analytics</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Average Session Duration:</span>
            <span className="font-medium">45 minutes</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}