import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const stackTraces = [
  {
    id: 'err-001',
    message: 'Connection refused: Database unavailable',
    location: 'DatabaseService.connect:45',
    occurrences: 128,
    lastSeen: '2 mins ago',
    status: 'active'
  },
  {
    id: 'err-002',
    message: 'Invalid token format in Authorization header',
    location: 'AuthMiddleware.validate:23',
    occurrences: 89,
    lastSeen: '5 mins ago',
    status: 'resolved'
  },
  {
    id: 'err-003',
    message: 'Payment gateway timeout',
    location: 'PaymentService.process:78',
    occurrences: 67,
    lastSeen: '8 mins ago',
    status: 'investigating'
  },
  {
    id: 'err-004',
    message: 'Rate limit exceeded for API key',
    location: 'RateLimiter.check:34',
    occurrences: 245,
    lastSeen: '1 min ago',
    status: 'active'
  },
  {
    id: 'err-005',
    message: 'Cache invalidation failed',
    location: 'CacheService.invalidate:56',
    occurrences: 45,
    lastSeen: '15 mins ago',
    status: 'resolved'
  }
];

export function ErrorStackTraceWidget() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Error Message</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Occurrences</TableHead>
          <TableHead>Last Seen</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {stackTraces.map((trace) => (
          <TableRow key={trace.id}>
            <TableCell className="font-medium">{trace.message}</TableCell>
            <TableCell className="font-mono text-sm">{trace.location}</TableCell>
            <TableCell>{trace.occurrences}</TableCell>
            <TableCell>{trace.lastSeen}</TableCell>
            <TableCell>
              <span
                className={`inline-block px-2 py-1 rounded-full text-xs font-semibold
                  ${
                    trace.status === 'active'
                      ? 'bg-red-100 text-red-800'
                      : trace.status === 'resolved'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
              >
                {trace.status}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}