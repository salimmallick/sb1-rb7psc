import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export function Feedback() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Feedback & Suggestions</h1>
        <p className="mt-2 text-muted-foreground">
          Help us improve by sharing your feedback and suggestions
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Share Your Feedback</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label>How satisfied are you with our platform?</Label>
                <RadioGroup defaultValue="satisfied">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="very-satisfied" id="very-satisfied" />
                    <Label htmlFor="very-satisfied">Very Satisfied</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="satisfied" id="satisfied" />
                    <Label htmlFor="satisfied">Satisfied</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="neutral" id="neutral" />
                    <Label htmlFor="neutral">Neutral</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="unsatisfied" id="unsatisfied" />
                    <Label htmlFor="unsatisfied">Unsatisfied</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="very-unsatisfied" id="very-unsatisfied" />
                    <Label htmlFor="very-unsatisfied">Very Unsatisfied</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="feedback">What could we improve?</Label>
                <Textarea
                  id="feedback"
                  placeholder="Share your thoughts..."
                  className="min-h-[150px]"
                />
              </div>

              <Button>Submit Feedback</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Feature Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="feature-title">Feature Title</Label>
                <input
                  id="feature-title"
                  className="w-full p-2 border rounded"
                  placeholder="Give your feature request a title"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="feature-description">Description</Label>
                <Textarea
                  id="feature-description"
                  placeholder="Describe the feature you'd like to see..."
                  className="min-h-[150px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="use-case">Use Case</Label>
                <Textarea
                  id="use-case"
                  placeholder="How would this feature benefit you?"
                  className="min-h-[100px]"
                />
              </div>

              <Button>Submit Feature Request</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}