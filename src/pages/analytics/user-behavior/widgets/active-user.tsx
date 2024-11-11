import { Card } from '@/components/ui/card';
import ReactECharts from 'echarts-for-react';

const activeUserData = {
  dates: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  metrics: {
    dau: [12000, 13500, 14200, 13800, 15000, 11500, 10800],
    wau: [45000, 46000, 47000, 46500, 48000, 44000, 43000],
    mau: [120000, 122000, 123000, 123500, 124000, 123000, 122500]
  },
  growth: {
    daily: [5, 8, -3, 9, -23, -6],
    weekly: [2, 2, -1, 3, -8, -2],
    monthly: [1.6, 0.8, 0.4, 0.4, -0.8, -0.4]
  }
};

export function ActiveUserWidget() {
  const userTrendsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['DAU', 'WAU', 'MAU']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: activeUserData.dates
    },
    yAxis: [
      {
        type: 'value',
        name: 'Users',
        position: 'left'
      }
    ],
    series: [
      {
        name: 'DAU',
        type: 'line',
        data: activeUserData.metrics.dau,
        smooth: true,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'WAU',
        type: 'line',
        data: activeUserData.metrics.wau,
        smooth: true,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'MAU',
        type: 'line',
        data: activeUserData.metrics.mau,
        smooth: true,
        itemStyle: { color: '#f59e0b' }
      }
    ]
  };

  const growthRatesOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['Daily Growth', 'Weekly Growth', 'Monthly Growth']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: activeUserData.dates.slice(1)
    },
    yAxis: {
      type: 'value',
      name: 'Growth Rate (%)',
      axisLabel: {
        formatter: '{value}%'
      }
    },
    series: [
      {
        name: 'Daily Growth',
        type: 'bar',
        data: activeUserData.growth.daily,
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Weekly Growth',
        type: 'bar',
        data: activeUserData.growth.weekly,
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Monthly Growth',
        type: 'bar',
        data: activeUserData.growth.monthly,
        itemStyle: { color: '#f59e0b' }
      }
    ]
  };

  return (
    <div className="grid grid-cols-2 gap-6">
      <Card className="p-6">
        <h3 className="text-sm font-semibold mb-4">Active Users Trend</h3>
        <ReactECharts option={userTrendsOption} style={{ height: '300px' }} />
      </Card>

      <Card className="p-6">
        <h3 className="text-sm font-semibold mb-4">Growth Rate Analysis</h3>
        <ReactECharts option={growthRatesOption} style={{ height: '300px' }} />
      </Card>
    </div>
  );
}