import ReactECharts from 'echarts-for-react';

const queryData = {
  timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  metrics: {
    avgTime: [45, 48, 42, 50, 47, 45],
    p95Time: [75, 80, 70, 85, 78, 76],
    p99Time: [95, 100, 90, 105, 98, 96],
    queryCount: [1200, 1300, 1100, 1400, 1250, 1200]
  }
};

export function QueryPerformanceWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Avg Time', 'P95 Time', 'P99 Time', 'Query Count'],
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
      data: queryData.timestamps
    },
    yAxis: [
      {
        type: 'value',
        name: 'Time (ms)',
        position: 'left',
        axisLabel: {
          formatter: '{value} ms'
        }
      },
      {
        type: 'value',
        name: 'Queries',
        position: 'right'
      }
    ],
    series: [
      {
        name: 'Avg Time',
        type: 'line',
        data: queryData.metrics.avgTime,
        smooth: true,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'P95 Time',
        type: 'line',
        data: queryData.metrics.p95Time,
        smooth: true,
        itemStyle: { color: '#f59e0b' }
      },
      {
        name: 'P99 Time',
        type: 'line',
        data: queryData.metrics.p99Time,
        smooth: true,
        itemStyle: { color: '#ef4444' }
      },
      {
        name: 'Query Count',
        type: 'bar',
        yAxisIndex: 1,
        data: queryData.metrics.queryCount,
        itemStyle: { color: '#22c55e' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '400px' }} />;
}