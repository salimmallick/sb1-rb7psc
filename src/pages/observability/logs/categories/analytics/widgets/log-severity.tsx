import ReactECharts from 'echarts-for-react';

const severityData = {
  severities: ['Critical', 'Error', 'Warning', 'Info', 'Debug'],
  values: [
    { value: 235, name: 'Critical' },
    { value: 580, name: 'Error' },
    { value: 1200, name: 'Warning' },
    { value: 2800, name: 'Info' },
    { value: 1600, name: 'Debug' }
  ]
};

export function LogSeverityWidget() {
  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: severityData.severities
    },
    series: [
      {
        name: 'Severity',
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
        data: severityData.values.map((item, index) => ({
          ...item,
          itemStyle: {
            color: [
              '#ef4444',  // Critical
              '#f59e0b',  // Error
              '#fbbf24',  // Warning
              '#22c55e',  // Info
              '#3b82f6'   // Debug
            ][index]
          }
        }))
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}