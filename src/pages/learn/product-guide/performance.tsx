import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function Performance() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Performance Monitoring</h1>
        <p className="mt-2 text-muted-foreground">
          Learn about performance monitoring capabilities and optimization strategies.
        </p>
      </div>

      <Tabs defaultValue="monitoring">
        <TabsList>
          <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
          <TabsTrigger value="optimization">Optimization</TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
          <TabsTrigger value="troubleshooting">Troubleshooting</TabsTrigger>
        </TabsList>

        <TabsContent value="monitoring" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Performance Monitoring</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Application Performance</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Response time tracking</li>
                    <li>Error rate monitoring</li>
                    <li>Resource utilization</li>
                    <li>Transaction tracing</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Infrastructure Metrics</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>CPU and memory usage</li>
                    <li>Network throughput</li>
                    <li>Disk I/O performance</li>
                    <li>Container metrics</li>
                  </ul>
                </div>
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
                  <li>Performance bottleneck detection</li>
                  <li>Resource usage analysis</li>
                  <li>Code performance profiling</li>
                  <li>Database query optimization</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Best Practices</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Caching strategies</li>
                  <li>Load balancing configuration</li>
                  <li>Resource scaling guidelines</li>
                  <li>Performance testing methods</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Performance Alerts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Alert Configuration</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Threshold-based alerts</li>
                  <li>Anomaly detection</li>
                  <li>Alert severity levels</li>
                  <li>Notification channels</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Response Automation</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Auto-scaling triggers</li>
                  <li>Incident response automation</li>
                  <li>Recovery procedures</li>
                  <li>Escalation policies</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="troubleshooting" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Troubleshooting Guide</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Common Issues</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>High latency resolution</li>
                  <li>Error spike analysis</li>
                  <li>Resource exhaustion</li>
                  <li>Memory leaks</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Diagnostic Tools</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Log analysis</li>
                  <li>Trace visualization</li>
                  <li>Profiling tools</li>
                  <li>Debug console</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}