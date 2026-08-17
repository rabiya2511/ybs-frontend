import type { QuickReply } from '@/types/chat';

interface QuickReplyChipsProps {
  replies: QuickReply[];
  onSelect: (prompt: string) => void;
}

export function QuickReplyChips({ replies, onSelect }: QuickReplyChipsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {replies.map((reply) => (
        <button
          key={reply.id}
          onClick={() => onSelect(reply.prompt)}
          className="rounded-full border border-border-subtle bg-surface px-3.5 py-2 text-xs font-medium text-text-primary transition-colors hover:border-gold"
        >
          {reply.label}
        </button>
      ))}
    </div>
  );
}