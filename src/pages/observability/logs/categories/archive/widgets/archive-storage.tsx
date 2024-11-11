import ReactECharts from 'echarts-for-react';

const storageData = {
  timestamps: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  metrics: {
    total: [6.5, 7.0, 7.5, 8.0, 8.2, 8.5],
    compressed: [4.5, 4.8, 5.2, 5.5, 5.7, 5.9],
    raw: [2.0, 2.2, 2.3, 2.5, 2.5, 2.6]
  }
};

export function ArchiveStorageWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Total Storage', 'Compressed', 'Raw'],
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
      data: storageData.timestamps
    },
    yAxis: {
      type: 'value',
      name: 'Storage (TB)',
      axisLabel: {
        formatter: '{value} TB'
      }
    },
    series: [
      {
        name: 'Total Storage',
        type: 'line',
        data: storageData.metrics.total,
        smooth: true,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Compressed',
        type: 'line',
        data: storageData.metrics.compressed,
        smooth: true,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Raw',
        type: 'line',
        data: storageData.metrics.raw,
        smooth: true,
        itemStyle: { color: '#f59e0b' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}