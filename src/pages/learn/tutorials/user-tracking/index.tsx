import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { TutorialStep } from '../components/tutorial-step';
import { useState } from 'react';

const tutorialSteps = [
  {
    title: "Setting Up User Tracking",
    content: (
      <div className="space-y-4">
        <p>Let's set up basic user tracking:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Navigate to User Analytics section</li>
          <li>Configure tracking parameters</li>
          <li>Set up user identification</li>
          <li>Define user properties</li>
          <li>Enable tracking consent management</li>
        </ol>
      </div>
    )
  },
  {
    title: "User Event Tracking",
    content: (
      <div className="space-y-4">
        <p>Configure event tracking:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Define custom events</li>
          <li>Set up event properties</li>
          <li>Configure event triggers</li>
          <li>Set up event validation</li>
          <li>Enable event filtering</li>
        </ol>
      </div>
    )
  },
  {
    title: "User Journey Mapping",
    content: (
      <div className="space-y-4">
        <p>Set up user journey tracking:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Define journey stages</li>
          <li>Configure touchpoints</li>
          <li>Set up conversion tracking</li>
          <li>Enable funnel analysis</li>
          <li>Configure journey visualization</li>
        </ol>
      </div>
    )
  },
  {
    title: "User Segmentation",
    content: (
      <div className="space-y-4">
        <p>Create user segments:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Define segment criteria</li>
          <li>Set up dynamic segments</li>
          <li>Configure segment analytics</li>
          <li>Enable segment comparison</li>
          <li>Set up segment alerts</li>
        </ol>
      </div>
    )
  },
  {
    title: "Analysis & Reporting",
    content: (
      <div className="space-y-4">
        <p>Set up analysis tools:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Configure analytics dashboards</li>
          <li>Set up automated reports</li>
          <li>Enable data export</li>
          <li>Configure custom metrics</li>
          <li>Set up sharing permissions</li>
        </ol>
      </div>
    )
  }
];

export function UserTracking() {
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
        <h1 className="text-3xl font-bold">User Tracking Tutorial</h1>
        <p className="mt-2 text-muted-foreground">
          Learn how to implement and analyze user tracking effectively
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
              Congratulations! You've completed the User Tracking tutorial. 
              You can now effectively track, analyze, and optimize user behavior across your application.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}