import type { ChatMessage } from '@/types/chat';

export function MessageBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === 'user';
  return (
    <div className={['flex flex-col', isUser ? 'items-end' : 'items-start'].join(' ')}>
      <div
        className={[
          'max-w-[75%] whitespace-pre-line rounded-2xl px-4 py-2.5 text-[13px] leading-relaxed',
          isUser
            ? 'rounded-br-sm bg-navy text-white'
            : 'rounded-bl-sm border border-border-subtle bg-surface text-text-primary',
        ].join(' ')}
      >
        {message.text}
      </div>
      <span className="mt-1 px-1 text-[10px] text-text-muted">{message.timestamp}</span>
    </div>
  );
}