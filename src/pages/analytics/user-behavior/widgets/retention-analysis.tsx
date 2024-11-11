import { Card } from '@/components/ui/card';
import ReactECharts from 'echarts-for-react';

const retentionData = {
  cohorts: {
    'Week 1': [100, 75, 65, 55, 50],
    'Week 2': [100, 78, 68, 58, 52],
    'Week 3': [100, 80, 70, 60, 55],
    'Week 4': [100, 82, 72, 62, 58]
  },
  periods: ['Day 1', 'Day 7', 'Day 14', 'Day 30', 'Day 60'],
  churnRisk: [
    { segment: 'High Risk', value: 15, trend: 'increasing' },
    { segment: 'Medium Risk', value: 25, trend: 'stable' },
    { segment: 'Low Risk', value: 60, trend: 'decreasing' }
  ]
};

export function RetentionAnalysisWidget() {
  const retentionOption = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: Object.keys(retentionData.cohorts)
    },
    xAxis: {
      type: 'category',
      data: retentionData.periods
    },
    yAxis: {
      type: 'value',
      name: 'Retention Rate (%)',
      max: 100
    },
    series: Object.entries(retentionData.cohorts).map(([cohort, data]) => ({
      name: cohort,
      type: 'line',
      data: data,
      smooth: true
    }))
  };

  const churnRiskOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c}%'
    },
    series: [
      {
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: true,
          formatter: '{b}: {c}%'
        },
        data: retentionData.churnRisk.map(item => ({
          name: item.segment,
          value: item.value,
          itemStyle: {
            color: item.segment === 'High Risk' ? '#ef4444' :
                  item.segment === 'Medium Risk' ? '#f59e0b' : '#22c55e'
          }
        }))
      }
    ]
  };

  return (
    <div className="grid grid-cols-2 gap-6">
      <Card className="p-6">
        <h3 className="text-sm font-semibold mb-4">Cohort Retention</h3>
        <ReactECharts option={retentionOption} style={{ height: '300px' }} />
      </Card>

      <Card className="p-6">
        <h3 className="text-sm font-semibold mb-4">Churn Risk Distribution</h3>
        <ReactECharts option={churnRiskOption} style={{ height: '300px' }} />
      </Card>
    </div>
  );
}