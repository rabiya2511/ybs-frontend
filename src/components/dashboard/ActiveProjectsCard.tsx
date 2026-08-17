import { Card } from '@/components/common/Card';
import { DataTable } from '@/components/common/DataTable';
import { ProgressBar } from '@/components/common/ProgressBar';
import { StatusBadge } from '@/components/common/StatusBadge';
import { PROJECT_STATUS_MAP } from '@/utils/statusMaps';
import type { Project } from '@/types/domain';

export function ActiveProjectsCard({ projects }: { projects: Project[] }) {
  return (
    <Card>
      <h3 className="mb-3.5 text-[13px] font-semibold uppercase tracking-wider text-text-muted">
        Active Projects
      </h3>
      <DataTable<Project>
        data={projects}
        rowKey={(p) => p.id}
        emptyMessage="No active projects yet. Start a new service to get going."
        columns={[
          {
            header: 'Project',
            render: (p) => {
              const Icon = p.icon;
              return (
                <div className="flex items-center gap-2.5">
                  <span className={['flex h-8 w-8 shrink-0 items-center justify-center rounded-lg', p.iconBgClass].join(' ')}>
                    <Icon size={14} />
                  </span>
                  <div className="min-w-0">
                    <div className="truncate font-medium">{p.name}</div>
                    <div className="text-[10px] text-text-muted">{p.code}</div>
                  </div>
                </div>
              );
            },
          },
          { header: 'Type', render: (p) => p.type },
          {
            header: 'Progress',
            render: (p) => (
              <div className="flex items-center gap-2.5">
                <div className="w-[100px]">
                  <ProgressBar value={p.progress} />
                </div>
                <span className="text-[11px] text-text-muted">{p.progress}%</span>
              </div>
            ),
          },
          {
            header: 'Status',
            render: (p) => {
              const meta = PROJECT_STATUS_MAP[p.status];
              return <StatusBadge label={meta.label} tone={meta.tone} />;
            },
          },
          { header: 'Due', render: (p) => <span className="text-[11px] text-text-muted">{p.dueDate}</span> },
        ]}
      />
    </Card>
  );
}
