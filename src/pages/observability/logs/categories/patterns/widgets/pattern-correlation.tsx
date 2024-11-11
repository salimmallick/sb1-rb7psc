import ReactECharts from 'echarts-for-react';

const correlationData = {
  nodes: [
    { name: 'Auth Failed', value: 100 },
    { name: 'Session Invalid', value: 80 },
    { name: 'DB Timeout', value: 90 },
    { name: 'Query Error', value: 70 },
    { name: '404 Error', value: 60 },
    { name: 'API Error', value: 85 },
    { name: 'Cache Miss', value: 50 }
  ],
  links: [
    { source: 'Auth Failed', target: 'Session Invalid', value: 0.8 },
    { source: 'DB Timeout', target: 'Query Error', value: 0.7 },
    { source: '404 Error', target: 'API Error', value: 0.6 },
    { source: 'API Error', target: 'Cache Miss', value: 0.5 },
    { source: 'Auth Failed', target: 'API Error', value: 0.4 },
    { source: 'DB Timeout', target: 'Cache Miss', value: 0.3 }
  ]
};

export function PatternCorrelationWidget() {
  const option = {
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        type: 'graph',
        layout: 'force',
        data: correlationData.nodes.map(node => ({
          ...node,
          symbolSize: Math.sqrt(node.value) * 2,
          label: {
            show: true
          }
        })),
        links: correlationData.links.map(link => ({
          ...link,
          lineStyle: {
            width: link.value * 5,
            curveness: 0.3
          }
        })),
        categories: [
          { name: 'Error' },
          { name: 'Warning' },
          { name: 'Info' }
        ],
        roam: true,
        force: {
          repulsion: 1000,
          edgeLength: 200
        }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '400px' }} />;
}