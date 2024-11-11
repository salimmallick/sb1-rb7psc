import ReactECharts from 'echarts-for-react';

const costData = {
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  services: {
    compute: [4500, 4800, 5200, 4900, 5300, 5000],
    database: [3000, 3200, 3500, 3300, 3400, 3100],
    storage: [2000, 2200, 2100, 2300, 2200, 2100],
    networking: [1500, 1600, 1700, 1600, 1800, 1700],
    other: [1000, 1100, 1200, 1100, 1300, 1200]
  }
};

export function CostAnalysisWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      },
      formatter: (params: any) => {
        let total = 0;
        let result = `${params[0].axisValue}<br/>`;
        params.forEach((param: any) => {
          total += param.value;
          result += `${param.seriesName}: $${param.value.toLocaleString()}<br/>`;
        });
        result += `<strong>Total: $${total.toLocaleString()}</strong>`;
        return result;
      }
    },
    legend: {
      data: ['Compute', 'Database', 'Storage', 'Networking', 'Other'],
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
      data: costData.months
    },
    yAxis: {
      type: 'value',
      name: 'Cost ($)',
      axisLabel: {
        formatter: '${value}'
      }
    },
    series: [
      {
        name: 'Compute',
        type: 'bar',
        stack: 'total',
        emphasis: { focus: 'series' },
        data: costData.services.compute,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Database',
        type: 'bar',
        stack: 'total',
        emphasis: { focus: 'series' },
        data: costData.services.database,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Storage',
        type: 'bar',
        stack: 'total',
        emphasis: { focus: 'series' },
        data: costData.services.storage,
        itemStyle: { color: '#f59e0b' }
      },
      {
        name: 'Networking',
        type: 'bar',
        stack: 'total',
        emphasis: { focus: 'series' },
        data: costData.services.networking,
        itemStyle: { color: '#ef4444' }
      },
      {
        name: 'Other',
        type: 'bar',
        stack: 'total',
        emphasis: { focus: 'series' },
        data: costData.services.other,
        itemStyle: { color: '#8b5cf6' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}