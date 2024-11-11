import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function CreatingDashboards() {
  const [step, setStep] = useState(1);
  const [dashboardName, setDashboardName] = useState('');
  const [layout, setLayout] = useState('grid');
  const [selectedWidgets, setSelectedWidgets] = useState<string[]>([]);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Creating Your First Dashboard</h1>
        <p className="mt-2 text-muted-foreground">
          Follow this interactive tutorial to create and customize your first dashboard.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Step {step} of 4</CardTitle>
        </CardHeader>
        <CardContent>
          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="dashboard-name">Dashboard Name</Label>
                <Input
                  id="dashboard-name"
                  value={dashboardName}
                  onChange={(e) => setDashboardName(e.target.value)}
                  placeholder="Enter dashboard name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="layout">Layout Type</Label>
                <Select value={layout} onValueChange={setLayout}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select layout" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="grid">Grid Layout</SelectItem>
                    <SelectItem value="fixed">Fixed Layout</SelectItem>
                    <SelectItem value="fluid">Fluid Layout</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h3 className="font-semibold">Select Widgets</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  'Performance Overview',
                  'User Activity',
                  'Error Rates',
                  'Response Times'
                ].map((widget) => (
                  <Card key={widget} className="p-4">
                    <div className="flex items-center justify-between">
                      <span>{widget}</span>
                      <Button
                        variant={selectedWidgets.includes(widget) ? 'default' : 'outline'}
                        onClick={() => {
                          setSelectedWidgets(
                            selectedWidgets.includes(widget)
                              ? selectedWidgets.filter((w) => w !== widget)
                              : [...selectedWidgets, widget]
                          );
                        }}
                      >
                        {selectedWidgets.includes(widget) ? 'Selected' : 'Add'}
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h3 className="font-semibold">Customize Layout</h3>
              <div className="border rounded-lg p-4 min-h-[300px]">
                <div className="grid gap-4 grid-cols-2">
                  {selectedWidgets.map((widget) => (
                    <Card key={widget} className="p-4">
                      <CardTitle className="text-sm">{widget}</CardTitle>
                      <div className="mt-4 h-32 bg-muted rounded-lg"></div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <h3 className="font-semibold">Review & Save</h3>
              <div className="space-y-2">
                <p><strong>Dashboard Name:</strong> {dashboardName}</p>
                <p><strong>Layout Type:</strong> {layout}</p>
                <p><strong>Selected Widgets:</strong></p>
                <ul className="list-disc pl-6">
                  {selectedWidgets.map((widget) => (
                    <li key={widget}>{widget}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-6">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={step === 1}
            >
              Previous
            </Button>
            <Button
              onClick={step === 4 ? () => console.log('Save dashboard') : handleNext}
            >
              {step === 4 ? 'Save Dashboard' : 'Next'}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tutorial Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="guide">
            <TabsList>
              <TabsTrigger value="guide">Step-by-Step Guide</TabsTrigger>
              <TabsTrigger value="tips">Tips & Tricks</TabsTrigger>
              <TabsTrigger value="examples">Examples</TabsTrigger>
            </TabsList>
            <TabsContent value="guide" className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">1. Dashboard Setup</h4>
                <p>Learn how to create a new dashboard and configure basic settings.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">2. Adding Widgets</h4>
                <p>Explore available widgets and add them to your dashboard.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">3. Layout Customization</h4>
                <p>Arrange and resize widgets to create your ideal layout.</p>
              </div>
            </TabsContent>
            <TabsContent value="tips" className="space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>Group related widgets together for better organization</li>
                <li>Use appropriate widget sizes for different data types</li>
                <li>Consider user workflow when arranging widgets</li>
                <li>Save different layouts for different use cases</li>
              </ul>
            </TabsContent>
            <TabsContent value="examples" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="p-4">
                  <h4 className="font-semibold">Performance Dashboard</h4>
                  <p className="text-sm text-muted-foreground">
                    Example layout focusing on system performance metrics
                  </p>
                </Card>
                <Card className="p-4">
                  <h4 className="font-semibold">User Analytics Dashboard</h4>
                  <p className="text-sm text-muted-foreground">
                    Example layout for tracking user behavior and engagement
                  </p>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}