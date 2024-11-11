import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const alertHistory = [
  {
    id: 'alert-1',
    rule: 'High Error Rate',
    timestamp: '2024-01-20 10:15:23',
    status: 'resolved',
    duration: '15m',
    action: 'Auto-resolved'
  },
  {
    id: 'alert-2',
    rule: 'API Latency',
    timestamp: '2024-01-20 10:10:15',
    status: 'active',
    duration: '20m',
    action: 'Investigating'
  },
  {
    id: 'alert-3',
    rule: 'Database Errors',
    timestamp: '2024-01-20 09:55:30',
    status: 'resolved',
    duration: '10m',
    action: 'Manual resolution'
  },
  {
    id: 'alert-4',
    rule: 'Auth Failures',
    timestamp: '2024-01-20 09:45:12',
    status: 'resolved',
    duration: '5m',
    action: 'Auto-resolved'
  },
  {
    id: 'alert-5',
    rule: 'Disk Usage',
    timestamp: '2024-01-20 09:30:45',
    status: 'active',
    duration: '35m',
    action: 'Escalated'
  }
];

export function AlertHistoryWidget() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Alert Rule</TableHead>
          <TableHead>Time</TableHead>
          <TableHead>Duration</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {alertHistory.map((alert) => (
          <TableRow key={alert.id}>
            <TableCell className="font-medium">{alert.rule}</TableCell>
            <TableCell>{alert.timestamp}</TableCell>
            <TableCell>{alert.duration}</TableCell>
            <TableCell>
              <span
                className={`inline-block px-2 py-1 rounded-full text-xs font-semibold
                  ${
                    alert.status === 'active'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-green-100 text-green-800'
                  }`}
              >
                {alert.status}
              </span>
            </TableCell>
            <TableCell>{alert.action}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}