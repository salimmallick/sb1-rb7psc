import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const logEntries = [
  {
    id: 'log-001',
    timestamp: '2024-01-20 10:15:23',
    level: 'ERROR',
    service: 'api-gateway',
    message: 'Connection timeout after 30s',
    source: 'app.middleware'
  },
  {
    id: 'log-002',
    timestamp: '2024-01-20 10:15:20',
    level: 'WARN',
    service: 'auth-service',
    message: 'Rate limit exceeded',
    source: 'auth.rate-limiter'
  },
  {
    id: 'log-003',
    timestamp: '2024-01-20 10:15:18',
    level: 'INFO',
    service: 'user-service',
    message: 'User profile updated successfully',
    source: 'user.profile'
  },
  {
    id: 'log-004',
    timestamp: '2024-01-20 10:15:15',
    level: 'ERROR',
    service: 'payment-service',
    message: 'Payment processing failed',
    source: 'payment.processor'
  },
  {
    id: 'log-005',
    timestamp: '2024-01-20 10:15:12',
    level: 'INFO',
    service: 'notification-service',
    message: 'Email notification sent',
    source: 'notification.email'
  }
];

export function LogSearchResults() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Timestamp</TableHead>
          <TableHead>Level</TableHead>
          <TableHead>Service</TableHead>
          <TableHead>Message</TableHead>
          <TableHead>Source</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {logEntries.map((log) => (
          <TableRow key={log.id}>
            <TableCell>{log.timestamp}</TableCell>
            <TableCell>
              <span
                className={`inline-block px-2 py-1 rounded-full text-xs font-semibold
                  ${
                    log.level === 'ERROR'
                      ? 'bg-red-100 text-red-800'
                      : log.level === 'WARN'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-green-100 text-green-800'
                  }`}
              >
                {log.level}
              </span>
            </TableCell>
            <TableCell>{log.service}</TableCell>
            <TableCell>{log.message}</TableCell>
            <TableCell>{log.source}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}