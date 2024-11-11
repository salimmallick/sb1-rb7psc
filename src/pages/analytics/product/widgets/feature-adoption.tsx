import ReactECharts from 'echarts-for-react';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';

const mockFeatureData = {
  features: [
    { name: 'Search', adoption: 85, engagement: 75, trend: 5 },
    { name: 'Filters', adoption: 72, engagement: 68, trend: 3 },
    { name: 'Sorting', adoption: 65, engagement: 60, trend: -2 },
    { name: 'Bookmarks', adoption: 45, engagement: 40, trend: 8 },
    { name: 'Sharing', adoption: 38, engagement: 35, trend: 4 }
  ],
  trends: {
    timestamps: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    data: {
      Search: [80, 82, 83, 85],
      Filters: [70, 70, 71, 72],
      Sorting: [67, 66, 65, 65],
      Bookmarks: [40, 42, 44, 45],
      Sharing: [35, 36, 37, 38]
    }
  }
};

export function FeatureAdoptionWidget() {
  const [selectedFeature, setSelectedFeature] = useState('all');

  const adoptionBarOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['Adoption Rate', 'Engagement Rate']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: mockFeatureData.features.map(f => f.name)
    },
    yAxis: {
      type: 'value',
      name: 'Percentage (%)',
      max: 100
    },
    series: [
      {
        name: 'Adoption Rate',
        type: 'bar',
        data: mockFeatureData.features.map(f => ({
          value: f.adoption,
          itemStyle: {
            color: f.trend > 0 ? '#22c55e' : '#ef4444'
          }
        }))
      },
      {
        name: 'Engagement Rate',
        type: 'bar',
        data: mockFeatureData.features.map(f => f.engagement)
      }
    ]
  };

  const trendLineOption = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: Object.keys(mockFeatureData.trends.data)
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: mockFeatureData.trends.timestamps
    },
    yAxis: {
      type: 'value',
      name: 'Adoption Rate (%)',
      max: 100
    },
    series: Object.entries(mockFeatureData.trends.data).map(([feature, data]) => ({
      name: feature,
      type: 'line',
      data: data,
      smooth: true
    }))
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Select
          value={selectedFeature}
          onValueChange={setSelectedFeature}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select feature" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Features</SelectItem>
            {mockFeatureData.features.map(feature => (
              <SelectItem key={feature.name} value={feature.name}>
                {feature.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-4">
          <h3 className="text-sm font-semibold mb-4">Feature Adoption Rates</h3>
          <ReactECharts option={adoptionBarOption} style={{ height: '300px' }} />
        </Card>

        <Card className="p-4">
          <h3 className="text-sm font-semibold mb-4">Adoption Trends</h3>
          <ReactECharts option={trendLineOption} style={{ height: '300px' }} />
        </Card>
      </div>
    </div>
  );
}