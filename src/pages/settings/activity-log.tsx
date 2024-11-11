import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const activityData = [
  {
    id: 1,
    action: 'Password Changed',
    user: 'John Doe',
    timestamp: '2024-01-20 14:30:00',
    ip: '192.168.1.1',
    status: 'success'
  },
  {
    id: 2,
    action: 'Team Member Invited',
    user: 'Jane Smith',
    timestamp: '2024-01-20 13:15:00',
    ip: '192.168.1.2',
    status: 'success'
  },
  {
    id: 3,
    action: 'API Key Generated',
    user: 'Admin User',
    timestamp: '2024-01-20 12:45:00',
    ip: '192.168.1.3',
    status: 'success'
  }
];

export function ActivityLog() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Activity Log</h1>
        <p className="mt-2 text-muted-foreground">
          Track all activities and changes in your account.
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Recent Activities</CardTitle>
            <div className="flex space-x-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Activities</SelectItem>
                  <SelectItem value="security">Security</SelectItem>
                  <SelectItem value="team">Team</SelectItem>
                  <SelectItem value="api">API</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Action</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Timestamp</TableHead>
                <TableHead>IP Address</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {activityData.map((activity) => (
                <TableRow key={activity.id}>
                  <TableCell className="font-medium">{activity.action}</TableCell>
                  <TableCell>{activity.user}</TableCell>
                  <TableCell>{activity.timestamp}</TableCell>
                  <TableCell>{activity.ip}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      activity.status === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {activity.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}