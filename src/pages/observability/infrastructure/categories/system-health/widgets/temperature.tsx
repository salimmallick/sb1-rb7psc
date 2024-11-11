import ReactECharts from 'echarts-for-react';

const temperatureData = {
  timestamps: ['00:00', '00:05', '00:10', '00:15', '00:20'],
  metrics: {
    cpuTemp: [65, 68, 67, 70, 66],
    systemTemp: [45, 46, 45, 47, 45],
    fanSpeed: [2100, 2300, 2200, 2400, 2200]
  }
};

export function TemperatureWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['CPU Temperature', 'System Temperature', 'Fan Speed'],
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
      data: temperatureData.timestamps,
      boundaryGap: false
    },
    yAxis: [
      {
        type: 'value',
        name: 'Temperature (°C)',
        position: 'left',
        axisLabel: {
          formatter: '{value}°C'
        }
      },
      {
        type: 'value',
        name: 'Fan Speed (RPM)',
        position: 'right',
        axisLabel: {
          formatter: '{value} RPM'
        }
      }
    ],
    series: [
      {
        name: 'CPU Temperature',
        type: 'line',
        data: temperatureData.metrics.cpuTemp,
        smooth: true,
        itemStyle: { color: '#ef4444' }
      },
      {
        name: 'System Temperature',
        type: 'line',
        data: temperatureData.metrics.systemTemp,
        smooth: true,
        itemStyle: { color: '#f59e0b' }
      },
      {
        name: 'Fan Speed',
        type: 'line',
        yAxisIndex: 1,
        data: temperatureData.metrics.fanSpeed,
        smooth: true,
        itemStyle: { color: '#3b82f6' }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
}