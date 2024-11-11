import ReactECharts from 'echarts-for-react';

const traceData = {
  services: ['API Gateway', 'Auth Service', 'User Service', 'Product Service', 'Database'],
  spans: [
    { service: 'API Gateway', start: 0, duration: 245 },
    { service: 'Auth Service', start: 20, duration: 100 },
    { service: 'User Service', start: 130, duration: 80 },
    { service: 'Product Service', start: 140, duration: 60 },
    { service: 'Database', start: 160, duration: 40 }
  ]
};

export function TraceTimelineWidget() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: (params: any) => {
        const span = params[0];
        return `${span.name}<br/>
                Start: ${span.value[0]}ms<br/>
                Duration: ${span.value[1]}ms<br/>
                End: ${span.value[0] + span.value[1]}ms`;
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      name: 'Time (ms)',
      axisLabel: {
        formatter: '{value}ms'
      }
    },
    yAxis: {
      type: 'category',
      data: traceData.services
    },
    series: [
      {
        type: 'custom',
        renderItem: (params: any, api: any) => {
          const start = api.value(0);
          const duration = api.value(1);
          const height = api.size([0, 1])[1] * 0.6;
          const y = api.coord([0, api.value(2)])[1];

          return {
            type: 'rect',
            shape: {
              x: api.coord([start, 0])[0],
              y: y - height / 2,
              width: api.size([duration, 0])[0],
              height: height
            },
            style: {
              fill: '#3b82f6'
            }
          };
        },
        data: traceData.spans.map((span, index) => [
          span.start,
          span.duration,
          index
        ])
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '400px' }} />;
}