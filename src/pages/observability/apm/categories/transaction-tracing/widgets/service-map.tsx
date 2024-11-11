import ReactECharts from 'echarts-for-react';

const serviceMapData = {
  nodes: [
    { name: 'API Gateway', value: 1200 },
    { name: 'Auth Service', value: 800 },
    { name: 'User Service', value: 600 },
    { name: 'Product Service', value: 900 },
    { name: 'Database', value: 1500 }
  ],
  links: [
    { source: 'API Gateway', target: 'Auth Service', value: 800 },
    { source: 'API Gateway', target: 'User Service', value: 600 },
    { source: 'API Gateway', target: 'Product Service', value: 900 },
    { source: 'Auth Service', target: 'Database', value: 800 },
    { source: 'User Service', target: 'Database', value: 600 },
    { source: 'Product Service', target: 'Database', value: 900 }
  ]
};

export function ServiceMapWidget() {
  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} requests/s'
    },
    series: [
      {
        type: 'graph',
        layout: 'force',
        data: serviceMapData.nodes.map(node => ({
          ...node,
          symbolSize: Math.sqrt(node.value) / 5,
          itemStyle: { color: '#3b82f6' }
        })),
        links: serviceMapData.links.map(link => ({
          ...link,
          lineStyle: {
            width: Math.sqrt(link.value) / 10,
            color: '#94a3b8'
          }
        })),
        categories: [],
        roam: true,
        label: {
          show: true,
          position: 'right'
        },
        force: {
          repulsion: 100,
          edgeLength: [50, 200]
        }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '400px' }} />;
}