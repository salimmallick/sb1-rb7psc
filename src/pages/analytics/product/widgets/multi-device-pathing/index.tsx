import { Card } from '@/components/ui/card';
import ReactECharts from 'echarts-for-react';

const pathingData = {
  nodes: [
    { name: 'Mobile Start', value: 1000 },
    { name: 'Desktop Start', value: 800 },
    { name: 'Tablet Start', value: 400 },
    { name: 'Mobile Continue', value: 600 },
    { name: 'Desktop Continue', value: 500 },
    { name: 'Tablet Continue', value: 300 }
  ],
  links: [
    { source: 'Mobile Start', target: 'Desktop Continue', value: 300 },
    { source: 'Mobile Start', target: 'Tablet Continue', value: 150 },
    { source: 'Desktop Start', target: 'Mobile Continue', value: 250 },
    { source: 'Desktop Start', target: 'Tablet Continue', value: 120 },
    { source: 'Tablet Start', target: 'Mobile Continue', value: 180 },
    { source: 'Tablet Start', target: 'Desktop Continue', value: 100 }
  ]
};

export function MultiDevicePathingWidget() {
  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b} → {c} users'
    },
    series: [{
      type: 'sankey',
      emphasis: {
        focus: 'adjacency'
      },
      nodeAlign: 'left',
      layoutIterations: 32,
      data: pathingData.nodes,
      links: pathingData.links,
      lineStyle: {
        color: 'source',
        curveness: 0.5
      }
    }]
  };

  return (
    <div className="h-full w-full">
      <ReactECharts 
        option={option} 
        style={{ height: '100%', width: '100%' }}
        opts={{ renderer: 'svg' }}
      />
    </div>
  );
}