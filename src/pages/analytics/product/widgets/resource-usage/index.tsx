import { Card } from '@/components/ui/card';
import ReactECharts from 'echarts-for-react';

const resourceData = {
  timestamps: ['00:00', '00:05', '00:10', '00:15', '00:20'],
  metrics: {
    cpuUsage: [45, 48, 42, 46, 44],
    memoryUsage: [65, 68, 62, 66, 64],
    diskIO: [25, 28, 22, 26, 24]
  }
};

export function ResourceUsageWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['CPU Usage', 'Memory Usage', 'Disk I/O'],
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
      data: resourceData.timestamps
    },
    yAxis: {
      type: 'value',
      name: 'Usage (%)'
    },
    series: [
      {
        name: 'CPU Usage',
        type: 'line',
        data: resourceData.metrics.cpuUsage,
        smooth: true,
        areaStyle: { opacity: 0.2 },
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Memory Usage',
        type: 'line',
        data: resourceData.metrics.memoryUsage,
        smooth: true,
        areaStyle: { opacity: 0.2 },
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Disk I/O',
        type: 'line',
        data: resourceData.metrics.diskIO,
        smooth: true,
        areaStyle: { opacity: 0.2 },
        itemStyle: { color: '#f59e0b' }
      }
    ]
  };

  return (
    <div className="h-full w-full">
      <ReactECharts 
        option={option} 
        style={{ height: '100%', width: '100%' }}
      />
    </div>
  );
}