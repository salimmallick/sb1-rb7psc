import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const alertRules = [
  {
    id: 'rule-1',
    name: 'High Error Rate',
    condition: 'error_count > 100 per 5m',
    severity: 'critical',
    status: 'active',
    lastTriggered: '5 mins ago'
  },
  {
    id: 'rule-2',
    name: 'API Latency',
    condition: 'response_time > 500ms',
    severity: 'warning',
    status: 'active',
    lastTriggered: '15 mins ago'
  },
  {
    id: 'rule-3',
    name: 'Database Errors',
    condition: 'db_error_count > 50 per 10m',
    severity: 'critical',
    status: 'inactive',
    lastTriggered: '1 hour ago'
  },
  {
    id: 'rule-4',
    name: 'Auth Failures',
    condition: 'auth_failure_count > 20 per 5m',
    severity: 'warning',
    status: 'active',
    lastTriggered: '30 mins ago'
  },
  {
    id: 'rule-5',
    name: 'Disk Usage',
    condition: 'disk_usage > 90%',
    severity: 'critical',
    status: 'active',
    lastTriggered: '10 mins ago'
  }
];

export function AlertRulesWidget() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Rule Name</TableHead>
          <TableHead>Condition</TableHead>
          <TableHead>Severity</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Last Triggered</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {alertRules.map((rule) => (
          <TableRow key={rule.id}>
            <TableCell className="font-medium">{rule.name}</TableCell>
            <TableCell className="font-mono text-sm">{rule.condition}</TableCell>
            <TableCell>
              <span
                className={`inline-block px-2 py-1 rounded-full text-xs font-semibold
                  ${
                    rule.severity === 'critical'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
              >
                {rule.severity}
              </span>
            </TableCell>
            <TableCell>
              <span
                className={`inline-block px-2 py-1 rounded-full text-xs font-semibold
                  ${
                    rule.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
              >
                {rule.status}
              </span>
            </TableCell>
            <TableCell>{rule.lastTriggered}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}