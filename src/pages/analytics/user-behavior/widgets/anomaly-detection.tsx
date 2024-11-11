import { Card } from '@/components/ui/card';
import ReactECharts from 'echarts-for-react';

const anomalyData = {
  timeline: Array.from({ length: 24 }, (_, i) => ({
    time: `${i}:00`,
    normal: Math.floor(Math.random() * 500) + 1000,
    anomaly: Math.random() > 0.8 ? Math.floor(Math.random() * 300) + 1500 : null
  })),
  categories: [
    { name: 'Login Attempts', anomalies: 12, severity: 'high' },
    { name: 'API Requests', anomalies: 8, severity: 'medium' },
    { name: 'Session Duration', anomalies: 15, severity: 'low' },
    { name: 'Feature Usage', anomalies: 5, severity: 'high' }
  ]
};

export function AnomalyDetectionWidget() {
  const timelineOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Normal Activity', 'Anomalies']
    },
    xAxis: {
      type: 'category',
      data: anomalyData.timeline.map(t => t.time)
    },
    yAxis: {
      type: 'value',
      name: 'Activity Level'
    },
    series: [
      {
        name: 'Normal Activity',
        type: 'line',
        data: anomalyData.timeline.map(t => t.normal),
        smooth: true,
        itemStyle: { color: '#3b82f6' },
        areaStyle: { opacity: 0.2 }
      },
      {
        name: 'Anomalies',
        type: 'scatter',
        data: anomalyData.timeline.map((t, i) => 
          t.anomaly ? [i, t.anomaly] : null
        ).filter(Boolean),
        itemStyle: { color: '#ef4444' },
        symbolSize: 20
      }
    ]
  };

  const categoryAnalysisOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    xAxis: {
      type: 'category',
      data: anomalyData.categories.map(c => c.name)
    },
    yAxis: {
      type: 'value',
      name: 'Anomaly Count'
    },
    series: [
      {
        type: 'bar',
        data: anomalyData.categories.map(c => ({
          value: c.anomalies,
          itemStyle: {
            color: c.severity === 'high' ? '#ef4444' :
                  c.severity === 'medium' ? '#f59e0b' : '#22c55e'
          }
        })),
        label: {
          show: true,
          position: 'top'
        }
      }
    ]
  };

  return (
    <div className="grid grid-cols-2 gap-6">
      <Card className="p-6">
        <h3 className="text-sm font-semibold mb-4">Anomaly Timeline</h3>
        <ReactECharts option={timelineOption} style={{ height: '300px' }} />
      </Card>

      <Card className="p-6">
        <h3 className="text-sm font-semibold mb-4">Anomalies by Category</h3>
        <ReactECharts option={categoryAnalysisOption} style={{ height: '300px' }} />
      </Card>
    </div>
  );
}