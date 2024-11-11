import { BaseWidget } from '@/components/dashboard/base-widget';
import { CPUUsageWidget } from './widgets/cpu-usage';
import { MemoryUsageWidget } from './widgets/memory-usage';
import { DiskUtilizationWidget } from './widgets/disk-utilization';

export function SystemHealth() {
  return (
    <div className="space-y-6">
      <BaseWidget
        title="Resource Utilization Overview"
        description="Monitor system resource utilization and performance metrics"
        fullWidth
      >
        <div className="grid gap-6 grid-cols-3">
          <CPUUsageWidget />
          <MemoryUsageWidget />
          <DiskUtilizationWidget />
        </div>
      </BaseWidget>
    </div>
  );
}