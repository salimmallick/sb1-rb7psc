import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const patterns = [
  {
    id: 'p1',
    pattern: 'Authentication Failed - Invalid Credentials',
    regex: '^Authentication failed for user.*$',
    matches: 2500,
    severity: 'high',
    firstSeen: '2024-01-15',
    lastSeen: '2 mins ago'
  },
  {
    id: 'p2',
    pattern: 'Connection Timeout - Database',
    regex: '^Database connection timeout after.*$',
    matches: 1800,
    severity: 'medium',
    firstSeen: '2024-01-16',
    lastSeen: '5 mins ago'
  },
  {
    id: 'p3',
    pattern: 'Resource Not Found - API Endpoint',
    regex: '^404 Not Found: /api/.*$',
    matches: 1500,
    severity: 'medium',
    firstSeen: '2024-01-17',
    lastSeen: '8 mins ago'
  },
  {
    id: 'p4',
    pattern: 'Permission Denied - Access Control',
    regex: '^Access denied for resource.*$',
    matches: 1200,
    severity: 'high',
    firstSeen: '2024-01-18',
    lastSeen: '12 mins ago'
  },
  {
    id: 'p5',
    pattern: 'Database Error - Query Execution',
    regex: '^Error executing query:.*$',
    matches: 1000,
    severity: 'critical',
    firstSeen: '2024-01-19',
    lastSeen: '15 mins ago'
  }
];

export function PatternDetailsWidget() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Pattern</TableHead>
          <TableHead>Regex</TableHead>
          <TableHead>Matches</TableHead>
          <TableHead>Severity</TableHead>
          <TableHead>First Seen</TableHead>
          <TableHead>Last Seen</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {patterns.map((pattern) => (
          <TableRow key={pattern.id}>
            <TableCell className="font-medium">{pattern.pattern}</TableCell>
            <TableCell className="font-mono text-sm">{pattern.regex}</TableCell>
            <TableCell>{pattern.matches}</TableCell>
            <TableCell>
              <span
                className={`inline-block px-2 py-1 rounded-full text-xs font-semibold
                  ${
                    pattern.severity === 'critical'
                      ? 'bg-red-100 text-red-800'
                      : pattern.severity === 'high'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}
              >
                {pattern.severity}
              </span>
            </TableCell>
            <TableCell>{pattern.firstSeen}</TableCell>
            <TableCell>{pattern.lastSeen}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}