import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function PlatformOverview() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Platform Overview</h1>
        <p className="mt-2 text-muted-foreground">
          Learn about theData.io platform's core features and capabilities
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Platform Architecture</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose dark:prose-invert">
              <p>
                theData.io is a comprehensive analytics and monitoring platform built on a modern,
                scalable architecture. The platform consists of several key components:
              </p>
              <ul>
                <li>Real-time data ingestion pipeline</li>
                <li>Advanced analytics engine</li>
                <li>Machine learning-powered insights</li>
                <li>Customizable dashboards</li>
                <li>Automated alerting system</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Key Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose dark:prose-invert">
              <ul>
                <li>Real-time monitoring and analytics</li>
                <li>Custom dashboard creation</li>
                <li>Advanced data visualization</li>
                <li>Automated alerting and incident management</li>
                <li>User behavior analytics</li>
                <li>Performance monitoring</li>
                <li>Integration capabilities</li>
                <li>Echo AI assistant</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data Collection & Processing</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose dark:prose-invert">
              <p>
                The platform collects data through multiple channels:
              </p>
              <ul>
                <li>REST API endpoints</li>
                <li>SDK integrations</li>
                <li>Log ingestion</li>
                <li>Third-party integrations</li>
              </ul>
              <p>
                All data is processed in real-time and stored securely with configurable retention policies.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose dark:prose-invert">
              <p>To get started with theData.io:</p>
              <ol>
                <li>Set up your organization and team</li>
                <li>Configure data sources</li>
                <li>Create your first dashboard</li>
                <li>Set up alerts</li>
                <li>Explore advanced features</li>
              </ol>
              <p>
                Check out our tutorials section for detailed guides on each aspect of the platform.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}