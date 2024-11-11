import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface UserSegmentsProps {
  userId: string;
}

export function UserSegments({ userId }: UserSegmentsProps) {
  // Mock data - replace with actual API call
  const segments = [
    {
      name: 'Power User',
      description: 'Uses the platform frequently with high engagement',
      confidence: 95
    },
    {
      name: 'Enterprise',
      description: 'Part of an enterprise organization',
      confidence: 100
    },
    {
      name: 'Early Adopter',
      description: 'Frequently tries new features',
      confidence: 85
    }
  ];

  const traits = [
    'Technical Decision Maker',
    'Regular Contributor',
    'API User',
    'Dashboard Power User'
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>User Segments & Traits</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="text-sm font-semibold mb-3">Segments</h4>
          <div className="space-y-4">
            {segments.map((segment) => (
              <div key={segment.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{segment.name}</span>
                  <Badge variant="outline">{segment.confidence}% confidence</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{segment.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Traits</h4>
          <div className="flex flex-wrap gap-2">
            {traits.map((trait) => (
              <Badge key={trait} variant="secondary">{trait}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}