import { Card, CardContent } from '@/components/ui/card';
import { Search } from 'lucide-react';

export function UserInsightsEmpty() {
  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center py-12">
        <Search className="h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-lg font-semibold mb-2">No User Selected</h3>
        <p className="text-muted-foreground text-center max-w-md">
          Search for a user above to view their detailed insights, including session history,
          device information, and interaction patterns.
        </p>
      </CardContent>
    </Card>
  );
}