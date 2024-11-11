import ReactECharts from 'echarts-for-react';

const throughputData = {
  timestamps: ['00:00', '00:10', '00:20', '00:30', '00:40', '00:50'],
  metrics: {
    requests: [1200, 1250, 1180, 1300, 1250, 1220],
    processed: [1180, 1230, 1160, 1280, 1230, 1200],
    queued: [20, 20, 20, 20, 20, 20]
  }
};

export function ThroughputWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Incoming Requests', 'Processed', 'Queued'],
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
      data: throughputData.timestamps
    },
    yAxis: {
      type: 'value',
      name: 'Requests/s',
      axisLabel: {
        formatter: '{value}/s'
      }
    },
    series: [
      {
        name: 'Incoming Requests',
        type: 'line',
        data: throughputData.metrics.requests,
        smooth: true,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Processed',
        type: 'line',
        data: throughputData.metrics.processed,
        smooth: true,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Queued',
        type: 'line',
        data: throughputData.metrics.queued,
        smooth: true,
        itemStyle: { color: '#f59e0b' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}