import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function IncidentManagement() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Incident Management</h1>
        <p className="mt-2 text-muted-foreground">
          Learn about incident management processes and best practices
        </p>
      </div>

      <Tabs defaultValue="workflow">
        <TabsList>
          <TabsTrigger value="workflow">Incident Workflow</TabsTrigger>
          <TabsTrigger value="response">Response Plans</TabsTrigger>
          <TabsTrigger value="communication">Communication</TabsTrigger>
          <TabsTrigger value="analysis">Post-Incident</TabsTrigger>
        </TabsList>

        <TabsContent value="workflow" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Incident Workflow</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Incident Lifecycle</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Detection and alerting</li>
                    <li>Triage and assessment</li>
                    <li>Response and resolution</li>
                    <li>Post-incident review</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Incident Classification</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Severity levels</li>
                    <li>Impact assessment</li>
                    <li>Priority determination</li>
                    <li>Escalation criteria</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="response" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Response Plans</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Response Procedures</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Initial response steps</li>
                  <li>Escalation procedures</li>
                  <li>Communication protocols</li>
                  <li>Resolution steps</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Team Roles</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Incident commander</li>
                  <li>Technical lead</li>
                  <li>Communications lead</li>
                  <li>Subject matter experts</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="communication" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Communication Channels</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Internal Communication</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Team notifications</li>
                  <li>Status updates</li>
                  <li>Collaboration tools</li>
                  <li>Documentation</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">External Communication</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Customer notifications</li>
                  <li>Status pages</li>
                  <li>Progress updates</li>
                  <li>Resolution notices</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analysis" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Post-Incident Analysis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Review Process</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Incident timeline</li>
                  <li>Root cause analysis</li>
                  <li>Impact assessment</li>
                  <li>Lessons learned</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Improvement Actions</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Action items</li>
                  <li>Process improvements</li>
                  <li>Documentation updates</li>
                  <li>Training needs</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}