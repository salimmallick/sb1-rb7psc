import ReactECharts from 'echarts-for-react';

const instanceData = {
  regions: ['US East', 'US West', 'EU West', 'Asia Pacific', 'South America'],
  status: {
    running: [120, 85, 95, 75, 45],
    stopped: [5, 3, 4, 3, 2],
    failed: [2, 1, 1, 1, 1]
  }
};

export function InstanceHealthWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['Running', 'Stopped', 'Failed'],
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
      data: instanceData.regions
    },
    yAxis: {
      type: 'value',
      name: 'Instance Count'
    },
    series: [
      {
        name: 'Running',
        type: 'bar',
        data: instanceData.status.running,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Stopped',
        type: 'bar',
        data: instanceData.status.stopped,
        itemStyle: { color: '#f59e0b' }
      },
      {
        name: 'Failed',
        type: 'bar',
        data: instanceData.status.failed,
        itemStyle: { color: '#ef4444' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}