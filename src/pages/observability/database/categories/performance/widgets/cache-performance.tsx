import ReactECharts from 'echarts-for-react';

const cacheData = {
  timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  metrics: {
    hits: [920, 980, 950, 1050, 990, 960],
    misses: [80, 120, 100, 150, 110, 90],
    evictions: [20, 30, 25, 35, 28, 22],
    hitRatio: [92, 89, 90.5, 87.5, 90, 91.4]
  }
};

export function CachePerformanceWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Cache Hits', 'Cache Misses', 'Evictions', 'Hit Ratio'],
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
      data: cacheData.timestamps
    },
    yAxis: [
      {
        type: 'value',
        name: 'Count',
        position: 'left'
      },
      {
        type: 'value',
        name: 'Hit Ratio (%)',
        position: 'right',
        max: 100,
        axisLabel: {
          formatter: '{value}%'
        }
      }
    ],
    series: [
      {
        name: 'Cache Hits',
        type: 'bar',
        data: cacheData.metrics.hits,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Cache Misses',
        type: 'bar',
        data: cacheData.metrics.misses,
        itemStyle: { color: '#ef4444' }
      },
      {
        name: 'Evictions',
        type: 'bar',
        data: cacheData.metrics.evictions,
        itemStyle: { color: '#f59e0b' }
      },
      {
        name: 'Hit Ratio',
        type: 'line',
        yAxisIndex: 1,
        data: cacheData.metrics.hitRatio,
        smooth: true,
        itemStyle: { color: '#3b82f6' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '400px' }} />;
}