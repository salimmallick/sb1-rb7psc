import { Card } from '@/components/ui/card';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import ReactECharts from 'echarts-for-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';

const mockFunnelData = {
  stages: [
    { name: 'Page Visit', value: 100000 },
    { name: 'Sign Up', value: 45000 },
    { name: 'Product View', value: 35000 },
    { name: 'Add to Cart', value: 20000 },
    { name: 'Purchase', value: 12000 }
  ],
  trends: {
    timestamps: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    data: {
      'Page Visit': [95000, 98000, 100000, 102000],
      'Sign Up': [42000, 43500, 45000, 46000],
      'Product View': [32000, 33500, 35000, 36000],
      'Add to Cart': [18000, 19000, 20000, 21000],
      'Purchase': [10500, 11200, 12000, 12500]
    }
  }
};

export function InteractiveFunnelWidget() {
  const [selectedStage, setSelectedStage] = useState('all');

  const funnelOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c}'
    },
    series: [
      {
        name: 'Funnel',
        type: 'funnel',
        left: '10%',
        top: 60,
        bottom: 60,
        width: '80%',
        min: 0,
        max: 100000,
        minSize: '0%',
        maxSize: '100%',
        sort: 'descending',
        gap: 2,
        label: {
          show: true,
          position: 'inside',
          formatter: '{b}\n{c}'
        },
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 1
        },
        data: mockFunnelData.stages
      }
    ]
  };

  const trendOption = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: Object.keys(mockFunnelData.trends.data)
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: mockFunnelData.trends.timestamps,
      boundaryGap: false
    },
    yAxis: {
      type: 'value',
      name: 'Users'
    },
    series: Object.entries(mockFunnelData.trends.data).map(([stage, data]) => ({
      name: stage,
      type: 'line',
      data: data,
      smooth: true
    }))
  };

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="font-semibold">Conversion Analysis</h3>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Info className="h-4 w-4 text-muted-foreground" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Track user progression through key conversion stages.</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="mb-4">
        <Select
          value={selectedStage}
          onValueChange={setSelectedStage}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="All Stages" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Stages</SelectItem>
            {mockFunnelData.stages.map(stage => (
              <SelectItem key={stage.name} value={stage.name}>
                {stage.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-4">
          <h3 className="text-sm font-semibold mb-4">Conversion Funnel</h3>
          <ReactECharts option={funnelOption} style={{ height: '300px' }} />
        </Card>

        <Card className="p-4">
          <h3 className="text-sm font-semibold mb-4">Conversion Trends</h3>
          <ReactECharts option={trendOption} style={{ height: '300px' }} />
        </Card>
      </div>
    </Card>
  );
}