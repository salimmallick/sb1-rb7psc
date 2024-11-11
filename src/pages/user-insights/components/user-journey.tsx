import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronRight, Download } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { downloadCSV } from '@/lib/export-utils';

interface UserJourneyProps {
  userId: string;
}

interface JourneyStep {
  date: string;
  event: string;
  details: string;
  category: string;
  metadata?: {
    location?: string;
    device?: string;
    duration?: string;
    previousPage?: string;
    nextPage?: string;
    eventProperties?: Record<string, string | number>;
  };
  relatedEvents?: Array<{
    date: string;
    event: string;
    details: string;
  }>;
}

export function UserJourney({ userId }: UserJourneyProps) {
  const [selectedStep, setSelectedStep] = useState<JourneyStep | null>(null);

  // Mock data - replace with actual API call
  const journeySteps: JourneyStep[] = [
    {
      date: '2024-01-01',
      event: 'Sign Up',
      details: 'Created account via Google OAuth',
      category: 'Account',
      metadata: {
        location: 'New York, USA',
        device: 'Chrome on MacOS',
        duration: '2m 30s',
        eventProperties: {
          referrer: 'Direct',
          signupMethod: 'Google OAuth',
          completedFields: 5
        }
      }
    },
    {
      date: '2024-01-01',
      event: 'First Login',
      details: 'Completed onboarding process',
      category: 'Onboarding',
      metadata: {
        location: 'New York, USA',
        device: 'Chrome on MacOS',
        duration: '15m 45s',
        eventProperties: {
          completedSteps: 4,
          skippedSteps: 0,
          selectedPreferences: ['Analytics', 'Monitoring']
        }
      },
      relatedEvents: [
        {
          date: '2024-01-01 10:15:00',
          event: 'Profile Setup',
          details: 'Completed personal information'
        },
        {
          date: '2024-01-01 10:20:00',
          event: 'Team Setup',
          details: 'Created first team'
        }
      ]
    },
    {
      date: '2024-01-02',
      event: 'Feature Usage',
      details: 'Created first dashboard',
      category: 'Product',
      metadata: {
        location: 'New York, USA',
        device: 'Chrome on MacOS',
        duration: '45m 20s',
        previousPage: '/templates',
        nextPage: '/dashboards/edit',
        eventProperties: {
          templateUsed: 'Analytics Overview',
          widgetsAdded: 8,
          savedVersions: 3
        }
      }
    },
    {
      date: '2024-01-05',
      event: 'Upgrade',
      details: 'Upgraded to Pro plan',
      category: 'Billing',
      metadata: {
        location: 'New York, USA',
        device: 'Chrome on MacOS',
        duration: '5m 15s',
        previousPage: '/pricing',
        eventProperties: {
          previousPlan: 'Free',
          newPlan: 'Pro',
          annualBilling: true,
          amount: 588
        }
      }
    },
    {
      date: '2024-01-10',
      event: 'Integration',
      details: 'Connected GitHub account',
      category: 'Integration',
      metadata: {
        location: 'New York, USA',
        device: 'Chrome on MacOS',
        duration: '3m 45s',
        eventProperties: {
          provider: 'GitHub',
          repositories: 12,
          accessLevel: 'Read & Write'
        }
      }
    }
  ];

  const handleExport = () => {
    const exportData = journeySteps.map(step => ({
      Date: step.date,
      Event: step.event,
      Category: step.category,
      Details: step.details,
      Location: step.metadata?.location,
      Device: step.metadata?.device,
      Duration: step.metadata?.duration
    }));
    
    downloadCSV(exportData, `user-journey-${userId}.csv`);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>User Journey</CardTitle>
        <Button variant="outline" size="sm" onClick={handleExport}>
          <Download className="h-4 w-4 mr-2" />
          Export Journey
        </Button>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-8">
            {journeySteps.map((step, index) => (
              <div key={index} className="relative flex gap-6">
                <div className="absolute left-8 top-8 -bottom-[32px] w-px bg-border last:hidden" />
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border bg-background">
                  <Badge variant="outline">{step.category}</Badge>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold">{step.event}</h4>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{step.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{step.details}</p>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setSelectedStep(step)}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Dialog open={!!selectedStep} onOpenChange={() => setSelectedStep(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{selectedStep?.event}</DialogTitle>
              <DialogDescription>
                Detailed information about this journey event
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
              {selectedStep?.metadata && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">{selectedStep.metadata.location}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Device</p>
                    <p className="font-medium">{selectedStep.metadata.device}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-medium">{selectedStep.metadata.duration}</p>
                  </div>
                  {selectedStep.metadata.previousPage && (
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Previous Page</p>
                      <p className="font-medium">{selectedStep.metadata.previousPage}</p>
                    </div>
                  )}
                </div>
              )}

              {selectedStep?.metadata?.eventProperties && (
                <div>
                  <h4 className="text-sm font-semibold mb-3">Event Properties</h4>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Property</TableHead>
                        <TableHead>Value</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {Object.entries(selectedStep.metadata.eventProperties).map(([key, value]) => (
                        <TableRow key={key}>
                          <TableCell className="font-medium">
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                          </TableCell>
                          <TableCell>{value.toString()}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}

              {selectedStep?.relatedEvents && selectedStep.relatedEvents.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold mb-3">Related Events</h4>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Time</TableHead>
                        <TableHead>Event</TableHead>
                        <TableHead>Details</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {selectedStep.relatedEvents.map((event, index) => (
                        <TableRow key={index}>
                          <TableCell>{event.date}</TableCell>
                          <TableCell>{event.event}</TableCell>
                          <TableCell>{event.details}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}