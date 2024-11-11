import ReactECharts from 'echarts-for-react';

const statusData = {
  codes: ['2xx', '3xx', '4xx', '5xx'],
  values: [85, 8, 5, 2],
  details: {
    '2xx': [
      { value: 75, name: '200 OK' },
      { value: 10, name: '201 Created' }
    ],
    '3xx': [
      { value: 6, name: '301 Moved' },
      { value: 2, name: '304 Not Modified' }
    ],
    '4xx': [
      { value: 3, name: '404 Not Found' },
      { value: 2, name: '401 Unauthorized' }
    ],
    '5xx': [
      { value: 1.5, name: '500 Server Error' },
      { value: 0.5, name: '503 Service Unavailable' }
    ]
  }
};

export function StatusCodesWidget() {
  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c}% ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: statusData.codes
    },
    series: [
      {
        name: 'Status Codes',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { 
            value: statusData.values[0], 
            name: '2xx',
            itemStyle: { color: '#22c55e' }
          },
          { 
            value: statusData.values[1], 
            name: '3xx',
            itemStyle: { color: '#3b82f6' }
          },
          { 
            value: statusData.values[2], 
            name: '4xx',
            itemStyle: { color: '#f59e0b' }
          },
          { 
            value: statusData.values[3], 
            name: '5xx',
            itemStyle: { color: '#ef4444' }
          }
        ]
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}