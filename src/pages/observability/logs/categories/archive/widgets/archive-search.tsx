import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const archiveSearchResults = [
  {
    id: 'as1',
    timestamp: '2023-12-15 10:30:45',
    source: 'Application Server',
    type: 'Error',
    message: 'Database connection timeout',
    size: '2.5 MB',
    retention: '365 days'
  },
  {
    id: 'as2',
    timestamp: '2023-12-14 15:20:30',
    source: 'Security Gateway',
    type: 'Warning',
    message: 'Failed login attempt',
    size: '1.8 MB',
    retention: '730 days'
  },
  {
    id: 'as3',
    timestamp: '2023-12-13 08:45:15',
    source: 'Load Balancer',
    type: 'Info',
    message: 'Service configuration updated',
    size: '1.2 MB',
    retention: '90 days'
  },
  {
    id: 'as4',
    timestamp: '2023-12-12 22:10:55',
    source: 'Authentication Service',
    type: 'Error',
    message: 'Token validation failed',
    size: '2.1 MB',
    retention: '365 days'
  },
  {
    id: 'as5',
    timestamp: '2023-12-11 14:05:25',
    source: 'Monitoring System',
    type: 'Warning',
    message: 'High CPU utilization',
    size: '1.5 MB',
    retention: '180 days'
  }
];

export function ArchiveSearchWidget() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Timestamp</TableHead>
          <TableHead>Source</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Message</TableHead>
          <TableHead>Size</TableHead>
          <TableHead>Retention</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {archiveSearchResults.map((result) => (
          <TableRow key={result.id}>
            <TableCell>{result.timestamp}</TableCell>
            <TableCell>{result.source}</TableCell>
            <TableCell>
              <span
                className={`inline-block px-2 py-1 rounded-full text-xs font-semibold
                  ${
                    result.type === 'Error'
                      ? 'bg-red-100 text-red-800'
                      : result.type === 'Warning'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}
              >
                {result.type}
              </span>
            </TableCell>
            <TableCell>{result.message}</TableCell>
            <TableCell>{result.size}</TableCell>
            <TableCell>{result.retention}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}