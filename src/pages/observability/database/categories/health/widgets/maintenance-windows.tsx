import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const maintenanceWindows = [
  {
    id: 'mw1',
    type: 'Backup',
    schedule: 'Daily @ 02:00 UTC',
    duration: '30 mins',
    impact: 'none',
    status: 'scheduled'
  },
  {
    id: 'mw2',
    type: 'Index Rebuild',
    schedule: 'Weekly @ Sun 03:00 UTC',
    duration: '2 hours',
    impact: 'low',
    status: 'in_progress'
  },
  {
    id: 'mw3',
    type: 'Version Upgrade',
    schedule: '2024-02-01 01:00 UTC',
    duration: '4 hours',
    impact: 'medium',
    status: 'scheduled'
  },
  {
    id: 'mw4',
    type: 'Storage Expansion',
    schedule: '2024-01-25 02:00 UTC',
    duration: '1 hour',
    impact: 'low',
    status: 'completed'
  },
  {
    id: 'mw5',
    type: 'Configuration Update',
    schedule: '2024-01-28 02:00 UTC',
    duration: '30 mins',
    impact: 'low',
    status: 'scheduled'
  }
];

export function MaintenanceWindowsWidget() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Type</TableHead>
          <TableHead>Schedule</TableHead>
          <TableHead>Duration</TableHead>
          <TableHead>Impact</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {maintenanceWindows.map((window) => (
          <TableRow key={window.id}>
            <TableCell className="font-medium">{window.type}</TableCell>
            <TableCell>{window.schedule}</TableCell>
            <TableCell>{window.duration}</TableCell>
            <TableCell>
              <span
                className={`inline-block px-2 py-1 rounded-full text-xs font-semibold
                  ${
                    window.impact === 'none'
                      ? 'bg-green-100 text-green-800'
                      : window.impact === 'low'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
              >
                {window.impact}
              </span>
            </TableCell>
            <TableCell>
              <span
                className={`inline-block px-2 py-1 rounded-full text-xs font-semibold
                  ${
                    window.status === 'completed'
                      ? 'bg-green-100 text-green-800'
                      : window.status === 'in_progress'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
              >
                {window.status.replace('_', ' ')}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}