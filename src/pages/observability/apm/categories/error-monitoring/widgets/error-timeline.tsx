import ReactECharts from 'echarts-for-react';

const timelineData = {
  timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  events: [
    {
      name: 'Database Connection Error',
      value: [0, 'Database', 'Critical', 'Connection timeout after 30s'],
      itemStyle: { color: '#ef4444' }
    },
    {
      name: 'API Rate Limit Exceeded',
      value: [1, 'API Gateway', 'Warning', '429 Too Many Requests'],
      itemStyle: { color: '#f59e0b' }
    },
    {
      name: 'Authentication Failed',
      value: [2, 'Auth Service', 'Warning', 'Invalid credentials'],
      itemStyle: { color: '#f59e0b' }
    },
    {
      name: 'Payment Processing Failed',
      value: [3, 'Payment Service', 'Critical', 'External service unavailable'],
      itemStyle: { color: '#ef4444' }
    },
    {
      name: 'Cache Miss',
      value: [4, 'Cache Service', 'Info', 'Cache invalidation required'],
      itemStyle: { color: '#22c55e' }
    }
  ]
};

export function ErrorTimelineWidget() {
  const option = {
    tooltip: {
      formatter: function(params: any) {
        const value = params.data.value;
        return `${params.data.name}<br/>
                Service: ${value[1]}<br/>
                Severity: ${value[2]}<br/>
                Message: ${value[3]}`;
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: timelineData.timestamps
    },
    yAxis: {
      type: 'category',
      data: ['Database', 'API Gateway', 'Auth Service', 'Payment Service', 'Cache Service']
    },
    series: [
      {
        type: 'scatter',
        symbolSize: 20,
        data: timelineData.events.map(event => ({
          name: event.name,
          value: event.value,
          itemStyle: event.itemStyle
        }))
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '400px' }} />;
}