import ReactECharts from 'echarts-for-react';

const restoreData = {
  timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  metrics: {
    active: [8, 12, 10, 15, 11, 9],
    completed: [45, 52, 48, 58, 50, 47],
    failed: [2, 3, 2, 4, 3, 2],
    throughput: [250, 280, 260, 290, 270, 265]
  }
};

export function ArchiveRestoreWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Active Jobs', 'Completed Jobs', 'Failed Jobs', 'Restore Throughput'],
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
      data: restoreData.timestamps
    },
    yAxis: [
      {
        type: 'value',
        name: 'Jobs',
        position: 'left'
      },
      {
        type: 'value',
        name: 'MB/s',
        position: 'right',
        axisLabel: {
          formatter: '{value} MB/s'
        }
      }
    ],
    series: [
      {
        name: 'Active Jobs',
        type: 'bar',
        data: restoreData.metrics.active,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Completed Jobs',
        type: 'bar',
        data: restoreData.metrics.completed,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Failed Jobs',
        type: 'bar',
        data: restoreData.metrics.failed,
        itemStyle: { color: '#ef4444' }
      },
      {
        name: 'Restore Throughput',
        type: 'line',
        yAxisIndex: 1,
        data: restoreData.metrics.throughput,
        smooth: true,
        itemStyle: { color: '#f59e0b' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}