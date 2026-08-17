import { useEffect, useRef } from 'react';
import { Bot } from 'lucide-react';
import { Card } from '@/components/common/Card';
import { MessageBubble } from '@/components/chat/MessageBubble';
import { TypingIndicator } from '@/components/chat/TypingIndicator';
import { QuickReplyChips } from '@/components/chat/QuickReplyChips';
import { ChatInput } from '@/components/chat/ChatInput';
import { QUICK_REPLIES } from '@/constants/chatResponses';
import { useChat } from '@/hooks/useChat';

export default function AIAssistant() {
  const { messages, isTyping, sendMessage, clearChat } = useChat();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div>
      <div className="mb-[22px]">
        <h1 className="mb-1 text-[26px] font-bold text-text-primary">AI Assistant</h1>
        <p className="text-[13px] text-text-muted">
          Get instant answers about your startup services, orders & compliance
        </p>
      </div>

      <Card noPadding className="flex h-[620px] flex-col overflow-hidden">
        <div className="flex items-center gap-3 border-b border-border-subtle px-5 py-3.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-tint-adaptive">
            <Bot size={18} className="text-navy dark:text-gold" />
          </div>
          <div>
            <div className="text-[13px] font-semibold text-text-primary">Startup AI Assistant</div>
            <div className="text-[11px] text-success">● Online · Powered by AI</div>
          </div>
          <button
            onClick={clearChat}
            className="ml-auto rounded-lg border border-border-subtle bg-canvas px-3.5 py-1.5 text-xs text-text-muted transition-colors hover:text-text-primary"
          >
            Clear Chat
          </button>
        </div>

        {messages.length <= 1 && (
          <div className="border-b border-border-subtle px-5 py-3.5">
            <QuickReplyChips replies={QUICK_REPLIES} onSelect={sendMessage} />
          </div>
        )}

        <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-5 py-4">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          {isTyping && <TypingIndicator />}
        </div>

        <ChatInput onSend={sendMessage} disabled={isTyping} />
      </Card>
    </div>
  );
}