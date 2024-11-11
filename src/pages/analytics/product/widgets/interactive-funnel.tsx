import ReactECharts from 'echarts-for-react';
import { Card } from '@/components/ui/card';
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
  },
  dropoffReasons: {
    'Sign Up': [
      { reason: 'Complex Form', percentage: 35 },
      { reason: 'Email Verification', percentage: 25 },
      { reason: 'Already Registered', percentage: 20 },
      { reason: 'Other', percentage: 20 }
    ],
    'Purchase': [
      { reason: 'High Price', percentage: 40 },
      { reason: 'Shipping Cost', percentage: 30 },
      { reason: 'Payment Issues', percentage: 20 },
      { reason: 'Other', percentage: 10 }
    ]
  }
};

export function InteractiveFunnelWidget() {
  const [selectedStage, setSelectedStage] = useState('all');

  const funnelOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} users ({d}%)'
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
        max: mockFunnelData.stages[0].value,
        minSize: '0%',
        maxSize: '100%',
        sort: 'descending',
        gap: 2,
        label: {
          show: true,
          position: 'inside'
        },
        labelLine: {
          length: 10,
          lineStyle: {
            width: 1,
            type: 'solid'
          }
        },
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 1
        },
        emphasis: {
          label: {
            fontSize: 20
          }
        },
        data: mockFunnelData.stages.map(stage => ({
          name: stage.name,
          value: stage.value
        }))
      }
    ]
  };

  const conversionTrendOption = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: Object.keys(mockFunnelData.trends.data)
    },
    xAxis: {
      type: 'category',
      data: mockFunnelData.trends.timestamps
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

  const dropoffOption = selectedStage !== 'all' && mockFunnelData.dropoffReasons[selectedStage] ? {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c}%'
    },
    series: [
      {
        name: 'Dropoff Reasons',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: true,
          formatter: '{b}: {c}%'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 14,
            fontWeight: 'bold'
          }
        },
        data: mockFunnelData.dropoffReasons[selectedStage]
      }
    ]
  } : null;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Select
          value={selectedStage}
          onValueChange={setSelectedStage}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select stage" />
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
          <ReactECharts option={funnelOption} style={{ height: '400px' }} />
        </Card>

        <Card className="p-4">
          <h3 className="text-sm font-semibold mb-4">Conversion Trends</h3>
          <ReactECharts option={conversionTrendOption} style={{ height: '400px' }} />
        </Card>

        {selectedStage !== 'all' && mockFunnelData.dropoffReasons[selectedStage] && (
          <Card className="p-4 md:col-span-2">
            <h3 className="text-sm font-semibold mb-4">Dropoff Analysis: {selectedStage}</h3>
            <ReactECharts option={dropoffOption} style={{ height: '300px' }} />
          </Card>
        )}
      </div>
    </div>
  );
}