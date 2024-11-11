import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { User } from '..';

interface UserProfileProps {
  user: User;
}

export function UserProfile({ user }: UserProfileProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Profile</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center space-x-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src={`https://avatar.vercel.sh/${user.id}`} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-xl font-semibold">{user.name}</h3>
            <p className="text-sm text-muted-foreground">{user.email}</p>
            <div className="mt-2 flex space-x-2">
              <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
                {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
              </Badge>
              <Badge variant="outline">{user.plan}</Badge>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Registration Date</p>
              <p className="font-medium">{user.registrationDate}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Last Active</p>
              <p className="font-medium">{user.lastActive}</p>
            </div>
          </div>

          {user.company && (
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Company</p>
              <p className="font-medium">{user.company}</p>
            </div>
          )}

          {user.role && (
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Role</p>
              <p className="font-medium">{user.role}</p>
            </div>
          )}

          {user.phoneNumber && (
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Phone Number</p>
              <p className="font-medium">{user.phoneNumber}</p>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 pt-4 border-t">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Total Spent</p>
              <p className="text-xl font-bold">${user.totalSpent.toLocaleString()}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Lifetime Value</p>
              <p className="text-xl font-bold">${user.lifetimeValue.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}