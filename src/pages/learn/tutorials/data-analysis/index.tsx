import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useState } from 'react';

export function DataAnalysis() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

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
        <h1 className="text-3xl font-bold">Data Analysis Tutorial</h1>
        <p className="mt-2 text-muted-foreground">
          Learn how to analyze and visualize data using theData.io platform
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
          <CardTitle>
            {currentStep === 1 && "Setting Up Data Sources"}
            {currentStep === 2 && "Creating Data Views"}
            {currentStep === 3 && "Building Visualizations"}
            {currentStep === 4 && "Adding Filters"}
            {currentStep === 5 && "Sharing Insights"}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {currentStep === 1 && (
            <div className="space-y-4">
              <p>Let's start by connecting your data sources:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Navigate to the Data Sources section</li>
                <li>Click "Add New Data Source"</li>
                <li>Select your data source type</li>
                <li>Configure the connection settings</li>
                <li>Test the connection</li>
              </ol>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
              <p>Now, let's create custom views of your data:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Go to Data Views</li>
                <li>Click "Create New View"</li>
                <li>Select fields to include</li>
                <li>Apply transformations</li>
                <li>Save your view</li>
              </ol>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4">
              <p>Time to create visualizations:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Open the Visualization Builder</li>
                <li>Choose a chart type</li>
                <li>Map your data fields</li>
                <li>Customize appearance</li>
                <li>Preview and adjust</li>
              </ol>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-4">
              <p>Let's add interactive filters:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Select "Add Filter"</li>
                <li>Choose filter type</li>
                <li>Configure filter options</li>
                <li>Set default values</li>
                <li>Test filter behavior</li>
              </ol>
            </div>
          )}

          {currentStep === 5 && (
            <div className="space-y-4">
              <p>Finally, share your insights:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Click "Share" button</li>
                <li>Set permissions</li>
                <li>Choose sharing method</li>
                <li>Generate sharing link</li>
                <li>Send to stakeholders</li>
              </ol>
            </div>
          )}

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
              Congratulations! You've completed the Data Analysis tutorial. 
              You can now create powerful data visualizations and share insights 
              across your organization.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}