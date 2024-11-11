import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function Storage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Storage & Retention</h1>
        <p className="mt-2 text-muted-foreground">
          Learn about data storage options and retention policies
        </p>
      </div>

      <Tabs defaultValue="storage">
        <TabsList>
          <TabsTrigger value="storage">Storage Options</TabsTrigger>
          <TabsTrigger value="retention">Retention Policies</TabsTrigger>
          <TabsTrigger value="backup">Backup & Recovery</TabsTrigger>
        </TabsList>

        <TabsContent value="storage" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Storage Options</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Time-Series Storage</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>High-performance metrics storage</li>
                    <li>Efficient compression</li>
                    <li>Fast query capabilities</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Document Storage</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Flexible schema</li>
                    <li>Rich querying</li>
                    <li>Full-text search</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="retention" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Data Retention</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Retention Policies</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Time-based retention</li>
                  <li>Volume-based retention</li>
                  <li>Custom retention rules</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Data Lifecycle</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Hot storage</li>
                  <li>Warm storage</li>
                  <li>Cold storage</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="backup" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Backup & Recovery</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Backup Options</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Automated backups</li>
                  <li>Point-in-time recovery</li>
                  <li>Cross-region replication</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Disaster Recovery</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Recovery point objective (RPO)</li>
                  <li>Recovery time objective (RTO)</li>
                  <li>Failover procedures</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}