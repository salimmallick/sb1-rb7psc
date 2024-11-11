import ReactECharts from 'echarts-for-react';

const tableData = {
  tables: ['users', 'orders', 'products', 'categories', 'inventory'],
  metrics: {
    rows: [50000, 120000, 35000, 1500, 45000],
    scans: [2500, 3800, 1800, 950, 2200],
    avgRowSize: [1.2, 2.5, 1.8, 0.8, 1.5]
  }
};

export function TableStatisticsWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Total Rows', 'Table Scans', 'Avg Row Size (KB)'],
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
      data: tableData.tables
    },
    yAxis: [
      {
        type: 'value',
        name: 'Count',
        position: 'left'
      },
      {
        type: 'value',
        name: 'Size (KB)',
        position: 'right'
      }
    ],
    series: [
      {
        name: 'Total Rows',
        type: 'bar',
        data: tableData.metrics.rows,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Table Scans',
        type: 'bar',
        data: tableData.metrics.scans,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Avg Row Size (KB)',
        type: 'line',
        yAxisIndex: 1,
        data: tableData.metrics.avgRowSize,
        itemStyle: { color: '#f59e0b' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}