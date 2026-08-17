import { Link } from 'react-router-dom';
import { Card } from '@/components/common/Card';
import { DataTable } from '@/components/common/DataTable';
import { StatusBadge } from '@/components/common/StatusBadge';
import { ORDER_STATUS_MAP } from '@/utils/statusMaps';
import type { Order } from '@/types/domain';

export function RecentOrdersCard({ orders }: { orders: Order[] }) {
  return (
    <Card>
      <div className="mb-3.5 flex items-center justify-between">
        <h3 className="text-[13px] font-semibold uppercase tracking-wider text-text-muted">
          Recent Orders
        </h3>
        <Link to="/projects" className="text-xs font-medium text-gold hover:underline">
          View all
        </Link>
      </div>
      <DataTable<Order>
        data={orders}
        rowKey={(o) => o.id}
        emptyMessage="No orders yet."
        columns={[
          { header: 'Service', render: (o) => o.service },
          { header: 'Package', render: (o) => o.package },
          { header: 'Amount', render: (o) => o.amount },
          { header: 'Date', render: (o) => <span className="text-text-muted">{o.date}</span> },
          {
            header: 'Status',
            render: (o) => {
              const meta = ORDER_STATUS_MAP[o.status];
              return <StatusBadge label={meta.label} tone={meta.tone} />;
            },
          },
        ]}
      />
    </Card>
  );
}
