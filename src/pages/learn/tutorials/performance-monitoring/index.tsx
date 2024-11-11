import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { TutorialStep } from '../components/tutorial-step';
import { useState } from 'react';

const tutorialSteps = [
  {
    title: "Setting Up Performance Monitoring",
    content: (
      <div className="space-y-4">
        <p>Let's set up basic performance monitoring:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Navigate to Performance Monitoring section</li>
          <li>Configure monitoring endpoints</li>
          <li>Set up monitoring intervals</li>
          <li>Define baseline metrics</li>
          <li>Enable monitoring agents</li>
        </ol>
      </div>
    )
  },
  {
    title: "Configuring Metrics",
    content: (
      <div className="space-y-4">
        <p>Configure key performance metrics:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Select relevant metrics</li>
          <li>Set thresholds and alerts</li>
          <li>Configure data retention</li>
          <li>Set up custom metrics</li>
          <li>Enable metric aggregation</li>
        </ol>
      </div>
    )
  },
  {
    title: "Setting Up Alerts",
    content: (
      <div className="space-y-4">
        <p>Configure performance alerts:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Define alert conditions</li>
          <li>Set up notification channels</li>
          <li>Configure alert severity levels</li>
          <li>Set alert thresholds</li>
          <li>Test alert configurations</li>
        </ol>
      </div>
    )
  },
  {
    title: "Creating Dashboards",
    content: (
      <div className="space-y-4">
        <p>Build performance monitoring dashboards:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Create a new dashboard</li>
          <li>Add performance widgets</li>
          <li>Configure real-time updates</li>
          <li>Set up trend analysis</li>
          <li>Add comparison charts</li>
        </ol>
      </div>
    )
  },
  {
    title: "Advanced Analysis",
    content: (
      <div className="space-y-4">
        <p>Learn advanced performance analysis:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Use trend analysis tools</li>
          <li>Configure anomaly detection</li>
          <li>Set up performance forecasting</li>
          <li>Create custom reports</li>
          <li>Export performance data</li>
        </ol>
      </div>
    )
  }
];

export function PerformanceMonitoring() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = tutorialSteps.length;

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Performance Monitoring Tutorial</h1>
        <p className="mt-2 text-muted-foreground">
          Learn how to set up and use performance monitoring tools effectively
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Tutorial Progress</CardTitle>
            <span className="text-sm text-muted-foreground">
              Step {currentStep} of {totalSteps}
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <Progress value={(currentStep / totalSteps) * 100} className="mb-4" />
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{tutorialSteps[currentStep - 1].title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <TutorialStep>
            {tutorialSteps[currentStep - 1].content}
          </TutorialStep>

          <div className="flex justify-between mt-6">
            <Button 
              variant="outline" 
              onClick={handlePreviousStep}
              disabled={currentStep === 1}
            >
              Previous
            </Button>
            <Button 
              onClick={handleNextStep}
              disabled={currentStep === totalSteps}
            >
              {currentStep === totalSteps ? 'Complete' : 'Next'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {currentStep === totalSteps && (
        <Card>
          <CardHeader>
            <CardTitle>Tutorial Complete!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Congratulations! You've completed the Performance Monitoring tutorial. 
              You can now effectively monitor, analyze, and optimize your application's performance.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}