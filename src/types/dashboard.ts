export interface DashboardMetric {
  id: string;
  name: string;
  value: number;
  unit?: string;
  change?: number;
  changeType?: 'increase' | 'decrease';
  timeframe?: string;
}

export interface ChartData {
  timestamp: string;
  value: number;
}

export interface TimeSeriesData {
  name: string;
  data: ChartData[];
}

export interface DashboardWidget {
  id: string;
  title: string;
  description?: string;
  type: 'chart' | 'metric' | 'table' | 'list';
  data: any;
  layout?: {
    x: number;
    y: number;
    w: number;
    h: number;
    minW?: number;
    minH?: number;
  };
}

export interface DashboardLayout {
  id: string;
  name: string;
  widgets: DashboardWidget[];
  created: Date;
  modified: Date;
  version: string;
}