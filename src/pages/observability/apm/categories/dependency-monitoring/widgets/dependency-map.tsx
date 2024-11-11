import ReactECharts from 'echarts-for-react';

const dependencyData = {
  nodes: [
    { name: 'Frontend', category: 0, value: 20 },
    { name: 'API Gateway', category: 1, value: 15 },
    { name: 'Auth Service', category: 1, value: 12 },
    { name: 'User Service', category: 1, value: 10 },
    { name: 'Product Service', category: 1, value: 14 },
    { name: 'Payment Service', category: 1, value: 8 },
    { name: 'PostgreSQL', category: 2, value: 18 },
    { name: 'Redis', category: 2, value: 15 },
    { name: 'MongoDB', category: 2, value: 12 },
    { name: 'Stripe API', category: 3, value: 6 },
    { name: 'Email Service', category: 3, value: 5 }
  ],
  links: [
    { source: 'Frontend', target: 'API Gateway' },
    { source: 'API Gateway', target: 'Auth Service' },
    { source: 'API Gateway', target: 'User Service' },
    { source: 'API Gateway', target: 'Product Service' },
    { source: 'API Gateway', target: 'Payment Service' },
    { source: 'Auth Service', target: 'PostgreSQL' },
    { source: 'User Service', target: 'PostgreSQL' },
    { source: 'User Service', target: 'Redis' },
    { source: 'Product Service', target: 'MongoDB' },
    { source: 'Payment Service', target: 'Stripe API' },
    { source: 'User Service', target: 'Email Service' }
  ],
  categories: [
    { name: 'Frontend' },
    { name: 'Microservices' },
    { name: 'Databases' },
    { name: 'External Services' }
  ]
};

export function DependencyMapWidget() {
  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}'
    },
    legend: {
      data: dependencyData.categories.map(c => c.name),
      bottom: 0
    },
    series: [
      {
        type: 'graph',
        layout: 'force',
        animation: false,
        draggable: true,
        data: dependencyData.nodes.map(node => ({
          ...node,
          symbolSize: Math.sqrt(node.value) * 5,
          label: {
            show: true
          }
        })),
        categories: dependencyData.categories,
        force: {
          repulsion: 200,
          edgeLength: 120
        },
        edges: dependencyData.links.map(link => ({
          ...link,
          lineStyle: {
            color: '#94a3b8',
            width: 2,
            curveness: 0.3
          }
        }))
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '500px' }} />;
}