import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BaseWidget } from '@/components/dashboard/base-widget';
import { AnomalyTrendsWidget } from './widgets/anomaly-trends';
import { PredictiveAnalysisWidget } from './widgets/predictive-analysis';
import { AnomalyDistributionWidget } from './widgets/anomaly-distribution';
import { PatternDetectionWidget } from './widgets/pattern-detection';
import { ResourcePredictionWidget } from './widgets/resource-prediction';
import { PerformanceAnomaliesWidget } from './widgets/performance-anomalies';

export function AnomalyDetection() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Anomalies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+3 from last hour</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Prediction Accuracy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.5%</div>
            <p className="text-xs text-muted-foreground">+1.2% from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">False Positives</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.3%</div>
            <p className="text-xs text-muted-foreground">-0.5% from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Patterns Detected</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">+2 new patterns</p>
          </CardContent>
        </Card>
      </div>

      <BaseWidget
        title="Anomaly Trends"
        description="Monitor and analyze anomaly patterns over time"
        fullWidth
      >
        <AnomalyTrendsWidget />
      </BaseWidget>

      <div className="grid gap-4 md:grid-cols-2">
        <BaseWidget
          title="Predictive Analysis"
          description="View performance predictions and trends"
        >
          <PredictiveAnalysisWidget />
        </BaseWidget>

        <BaseWidget
          title="Anomaly Distribution"
          description="Analyze anomalies across services"
        >
          <AnomalyDistributionWidget />
        </BaseWidget>
      </div>

      <BaseWidget
        title="Pattern Detection"
        description="Identify recurring patterns and behaviors"
        fullWidth
      >
        <PatternDetectionWidget />
      </BaseWidget>

      <div className="grid gap-4 md:grid-cols-2">
        <BaseWidget
          title="Resource Prediction"
          description="Predict resource utilization trends"
        >
          <ResourcePredictionWidget />
        </BaseWidget>

        <BaseWidget
          title="Performance Anomalies"
          description="Track performance deviations"
        >
          <PerformanceAnomaliesWidget />
        </BaseWidget>
      </div>
    </div>
  );
}