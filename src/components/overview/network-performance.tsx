import ReactECharts from 'echarts-for-react';

interface NetworkPerformanceProps {
  hideTitle?: boolean;
}

export function NetworkPerformance({ hideTitle = false }: NetworkPerformanceProps) {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Latency', 'Throughput', 'Packet Loss']
    },
    xAxis: {
      type: 'category',
      data: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00']
    },
    yAxis: [
      {
        type: 'value',
        name: 'ms/MB/s',
        position: 'left'
      },
      {
        type: 'value',
        name: 'Loss (%)',
        position: 'right'
      }
    ],
    series: [
      {
        name: 'Latency',
        type: 'line',
        data: [82, 80, 85, 85, 85, 82],
        smooth: true
      },
      {
        name: 'Throughput',
        type: 'line',
        data: [450, 470, 440, 430, 450, 460],
        smooth: true
      },
      {
        name: 'Packet Loss',
        type: 'line',
        yAxisIndex: 1,
        data: [0.2, 0.1, 0.3, 0.4, 0.2, 0.2],
        smooth: true
      }
    ]
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <div className="text-2xl font-bold">84ms</div>
          <div className="text-sm text-muted-foreground">Latency</div>
          <div className="text-xs text-muted-foreground">-2ms from last hour</div>
        </div>
        <div>
          <div className="text-2xl font-bold">460 MB/s</div>
          <div className="text-sm text-muted-foreground">Throughput</div>
          <div className="text-xs text-muted-foreground">+20 MB/s from last hour</div>
        </div>
        <div>
          <div className="text-2xl font-bold">0.2%</div>
          <div className="text-sm text-muted-foreground">Packet Loss</div>
          <div className="text-xs text-muted-foreground">No change</div>
        </div>
      </div>
      <ReactECharts option={option} style={{ height: '300px' }} />
    </div>
  );
}