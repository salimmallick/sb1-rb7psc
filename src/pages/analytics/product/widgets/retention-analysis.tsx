import ReactECharts from 'echarts-for-react';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';

const mockRetentionData = {
  cohorts: {
    'Week 1': [100, 75, 65, 55, 50],
    'Week 2': [100, 78, 68, 58, 52],
    'Week 3': [100, 80, 70, 60, 55],
    'Week 4': [100, 82, 72, 62, 58]
  },
  periods: ['Day 1', 'Day 7', 'Day 14', 'Day 30', 'Day 60']
};

export function RetentionAnalysisWidget() {
  const [selectedCohort, setSelectedCohort] = useState('all');

  const retentionOption = {
    tooltip: {
      trigger: 'axis',
      formatter: function(params: any) {
        return params[0].name + '<br/>' +
          params[0].seriesName + ': ' + params[0].value + '%';
      }
    },
    legend: {
      data: Object.keys(mockRetentionData.cohorts)
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: mockRetentionData.periods
    },
    yAxis: {
      type: 'value',
      name: 'Retention Rate (%)',
      max: 100
    },
    series: Object.entries(mockRetentionData.cohorts).map(([cohort, data]) => ({
      name: cohort,
      type: 'line',
      data: data,
      smooth: true,
      areaStyle: {
        opacity: 0.1
      }
    }))
  };

  const heatmapData = Object.entries(mockRetentionData.cohorts).flatMap(([cohort, values], weekIndex) =>
    values.map((value, dayIndex) => [weekIndex, dayIndex, value])
  );

  const heatmapOption = {
    tooltip: {
      position: 'top',
      formatter: function(params: any) {
        const cohort = Object.keys(mockRetentionData.cohorts)[params.data[0]];
        const period = mockRetentionData.periods[params.data[1]];
        return `${cohort}, ${period}: ${params.data[2]}%`;
      }
    },
    grid: {
      height: '50%',
      top: '10%'
    },
    xAxis: {
      type: 'category',
      data: mockRetentionData.periods,
      splitArea: {
        show: true
      }
    },
    yAxis: {
      type: 'category',
      data: Object.keys(mockRetentionData.cohorts),
      splitArea: {
        show: true
      }
    },
    visualMap: {
      min: 0,
      max: 100,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: '15%'
    },
    series: [{
      name: 'Retention Rate',
      type: 'heatmap',
      data: heatmapData,
      label: {
        show: true,
        formatter: function(params: any) {
          return params.data[2] + '%';
        }
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Select
          value={selectedCohort}
          onValueChange={setSelectedCohort}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select cohort" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Cohorts</SelectItem>
            {Object.keys(mockRetentionData.cohorts).map(cohort => (
              <SelectItem key={cohort} value={cohort}>
                {cohort}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6">
        <Card className="p-4">
          <h3 className="text-sm font-semibold mb-4">Retention Curves</h3>
          <ReactECharts option={retentionOption} style={{ height: '300px' }} />
        </Card>

        <Card className="p-4">
          <h3 className="text-sm font-semibold mb-4">Retention Heatmap</h3>
          <ReactECharts option={heatmapOption} style={{ height: '300px' }} />
        </Card>
      </div>
    </div>
  );
}