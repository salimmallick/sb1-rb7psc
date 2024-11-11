import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function GettingStarted() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Getting Started with theData.io</h1>
        <p className="mt-2 text-muted-foreground">
          Learn how to make the most of our platform's features and capabilities.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Platform Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              theData.io is a comprehensive analytics and monitoring platform designed to help you
              understand and optimize your application's performance, user behavior, and system health.
            </p>
            <div className="space-y-2">
              <h3 className="font-semibold">Key Features:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Real-time monitoring and analytics</li>
                <li>User behavior tracking and insights</li>
                <li>Performance optimization tools</li>
                <li>Comprehensive system health monitoring</li>
                <li>Advanced reporting and visualization</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Start Guide</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold">1. Dashboard Navigation</h3>
              <p>
                Learn how to navigate through different sections of the platform and customize your
                dashboard views.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">2. Setting Up Monitoring</h3>
              <p>
                Configure your first monitoring setup to start tracking key metrics and performance
                indicators.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">3. Creating Reports</h3>
              <p>
                Learn how to create and customize reports to visualize your data and share insights
                with your team.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}