import ReactECharts from 'echarts-for-react';

interface ExecutiveSummaryProps {
  hideTitle?: boolean;
}

export function ExecutiveSummary({ hideTitle = false }: ExecutiveSummaryProps) {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Users', 'Revenue', 'Performance']
    },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },
    yAxis: [
      {
        type: 'value',
        name: 'Count',
        position: 'left'
      },
      {
        type: 'value',
        name: 'Score',
        position: 'right'
      }
    ],
    series: [
      {
        name: 'Users',
        type: 'line',
        data: [1200, 1320, 1500, 1800, 2100, 2400],
        smooth: true
      },
      {
        name: 'Revenue',
        type: 'line',
        data: [2500, 2700, 3000, 3300, 3600, 4000],
        smooth: true
      },
      {
        name: 'Performance',
        type: 'line',
        yAxisIndex: 1,
        data: [95, 96, 94, 95, 97, 96],
        smooth: true
      }
    ]
  };

  return (
    <div className="space-y-4">
      {!hideTitle && <h2 className="text-lg font-semibold">Executive Summary</h2>}
      <ReactECharts option={option} style={{ height: '300px' }} />
    </div>
  );
}