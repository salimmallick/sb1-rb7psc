import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BaseWidget } from '@/components/dashboard/base-widget';
import { CPUUsageWidget } from '../infrastructure/categories/system-health/widgets/cpu-usage';
import { TrafficAnalysisWidget } from '../infrastructure/categories/network/widgets/traffic-analysis';
import { ErrorTrendsWidget } from '../apm/categories/error-monitoring/widgets/error-trends';
import { QueryPerformanceWidget } from '../database/categories/performance/widgets/query-performance';
import { ConnectionPoolWidget } from '../database/categories/performance/widgets/connection-pool';
import ReactECharts from 'echarts-for-react';

// Backend Architecture Map Data
const architectureData = {
  nodes: [
    { name: 'API Gateway', category: 0, value: 20 },
    { name: 'Auth Service', category: 1, value: 15 },
    { name: 'User Service', category: 1, value: 12 },
    { name: 'Product Service', category: 1, value: 14 },
    { name: 'Database', category: 2, value: 18 },
    { name: 'Cache', category: 2, value: 15 },
    { name: 'Message Queue', category: 2, value: 12 }
  ],
  links: [
    { source: 'API Gateway', target: 'Auth Service' },
    { source: 'API Gateway', target: 'User Service' },
    { source: 'API Gateway', target: 'Product Service' },
    { source: 'Auth Service', target: 'Database' },
    { source: 'User Service', target: 'Database' },
    { source: 'User Service', target: 'Cache' },
    { source: 'Product Service', target: 'Database' },
    { source: 'Product Service', target: 'Message Queue' }
  ]
};

// Log Activity Data
const logActivityData = {
  timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  metrics: {
    error: [25, 28, 24, 30, 26, 25],
    warning: [85, 90, 82, 95, 88, 86],
    info: [450, 480, 460, 500, 470, 455]
  }
};

// Security Alerts Data
const securityData = {
  timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  metrics: {
    unauthorized: [12, 15, 10, 18, 14, 11],
    blocked: [25, 30, 22, 35, 28, 24],
    anomalies: [5, 8, 4, 10, 7, 5]
  }
};

export default function ObservabilityOverview() {
  // Backend Architecture Map Configuration
  const architectureOption = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      data: ['Gateway', 'Services', 'Infrastructure'],
      bottom: 0
    },
    series: [
      {
        type: 'graph',
        layout: 'force',
        data: architectureData.nodes.map(node => ({
          ...node,
          symbolSize: Math.sqrt(node.value) * 5,
          label: { show: true }
        })),
        links: architectureData.links,
        categories: [
          { name: 'Gateway' },
          { name: 'Services' },
          { name: 'Infrastructure' }
        ],
        roam: true,
        force: {
          repulsion: 100,
          edgeLength: [50, 200]
        }
      }
    ]
  };

  // Log Activity Configuration
  const logActivityOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'cross' }
    },
    legend: {
      data: ['Error', 'Warning', 'Info'],
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
      boundaryGap: false,
      data: logActivityData.timestamps
    },
    yAxis: {
      type: 'value',
      name: 'Log Count'
    },
    series: [
      {
        name: 'Error',
        type: 'line',
        stack: 'Total',
        data: logActivityData.metrics.error,
        itemStyle: { color: '#ef4444' }
      },
      {
        name: 'Warning',
        type: 'line',
        stack: 'Total',
        data: logActivityData.metrics.warning,
        itemStyle: { color: '#f59e0b' }
      },
      {
        name: 'Info',
        type: 'line',
        stack: 'Total',
        data: logActivityData.metrics.info,
        itemStyle: { color: '#22c55e' }
      }
    ]
  };

  // Security Alerts Configuration
  const securityOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'cross' }
    },
    legend: {
      data: ['Unauthorized Access', 'Blocked IPs', 'Anomalies'],
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
      data: securityData.timestamps
    },
    yAxis: {
      type: 'value',
      name: 'Count'
    },
    series: [
      {
        name: 'Unauthorized Access',
        type: 'bar',
        data: securityData.metrics.unauthorized,
        itemStyle: { color: '#ef4444' }
      },
      {
        name: 'Blocked IPs',
        type: 'bar',
        data: securityData.metrics.blocked,
        itemStyle: { color: '#f59e0b' }
      },
      {
        name: 'Anomalies',
        type: 'line',
        data: securityData.metrics.anomalies,
        itemStyle: { color: '#3b82f6' }
      }
    ]
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Observability Overview</h1>
        <p className="mt-2 text-muted-foreground">
          Monitor and analyze system health, performance, and reliability across all components.
        </p>
      </div>

      {/* Real-Time System Health Summary */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Health</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98%</div>
            <p className="text-xs text-muted-foreground">+2% from last hour</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Error Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0.5%</div>
            <p className="text-xs text-muted-foreground">-0.2% from last hour</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">145ms</div>
            <p className="text-xs text-muted-foreground">-15ms from last hour</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Incidents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">+1 from last hour</p>
          </CardContent>
        </Card>
      </div>

      {/* Backend Architecture Map */}
      <BaseWidget
        title="Backend Architecture Map"
        description="Interactive visualization of system architecture and component health"
        fullWidth
      >
        <ReactECharts option={architectureOption} style={{ height: '400px' }} />
      </BaseWidget>

      {/* Infrastructure and Network */}
      <div className="grid gap-4 md:grid-cols-2">
        <BaseWidget
          title="Infrastructure Health"
          description="Monitor system resource utilization"
        >
          <CPUUsageWidget />
        </BaseWidget>

        <BaseWidget
          title="Network Traffic"
          description="Track network performance and throughput"
        >
          <TrafficAnalysisWidget />
        </BaseWidget>
      </div>

      {/* Application and Database Performance */}
      <div className="grid gap-4 md:grid-cols-2">
        <BaseWidget
          title="Application Errors"
          description="Monitor application error trends"
        >
          <ErrorTrendsWidget />
        </BaseWidget>

        <BaseWidget
          title="Database Performance"
          description="Track database query performance"
        >
          <QueryPerformanceWidget />
        </BaseWidget>
      </div>

      {/* Database Health and Connections */}
      <div className="grid gap-4 md:grid-cols-2">
        <BaseWidget
          title="Database Connections"
          description="Monitor active database connections"
        >
          <ConnectionPoolWidget />
        </BaseWidget>

        <BaseWidget
          title="Security Alerts"
          description="Monitor security events and anomalies"
        >
          <ReactECharts option={securityOption} style={{ height: '300px' }} />
        </BaseWidget>
      </div>

      {/* Log Activity */}
      <BaseWidget
        title="Log Activity"
        description="Monitor system-wide log events"
        fullWidth
      >
        <ReactECharts option={logActivityOption} style={{ height: '300px' }} />
      </BaseWidget>
    </div>
  );
}