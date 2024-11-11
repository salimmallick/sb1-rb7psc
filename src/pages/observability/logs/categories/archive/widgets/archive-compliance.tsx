import ReactECharts from 'echarts-for-react';

const complianceData = {
  categories: ['GDPR', 'HIPAA', 'SOX', 'PCI DSS', 'ISO 27001'],
  metrics: {
    compliant: [98, 100, 95, 100, 97],
    violations: [2, 0, 5, 0, 3],
    checks: [150, 120, 90, 110, 130]
  }
};

export function ArchiveComplianceWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['Compliance Rate', 'Violations', 'Compliance Checks'],
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
      data: complianceData.categories
    },
    yAxis: [
      {
        type: 'value',
        name: 'Percentage',
        position: 'left',
        max: 100,
        axisLabel: {
          formatter: '{value}%'
        }
      },
      {
        type: 'value',
        name: 'Count',
        position: 'right'
      }
    ],
    series: [
      {
        name: 'Compliance Rate',
        type: 'bar',
        data: complianceData.metrics.compliant,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Violations',
        type: 'bar',
        data: complianceData.metrics.violations,
        itemStyle: { color: '#ef4444' }
      },
      {
        name: 'Compliance Checks',
        type: 'line',
        yAxisIndex: 1,
        data: complianceData.metrics.checks,
        itemStyle: { color: '#3b82f6' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}