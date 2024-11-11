import ReactECharts from 'echarts-for-react';

const sourceData = {
  timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  sources: {
    'Web Server': [450, 480, 460, 500, 480, 470],
    'Application Server': [380, 400, 390, 420, 400, 390],
    'Database': [250, 270, 260, 280, 270, 260],
    'Cache': [180, 190, 185, 200, 190, 185],
    'Auth Service': [150, 160, 155, 170, 160, 155]
  }
};

export function LogSourceWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: Object.keys(sourceData.sources),
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
      data: sourceData.timestamps
    },
    yAxis: {
      type: 'value',
      name: 'Log Count'
    },
    series: Object.entries(sourceData.sources).map(([name, data], index) => ({
      name,
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: { focus: 'series' },
      data,
      itemStyle: {
        color: [
          '#3b82f6',
          '#22c55e',
          '#f59e0b',
          '#ef4444',
          '#8b5cf6'
        ][index]
      }
    }))
  };

  return <ReactECharts option={option} style={{ height: '400px' }} />;
}