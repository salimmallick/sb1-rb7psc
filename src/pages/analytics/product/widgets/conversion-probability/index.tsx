import { Card } from '@/components/ui/card';
import ReactECharts from 'echarts-for-react';

const conversionData = {
  stages: ['Awareness', 'Interest', 'Consideration', 'Intent', 'Evaluation', 'Purchase'],
  probabilities: [100, 75, 50, 35, 25, 15],
  dropoff: [25, 25, 15, 10, 10]
};

export function ConversionProbabilityWidget() {
  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c}%'
    },
    series: [
      {
        name: 'Funnel',
        type: 'funnel',
        left: '10%',
        top: 60,
        bottom: 60,
        width: '80%',
        min: 0,
        max: 100,
        minSize: '0%',
        maxSize: '100%',
        sort: 'descending',
        gap: 2,
        label: {
          show: true,
          position: 'inside',
          formatter: '{b}\n{c}%'
        },
        labelLine: {
          length: 10,
          lineStyle: {
            width: 1,
            type: 'solid'
          }
        },
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 1
        },
        emphasis: {
          label: {
            fontSize: 20
          }
        },
        data: conversionData.stages.map((stage, index) => ({
          value: conversionData.probabilities[index],
          name: stage
        }))
      }
    ]
  };

  return (
    <Card className="p-6">
      <ReactECharts option={option} style={{ height: '300px' }} />
    </Card>
  );
}