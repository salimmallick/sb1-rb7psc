import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';

export function IntegrationSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Integrations</h1>
        <p className="mt-2 text-muted-foreground">
          Connect and manage third-party integrations.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Slack Integration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h4 className="font-medium">Connect Slack Workspace</h4>
                <p className="text-sm text-muted-foreground">
                  Send notifications and invites directly to your Slack workspace
                </p>
              </div>
              <Switch />
            </div>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="webhook-url">Slack Webhook URL</Label>
                <Input id="webhook-url" placeholder="https://hooks.slack.com/..." />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="channel">Default Channel</Label>
                <Input id="channel" placeholder="#general" />
              </div>
              <div className="flex items-center space-x-2">
                <Button>Test Connection</Button>
                <Button variant="outline">Configure Notifications</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cloud Providers</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h4 className="font-medium">AWS</h4>
                <p className="text-sm text-muted-foreground">Amazon Web Services integration</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h4 className="font-medium">Google Cloud</h4>
                <p className="text-sm text-muted-foreground">Google Cloud Platform integration</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h4 className="font-medium">Azure</h4>
                <p className="text-sm text-muted-foreground">Microsoft Azure integration</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Monitoring Tools</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h4 className="font-medium">Datadog</h4>
                <p className="text-sm text-muted-foreground">Infrastructure monitoring</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h4 className="font-medium">New Relic</h4>
                <p className="text-sm text-muted-foreground">Application performance monitoring</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h4 className="font-medium">PagerDuty</h4>
                <p className="text-sm text-muted-foreground">Incident management</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}