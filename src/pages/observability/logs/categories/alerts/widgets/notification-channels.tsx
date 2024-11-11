import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const channels = [
  {
    id: 'ch-1',
    name: 'Email - DevOps Team',
    type: 'email',
    recipients: 'devops@company.com',
    status: 'active',
    lastDelivery: '2 mins ago'
  },
  {
    id: 'ch-2',
    name: 'Slack - Alerts',
    type: 'slack',
    recipients: '#alerts',
    status: 'active',
    lastDelivery: '5 mins ago'
  },
  {
    id: 'ch-3',
    name: 'PagerDuty',
    type: 'pagerduty',
    recipients: 'On-call rotation',
    status: 'active',
    lastDelivery: '10 mins ago'
  },
  {
    id: 'ch-4',
    name: 'Microsoft Teams',
    type: 'teams',
    recipients: 'IT Support',
    status: 'inactive',
    lastDelivery: '1 hour ago'
  },
  {
    id: 'ch-5',
    name: 'SMS - Critical',
    type: 'sms',
    recipients: '+1 (555) 0123',
    status: 'active',
    lastDelivery: '15 mins ago'
  }
];

export function NotificationChannelsWidget() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Channel</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Recipients</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Last Delivery</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {channels.map((channel) => (
          <TableRow key={channel.id}>
            <TableCell className="font-medium">{channel.name}</TableCell>
            <TableCell className="capitalize">{channel.type}</TableCell>
            <TableCell>{channel.recipients}</TableCell>
            <TableCell>
              <span
                className={`inline-block px-2 py-1 rounded-full text-xs font-semibold
                  ${
                    channel.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
              >
                {channel.status}
              </span>
            </TableCell>
            <TableCell>{channel.lastDelivery}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}