import { Card } from '@/components/ui/card';
import ReactECharts from 'echarts-for-react';

const retentionData = {
  cohorts: {
    'Week 1': [100, 75, 65, 55, 50],
    'Week 2': [100, 78, 68, 58, 52],
    'Week 3': [100, 80, 70, 60, 55],
    'Week 4': [100, 82, 72, 62, 58]
  },
  periods: ['Day 1', 'Day 7', 'Day 14', 'Day 30', 'Day 60']
};

export function RetentionAnalysisWidget() {
  const retentionOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line'
      }
    },
    legend: {
      data: Object.keys(retentionData.cohorts),
      bottom: 0
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '10%',
      top: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: retentionData.periods,
      boundaryGap: false
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value}%'
      },
      max: 100
    },
    series: Object.entries(retentionData.cohorts).map(([cohort, data], index) => ({
      name: cohort,
      type: 'line',
      data: data,
      smooth: true,
      symbol: 'circle',
      symbolSize: 8,
      itemStyle: {
        color: index === 0 ? '#3b82f6' : 
              index === 1 ? '#22c55e' :
              index === 2 ? '#f59e0b' : '#ef4444'
      }
    }))
  };

  const heatmapData = Object.entries(retentionData.cohorts).flatMap(([cohort, values], weekIndex) =>
    values.map((value, dayIndex) => [weekIndex, dayIndex, value])
  );

  const heatmapOption = {
    tooltip: {
      position: 'top',
      formatter: function(params: any) {
        const cohort = Object.keys(retentionData.cohorts)[params.data[0]];
        const period = retentionData.periods[params.data[1]];
        return `${cohort}, ${period}: ${params.data[2]}%`;
      }
    },
    grid: {
      height: '60%',
      top: '10%',
      bottom: '15%'
    },
    xAxis: {
      type: 'category',
      data: retentionData.periods,
      splitArea: {
        show: true
      }
    },
    yAxis: {
      type: 'category',
      data: Object.keys(retentionData.cohorts),
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
      bottom: '0%',
      inRange: {
        color: ['#f3f4f6', '#3b82f6']
      }
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
    <div className="grid gap-6 h-full">
      <div className="h-[50%]">
        <ReactECharts option={retentionOption} style={{ height: '100%' }} />
      </div>
      <div className="h-[50%]">
        <ReactECharts option={heatmapOption} style={{ height: '100%' }} />
      </div>
    </div>
  );
}