import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const traces = [
  {
    id: 'trace-001',
    name: '/api/users/profile',
    duration: '245ms',
    services: 5,
    status: 'success',
    timestamp: '2024-01-20 10:15:23'
  },
  {
    id: 'trace-002',
    name: '/api/products/search',
    duration: '180ms',
    services: 4,
    status: 'error',
    timestamp: '2024-01-20 10:15:20'
  },
  {
    id: 'trace-003',
    name: '/api/orders/create',
    duration: '320ms',
    services: 6,
    status: 'success',
    timestamp: '2024-01-20 10:15:18'
  },
  {
    id: 'trace-004',
    name: '/api/auth/login',
    duration: '150ms',
    services: 3,
    status: 'success',
    timestamp: '2024-01-20 10:15:15'
  },
  {
    id: 'trace-005',
    name: '/api/payments/process',
    duration: '280ms',
    services: 5,
    status: 'warning',
    timestamp: '2024-01-20 10:15:12'
  }
];

export function TraceListWidget() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Trace ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Duration</TableHead>
          <TableHead>Services</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Timestamp</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {traces.map((trace) => (
          <TableRow key={trace.id}>
            <TableCell className="font-mono">{trace.id}</TableCell>
            <TableCell>{trace.name}</TableCell>
            <TableCell>{trace.duration}</TableCell>
            <TableCell>{trace.services}</TableCell>
            <TableCell>
              <span
                className={`inline-block px-2 py-1 rounded-full text-xs font-semibold
                  ${
                    trace.status === 'success'
                      ? 'bg-green-100 text-green-800'
                      : trace.status === 'error'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
              >
                {trace.status}
              </span>
            </TableCell>
            <TableCell>{trace.timestamp}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}