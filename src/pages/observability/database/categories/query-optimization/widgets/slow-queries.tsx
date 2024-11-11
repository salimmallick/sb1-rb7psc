import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const slowQueries = [
  {
    id: 'q1',
    query: 'SELECT * FROM orders WHERE status = ? AND created_at > ?',
    avgTime: '2.5s',
    executions: 1250,
    tables: ['orders'],
    impact: 'high'
  },
  {
    id: 'q2',
    query: 'SELECT p.*, c.name FROM products p JOIN categories c ON p.category_id = c.id',
    avgTime: '1.8s',
    executions: 890,
    tables: ['products', 'categories'],
    impact: 'medium'
  },
  {
    id: 'q3',
    query: 'SELECT * FROM user_activities WHERE user_id = ? ORDER BY created_at DESC',
    avgTime: '1.5s',
    executions: 2300,
    tables: ['user_activities'],
    impact: 'high'
  },
  {
    id: 'q4',
    query: 'UPDATE inventory SET quantity = quantity - ? WHERE product_id = ?',
    avgTime: '1.2s',
    executions: 750,
    tables: ['inventory'],
    impact: 'medium'
  },
  {
    id: 'q5',
    query: 'SELECT COUNT(*) FROM orders GROUP BY status, created_at::date',
    avgTime: '1.1s',
    executions: 450,
    tables: ['orders'],
    impact: 'low'
  }
];

export function SlowQueriesWidget() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Query</TableHead>
          <TableHead>Avg Time</TableHead>
          <TableHead>Executions</TableHead>
          <TableHead>Tables</TableHead>
          <TableHead>Impact</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {slowQueries.map((query) => (
          <TableRow key={query.id}>
            <TableCell className="font-mono text-sm">{query.query}</TableCell>
            <TableCell>{query.avgTime}</TableCell>
            <TableCell>{query.executions}</TableCell>
            <TableCell>{query.tables.join(', ')}</TableCell>
            <TableCell>
              <span
                className={`inline-block px-2 py-1 rounded-full text-xs font-semibold
                  ${
                    query.impact === 'high'
                      ? 'bg-red-100 text-red-800'
                      : query.impact === 'medium'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-green-100 text-green-800'
                  }`}
              >
                {query.impact}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}