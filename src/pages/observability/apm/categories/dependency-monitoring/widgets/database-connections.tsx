import ReactECharts from 'echarts-for-react';

const dbData = {
  timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  databases: {
    PostgreSQL: {
      active: [45, 52, 58, 62, 55, 48],
      idle: [15, 18, 12, 8, 15, 22],
      maxConnections: 80
    },
    MongoDB: {
      active: [35, 42, 48, 52, 45, 38],
      idle: [25, 18, 12, 8, 15, 22],
      maxConnections: 100
    },
    Redis: {
      active: [25, 32, 38, 42, 35, 28],
      idle: [15, 18, 12, 8, 15, 22],
      maxConnections: 50
    }
  }
};

export function DatabaseConnectionsWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: [
        'PostgreSQL Active',
        'PostgreSQL Idle',
        'MongoDB Active',
        'MongoDB Idle',
        'Redis Active',
        'Redis Idle'
      ],
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
      data: dbData.timestamps
    },
    yAxis: {
      type: 'value',
      name: 'Connections'
    },
    series: [
      {
        name: 'PostgreSQL Active',
        type: 'line',
        stack: 'PostgreSQL',
        areaStyle: {},
        emphasis: { focus: 'series' },
        data: dbData.databases.PostgreSQL.active,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'PostgreSQL Idle',
        type: 'line',
        stack: 'PostgreSQL',
        areaStyle: {},
        emphasis: { focus: 'series' },
        data: dbData.databases.PostgreSQL.idle,
        itemStyle: { color: '#93c5fd' }
      },
      {
        name: 'MongoDB Active',
        type: 'line',
        stack: 'MongoDB',
        areaStyle: {},
        emphasis: { focus: 'series' },
        data: dbData.databases.MongoDB.active,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'MongoDB Idle',
        type: 'line',
        stack: 'MongoDB',
        areaStyle: {},
        emphasis: { focus: 'series' },
        data: dbData.databases.MongoDB.idle,
        itemStyle: { color: '#86efac' }
      },
      {
        name: 'Redis Active',
        type: 'line',
        stack: 'Redis',
        areaStyle: {},
        emphasis: { focus: 'series' },
        data: dbData.databases.Redis.active,
        itemStyle: { color: '#f59e0b' }
      },
      {
        name: 'Redis Idle',
        type: 'line',
        stack: 'Redis',
        areaStyle: {},
        emphasis: { focus: 'series' },
        data: dbData.databases.Redis.idle,
        itemStyle: { color: '#fcd34d' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '400px' }} />;
}