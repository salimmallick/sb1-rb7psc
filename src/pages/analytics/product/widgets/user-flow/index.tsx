import { Card } from '@/components/ui/card';
import ReactECharts from 'echarts-for-react';

const flowData = {
  nodes: [
    { name: 'Landing Page', value: 10000 },
    { name: 'Product List', value: 8500 },
    { name: 'Product Detail', value: 6000 },
    { name: 'Add to Cart', value: 3000 },
    { name: 'Checkout', value: 2000 },
    { name: 'Purchase', value: 1500 }
  ],
  links: [
    { source: 'Landing Page', target: 'Product List', value: 8500 },
    { source: 'Product List', target: 'Product Detail', value: 6000 },
    { source: 'Product Detail', target: 'Add to Cart', value: 3000 },
    { source: 'Add to Cart', target: 'Checkout', value: 2000 },
    { source: 'Checkout', target: 'Purchase', value: 1500 }
  ]
};

export function UserFlowWidget() {
  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} users'
    },
    series: [{
      type: 'sankey',
      emphasis: {
        focus: 'adjacency'
      },
      nodeAlign: 'left',
      layoutIterations: 32,
      data: flowData.nodes,
      links: flowData.links,
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