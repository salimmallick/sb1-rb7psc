import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const healthChecks = [
  {
    id: 'hc1',
    name: 'Connection Pool',
    status: 'healthy',
    metric: '45/50 connections',
    lastCheck: '2 mins ago',
    trend: 'stable'
  },
  {
    id: 'hc2',
    name: 'Replication Lag',
    status: 'warning',
    metric: '45ms delay',
    lastCheck: '1 min ago',
    trend: 'increasing'
  },
  {
    id: 'hc3',
    name: 'Disk Space',
    status: 'healthy',
    metric: '75% used',
    lastCheck: '5 mins ago',
    trend: 'stable'
  },
  {
    id: 'hc4',
    name: 'Cache Hit Ratio',
    status: 'healthy',
    metric: '92.5%',
    lastCheck: '1 min ago',
    trend: 'improving'
  },
  {
    id: 'hc5',
    name: 'Query Performance',
    status: 'critical',
    metric: '250ms avg',
    lastCheck: '1 min ago',
    trend: 'degrading'
  }
];

export function HealthChecksWidget() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Check Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Metric</TableHead>
          <TableHead>Last Check</TableHead>
          <TableHead>Trend</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {healthChecks.map((check) => (
          <TableRow key={check.id}>
            <TableCell className="font-medium">{check.name}</TableCell>
            <TableCell>
              <span
                className={`inline-block px-2 py-1 rounded-full text-xs font-semibold
                  ${
                    check.status === 'healthy'
                      ? 'bg-green-100 text-green-800'
                      : check.status === 'warning'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}
              >
                {check.status}
              </span>
            </TableCell>
            <TableCell>{check.metric}</TableCell>
            <TableCell>{check.lastCheck}</TableCell>
            <TableCell>
              <span
                className={`inline-block px-2 py-1 rounded-full text-xs font-semibold
                  ${
                    check.trend === 'improving'
                      ? 'bg-green-100 text-green-800'
                      : check.trend === 'stable'
                      ? 'bg-blue-100 text-blue-800'
                      : check.trend === 'degrading'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
              >
                {check.trend}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}