import { Card } from '@/components/ui/card';
import ReactECharts from 'echarts-for-react';

const customSegmentData = {
  segments: ['Power Users', 'Regular Users', 'Early Adopters', 'Feature Users'],
  metrics: {
    engagement: [85, 65, 75, 70],
    retention: [90, 70, 80, 75],
    revenue: [95, 60, 85, 65]
  }
};

export function CustomSegmentWidget() {
  const option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Engagement', 'Retention', 'Revenue'],
      bottom: 0
    },
    radar: {
      center: ['50%', '45%'],
      radius: '60%',
      indicator: customSegmentData.segments.map(segment => ({
        name: segment,
        max: 100
      }))
    },
    series: [
      {
        type: 'radar',
        data: [
          {
            name: 'Engagement',
            value: customSegmentData.metrics.engagement,
            itemStyle: { color: '#3b82f6' },
            areaStyle: { opacity: 0.2 }
          },
          {
            name: 'Retention',
            value: customSegmentData.metrics.retention,
            itemStyle: { color: '#22c55e' },
            areaStyle: { opacity: 0.2 }
          },
          {
            name: 'Revenue',
            value: customSegmentData.metrics.revenue,
            itemStyle: { color: '#f59e0b' },
            areaStyle: { opacity: 0.2 }
          }
        ]
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