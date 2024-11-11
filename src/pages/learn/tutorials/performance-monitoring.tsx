import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';

export function PerformanceMonitoring() {
  const [alertThreshold, setAlertThreshold] = useState('200');
  const [metricName, setMetricName] = useState('response_time');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Performance Monitoring Tutorial</h1>
        <p className="mt-2 text-muted-foreground">
          Learn how to set up and manage performance monitoring for your applications.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Alert Configuration Exercise</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="metric">Metric Name</Label>
              <Input
                id="metric"
                value={metricName}
                onChange={(e) => setMetricName(e.target.value)}
                placeholder="Enter metric name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="threshold">Alert Threshold (ms)</Label>
              <Input
                id="threshold"
                type="number"
                value={alertThreshold}
                onChange={(e) => setAlertThreshold(e.target.value)}
                placeholder="Enter threshold value"
              />
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h4 className="font-semibold mb-4">Preview Alert Rule</h4>
            <div className="space-y-2">
              <p><strong>IF</strong> {metricName}</p>
              <p><strong>EXCEEDS</strong> {alertThreshold}ms</p>
              <p><strong>FOR</strong> 5 minutes</p>
              <p><strong>THEN</strong> trigger alert</p>
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <Button variant="outline">Test Alert</Button>
            <Button>Save Alert Rule</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Monitoring Dashboard</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="p-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Response Time</span>
                  <Badge variant="outline">Live</Badge>
                </div>
                <p className="text-2xl font-bold">145ms</p>
                <p className="text-xs text-muted-foreground">Avg. last 5 min</p>
              </div>
            </Card>
            <Card className="p-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Error Rate</span>
                  <Badge variant="outline">Live</Badge>
                </div>
                <p className="text-2xl font-bold">0.5%</p>
                <p className="text-xs text-muted-foreground">Last 5 min</p>
              </div>
            </Card>
            <Card className="p-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">CPU Usage</span>
                  <Badge variant="outline">Live</Badge>
                </div>
                <p className="text-2xl font-bold">45%</p>
                <p className="text-xs text-muted-foreground">Current</p>
              </div>
            </Card>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Learning Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="setup">
            <TabsList>
              <TabsTrigger value="setup">Setup Guide</TabsTrigger>
              <TabsTrigger value="metrics">Key Metrics</TabsTrigger>
              <TabsTrigger value="alerts">Alert Management</TabsTrigger>
            </TabsList>

            <TabsContent value="setup" className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">1. Install Monitoring Agent</h4>
                <p>Learn how to install and configure the monitoring agent.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">2. Configure Data Collection</h4>
                <p>Set up metrics collection and sampling rates.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">3. Set Up Dashboards</h4>
                <p>Create and customize monitoring dashboards.</p>
              </div>
            </TabsContent>

            <TabsContent value="metrics" className="space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>Response Time - Average, p95, p99 latencies</li>
                <li>Error Rate - Application and system errors</li>
                <li>Resource Usage - CPU, memory, disk, network</li>
                <li>Throughput - Requests per second</li>
                <li>Availability - System uptime and reliability</li>
              </ul>
            </TabsContent>

            <TabsContent value="alerts" className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Alert Types</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Threshold-based alerts</li>
                  <li>Anomaly detection</li>
                  <li>Composite alerts</li>
                  <li>Predictive alerts</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Response Actions</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Email notifications</li>
                  <li>Slack integration</li>
                  <li>PagerDuty escalation</li>
                  <li>Automated remediation</li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}