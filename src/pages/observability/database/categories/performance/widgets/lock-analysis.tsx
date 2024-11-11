import ReactECharts from 'echarts-for-react';

const lockData = {
  timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  metrics: {
    rowLocks: [45, 52, 48, 58, 50, 47],
    tableLocks: [12, 15, 13, 18, 14, 13],
    deadlocks: [1, 2, 1, 3, 1, 1],
    waitTime: [120, 150, 130, 180, 140, 130]
  }
};

export function LockAnalysisWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Row Locks', 'Table Locks', 'Deadlocks', 'Wait Time'],
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
      data: lockData.timestamps
    },
    yAxis: [
      {
        type: 'value',
        name: 'Count',
        position: 'left'
      },
      {
        type: 'value',
        name: 'Wait Time (ms)',
        position: 'right',
        axisLabel: {
          formatter: '{value} ms'
        }
      }
    ],
    series: [
      {
        name: 'Row Locks',
        type: 'bar',
        data: lockData.metrics.rowLocks,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Table Locks',
        type: 'bar',
        data: lockData.metrics.tableLocks,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Deadlocks',
        type: 'bar',
        data: lockData.metrics.deadlocks,
        itemStyle: { color: '#ef4444' }
      },
      {
        name: 'Wait Time',
        type: 'line',
        yAxisIndex: 1,
        data: lockData.metrics.waitTime,
        smooth: true,
        itemStyle: { color: '#f59e0b' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}