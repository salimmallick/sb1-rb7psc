import { Card } from '@/components/ui/card';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import ReactECharts from 'echarts-for-react';
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
          itemStyle: { color: '#3b82f6' }
        }))
      },
      {
        name: 'Engagement Rate',
        type: 'bar',
        data: mockFeatureData.features.map(f => ({
          value: f.engagement,
          itemStyle: { color: '#22c55e' }
        }))
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
      data: mockFeatureData.trends.timestamps,
      boundaryGap: false
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
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="font-semibold">Feature Adoption Analysis</h3>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Info className="h-4 w-4 text-muted-foreground" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Track feature adoption and engagement metrics across your application.</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="mb-4">
        <Select
          value={selectedFeature}
          onValueChange={setSelectedFeature}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="All Features" />
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
    </Card>
  );
}