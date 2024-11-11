import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function Metrics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Metrics & Analytics</h1>
        <p className="mt-2 text-muted-foreground">
          Understanding the metrics and analytics capabilities of theData.io platform.
        </p>
      </div>

      <Tabs defaultValue="metrics">
        <TabsList>
          <TabsTrigger value="metrics">Key Metrics</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="visualization">Visualization</TabsTrigger>
          <TabsTrigger value="export">Export & API</TabsTrigger>
        </TabsList>

        <TabsContent value="metrics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Core Metrics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Performance Metrics</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Response Time - Average, p95, p99 latencies</li>
                    <li>Error Rate - Application and system errors</li>
                    <li>Throughput - Requests per second</li>
                    <li>Availability - System uptime and reliability</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">User Metrics</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Active Users - Daily, weekly, monthly</li>
                    <li>Session Duration - Time spent per visit</li>
                    <li>Engagement Rate - User interactions</li>
                    <li>Retention - User return rates</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Business Metrics</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Conversion Rates - Goal completions</li>
                    <li>Revenue - Transaction values</li>
                    <li>Customer Lifetime Value</li>
                    <li>Churn Rate - Customer loss</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Analytics Capabilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Real-time Analytics</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Live data streaming</li>
                  <li>Instant metric updates</li>
                  <li>Real-time alerting</li>
                  <li>Dynamic dashboard updates</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Historical Analysis</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Trend analysis</li>
                  <li>Pattern recognition</li>
                  <li>Anomaly detection</li>
                  <li>Comparative analysis</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="visualization" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Data Visualization</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Chart Types</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Line charts for time series data</li>
                  <li>Bar charts for comparisons</li>
                  <li>Pie charts for distributions</li>
                  <li>Heat maps for density visualization</li>
                  <li>Scatter plots for correlations</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Customization Options</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Color schemes and themes</li>
                  <li>Axis configuration</li>
                  <li>Legend positioning</li>
                  <li>Interactive tooltips</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="export" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Data Export & API Access</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Export Formats</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>CSV for spreadsheet analysis</li>
                  <li>JSON for programmatic use</li>
                  <li>PDF for reporting</li>
                  <li>PNG/SVG for visualizations</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">API Integration</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>RESTful API endpoints</li>
                  <li>Real-time WebSocket streams</li>
                  <li>Authentication methods</li>
                  <li>Rate limiting and quotas</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}