import { useState } from 'react';
import { PageHeader } from '@/components/common/PageHeader';
import { Card } from '@/components/common/Card';
import { ProgressBar } from '@/components/common/ProgressBar';
import { Timeline } from '@/components/tracking/Timeline';
import { ProviderCard } from '@/components/tracking/ProviderCard';
import { TRACKED_PROJECTS } from '@/constants/mockData';

export default function ProjectTracker() {
  const [activeId, setActiveId] = useState(TRACKED_PROJECTS[0]?.id);
  const activeProject = TRACKED_PROJECTS.find((p) => p.id === activeId) ?? TRACKED_PROJECTS[0];
  const otherProjects = TRACKED_PROJECTS.filter((p) => p.id !== activeProject?.id);

  if (!activeProject) {
    return (
      <div>
        <PageHeader title="Project Tracker" subtitle="Follow progress on every active order." />
        <Card className="py-16 text-center text-sm text-text-muted">
          No active projects yet. Start a new service to see it here.
        </Card>
      </div>
    );
  }

  return (
    <div>
      <PageHeader title="Project Tracker" subtitle="Follow progress on every active order." />

      {/* Hero */}
      <Card className="mb-4.5">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="text-[11px] font-medium text-text-muted">{activeProject.orderId}</div>
            <h2 className="mt-0.5 font-display text-xl font-bold text-text-primary">
              {activeProject.name}
            </h2>
            <div className="mt-1 text-[12px] text-text-muted">
              {activeProject.packageName} Package
            </div>
          </div>
          <div className="text-right">
            <div className="text-[11px] text-text-muted">Estimated Completion</div>
            <div className="mt-0.5 text-[13px] font-semibold text-text-primary">
              {activeProject.estimatedCompletion}
            </div>
          </div>
        </div>

        <div className="mt-4.5">
          <div className="mb-1.5 flex items-center justify-between text-[12px]">
            <span className="font-medium text-text-primary">Overall Progress</span>
            <span className="font-semibold text-gold">{activeProject.progress}%</span>
          </div>
          <ProgressBar value={activeProject.progress} className="h-2" />
        </div>
      </Card>

      <div className="grid grid-cols-1 gap-4.5 xl:grid-cols-[2fr_1fr]">
        <div className="min-w-0">
          <Card>
            <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wider text-text-muted">
              Milestone Timeline
            </h3>
            <Timeline milestones={activeProject.milestones} />
          </Card>
        </div>

        <div className="flex min-w-0 flex-col gap-4.5">
          <ProviderCard provider={activeProject.provider} />

          {otherProjects.length > 0 && (
            <Card>
              <h3 className="mb-3.5 text-[13px] font-semibold uppercase tracking-wider text-text-muted">
                Other Active Orders
              </h3>
              <div className="flex flex-col gap-3">
                {otherProjects.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActiveId(p.id)}
                    className="rounded-[10px] border border-border-subtle p-3 text-left transition-colors hover:border-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  >
                    <div className="flex items-center justify-between text-[12px]">
                      <span className="truncate font-medium text-text-primary">{p.name}</span>
                      <span className="shrink-0 text-text-muted">{p.progress}%</span>
                    </div>
                    <ProgressBar value={p.progress} className="mt-2 h-1.5" />
                  </button>
                ))}
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}