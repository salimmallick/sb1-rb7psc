import ReactECharts from 'echarts-for-react';

const transactionData = {
  timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  metrics: {
    committed: [950, 1020, 980, 1100, 1050, 990],
    rolled_back: [50, 80, 70, 100, 80, 60],
    active: [120, 150, 130, 180, 140, 130]
  }
};

export function TransactionAnalysisWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Committed', 'Rolled Back', 'Active'],
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
      data: transactionData.timestamps
    },
    yAxis: {
      type: 'value',
      name: 'Transactions'
    },
    series: [
      {
        name: 'Committed',
        type: 'line',
        data: transactionData.metrics.committed,
        smooth: true,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Rolled Back',
        type: 'line',
        data: transactionData.metrics.rolled_back,
        smooth: true,
        itemStyle: { color: '#ef4444' }
      },
      {
        name: 'Active',
        type: 'line',
        data: transactionData.metrics.active,
        smooth: true,
        itemStyle: { color: '#3b82f6' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}