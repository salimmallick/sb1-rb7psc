import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function DataCollection() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Data Collection</h1>
        <p className="mt-2 text-muted-foreground">
          Learn about how theData.io collects, processes, and manages your data.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <section>
              <h3 className="text-lg font-semibold mb-2">Data Collection Methods</h3>
              <p className="text-muted-foreground">
                Our platform uses multiple methods to collect data:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Real-time data streaming</li>
                <li>API integrations</li>
                <li>Client-side tracking</li>
                <li>Server-side collection</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">Data Types</h3>
              <p className="text-muted-foreground">
                Types of data we collect and process:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Performance metrics</li>
                <li>User behavior data</li>
                <li>System logs</li>
                <li>Application metrics</li>
                <li>Network data</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">Data Privacy & Security</h3>
              <p className="text-muted-foreground">
                We implement industry-standard security measures:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>End-to-end encryption</li>
                <li>Data anonymization</li>
                <li>Access controls</li>
                <li>Regular security audits</li>
              </ul>
            </section>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Implementation Guide</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <section>
              <h3 className="text-lg font-semibold mb-2">Setup Process</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Install the data collection SDK</li>
                <li>Configure collection parameters</li>
                <li>Set up data streams</li>
                <li>Implement tracking code</li>
                <li>Verify data collection</li>
              </ol>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">Best Practices</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Implement proper error handling</li>
                <li>Use batch processing for large datasets</li>
                <li>Optimize collection frequency</li>
                <li>Monitor collection performance</li>
                <li>Regular maintenance and updates</li>
              </ul>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}