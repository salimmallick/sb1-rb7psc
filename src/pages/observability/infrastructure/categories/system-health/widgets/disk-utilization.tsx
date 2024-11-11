import ReactECharts from 'echarts-for-react';

const diskData = {
  volumes: [
    { name: '/', total: 500, used: 350, free: 150 },
    { name: '/home', total: 1000, used: 600, free: 400 },
    { name: '/var', total: 200, used: 160, free: 40 }
  ],
  iops: {
    timestamps: ['00:00', '00:05', '00:10', '00:15', '00:20'],
    read: [250, 280, 260, 290, 270],
    write: [150, 180, 160, 190, 170]
  }
};

export function DiskUtilizationWidget() {
  const utilizationOption = {
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
      name: 'Storage (GB)',
      axisLabel: {
        formatter: '{value}GB'
      }
    },
    series: [
      {
        name: 'Used',
        type: 'bar',
        stack: 'total',
        data: diskData.volumes.map(v => v.used),
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Free',
        type: 'bar',
        stack: 'total',
        data: diskData.volumes.map(v => v.free),
        itemStyle: { color: '#94a3b8' }
      }
    ]
  };

  return <ReactECharts option={utilizationOption} style={{ height: '300px' }} />;
}