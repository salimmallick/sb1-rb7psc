import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import ReactECharts from 'echarts-for-react';

interface EchoWidgetProps {
  type: 'chart' | 'table' | 'metric' | 'custom';
  data: any;
  title: string;
}

export function EchoWidget({ type, data, title }: EchoWidgetProps) {
  const renderChart = () => {
    const option = {
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        data: data.labels
      },
      yAxis: {
        type: 'value'
      },
      series: data.datasets.map((dataset: any) => ({
        name: dataset.label,
        type: data.type || 'line',
        data: dataset.data,
        smooth: true
      }))
    };

    return <ReactECharts option={option} style={{ height: '300px' }} />;
  };

  const renderMetrics = () => {
    return (
      <div className="grid gap-4 md:grid-cols-3">
        {data.metrics.map((metric: any, index: number) => (
          <div key={index} className="space-y-1">
            <p className="text-sm text-muted-foreground">{metric.label}</p>
            <div className="flex items-end gap-2">
              <p className="text-2xl font-bold">{metric.value}</p>
              <p className={`text-sm ${
                metric.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
              }`}>
                {metric.change}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderTable = () => {
    return (
      <Table>
        <TableHeader>
          {data.headers.map((header: string, index: number) => (
            <TableHead key={index}>{header}</TableHead>
          ))}
        </TableHeader>
        <TableBody>
          {data.rows.map((row: any[], index: number) => (
            <TableRow key={index}>
              {row.map((cell, cellIndex) => (
                <TableCell key={cellIndex}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {type === 'chart' && renderChart()}
        {type === 'table' && renderTable()}
        {type === 'metric' && renderMetrics()}
      </CardContent>
    </Card>
  );
}