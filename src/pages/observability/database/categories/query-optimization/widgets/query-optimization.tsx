import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const optimizations = [
  {
    id: 'opt1',
    query: 'SELECT * FROM orders WHERE status = ?',
    recommendation: 'Add index on status column',
    impact: 'high',
    effort: 'low',
    status: 'pending'
  },
  {
    id: 'opt2',
    query: 'SELECT p.*, c.* FROM products p JOIN categories c',
    recommendation: 'Specify required columns instead of using *',
    impact: 'medium',
    effort: 'medium',
    status: 'in_progress'
  },
  {
    id: 'opt3',
    query: 'SELECT * FROM users WHERE email LIKE ?',
    recommendation: 'Use full text search instead of LIKE',
    impact: 'high',
    effort: 'high',
    status: 'pending'
  },
  {
    id: 'opt4',
    query: 'SELECT * FROM inventory WHERE quantity > 0',
    recommendation: 'Add filtered index for quantity > 0',
    impact: 'medium',
    effort: 'low',
    status: 'completed'
  },
  {
    id: 'opt5',
    query: 'SELECT COUNT(*) FROM orders GROUP BY date',
    recommendation: 'Create materialized view for daily stats',
    impact: 'high',
    effort: 'medium',
    status: 'pending'
  }
];

export function QueryOptimizationWidget() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Query</TableHead>
          <TableHead>Recommendation</TableHead>
          <TableHead>Impact</TableHead>
          <TableHead>Effort</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {optimizations.map((opt) => (
          <TableRow key={opt.id}>
            <TableCell className="font-mono text-sm">{opt.query}</TableCell>
            <TableCell>{opt.recommendation}</TableCell>
            <TableCell>
              <span
                className={`inline-block px-2 py-1 rounded-full text-xs font-semibold
                  ${
                    opt.impact === 'high'
                      ? 'bg-red-100 text-red-800'
                      : opt.impact === 'medium'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-green-100 text-green-800'
                  }`}
              >
                {opt.impact}
              </span>
            </TableCell>
            <TableCell>
              <span
                className={`inline-block px-2 py-1 rounded-full text-xs font-semibold
                  ${
                    opt.effort === 'high'
                      ? 'bg-red-100 text-red-800'
                      : opt.effort === 'medium'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-green-100 text-green-800'
                  }`}
              >
                {opt.effort}
              </span>
            </TableCell>
            <TableCell>
              <span
                className={`inline-block px-2 py-1 rounded-full text-xs font-semibold
                  ${
                    opt.status === 'completed'
                      ? 'bg-green-100 text-green-800'
                      : opt.status === 'in_progress'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
              >
                {opt.status.replace('_', ' ')}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}