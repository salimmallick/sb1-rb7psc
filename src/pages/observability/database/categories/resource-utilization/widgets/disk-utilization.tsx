import ReactECharts from 'echarts-for-react';

const diskData = {
  volumes: [
    { name: '/data', total: 1000, used: 680, free: 320 },
    { name: '/index', total: 500, used: 350, free: 150 },
    { name: '/logs', total: 200, used: 120, free: 80 }
  ],
  iops: {
    timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
    read: [2500, 2800, 3200, 2900, 2600, 2500],
    write: [1500, 1800, 2200, 1900, 1600, 1500]
  }
};

export function DiskUtilizationWidget() {
  const spaceOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: (params: any) => {
        const volume = diskData.volumes[params[0].dataIndex];
        return `${volume.name}<br/>
                Used: ${volume.used}GB<br/>
                Free: ${volume.free}GB<br/>
                Total: ${volume.total}GB`;
      }
    },
    legend: {
      data: ['Used Space', 'Free Space'],
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
      data: diskData.volumes.map(v => v.name)
    },
    yAxis: {
      type: 'value',
      name: 'Space (GB)',
      axisLabel: {
        formatter: '{value}GB'
      }
    },
    series: [
      {
        name: 'Used Space',
        type: 'bar',
        stack: 'total',
        data: diskData.volumes.map(v => v.used),
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Free Space',
        type: 'bar',
        stack: 'total',
        data: diskData.volumes.map(v => v.free),
        itemStyle: { color: '#94a3b8' }
      }
    ]
  };

  const iopsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Read IOPS', 'Write IOPS'],
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
      boundaryGap: false,
      data: diskData.iops.timestamps
    },
    yAxis: {
      type: 'value',
      name: 'IOPS'
    },
    series: [
      {
        name: 'Read IOPS',
        type: 'line',
        data: diskData.iops.read,
        smooth: true,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Write IOPS',
        type: 'line',
        data: diskData.iops.write,
        smooth: true,
        itemStyle: { color: '#f59e0b' }
      }
    ]
  };

  return (
    <div className="space-y-6">
      <ReactECharts option={spaceOption} style={{ height: '200px' }} />
      <ReactECharts option={iopsOption} style={{ height: '200px' }} />
    </div>
  );
}