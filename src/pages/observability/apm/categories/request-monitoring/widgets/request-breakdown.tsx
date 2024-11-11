import ReactECharts from 'echarts-for-react';

const breakdownData = {
  timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  types: {
    GET: [1200, 1350, 1500, 1650, 1500, 1350],
    POST: [450, 500, 550, 600, 550, 500],
    PUT: [250, 280, 310, 340, 310, 280],
    DELETE: [100, 120, 140, 160, 140, 120]
  }
};

export function RequestBreakdownWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['GET', 'POST', 'PUT', 'DELETE'],
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
      data: breakdownData.timestamps
    },
    yAxis: {
      type: 'value',
      name: 'Requests/s'
    },
    series: [
      {
        name: 'GET',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: { focus: 'series' },
        data: breakdownData.types.GET,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'POST',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: { focus: 'series' },
        data: breakdownData.types.POST,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'PUT',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: { focus: 'series' },
        data: breakdownData.types.PUT,
        itemStyle: { color: '#f59e0b' }
      },
      {
        name: 'DELETE',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: { focus: 'series' },
        data: breakdownData.types.DELETE,
        itemStyle: { color: '#ef4444' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}