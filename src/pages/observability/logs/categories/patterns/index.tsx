import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BaseWidget } from '@/components/dashboard/base-widget';
import { PatternDistributionWidget } from './widgets/pattern-distribution';
import { PatternTrendsWidget } from './widgets/pattern-trends';
import { PatternDetailsWidget } from './widgets/pattern-details';
import { PatternCorrelationWidget } from './widgets/pattern-correlation';
import { PatternAnomaliesWidget } from './widgets/pattern-anomalies';
import { PatternImpactWidget } from './widgets/pattern-impact';

export default function LogPatterns() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Log Patterns</h1>
        <p className="mt-2 text-muted-foreground">
          Analyze and discover patterns in log data to identify trends and anomalies.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unique Patterns</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">245</div>
            <p className="text-xs text-muted-foreground">+12 from last hour</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pattern Coverage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85%</div>
            <p className="text-xs text-muted-foreground">+2% from last hour</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Patterns</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Last 24 hours</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Anomalous Patterns</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">-1 from last hour</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <BaseWidget
          title="Pattern Distribution"
          description="Distribution of different log patterns by occurrence"
          allowCSVExport
        >
          <PatternDistributionWidget />
        </BaseWidget>

        <BaseWidget
          title="Pattern Trends"
          description="Pattern occurrence trends over time"
          allowCSVExport
        >
          <PatternTrendsWidget />
        </BaseWidget>
      </div>

      <BaseWidget
        title="Pattern Details"
        description="Detailed analysis of identified log patterns"
        allowCSVExport
        fullWidth
      >
        <PatternDetailsWidget />
      </BaseWidget>

      <div className="grid gap-4 md:grid-cols-2">
        <BaseWidget
          title="Pattern Correlation"
          description="Relationships between different log patterns"
          allowCSVExport
        >
          <PatternCorrelationWidget />
        </BaseWidget>

        <BaseWidget
          title="Pattern Anomalies"
          description="Detection of anomalous pattern behavior"
          allowCSVExport
        >
          <PatternAnomaliesWidget />
        </BaseWidget>
      </div>

      <BaseWidget
        title="Pattern Impact Analysis"
        description="Impact assessment of identified patterns"
        allowCSVExport
        fullWidth
      >
        <PatternImpactWidget />
      </BaseWidget>
    </div>
  );
}