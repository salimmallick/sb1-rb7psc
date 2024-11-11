import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function Dashboards() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Understanding Dashboards</h1>
        <p className="mt-2 text-muted-foreground">
          Learn how to create, customize, and get the most out of your dashboards.
        </p>
      </div>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="widgets">Widgets</TabsTrigger>
          <TabsTrigger value="layouts">Layouts</TabsTrigger>
          <TabsTrigger value="sharing">Sharing</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Dashboard Basics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Dashboards in theData.io are customizable interfaces that provide real-time visibility
                into your application's performance, user behavior, and system health.
              </p>
              <div className="space-y-2">
                <h3 className="font-semibold">Key Concepts:</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Grid-based layout system for flexible organization</li>
                  <li>Real-time data updates</li>
                  <li>Interactive widgets with drill-down capabilities</li>
                  <li>Custom time ranges and filtering</li>
                  <li>Role-based access control</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="widgets" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Available Widgets</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Metrics Widgets</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Single Value - Display key metrics with trends</li>
                    <li>Time Series - Show data evolution over time</li>
                    <li>Gauge - Visualize metrics against thresholds</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Analytics Widgets</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>User Flow - Track user journey paths</li>
                    <li>Heatmaps - Visualize user interactions</li>
                    <li>Funnel Analysis - Monitor conversion steps</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">System Widgets</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Resource Usage - Monitor system resources</li>
                    <li>Error Tracking - Track and analyze errors</li>
                    <li>Health Status - View system health indicators</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="layouts" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Layout Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Grid System</h3>
                <p>
                  Our dashboard uses a 12-column grid system that allows for flexible widget placement
                  and responsive layouts.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Layout Features:</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Drag-and-drop widget positioning</li>
                  <li>Resizable widgets</li>
                  <li>Layout presets for common use cases</li>
                  <li>Responsive design for all screen sizes</li>
                  <li>Layout saving and sharing</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sharing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Sharing & Collaboration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Sharing Options</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Share with team members or groups</li>
                  <li>Public sharing with view-only access</li>
                  <li>Export as PDF or image</li>
                  <li>Scheduled reports</li>
                  <li>Embedded dashboards</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Access Control</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Role-based permissions</li>
                  <li>View-only or edit access</li>
                  <li>Time-limited sharing</li>
                  <li>Access audit logs</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}