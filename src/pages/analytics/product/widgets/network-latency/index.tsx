import { Card } from '@/components/ui/card';
import ReactECharts from 'echarts-for-react';

const latencyData = {
  timestamps: ['00:00', '00:05', '00:10', '00:15', '00:20'],
  metrics: {
    apiLatency: [120, 115, 125, 118, 122],
    networkLatency: [45, 42, 48, 44, 46],
    dnsLatency: [15, 14, 16, 15, 15]
  }
};

export function NetworkLatencyWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['API Latency', 'Network Latency', 'DNS Latency'],
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
      data: latencyData.timestamps
    },
    yAxis: {
      type: 'value',
      name: 'Latency (ms)'
    },
    series: [
      {
        name: 'API Latency',
        type: 'line',
        data: latencyData.metrics.apiLatency,
        smooth: true,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Network Latency',
        type: 'line',
        data: latencyData.metrics.networkLatency,
        smooth: true,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'DNS Latency',
        type: 'line',
        data: latencyData.metrics.dnsLatency,
        smooth: true,
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