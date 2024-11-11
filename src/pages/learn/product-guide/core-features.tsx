import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info } from "lucide-react";

export function CoreFeatures() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Core Features</h1>
        <p className="mt-2 text-muted-foreground">
          Learn about the essential features that power theData.io platform.
        </p>
      </div>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Quick Overview</AlertTitle>
        <AlertDescription>
          This guide covers the fundamental features that form the backbone of our platform.
        </AlertDescription>
      </Alert>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Real-Time Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>
                Our real-time analytics engine processes data as it arrives, providing immediate insights into your application's performance.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sub-second data processing</li>
                <li>Live metric updates</li>
                <li>Instant anomaly detection</li>
                <li>Real-time alerting</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Advanced Visualization</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>
                Create powerful visualizations to understand your data better with our comprehensive charting capabilities.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Interactive dashboards</li>
                <li>Custom chart types</li>
                <li>Dynamic filtering</li>
                <li>Data export options</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Intelligent Alerting</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>
                Set up sophisticated alerting rules with our intelligent notification system.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Multi-condition alerts</li>
                <li>Smart thresholds</li>
                <li>Alert correlation</li>
                <li>Custom notification channels</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data Processing</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>
                Transform and analyze your data with our powerful processing capabilities.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Custom metrics creation</li>
                <li>Data transformation</li>
                <li>Aggregation functions</li>
                <li>Historical analysis</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}