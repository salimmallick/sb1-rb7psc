import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function UserAnalytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">User Analytics</h1>
        <p className="mt-2 text-muted-foreground">
          Learn about tracking and analyzing user behavior in your application
        </p>
      </div>

      <Tabs defaultValue="tracking">
        <TabsList>
          <TabsTrigger value="tracking">User Tracking</TabsTrigger>
          <TabsTrigger value="behavior">Behavior Analysis</TabsTrigger>
          <TabsTrigger value="segmentation">User Segmentation</TabsTrigger>
          <TabsTrigger value="reporting">Reporting</TabsTrigger>
        </TabsList>

        <TabsContent value="tracking" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>User Tracking Capabilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Event Tracking</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Page views and navigation</li>
                    <li>User interactions and clicks</li>
                    <li>Custom event tracking</li>
                    <li>Session tracking</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">User Properties</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>User identification</li>
                    <li>Demographics</li>
                    <li>Custom attributes</li>
                    <li>Device information</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="behavior" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Behavior Analysis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Analysis Tools</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>User journey mapping</li>
                  <li>Funnel analysis</li>
                  <li>Cohort analysis</li>
                  <li>Retention analysis</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Visualization</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Behavior flow diagrams</li>
                  <li>Heat maps</li>
                  <li>Session recordings</li>
                  <li>Interaction maps</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="segmentation" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>User Segmentation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Segmentation Methods</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Behavioral segmentation</li>
                  <li>Demographic segmentation</li>
                  <li>Custom segments</li>
                  <li>Dynamic segments</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Analysis Features</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Segment comparison</li>
                  <li>Conversion analysis</li>
                  <li>Engagement metrics</li>
                  <li>Retention by segment</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reporting" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Analytics Reporting</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Report Types</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>User activity reports</li>
                  <li>Engagement reports</li>
                  <li>Conversion reports</li>
                  <li>Custom reports</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Export Options</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>CSV export</li>
                  <li>PDF reports</li>
                  <li>API access</li>
                  <li>Scheduled reports</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}