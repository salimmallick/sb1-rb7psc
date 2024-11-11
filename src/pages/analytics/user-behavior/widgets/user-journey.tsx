import { Card } from '@/components/ui/card';
import ReactECharts from 'echarts-for-react';

const journeyData = {
  nodes: [
    { name: 'Landing', value: 10000 },
    { name: 'Sign Up', value: 4500 },
    { name: 'Onboarding', value: 3500 },
    { name: 'Feature A', value: 2800 },
    { name: 'Feature B', value: 2200 },
    { name: 'Feature C', value: 1800 },
    { name: 'Conversion', value: 1200 }
  ],
  links: [
    { source: 'Landing', target: 'Sign Up', value: 4500 },
    { source: 'Sign Up', target: 'Onboarding', value: 3500 },
    { source: 'Onboarding', target: 'Feature A', value: 2800 },
    { source: 'Feature A', target: 'Feature B', value: 2200 },
    { source: 'Feature B', target: 'Feature C', value: 1800 },
    { source: 'Feature C', target: 'Conversion', value: 1200 }
  ],
  dropoffs: [
    { stage: 'Landing → Sign Up', rate: 55 },
    { stage: 'Sign Up → Onboarding', rate: 22 },
    { stage: 'Onboarding → Feature A', rate: 20 },
    { stage: 'Feature A → Feature B', rate: 21 },
    { stage: 'Feature B → Feature C', rate: 18 },
    { stage: 'Feature C → Conversion', rate: 33 }
  ]
};

export function UserJourneyWidget() {
  const journeyFlowOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} users'
    },
    series: [
      {
        type: 'sankey',
        layout: 'none',
        emphasis: {
          focus: 'adjacency'
        },
        data: journeyData.nodes,
        links: journeyData.links,
        lineStyle: {
          color: 'gradient',
          curveness: 0.5
        }
      }
    ]
  };

  const dropoffAnalysisOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    xAxis: {
      type: 'category',
      data: journeyData.dropoffs.map(item => item.stage),
      axisLabel: {
        rotate: 45
      }
    },
    yAxis: {
      type: 'value',
      name: 'Drop-off Rate (%)',
      max: 100
    },
    series: [
      {
        type: 'bar',
        data: journeyData.dropoffs.map(item => ({
          value: item.rate,
          itemStyle: {
            color: item.rate > 50 ? '#ef4444' :
                  item.rate > 30 ? '#f59e0b' :
                  item.rate > 20 ? '#3b82f6' : '#22c55e'
          }
        })),
        label: {
          show: true,
          position: 'top',
          formatter: '{c}%'
        }
      }
    ]
  };

  return (
    <div className="grid grid-cols-2 gap-6">
      <Card className="p-6">
        <h3 className="text-sm font-semibold mb-4">User Flow Analysis</h3>
        <ReactECharts option={journeyFlowOption} style={{ height: '400px' }} />
      </Card>

      <Card className="p-6">
        <h3 className="text-sm font-semibold mb-4">Drop-off Analysis</h3>
        <ReactECharts option={dropoffAnalysisOption} style={{ height: '400px' }} />
      </Card>
    </div>
  );
}