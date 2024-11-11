import ReactECharts from 'echarts-for-react';

interface IncidentsAlertsProps {
  hideTitle?: boolean;
}

export function IncidentsAlerts({ hideTitle = false }: IncidentsAlertsProps) {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['Critical', 'Warning', 'Info']
    },
    xAxis: {
      type: 'category',
      data: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Critical',
        type: 'bar',
        stack: 'total',
        data: [1, 2, 1, 1, 1, 1],
        itemStyle: { color: '#ef4444' }
      },
      {
        name: 'Warning',
        type: 'bar',
        stack: 'total',
        data: [3, 4, 5, 2, 2, 3],
        itemStyle: { color: '#f59e0b' }
      },
      {
        name: 'Info',
        type: 'bar',
        stack: 'total',
        data: [8, 7, 9, 6, 8, 7],
        itemStyle: { color: '#3b82f6' }
      }
    ]
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <div className="text-2xl font-bold text-red-500">1</div>
          <div className="text-sm text-muted-foreground">Critical</div>
          <div className="text-xs text-muted-foreground">No change</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-yellow-500">3</div>
          <div className="text-sm text-muted-foreground">Warning</div>
          <div className="text-xs text-muted-foreground">+1 from last hour</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-blue-500">7</div>
          <div className="text-sm text-muted-foreground">Info</div>
          <div className="text-xs text-muted-foreground">-1 from last hour</div>
        </div>
      </div>
      <ReactECharts option={option} style={{ height: '300px' }} />
    </div>
  );
}