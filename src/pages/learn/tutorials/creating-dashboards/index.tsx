import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { TutorialStep } from './components/tutorial-step';
import { useState } from 'react';

const tutorialSteps = [
  {
    title: "Creating Your First Dashboard",
    content: (
      <div className="space-y-4">
        <p>Let's start by creating your first dashboard:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Click the "New Dashboard" button in the top navigation</li>
          <li>Choose a template or start from scratch</li>
          <li>Give your dashboard a meaningful name</li>
          <li>Set visibility and sharing permissions</li>
          <li>Click "Create Dashboard"</li>
        </ol>
      </div>
    )
  },
  {
    title: "Adding Widgets",
    content: (
      <div className="space-y-4">
        <p>Now, let's add some widgets to your dashboard:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Click the "Add Widget" button</li>
          <li>Choose from available widget types</li>
          <li>Configure widget data source</li>
          <li>Customize widget appearance</li>
          <li>Position the widget on your dashboard</li>
        </ol>
      </div>
    )
  },
  {
    title: "Configuring Layouts",
    content: (
      <div className="space-y-4">
        <p>Let's organize your dashboard layout:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Drag widgets to reposition them</li>
          <li>Resize widgets as needed</li>
          <li>Create widget groups</li>
          <li>Set responsive breakpoints</li>
          <li>Save layout changes</li>
        </ol>
      </div>
    )
  },
  {
    title: "Adding Interactivity",
    content: (
      <div className="space-y-4">
        <p>Enhance your dashboard with interactive features:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Add global filters</li>
          <li>Configure widget linking</li>
          <li>Set up drill-down actions</li>
          <li>Add custom controls</li>
          <li>Test interactive features</li>
        </ol>
      </div>
    )
  },
  {
    title: "Sharing and Collaboration",
    content: (
      <div className="space-y-4">
        <p>Finally, share your dashboard with others:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set access permissions</li>
          <li>Generate sharing links</li>
          <li>Schedule automated exports</li>
          <li>Configure email reports</li>
          <li>Add collaborators</li>
        </ol>
      </div>
    )
  }
];

export function CreatingDashboards() {
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
        <h1 className="text-3xl font-bold">Creating Dashboards Tutorial</h1>
        <p className="mt-2 text-muted-foreground">
          Learn how to create and customize powerful dashboards in theData.io
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
              Congratulations! You've completed the Creating Dashboards tutorial. 
              You can now create and customize powerful dashboards to visualize your data 
              and share insights with your team.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}