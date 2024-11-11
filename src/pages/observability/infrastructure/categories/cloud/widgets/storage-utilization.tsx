import ReactECharts from 'echarts-for-react';

const storageData = {
  timestamps: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  metrics: {
    objectStorage: [2.5, 3.0, 3.2, 3.8, 4.0, 4.2],
    blockStorage: [1.5, 1.8, 1.9, 2.0, 2.2, 2.3],
    fileStorage: [1.0, 1.2, 1.3, 1.4, 1.5, 1.7],
    cost: [800, 950, 1020, 1150, 1230, 1310]
  }
};

export function StorageUtilizationWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Object Storage', 'Block Storage', 'File Storage', 'Storage Cost'],
      bottom: 0
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '15%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: storageData.timestamps
    },
    yAxis: [
      {
        type: 'value',
        name: 'Storage (TB)',
        position: 'left',
        axisLabel: {
          formatter: '{value} TB'
        }
      },
      {
        type: 'value',
        name: 'Cost ($)',
        position: 'right',
        axisLabel: {
          formatter: '${value}'
        }
      }
    ],
    series: [
      {
        name: 'Object Storage',
        type: 'bar',
        stack: 'storage',
        emphasis: { focus: 'series' },
        data: storageData.metrics.objectStorage,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Block Storage',
        type: 'bar',
        stack: 'storage',
        emphasis: { focus: 'series' },
        data: storageData.metrics.blockStorage,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'File Storage',
        type: 'bar',
        stack: 'storage',
        emphasis: { focus: 'series' },
        data: storageData.metrics.fileStorage,
        itemStyle: { color: '#f59e0b' }
      },
      {
        name: 'Storage Cost',
        type: 'line',
        yAxisIndex: 1,
        data: storageData.metrics.cost,
        smooth: true,
        itemStyle: { color: '#ef4444' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}