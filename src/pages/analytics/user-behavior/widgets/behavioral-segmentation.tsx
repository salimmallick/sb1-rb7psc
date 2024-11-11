import { Card } from '@/components/ui/card';
import ReactECharts from 'echarts-for-react';

const segmentationData = {
  segments: [
    { name: 'Power Users', value: 15, engagement: 95 },
    { name: 'Regular Users', value: 35, engagement: 75 },
    { name: 'Casual Users', value: 30, engagement: 45 },
    { name: 'Inactive Users', value: 20, engagement: 15 }
  ],
  attributes: {
    categories: ['Feature Usage', 'Session Length', 'Visit Frequency', 'Interaction Depth'],
    segments: [
      { name: 'Power Users', data: [95, 90, 85, 92] },
      { name: 'Regular Users', data: [75, 70, 72, 68] },
      { name: 'Casual Users', data: [45, 50, 48, 42] },
      { name: 'Inactive Users', data: [15, 20, 18, 12] }
    ]
  }
};

export function BehavioralSegmentationWidget() {
  const segmentDistributionOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c}%'
    },
    legend: {
      orient: 'vertical',
      right: '5%',
      top: 'center'
    },
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['40%', '50%'],
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
        data: segmentationData.segments.map(segment => ({
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

  const attributeComparisonOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: segmentationData.attributes.segments.map(s => s.name)
    },
    radar: {
      indicator: segmentationData.attributes.categories.map(category => ({
        name: category,
        max: 100
      }))
    },
    series: [
      {
        type: 'radar',
        data: segmentationData.attributes.segments.map(segment => ({
          name: segment.name,
          value: segment.data,
          itemStyle: {
            color: segment.data[0] > 75 ? '#22c55e' :
                  segment.data[0] > 50 ? '#3b82f6' :
                  segment.data[0] > 25 ? '#f59e0b' : '#ef4444'
          }
        }))
      }
    ]
  };

  return (
    <div className="grid grid-cols-2 gap-6">
      <Card className="p-6">
        <h3 className="text-sm font-semibold mb-4">Segment Distribution</h3>
        <ReactECharts option={segmentDistributionOption} style={{ height: '300px' }} />
      </Card>

      <Card className="p-6">
        <h3 className="text-sm font-semibold mb-4">Segment Characteristics</h3>
        <ReactECharts option={attributeComparisonOption} style={{ height: '300px' }} />
      </Card>
    </div>
  );
}