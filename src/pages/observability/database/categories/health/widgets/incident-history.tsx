import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const incidents = [
  {
    id: 'inc1',
    type: 'High CPU Usage',
    duration: '45 mins',
    impact: 'medium',
    resolution: 'Auto-scaled resources',
    date: '2024-01-19'
  },
  {
    id: 'inc2',
    type: 'Replication Lag',
    duration: '30 mins',
    impact: 'low',
    resolution: 'Network optimization',
    date: '2024-01-18'
  },
  {
    id: 'inc3',
    type: 'Connection Timeout',
    duration: '15 mins',
    impact: 'high',
    resolution: 'Configuration update',
    date: '2024-01-17'
  },
  {
    id: 'inc4',
    type: 'Disk Space Alert',
    duration: '60 mins',
    impact: 'medium',
    resolution: 'Cleanup old data',
    date: '2024-01-16'
  },
  {
    id: 'inc5',
    type: 'Slow Queries',
    duration: '25 mins',
    impact: 'low',
    resolution: 'Index optimization',
    date: '2024-01-15'
  }
];

export function IncidentHistoryWidget() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Type</TableHead>
          <TableHead>Duration</TableHead>
          <TableHead>Impact</TableHead>
          <TableHead>Resolution</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {incidents.map((incident) => (
          <TableRow key={incident.id}>
            <TableCell className="font-medium">{incident.type}</TableCell>
            <TableCell>{incident.duration}</TableCell>
            <TableCell>
              <span
                className={`inline-block px-2 py-1 rounded-full text-xs font-semibold
                  ${
                    incident.impact === 'low'
                      ? 'bg-green-100 text-green-800'
                      : incident.impact === 'medium'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}
              >
                {incident.impact}
              </span>
            </TableCell>
            <TableCell>{incident.resolution}</TableCell>
            <TableCell>{incident.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}