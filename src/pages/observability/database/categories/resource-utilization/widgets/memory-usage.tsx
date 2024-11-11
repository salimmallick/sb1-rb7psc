import ReactECharts from 'echarts-for-react';

const memoryData = {
  timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  metrics: {
    used: [18, 19, 20, 19.5, 19, 18],
    cached: [6, 6, 6, 6, 6, 6],
    free: [4, 3, 2, 2.5, 3, 4],
    total: 28
  }
};

export function MemoryUsageWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      },
      formatter: (params: any) => {
        const time = params[0].axisValue;
        let result = `${time}<br/>`;
        params.forEach((param: any) => {
          result += `${param.seriesName}: ${param.value}GB<br/>`;
        });
        return result;
      }
    },
    legend: {
      data: ['Used Memory', 'Cached', 'Free'],
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
    yAxis: {
      type: 'value',
      name: 'Memory (GB)',
      max: memoryData.total,
      axisLabel: {
        formatter: '{value}GB'
      }
    },
    series: [
      {
        name: 'Used Memory',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: { focus: 'series' },
        data: memoryData.metrics.used,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Cached',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: { focus: 'series' },
        data: memoryData.metrics.cached,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Free',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: { focus: 'series' },
        data: memoryData.metrics.free,
        itemStyle: { color: '#94a3b8' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}