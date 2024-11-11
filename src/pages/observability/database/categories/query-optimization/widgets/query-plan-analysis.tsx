import ReactECharts from 'echarts-for-react';

const planData = {
  nodes: [
    { name: 'Nested Loop', value: 100 },
    { name: 'Index Scan users', value: 45 },
    { name: 'Seq Scan orders', value: 85 },
    { name: 'Index Scan products', value: 35 },
    { name: 'Hash Join', value: 75 },
    { name: 'Hash', value: 40 },
    { name: 'Index Scan categories', value: 30 }
  ],
  links: [
    { source: 'Nested Loop', target: 'Index Scan users' },
    { source: 'Nested Loop', target: 'Hash Join' },
    { source: 'Hash Join', target: 'Seq Scan orders' },
    { source: 'Hash Join', target: 'Hash' },
    { source: 'Hash', target: 'Index Scan products' },
    { source: 'Hash', target: 'Index Scan categories' }
  ]
};

export function QueryPlanAnalysisWidget() {
  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c}ms'
    },
    series: [
      {
        type: 'graph',
        layout: 'force',
        data: planData.nodes.map(node => ({
          ...node,
          symbolSize: Math.sqrt(node.value) * 2,
          label: {
            show: true
          }
        })),
        links: planData.links.map(link => ({
          ...link,
          lineStyle: {
            color: '#94a3b8',
            width: 2,
            curveness: 0.3
          }
        })),
        force: {
          repulsion: 1000,
          edgeLength: 200
        },
        roam: true
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '400px' }} />;
}