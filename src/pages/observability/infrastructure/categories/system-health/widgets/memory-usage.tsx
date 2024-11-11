import ReactECharts from 'echarts-for-react';

const memoryData = {
  timestamps: ['00:00', '00:05', '00:10', '00:15', '00:20'],
  metrics: {
    total: 32,
    used: [24, 26, 25, 27, 25],
    cached: [4, 4, 4, 4, 4],
    free: [4, 2, 3, 1, 3]
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
        const used = params[0].data;
        const cached = params[1].data;
        const free = params[2].data;
        return `${time}<br/>
                Used: ${used}GB<br/>
                Cached: ${cached}GB<br/>
                Free: ${free}GB<br/>
                Total: ${memoryData.metrics.total}GB`;
      }
    },
    legend: {
      data: ['Used', 'Cached', 'Free'],
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
      data: memoryData.timestamps,
      boundaryGap: false
    },
    yAxis: {
      type: 'value',
      name: 'Memory (GB)',
      max: memoryData.metrics.total,
      axisLabel: {
        formatter: '{value}GB'
      }
    },
    series: [
      {
        name: 'Used',
        type: 'line',
        stack: 'Total',
        data: memoryData.metrics.used,
        areaStyle: {},
        emphasis: { focus: 'series' },
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Cached',
        type: 'line',
        stack: 'Total',
        data: memoryData.metrics.cached,
        areaStyle: {},
        emphasis: { focus: 'series' },
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Free',
        type: 'line',
        stack: 'Total',
        data: memoryData.metrics.free,
        areaStyle: {},
        emphasis: { focus: 'series' },
        itemStyle: { color: '#94a3b8' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}