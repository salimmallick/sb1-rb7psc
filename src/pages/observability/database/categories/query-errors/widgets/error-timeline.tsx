import ReactECharts from 'echarts-for-react';

const timelineData = {
  timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  events: [
    {
      name: 'Constraint Violation',
      value: [0, 'INSERT', 'Critical', 'Foreign key constraint failed'],
      itemStyle: { color: '#ef4444' }
    },
    {
      name: 'Syntax Error',
      value: [1, 'SELECT', 'Warning', 'Invalid column name'],
      itemStyle: { color: '#f59e0b' }
    },
    {
      name: 'Lock Timeout',
      value: [2, 'UPDATE', 'Warning', 'Lock wait timeout'],
      itemStyle: { color: '#f59e0b' }
    },
    {
      name: 'Query Timeout',
      value: [3, 'JOIN', 'Critical', 'Query execution timeout'],
      itemStyle: { color: '#ef4444' }
    },
    {
      name: 'Deadlock',
      value: [4, 'Transaction', 'Critical', 'Deadlock detected'],
      itemStyle: { color: '#ef4444' }
    }
  ]
};

export function ErrorTimelineWidget() {
  const option = {
    tooltip: {
      formatter: function(params: any) {
        const value = params.data.value;
        return `${params.data.name}<br/>
                Operation: ${value[1]}<br/>
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
      data: ['INSERT', 'SELECT', 'UPDATE', 'JOIN', 'Transaction']
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