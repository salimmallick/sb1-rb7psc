import { rest } from 'msw';
import { mockTimeSeriesData, mockMetricsData } from './chart-data';

export const handlers = [
  rest.get('/api/metrics/performance', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(mockTimeSeriesData)
    );
  }),

  rest.get('/api/metrics/overview', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(mockMetricsData)
    );
  }),

  rest.get('/api/metrics/security', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        score: 85,
        threats: 12,
        incidents: 3
      })
    );
  }),

  rest.get('/api/metrics/costs', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        total: 12500,
        trend: 'decreasing',
        savings: 2300
      })
    );
  })
];