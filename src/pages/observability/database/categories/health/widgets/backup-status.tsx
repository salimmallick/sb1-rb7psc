import ReactECharts from 'echarts-for-react';

const backupData = {
  timestamps: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  metrics: {
    duration: [45, 48, 46, 47, 45, 44, 46],
    size: [120, 125, 122, 128, 124, 121, 123],
    success: [1, 1, 1, 1, 1, 1, 1]
  }
};

export function BackupStatusWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Duration', 'Size', 'Success'],
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
      data: backupData.timestamps
    },
    yAxis: [
      {
        type: 'value',
        name: 'Duration (min)',
        position: 'left',
        axisLabel: {
          formatter: '{value} min'
        }
      },
      {
        type: 'value',
        name: 'Size (GB)',
        position: 'right',
        axisLabel: {
          formatter: '{value} GB'
        }
      }
    ],
    series: [
      {
        name: 'Duration',
        type: 'bar',
        data: backupData.metrics.duration,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Size',
        type: 'line',
        yAxisIndex: 1,
        data: backupData.metrics.size,
        smooth: true,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Success',
        type: 'scatter',
        symbolSize: 20,
        data: backupData.metrics.success.map((val, idx) => ({
          value: [idx, val],
          itemStyle: {
            color: val === 1 ? '#22c55e' : '#ef4444'
          }
        }))
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}