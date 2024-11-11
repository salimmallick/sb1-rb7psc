import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function AlertConfiguration() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Alert Configuration</h1>
        <p className="mt-2 text-muted-foreground">
          Learn how to set up and manage alerts in theData.io
        </p>
      </div>

      <Tabs defaultValue="basics">
        <TabsList>
          <TabsTrigger value="basics">Alert Basics</TabsTrigger>
          <TabsTrigger value="types">Alert Types</TabsTrigger>
          <TabsTrigger value="channels">Notification Channels</TabsTrigger>
          <TabsTrigger value="policies">Alert Policies</TabsTrigger>
        </TabsList>

        <TabsContent value="basics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Alert Fundamentals</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Alert Components</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Conditions and thresholds</li>
                    <li>Evaluation windows</li>
                    <li>Severity levels</li>
                    <li>Alert actions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Best Practices</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Setting appropriate thresholds</li>
                    <li>Avoiding alert fatigue</li>
                    <li>Alert prioritization</li>
                    <li>Response procedures</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="types" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Available Alert Types</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Metric Alerts</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Threshold-based alerts</li>
                  <li>Anomaly detection</li>
                  <li>Trend analysis</li>
                  <li>Composite alerts</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Log-based Alerts</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Pattern matching</li>
                  <li>Error detection</li>
                  <li>Frequency analysis</li>
                  <li>Custom queries</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="channels" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Channels</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Channel Types</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Email notifications</li>
                  <li>Slack integration</li>
                  <li>SMS alerts</li>
                  <li>Webhook notifications</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Channel Configuration</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Channel setup</li>
                  <li>Routing rules</li>
                  <li>Notification templates</li>
                  <li>Delivery settings</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="policies" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Alert Policies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Policy Management</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Escalation policies</li>
                  <li>On-call schedules</li>
                  <li>Alert grouping</li>
                  <li>Maintenance windows</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Advanced Features</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Alert correlation</li>
                  <li>Automated remediation</li>
                  <li>Alert analytics</li>
                  <li>Policy templates</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}