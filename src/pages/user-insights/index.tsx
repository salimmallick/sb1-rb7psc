import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserSearch } from './components/user-search';
import { UserProfile } from './components/user-profile';
import { DeviceInformation } from './components/device-information';
import { GeolocationData } from './components/geolocation-data';
import { SessionHistory } from './components/session-history';
import { InteractionTracking } from './components/interaction-tracking';
import { FeedbackSupport } from './components/feedback-support';
import { UserInsightsEmpty } from './components/user-insights-empty';
import { UserActivity } from './components/user-activity';
import { UserSegments } from './components/user-segments';
import { UserJourney } from './components/user-journey';

export interface User {
  id: string;
  name: string;
  email: string;
  status: 'active' | 'inactive';
  registrationDate: string;
  lastActive: string;
  plan: string;
  company?: string;
  role?: string;
  phoneNumber?: string;
  totalSpent: number;
  lifetimeValue: number;
}

export function UserInsights() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">User Insights</h1>
        <p className="mt-2 text-muted-foreground">
          Search and analyze detailed user behavior and interactions.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>User Search</CardTitle>
        </CardHeader>
        <CardContent>
          <UserSearch onUserSelect={setSelectedUser} />
        </CardContent>
      </Card>

      {selectedUser ? (
        <div className="grid gap-6">
          <div className="grid gap-6 md:grid-cols-2">
            <UserProfile user={selectedUser} />
            <UserSegments userId={selectedUser.id} />
          </div>
          
          <UserJourney userId={selectedUser.id} />
          
          <div className="grid gap-6 md:grid-cols-2">
            <DeviceInformation userId={selectedUser.id} />
            <GeolocationData userId={selectedUser.id} />
          </div>
          
          <UserActivity userId={selectedUser.id} />
          
          <div className="grid gap-6 md:grid-cols-2">
            <InteractionTracking userId={selectedUser.id} />
            <SessionHistory userId={selectedUser.id} />
          </div>
          
          <FeedbackSupport userId={selectedUser.id} />
        </div>
      ) : (
        <UserInsightsEmpty />
      )}
    </div>
  );
}