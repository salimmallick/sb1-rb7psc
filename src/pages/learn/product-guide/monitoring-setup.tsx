import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function MonitoringSetup() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Monitoring Setup</h1>
        <p className="mt-2 text-muted-foreground">
          Configure comprehensive monitoring for your applications and infrastructure
        </p>
      </div>

      <Tabs defaultValue="setup">
        <TabsList>
          <TabsTrigger value="setup">Initial Setup</TabsTrigger>
          <TabsTrigger value="config">Configuration</TabsTrigger>
          <TabsTrigger value="agents">Monitoring Agents</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>

        <TabsContent value="setup" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Prerequisites</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>System requirements</li>
                    <li>Network access</li>
                    <li>Authentication setup</li>
                    <li>Initial configuration</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Setup Steps</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Platform installation</li>
                    <li>Agent deployment</li>
                    <li>Basic configuration</li>
                    <li>Verification steps</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="config" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Configuration Options</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Basic Settings</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Data collection intervals</li>
                  <li>Retention policies</li>
                  <li>Access control</li>
                  <li>Notification settings</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Advanced Configuration</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Custom metrics</li>
                  <li>Filtering rules</li>
                  <li>Aggregation settings</li>
                  <li>API configuration</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="agents" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Monitoring Agents</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Agent Types</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>System agents</li>
                  <li>Application agents</li>
                  <li>Network agents</li>
                  <li>Custom agents</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Agent Management</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Deployment strategies</li>
                  <li>Configuration management</li>
                  <li>Updates and maintenance</li>
                  <li>Troubleshooting</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Available Integrations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Platform Integrations</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Cloud platforms</li>
                  <li>Container orchestration</li>
                  <li>Database systems</li>
                  <li>Message queues</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Third-party Tools</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>CI/CD tools</li>
                  <li>Issue trackers</li>
                  <li>Communication platforms</li>
                  <li>Custom integrations</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}