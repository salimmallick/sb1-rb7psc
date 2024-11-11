import ReactECharts from 'echarts-for-react';

interface VideoPerformanceProps {
  hideTitle?: boolean;
}

export function VideoPerformance({ hideTitle = false }: VideoPerformanceProps) {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Buffer Time', 'Quality Score', 'Error Rate']
    },
    xAxis: {
      type: 'category',
      data: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00']
    },
    yAxis: [
      {
        type: 'value',
        name: 'Seconds',
        position: 'left'
      },
      {
        type: 'value',
        name: 'Score/Rate',
        position: 'right'
      }
    ],
    series: [
      {
        name: 'Buffer Time',
        type: 'bar',
        data: [0.8, 0.9, 1.2, 0.7, 0.6, 0.8]
      },
      {
        name: 'Quality Score',
        type: 'line',
        yAxisIndex: 1,
        data: [95, 94, 95, 96, 95, 95],
        smooth: true
      },
      {
        name: 'Error Rate',
        type: 'line',
        yAxisIndex: 1,
        data: [0.5, 0.6, 0.7, 0.4, 0.3, 0.5],
        smooth: true
      }
    ]
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <div className="text-2xl font-bold">0.8s</div>
          <div className="text-sm text-muted-foreground">Buffer Time</div>
          <div className="text-xs text-muted-foreground">+0.1s from last hour</div>
        </div>
        <div>
          <div className="text-2xl font-bold">95</div>
          <div className="text-sm text-muted-foreground">Quality Score</div>
          <div className="text-xs text-muted-foreground">-1 from last hour</div>
        </div>
        <div>
          <div className="text-2xl font-bold">0.5%</div>
          <div className="text-sm text-muted-foreground">Error Rate</div>
          <div className="text-xs text-muted-foreground">No change</div>
        </div>
      </div>
      <ReactECharts option={option} style={{ height: '300px' }} />
    </div>
  );
}