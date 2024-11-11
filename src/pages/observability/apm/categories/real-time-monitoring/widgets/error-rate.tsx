import ReactECharts from 'echarts-for-react';

const errorData = {
  timestamps: ['00:00', '00:10', '00:20', '00:30', '00:40', '00:50'],
  types: {
    http: [0.5, 0.6, 0.4, 0.7, 0.5, 0.4],
    validation: [0.3, 0.4, 0.2, 0.5, 0.3, 0.3],
    database: [0.2, 0.3, 0.1, 0.4, 0.2, 0.2],
    external: [0.1, 0.2, 0.1, 0.3, 0.1, 0.1]
  }
};

export function ErrorRateWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['HTTP Errors', 'Validation Errors', 'Database Errors', 'External API Errors'],
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
      data: errorData.timestamps
    },
    yAxis: {
      type: 'value',
      name: 'Error Rate (%)',
      axisLabel: {
        formatter: '{value}%'
      }
    },
    series: [
      {
        name: 'HTTP Errors',
        type: 'line',
        data: errorData.types.http,
        smooth: true,
        itemStyle: { color: '#ef4444' }
      },
      {
        name: 'Validation Errors',
        type: 'line',
        data: errorData.types.validation,
        smooth: true,
        itemStyle: { color: '#f59e0b' }
      },
      {
        name: 'Database Errors',
        type: 'line',
        data: errorData.types.database,
        smooth: true,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'External API Errors',
        type: 'line',
        data: errorData.types.external,
        smooth: true,
        itemStyle: { color: '#8b5cf6' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '400px' }} />;
}