export const mockTimeSeriesData = {
  timestamps: ['2024-01-01', '2024-01-02', '2024-01-03'],
  values: [100, 200, 300]
};

export const mockPieChartData = [
  { name: 'Category 1', value: 30 },
  { name: 'Category 2', value: 40 },
  { name: 'Category 3', value: 30 }
];

export const mockBarChartData = {
  categories: ['A', 'B', 'C'],
  series: [
    { name: 'Series 1', data: [10, 20, 30] },
    { name: 'Series 2', data: [15, 25, 35] }
  ]
};

export const mockMetricsData = {
  total: 1000,
  change: 5.2,
  changeType: 'increase',
  unit: 'ms',
  timeframe: 'last 24h'
};