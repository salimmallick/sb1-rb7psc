import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ReactECharts from 'echarts-for-react';

export function DataAnalysis() {
  const [dataSource, setDataSource] = useState('performance');
  const [timeRange, setTimeRange] = useState('24h');
  const [visualization, setVisualization] = useState('line');

  const mockData = {
    timestamps: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
    values: [120, 132, 101, 134, 90, 230]
  };

  const chartOption = {
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      data: mockData.timestamps
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: mockData.values,
        type: visualization,
        smooth: true
      }
    ]
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Data Analysis Tutorial</h1>
        <p className="mt-2 text-muted-foreground">
          Learn how to analyze and visualize your data effectively.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Interactive Analysis</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <label className="text-sm font-medium">Data Source</label>
              <Select value={dataSource} onValueChange={setDataSource}>
                <SelectTrigger>
                  <SelectValue placeholder="Select data source" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="performance">Performance Metrics</SelectItem>
                  <SelectItem value="users">User Analytics</SelectItem>
                  <SelectItem value="errors">Error Rates</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Time Range</label>
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select time range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="24h">Last 24 Hours</SelectItem>
                  <SelectItem value="7d">Last 7 Days</SelectItem>
                  <SelectItem value="30d">Last 30 Days</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Visualization</label>
              <Select value={visualization} onValueChange={setVisualization}>
                <SelectTrigger>
                  <SelectValue placeholder="Select chart type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="line">Line Chart</SelectItem>
                  <SelectItem value="bar">Bar Chart</SelectItem>
                  <SelectItem value="scatter">Scatter Plot</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <ReactECharts option={chartOption} style={{ height: '300px' }} />
          </div>

          <div className="flex justify-end space-x-2">
            <Button variant="outline">Export Data</Button>
            <Button>Save Analysis</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Learning Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="concepts">
            <TabsList>
              <TabsTrigger value="concepts">Key Concepts</TabsTrigger>
              <TabsTrigger value="techniques">Analysis Techniques</TabsTrigger>
              <TabsTrigger value="best-practices">Best Practices</TabsTrigger>
            </TabsList>

            <TabsContent value="concepts" className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Data Types</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Time-series data</li>
                  <li>Categorical data</li>
                  <li>Numerical data</li>
                  <li>Dimensional data</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Analysis Methods</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Trend analysis</li>
                  <li>Comparative analysis</li>
                  <li>Statistical analysis</li>
                  <li>Pattern recognition</li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="techniques" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="p-4">
                  <h4 className="font-semibold">Filtering & Aggregation</h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    Learn how to filter and aggregate data for meaningful insights.
                  </p>
                </Card>
                <Card className="p-4">
                  <h4 className="font-semibold">Correlation Analysis</h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    Discover relationships between different metrics.
                  </p>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="best-practices" className="space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>Always validate data quality before analysis</li>
                <li>Use appropriate visualizations for different data types</li>
                <li>Consider statistical significance in your analysis</li>
                <li>Document your analysis methodology</li>
                <li>Regular review and refinement of analysis parameters</li>
              </ul>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}