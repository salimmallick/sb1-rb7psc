import { Card } from '@/components/ui/card';
import ReactECharts from 'echarts-for-react';

const behavioralData = {
  segments: [
    { name: 'Power Users', value: 25, engagement: 90 },
    { name: 'Regular Users', value: 35, engagement: 75 },
    { name: 'Occasional Users', value: 25, engagement: 45 },
    { name: 'Inactive Users', value: 15, engagement: 15 }
  ]
};

export function BehavioralSegmentationWidget() {
  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c}%'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      top: 'center'
    },
    series: [
      {
        type: 'pie',
        radius: ['50%', '70%'],
        center: ['65%', '50%'],
        avoidLabelOverlap: true,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: true,
          formatter: '{b}: {c}%'
        },
        data: behavioralData.segments.map(segment => ({
          name: segment.name,
          value: segment.value,
          itemStyle: {
            color: segment.engagement > 75 ? '#22c55e' :
                  segment.engagement > 50 ? '#3b82f6' :
                  segment.engagement > 25 ? '#f59e0b' : '#ef4444'
          }
        }))
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