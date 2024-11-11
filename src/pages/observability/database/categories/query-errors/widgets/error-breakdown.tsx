import ReactECharts from 'echarts-for-react';

const breakdownData = {
  types: [
    { value: 35, name: 'Syntax Errors' },
    { value: 25, name: 'Constraint Violations' },
    { value: 20, name: 'Timeouts' },
    { value: 12, name: 'Lock Conflicts' },
    { value: 8, name: 'Other Errors' }
  ]
};

export function ErrorBreakdownWidget() {
  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c}% ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: breakdownData.types.map(type => type.name)
    },
    series: [
      {
        name: 'Error Types',
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
        data: breakdownData.types.map((type, index) => ({
          ...type,
          itemStyle: {
            color: [
              '#ef4444',
              '#f59e0b',
              '#3b82f6',
              '#22c55e',
              '#8b5cf6'
            ][index]
          }
        }))
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}