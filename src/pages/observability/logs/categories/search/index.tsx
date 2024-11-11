import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BaseWidget } from '@/components/dashboard/base-widget';
import { LogSearchResults } from './widgets/log-search-results';
import { LogTimeline } from './widgets/log-timeline';
import { LogFilters } from './widgets/log-filters';
import { LogStats } from './widgets/log-stats';

export default function LogSearch() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Log Search</h1>
        <p className="mt-2 text-muted-foreground">
          Search, filter, and analyze log data across your applications.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Logs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.2M</div>
            <p className="text-xs text-muted-foreground">+50K from last hour</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Error Logs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">245</div>
            <p className="text-xs text-muted-foreground">+12 from last hour</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Warning Logs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">850</div>
            <p className="text-xs text-muted-foreground">+45 from last hour</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Info Logs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24.5K</div>
            <p className="text-xs text-muted-foreground">+2.1K from last hour</p>
          </CardContent>
        </Card>
      </div>

      <BaseWidget
        title="Log Filters"
        description="Filter and refine log search results"
        fullWidth
      >
        <LogFilters />
      </BaseWidget>

      <BaseWidget
        title="Log Search Results"
        description="View and analyze log entries"
        fullWidth
        allowCSVExport
      >
        <LogSearchResults />
      </BaseWidget>

      <div className="grid gap-4 md:grid-cols-2">
        <BaseWidget
          title="Log Timeline"
          description="Visualize log volume over time"
          allowCSVExport
        >
          <LogTimeline />
        </BaseWidget>

        <BaseWidget
          title="Log Statistics"
          description="View log distribution by type"
          allowCSVExport
        >
          <LogStats />
        </BaseWidget>
      </div>
    </div>
  );
}