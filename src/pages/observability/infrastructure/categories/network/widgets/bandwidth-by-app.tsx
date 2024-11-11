import ReactECharts from 'echarts-for-react';

const bandwidthData = {
  applications: [
    { name: 'Web Servers', inbound: 450, outbound: 380 },
    { name: 'Database', inbound: 280, outbound: 220 },
    { name: 'File Transfer', inbound: 620, outbound: 580 },
    { name: 'Email', inbound: 180, outbound: 160 },
    { name: 'VoIP', inbound: 320, outbound: 310 }
  ]
};

export function BandwidthByAppWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['Inbound Traffic', 'Outbound Traffic'],
      bottom: 0
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '15%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      name: 'Bandwidth (Mbps)',
      axisLabel: {
        formatter: '{value} Mbps'
      }
    },
    yAxis: {
      type: 'category',
      data: bandwidthData.applications.map(app => app.name)
    },
    series: [
      {
        name: 'Inbound Traffic',
        type: 'bar',
        data: bandwidthData.applications.map(app => app.inbound),
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Outbound Traffic',
        type: 'bar',
        data: bandwidthData.applications.map(app => app.outbound),
        itemStyle: { color: '#22c55e' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '400px' }} />;
}