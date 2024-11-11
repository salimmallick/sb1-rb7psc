import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function DataProcessing() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Data Processing</h1>
        <p className="mt-2 text-muted-foreground">
          Understanding how theData.io processes and transforms your data
        </p>
      </div>

      <Tabs defaultValue="pipeline">
        <TabsList>
          <TabsTrigger value="pipeline">Processing Pipeline</TabsTrigger>
          <TabsTrigger value="transforms">Transformations</TabsTrigger>
          <TabsTrigger value="enrichment">Data Enrichment</TabsTrigger>
        </TabsList>

        <TabsContent value="pipeline" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Data Processing Pipeline</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Ingestion</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Data validation</li>
                    <li>Schema enforcement</li>
                    <li>Rate limiting</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Processing</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Data normalization</li>
                    <li>Aggregation</li>
                    <li>Filtering</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="transforms" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Data Transformations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Available Transformations</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Field mapping</li>
                  <li>Type conversion</li>
                  <li>Custom functions</li>
                  <li>Aggregations</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Stream Processing</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Real-time transformations</li>
                  <li>Windowing operations</li>
                  <li>State management</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="enrichment" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Data Enrichment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Enrichment Sources</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>IP geolocation</li>
                  <li>User agent parsing</li>
                  <li>Device detection</li>
                  <li>Custom lookups</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Machine Learning</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Anomaly detection</li>
                  <li>Pattern recognition</li>
                  <li>Predictive analytics</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}