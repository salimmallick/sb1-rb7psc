import ReactECharts from 'echarts-for-react';

const retentionData = {
  categories: ['System Logs', 'Application Logs', 'Security Logs', 'Access Logs', 'Audit Logs'],
  metrics: {
    current: [365, 180, 730, 90, 1825],
    required: [365, 180, 730, 90, 1825],
    dataSize: [2.5, 1.8, 2.2, 0.8, 1.2]
  }
};

export function ArchiveRetentionWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['Current Retention', 'Required Retention', 'Data Size'],
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
      data: retentionData.categories,
      axisLabel: {
        interval: 0,
        rotate: 30
      }
    },
    yAxis: [
      {
        type: 'value',
        name: 'Days',
        position: 'left'
      },
      {
        type: 'value',
        name: 'Size (TB)',
        position: 'right',
        axisLabel: {
          formatter: '{value} TB'
        }
      }
    ],
    series: [
      {
        name: 'Current Retention',
        type: 'bar',
        data: retentionData.metrics.current,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Required Retention',
        type: 'bar',
        data: retentionData.metrics.required,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Data Size',
        type: 'line',
        yAxisIndex: 1,
        data: retentionData.metrics.dataSize,
        itemStyle: { color: '#f59e0b' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}