import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface SessionHistoryProps {
  userId: string;
}

export function SessionHistory({ userId }: SessionHistoryProps) {
  const sessions = [
    {
      id: 'sess_123',
      startTime: '2024-01-20 14:30:00',
      endTime: '2024-01-20 15:45:00',
      duration: '1h 15m',
      actions: 45
    },
    {
      id: 'sess_124',
      startTime: '2024-01-20 10:15:00',
      endTime: '2024-01-20 11:30:00',
      duration: '1h 15m',
      actions: 32
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Session History</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Session ID</TableHead>
              <TableHead>Start Time</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sessions.map((session) => (
              <TableRow key={session.id}>
                <TableCell className="font-medium">{session.id}</TableCell>
                <TableCell>{session.startTime}</TableCell>
                <TableCell>{session.duration}</TableCell>
                <TableCell>{session.actions}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}