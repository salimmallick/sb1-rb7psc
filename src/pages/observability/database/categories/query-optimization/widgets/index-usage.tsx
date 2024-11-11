import ReactECharts from 'echarts-for-react';

const indexData = {
  indexes: [
    'users_email_idx',
    'orders_user_id_idx',
    'products_category_id_idx',
    'activities_user_id_idx',
    'inventory_product_id_idx'
  ],
  metrics: {
    scans: [1200, 980, 850, 1500, 650],
    rows: [15000, 12000, 9500, 18000, 7500],
    size: [24, 18, 15, 28, 12]
  }
};

export function IndexUsageWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Index Scans', 'Rows Read', 'Size (MB)'],
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
      data: indexData.indexes,
      axisLabel: {
        interval: 0,
        rotate: 30
      }
    },
    yAxis: [
      {
        type: 'value',
        name: 'Count',
        position: 'left'
      },
      {
        type: 'value',
        name: 'Size (MB)',
        position: 'right'
      }
    ],
    series: [
      {
        name: 'Index Scans',
        type: 'bar',
        data: indexData.metrics.scans,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Rows Read',
        type: 'bar',
        data: indexData.metrics.rows,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Size (MB)',
        type: 'line',
        yAxisIndex: 1,
        data: indexData.metrics.size,
        itemStyle: { color: '#f59e0b' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}