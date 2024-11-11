import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export function NotificationSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Notification Settings</h1>
        <p className="mt-2 text-muted-foreground">
          Configure how and when you receive notifications.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Email Notifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="alerts" />
              <Label htmlFor="alerts">Critical Alerts</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="reports" />
              <Label htmlFor="reports">Daily Reports</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="updates" />
              <Label htmlFor="updates">System Updates</Label>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>In-App Notifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="real-time" />
              <Label htmlFor="real-time">Real-time Alerts</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="performance" />
              <Label htmlFor="performance">Performance Issues</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="security" />
              <Label htmlFor="security">Security Events</Label>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button>Save Preferences</Button>
        </div>
      </div>
    </div>
  );
}