import ReactECharts from 'echarts-for-react';

const nodeData = {
  nodes: [
    { name: 'node-1', status: 'Healthy' },
    { name: 'node-2', status: 'Healthy' },
    { name: 'node-3', status: 'Warning' },
    { name: 'node-4', status: 'Healthy' },
    { name: 'node-5', status: 'Critical' }
  ],
  metrics: {
    cpu: [75, 65, 85, 70, 80],
    memory: [80, 70, 90, 75, 85],
    pods: [45, 35, 55, 40, 50]
  }
};

export function NodeHealthWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: (params: any) => {
        const nodeIndex = params[0].dataIndex;
        const node = nodeData.nodes[nodeIndex];
        let result = `${node.name} (${node.status})<br/>`;
        params.forEach((param: any) => {
          result += `${param.seriesName}: ${param.value}%<br/>`;
        });
        return result;
      }
    },
    legend: {
      data: ['CPU', 'Memory', 'Pod Count'],
      bottom: 0
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '15%',
      top: '10%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: nodeData.nodes.map(node => node.name),
      axisLabel: {
        interval: 0,
        formatter: (value: string, index: number) => {
          const node = nodeData.nodes[index];
          const color = node.status === 'Healthy' ? '#22c55e' : 
                       node.status === 'Warning' ? '#f59e0b' : '#ef4444';
          return `{nodeName|${value}}\n{status|${node.status}}`;
        },
        rich: {
          nodeName: {
            color: '#666',
            lineHeight: 20,
            align: 'center'
          },
          status: {
            color: '#666',
            lineHeight: 20,
            align: 'center'
          }
        }
      }
    },
    yAxis: {
      type: 'value',
      name: 'Usage (%)',
      max: 100,
      axisLabel: {
        formatter: '{value}%'
      }
    },
    series: [
      {
        name: 'CPU',
        type: 'bar',
        data: nodeData.metrics.cpu,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Memory',
        type: 'bar',
        data: nodeData.metrics.memory,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Pod Count',
        type: 'line',
        data: nodeData.metrics.pods,
        itemStyle: { color: '#f59e0b' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}