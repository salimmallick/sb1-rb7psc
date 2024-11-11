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
    message: 'Foreign key constraint violation on users.department_id',
    location: 'INSERT INTO users (department_id) VALUES (?)',
    occurrences: 128,
    lastSeen: '2 mins ago',
    status: 'active'
  },
  {
    id: 'err-002',
    message: 'Column "user_name" does not exist in table "users"',
    location: 'SELECT user_name FROM users WHERE id = ?',
    occurrences: 89,
    lastSeen: '5 mins ago',
    status: 'resolved'
  },
  {
    id: 'err-003',
    message: 'Lock wait timeout exceeded',
    location: 'UPDATE products SET stock = ? WHERE id = ?',
    occurrences: 67,
    lastSeen: '8 mins ago',
    status: 'investigating'
  },
  {
    id: 'err-004',
    message: 'Query execution timeout after 30 seconds',
    location: 'SELECT * FROM orders JOIN users JOIN products',
    occurrences: 45,
    lastSeen: '12 mins ago',
    status: 'active'
  },
  {
    id: 'err-005',
    message: 'Deadlock found during transaction',
    location: 'UPDATE inventory SET quantity = quantity - 1',
    occurrences: 34,
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
          <TableHead>Query</TableHead>
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