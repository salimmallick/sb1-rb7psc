import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function PerformanceAnalytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Performance Analytics</h1>
        <p className="mt-2 text-muted-foreground">
          Understanding and analyzing application performance metrics
        </p>
      </div>

      <Tabs defaultValue="metrics">
        <TabsList>
          <TabsTrigger value="metrics">Key Metrics</TabsTrigger>
          <TabsTrigger value="analysis">Analysis Tools</TabsTrigger>
          <TabsTrigger value="optimization">Optimization</TabsTrigger>
          <TabsTrigger value="reporting">Reporting</TabsTrigger>
        </TabsList>

        <TabsContent value="metrics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Response Time Metrics</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Average response time</li>
                    <li>95th percentile latency</li>
                    <li>99th percentile latency</li>
                    <li>Response time distribution</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Resource Metrics</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>CPU utilization</li>
                    <li>Memory usage</li>
                    <li>Disk I/O</li>
                    <li>Network throughput</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analysis" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Analysis Tools</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Performance Analysis</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Trend analysis</li>
                  <li>Anomaly detection</li>
                  <li>Root cause analysis</li>
                  <li>Performance profiling</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Visualization Tools</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Time series graphs</li>
                  <li>Heat maps</li>
                  <li>Flame graphs</li>
                  <li>Service maps</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="optimization" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Performance Optimization</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Optimization Tools</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Bottleneck detection</li>
                  <li>Resource optimization</li>
                  <li>Query optimization</li>
                  <li>Caching analysis</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Recommendations</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Performance insights</li>
                  <li>Optimization suggestions</li>
                  <li>Best practices</li>
                  <li>Resource planning</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reporting" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Performance Reporting</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Report Types</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Performance summaries</li>
                  <li>Trend reports</li>
                  <li>SLA compliance reports</li>
                  <li>Resource utilization reports</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Sharing Options</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Automated reports</li>
                  <li>Custom dashboards</li>
                  <li>Alert notifications</li>
                  <li>API integration</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}