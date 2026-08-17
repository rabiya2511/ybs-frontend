import { useState, type KeyboardEvent } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSend: (text: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSend, disabled = false }: ChatInputProps) {
  const [value, setValue] = useState('');

  const handleSend = () => {
    if (!value.trim() || disabled) return;
    onSend(value);
    setValue('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex items-end gap-2.5 border-t border-border-subtle bg-surface p-3">
      <textarea
        rows={1}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask anything about your startup, services, compliance..."
        className="flex-1 resize-none rounded-[11px] border border-border-subtle bg-canvas px-3.5 py-2.5 text-[13px] text-text-primary outline-none focus:border-gold"
      />
      <button
        onClick={handleSend}
        disabled={disabled}
        className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-navy text-white transition-opacity hover:opacity-90 disabled:opacity-50"
        aria-label="Send message"
      >
        <Send size={16} />
      </button>
    </div>
  );
}