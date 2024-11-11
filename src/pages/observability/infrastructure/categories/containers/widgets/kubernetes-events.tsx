import ReactECharts from 'echarts-for-react';

const eventData = {
  timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  events: {
    created: [12, 8, 15, 10, 14, 9],
    deleted: [8, 6, 10, 7, 9, 6],
    failed: [2, 1, 3, 2, 2, 1],
    warnings: [4, 3, 5, 4, 4, 3]
  }
};

export function KubernetesEventsWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Created', 'Deleted', 'Failed', 'Warnings'],
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
      data: eventData.timestamps
    },
    yAxis: {
      type: 'value',
      name: 'Event Count'
    },
    series: [
      {
        name: 'Created',
        type: 'bar',
        stack: 'total',
        data: eventData.events.created,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Deleted',
        type: 'bar',
        stack: 'total',
        data: eventData.events.deleted,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Failed',
        type: 'bar',
        stack: 'total',
        data: eventData.events.failed,
        itemStyle: { color: '#ef4444' }
      },
      {
        name: 'Warnings',
        type: 'bar',
        stack: 'total',
        data: eventData.events.warnings,
        itemStyle: { color: '#f59e0b' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}