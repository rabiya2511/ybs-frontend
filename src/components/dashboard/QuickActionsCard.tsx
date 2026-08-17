import { useNavigate } from 'react-router-dom';
import { MapPin, MessageCircle, Gift, Plus } from 'lucide-react';
import { Card } from '@/components/common/Card';

const ACTIONS = [
  { label: 'Start New Service', to: '/services', icon: Plus, variant: 'primary' as const },
  { label: 'Track My Projects', to: '/projects', icon: MapPin, variant: 'secondary' as const },
  { label: 'Ask AI Assistant', to: '/assistant', icon: MessageCircle, variant: 'secondary' as const },
  { label: 'Refer & Earn ₹500', to: '/referrals', icon: Gift, variant: 'gold' as const },
];

const VARIANT_CLASSES = {
  primary: 'bg-navy text-white hover:bg-navy-2',
  secondary: 'border border-border-subtle bg-canvas text-text-primary hover:border-gold',
  gold: 'border border-gold/30 bg-gold-tint-adaptive text-[#7A5800] dark:text-gold hover:brightness-95',
};

export function QuickActionsCard() {
  const navigate = useNavigate();

  return (
    <Card>
      <h3 className="mb-3.5 text-[13px] font-semibold uppercase tracking-wider text-text-muted">
        Quick Actions
      </h3>
      <div className="flex flex-col gap-2.5">
        {ACTIONS.map((action) => {
          const Icon = action.icon;
          return (
            <button
              key={action.label}
              type="button"
              onClick={() => navigate(action.to)}
              className={[
                'flex w-full items-center gap-2.5 rounded-[9px] px-3.5 py-2.5 text-left text-[13px] font-semibold',
                'transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold',
                VARIANT_CLASSES[action.variant],
              ].join(' ')}
            >
              <Icon size={15} strokeWidth={2.25} />
              {action.label}
            </button>
          );
        })}
      </div>
    </Card>
  );
}
