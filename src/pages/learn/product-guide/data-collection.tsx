import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function DataCollection() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Data Collection</h1>
        <p className="mt-2 text-muted-foreground">
          Learn about the various methods of collecting data in theData.io
        </p>
      </div>

      <Tabs defaultValue="methods">
        <TabsList>
          <TabsTrigger value="methods">Collection Methods</TabsTrigger>
          <TabsTrigger value="sdks">SDKs & APIs</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>

        <TabsContent value="methods" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Data Collection Methods</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Real-time Collection</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>WebSocket streaming</li>
                    <li>Event-driven ingestion</li>
                    <li>Push-based updates</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Batch Collection</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Scheduled imports</li>
                    <li>Bulk data uploads</li>
                    <li>Historical data import</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sdks" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Available SDKs & APIs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Client SDKs</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>JavaScript SDK</li>
                  <li>React Native SDK</li>
                  <li>iOS SDK</li>
                  <li>Android SDK</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Server SDKs</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Node.js SDK</li>
                  <li>Python SDK</li>
                  <li>Java SDK</li>
                  <li>Go SDK</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Third-party Integrations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Cloud Platforms</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>AWS Integration</li>
                  <li>Google Cloud Platform</li>
                  <li>Azure Integration</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Monitoring Tools</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Prometheus</li>
                  <li>Grafana</li>
                  <li>Datadog</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}