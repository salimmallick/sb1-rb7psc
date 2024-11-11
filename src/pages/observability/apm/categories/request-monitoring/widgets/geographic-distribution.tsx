import ReactECharts from 'echarts-for-react';

const geoData = {
  regions: ['North America', 'Europe', 'Asia Pacific', 'South America', 'Others'],
  metrics: {
    requests: [45, 30, 15, 8, 2],
    responseTime: [120, 150, 180, 160, 140]
  }
};

export function GeographicDistributionWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Request Distribution (%)', 'Avg Response Time (ms)'],
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
      data: geoData.regions
    },
    yAxis: [
      {
        type: 'value',
        name: 'Requests',
        position: 'left',
        axisLabel: {
          formatter: '{value}%'
        }
      },
      {
        type: 'value',
        name: 'Response Time',
        position: 'right',
        axisLabel: {
          formatter: '{value} ms'
        }
      }
    ],
    series: [
      {
        name: 'Request Distribution (%)',
        type: 'bar',
        data: geoData.metrics.requests,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Avg Response Time (ms)',
        type: 'line',
        yAxisIndex: 1,
        data: geoData.metrics.responseTime,
        itemStyle: { color: '#f59e0b' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}