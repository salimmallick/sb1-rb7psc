import ReactECharts from 'echarts-for-react';

const uptimeData = {
  devices: [
    { name: 'Router-01', uptime: 99.99, downtime: 0.01 },
    { name: 'Switch-Core', uptime: 99.95, downtime: 0.05 },
    { name: 'Firewall-Main', uptime: 99.98, downtime: 0.02 },
    { name: 'Load-Balancer', uptime: 99.97, downtime: 0.03 },
    { name: 'Switch-Edge', uptime: 99.96, downtime: 0.04 }
  ]
};

export function DeviceUptimeWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['Uptime', 'Downtime'],
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
      data: uptimeData.devices.map(d => d.name)
    },
    yAxis: {
      type: 'value',
      name: 'Percentage (%)',
      max: 100,
      axisLabel: {
        formatter: '{value}%'
      }
    },
    series: [
      {
        name: 'Uptime',
        type: 'bar',
        stack: 'total',
        data: uptimeData.devices.map(d => d.uptime),
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Downtime',
        type: 'bar',
        stack: 'total',
        data: uptimeData.devices.map(d => d.downtime),
        itemStyle: { color: '#ef4444' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}