import ReactECharts from 'echarts-for-react';

const patternData = {
  timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  patterns: [
    {
      name: 'Daily Peak',
      data: [120, 180, 240, 280, 220, 160]
    },
    {
      name: 'Resource Spike',
      data: [50, 45, 120, 40, 45, 50]
    },
    {
      name: 'Error Burst',
      data: [10, 8, 35, 12, 9, 11]
    }
  ]
};

export function PatternDetectionWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: patternData.patterns.map(p => p.name),
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
      data: patternData.timestamps
    },
    yAxis: {
      type: 'value',
      name: 'Intensity'
    },
    series: patternData.patterns.map((pattern, index) => ({
      name: pattern.name,
      type: 'line',
      data: pattern.data,
      smooth: true,
      itemStyle: {
        color: ['#3b82f6', '#22c55e', '#ef4444'][index]
      }
    }))
  };

  return <ReactECharts option={option} style={{ height: '400px' }} />;
}