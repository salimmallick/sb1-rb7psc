import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ReactECharts from 'echarts-for-react';

interface GeolocationDataProps {
  userId: string;
}

export function GeolocationData({ userId }: GeolocationDataProps) {
  const locationData = [
    { name: 'United States', value: 75 },
    { name: 'United Kingdom', value: 15 },
    { name: 'Canada', value: 10 }
  ];

  const option = {
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        type: 'pie',
        radius: '50%',
        data: locationData,
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
        <CardTitle>Geolocation Data</CardTitle>
      </CardHeader>
      <CardContent>
        <ReactECharts option={option} style={{ height: '300px' }} />
        <div className="mt-4 space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Primary Location:</span>
            <span className="font-medium">New York, United States</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Recent IP:</span>
            <span className="font-medium">192.168.1.1</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}