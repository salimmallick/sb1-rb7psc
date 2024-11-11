import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ReactECharts from 'echarts-for-react';

interface DeviceInformationProps {
  userId: string;
}

export function DeviceInformation({ userId }: DeviceInformationProps) {
  const deviceData = [
    { value: 40, name: 'Desktop' },
    { value: 35, name: 'Mobile' },
    { value: 25, name: 'Tablet' }
  ];

  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} ({d}%)'
    },
    series: [
      {
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: 'outside'
        },
        data: deviceData
      }
    ]
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Device Information</CardTitle>
      </CardHeader>
      <CardContent>
        <ReactECharts option={option} style={{ height: '300px' }} />
        <div className="mt-4 space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Most Used Device:</span>
            <span className="font-medium">Desktop - Windows 11</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Browser:</span>
            <span className="font-medium">Chrome 120.0</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}