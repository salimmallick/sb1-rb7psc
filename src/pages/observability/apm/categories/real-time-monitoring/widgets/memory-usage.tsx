import ReactECharts from 'echarts-for-react';

const memoryData = {
  timestamps: ['00:00', '00:10', '00:20', '00:30', '00:40', '00:50'],
  metrics: {
    heap: [512, 524, 498, 536, 518, 508],
    nonHeap: [128, 132, 126, 134, 130, 129],
    gc: [0, 1, 0, 1, 0, 1]
  }
};

export function MemoryUsageWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Heap Memory', 'Non-Heap Memory', 'GC Events'],
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
      boundaryGap: false,
      data: memoryData.timestamps
    },
    yAxis: [
      {
        type: 'value',
        name: 'Memory (MB)',
        position: 'left',
        axisLabel: {
          formatter: '{value} MB'
        }
      },
      {
        type: 'value',
        name: 'GC Events',
        position: 'right',
        minInterval: 1
      }
    ],
    series: [
      {
        name: 'Heap Memory',
        type: 'line',
        data: memoryData.metrics.heap,
        smooth: true,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Non-Heap Memory',
        type: 'line',
        data: memoryData.metrics.nonHeap,
        smooth: true,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'GC Events',
        type: 'bar',
        yAxisIndex: 1,
        data: memoryData.metrics.gc,
        itemStyle: { color: '#f59e0b' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}