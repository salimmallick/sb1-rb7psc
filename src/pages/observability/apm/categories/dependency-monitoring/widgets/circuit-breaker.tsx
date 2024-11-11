import ReactECharts from 'echarts-for-react';

const circuitData = {
  services: [
    'Auth Service',
    'User Service',
    'Product Service',
    'Payment Service',
    'Email Service'
  ],
  states: {
    closed: [85, 90, 88, 82, 87],
    halfOpen: [10, 8, 9, 12, 10],
    open: [5, 2, 3, 6, 3]
  }
};

export function CircuitBreakerWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['Closed', 'Half-Open', 'Open'],
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
      data: circuitData.services
    },
    yAxis: {
      type: 'value',
      name: 'Percentage (%)',
      max: 100
    },
    series: [
      {
        name: 'Closed',
        type: 'bar',
        stack: 'total',
        emphasis: { focus: 'series' },
        data: circuitData.states.closed,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Half-Open',
        type: 'bar',
        stack: 'total',
        emphasis: { focus: 'series' },
        data: circuitData.states.halfOpen,
        itemStyle: { color: '#f59e0b' }
      },
      {
        name: 'Open',
        type: 'bar',
        stack: 'total',
        emphasis: { focus: 'series' },
        data: circuitData.states.open,
        itemStyle: { color: '#ef4444' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}