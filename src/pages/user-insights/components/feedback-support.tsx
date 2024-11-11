import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface FeedbackSupportProps {
  userId: string;
}

export function FeedbackSupport({ userId }: FeedbackSupportProps) {
  const tickets = [
    {
      id: 'ticket_123',
      date: '2024-01-20',
      type: 'Support',
      status: 'Resolved',
      satisfaction: '5/5'
    },
    {
      id: 'ticket_124',
      date: '2024-01-15',
      type: 'Feature Request',
      status: 'In Progress',
      satisfaction: '4/5'
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Feedback & Support</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Ticket ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Satisfaction</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tickets.map((ticket) => (
              <TableRow key={ticket.id}>
                <TableCell className="font-medium">{ticket.id}</TableCell>
                <TableCell>{ticket.date}</TableCell>
                <TableCell>{ticket.type}</TableCell>
                <TableCell>{ticket.status}</TableCell>
                <TableCell>{ticket.satisfaction}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}