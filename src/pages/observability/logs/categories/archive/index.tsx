import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BaseWidget } from '@/components/dashboard/base-widget';
import { ArchiveStorageWidget } from './widgets/archive-storage';
import { ArchiveRetentionWidget } from './widgets/archive-retention';
import { ArchiveSearchWidget } from './widgets/archive-search';
import { ArchiveMetricsWidget } from './widgets/archive-metrics';
import { ArchiveComplianceWidget } from './widgets/archive-compliance';
import { ArchiveRestoreWidget } from './widgets/archive-restore';

export default function LogArchive() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Log Archive</h1>
        <p className="mt-2 text-muted-foreground">
          Manage and analyze archived log data with advanced search and retention policies.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Storage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.5 TB</div>
            <p className="text-xs text-muted-foreground">+200 GB from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Retention Period</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">365 days</div>
            <p className="text-xs text-muted-foreground">Policy compliant</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Archive Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">250 GB/day</div>
            <p className="text-xs text-muted-foreground">+15 GB from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Restore Jobs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Active restore jobs</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <BaseWidget
          title="Archive Storage Usage"
          description="Monitor archive storage consumption and trends"
          allowCSVExport
        >
          <ArchiveStorageWidget />
        </BaseWidget>

        <BaseWidget
          title="Retention Policies"
          description="Track log retention status and policies"
          allowCSVExport
        >
          <ArchiveRetentionWidget />
        </BaseWidget>
      </div>

      <BaseWidget
        title="Archive Search"
        description="Search and analyze archived log data"
        allowCSVExport
        fullWidth
      >
        <ArchiveSearchWidget />
      </BaseWidget>

      <div className="grid gap-4 md:grid-cols-2">
        <BaseWidget
          title="Archive Metrics"
          description="Key performance indicators for archive operations"
          allowCSVExport
        >
          <ArchiveMetricsWidget />
        </BaseWidget>

        <BaseWidget
          title="Compliance Status"
          description="Monitor archive compliance and retention rules"
          allowCSVExport
        >
          <ArchiveComplianceWidget />
        </BaseWidget>
      </div>

      <BaseWidget
        title="Restore Operations"
        description="Track and manage log restore operations"
        allowCSVExport
        fullWidth
      >
        <ArchiveRestoreWidget />
      </BaseWidget>
    </div>
  );
}