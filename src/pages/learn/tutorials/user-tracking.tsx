import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

export function UserTracking() {
  const [eventName, setEventName] = useState('');
  const [eventCategory, setEventCategory] = useState('');
  const [properties, setProperties] = useState<string[]>([]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">User Tracking Tutorial</h1>
        <p className="mt-2 text-muted-foreground">
          Learn how to implement and analyze user tracking in your application.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Event Configuration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="event-name">Event Name</Label>
              <Input
                id="event-name"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                placeholder="e.g., button_click"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Event Category</Label>
              <Select value={eventCategory} onValueChange={setEventCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="interaction">User Interaction</SelectItem>
                  <SelectItem value="navigation">Navigation</SelectItem>
                  <SelectItem value="conversion">Conversion</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Event Properties</Label>
            <div className="grid gap-2">
              {[
                'timestamp',
                'user_id',
                'page_url',
                'device_type',
                'session_id'
              ].map((prop) => (
                <div key={prop} className="flex items-center space-x-2">
                  <Checkbox
                    id={prop}
                    checked={properties.includes(prop)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setProperties([...properties, prop]);
                      } else {
                        setProperties(properties.filter((p) => p !== prop));
                      }
                    }}
                  />
                  <Label htmlFor={prop}>{prop}</Label>
                </div>
              ))}
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h4 className="font-semibold mb-4">Preview Event Code</h4>
            <pre className="bg-muted p-4 rounded-lg text-sm">
              {`trackEvent({
  name: "${eventName || 'event_name'}",
  category: "${eventCategory || 'category'}",
  properties: {
${properties.map((prop) => `    ${prop}: "value"`).join(',\n')}
  }
});`}
            </pre>
          </div>

          <div className="flex justify-end space-x-2">
            <Button variant="outline">Copy Code</Button>
            <Button>Test Event</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Learning Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="implementation">
            <TabsList>
              <TabsTrigger value="implementation">Implementation</TabsTrigger>
              <TabsTrigger value="analysis">Analysis</TabsTrigger>
              <TabsTrigger value="privacy">Privacy & Compliance</TabsTrigger>
            </TabsList>

            <TabsContent value="implementation" className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Event Tracking</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Automatic page view tracking</li>
                  <li>Custom event tracking</li>
                  <li>User identification</li>
                  <li>Session management</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Data Collection</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Client-side tracking</li>
                  <li>Server-side tracking</li>
                  <li>Batch processing</li>
                  <li>Real-time streaming</li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="analysis" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="p-4">
                  <h4 className="font-semibold">User Journey Analysis</h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    Track and analyze user paths through your application.
                  </p>
                </Card>
                <Card className="p-4">
                  <h4 className="font-semibold">Conversion Tracking</h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    Monitor and optimize conversion funnels.
                  </p>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="privacy" className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Privacy Considerations</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Data anonymization</li>
                  <li>Consent management</li>
                  <li>Data retention policies</li>
                  <li>GDPR compliance</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Best Practices</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Minimize personal data collection</li>
                  <li>Implement data encryption</li>
                  <li>Regular privacy audits</li>
                  <li>User opt-out mechanisms</li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}