import { useNavigate } from 'react-router-dom';
import type { Service } from '@/types/domain';

export function ServiceCard({ service }: { service: Service }) {
  const navigate = useNavigate();
  const Icon = service.icon;

  return (
    <button
      type="button"
      onClick={() => navigate(`/packages/${service.id}`)}
      className={[
        'group relative overflow-hidden rounded-(--radius-card) border border-border-subtle bg-surface p-5 text-left',
        'transition-all duration-200 hover:-translate-y-0.5 hover:border-gold',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold',
      ].join(' ')}
    >
      <span
        aria-hidden="true"
        className="absolute -bottom-5 -right-5 h-[70px] w-[70px] rounded-full bg-gold-tint-adaptive transition-transform duration-200 group-hover:scale-110"
      />
      <span className="relative flex h-10 w-10 items-center justify-center rounded-[10px] bg-gold-tint-adaptive text-navy dark:text-gold">
        <Icon size={19} strokeWidth={2} />
      </span>
      <h3 className="relative mt-3 text-[14px] font-semibold text-text-primary">{service.name}</h3>
      <p className="relative mt-1 text-[11px] leading-relaxed text-text-muted">{service.description}</p>
      <p className="relative mt-2.5 text-[13px] font-bold text-gold">{service.startingPrice}</p>
    </button>
  );
}
