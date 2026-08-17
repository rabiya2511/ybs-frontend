import { useCallback, useRef, useState } from 'react';
import { getAssistantReply } from '@/services/assistant.api';
import { PLACEHOLDER_USER } from '@/constants/placeholderUser';
import type { ChatMessage } from '@/types/chat';

function nowTime(): string {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function makeId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

const WELCOME_MESSAGE: ChatMessage = {
  id: 'welcome',
  role: 'bot',
  text: `👋 Hi ${PLACEHOLDER_USER.name.split(' ')[0]}! I'm your Startup AI Assistant. I can help you with service questions, track your orders, explain compliance requirements, or guide you through any startup process. What can I help you with today?`,
  timestamp: 'Just now',
};

/** Manages chat message state and the AI reply lifecycle (loading, success). */
export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
  const [isTyping, setIsTyping] = useState(false);
  const requestIdRef = useRef(0);

  const sendMessage = useCallback((text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMessage: ChatMessage = { id: makeId(), role: 'user', text: trimmed, timestamp: nowTime() };
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    const requestId = ++requestIdRef.current;

    getAssistantReply(trimmed).then((result) => {
      // Ignore this response if a newer request (or clearChat) has superseded it.
      if (requestId !== requestIdRef.current) return;

      const botMessage: ChatMessage = {
        id: makeId(),
        role: 'bot',
        text: result.text,
        timestamp: nowTime(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    });
  }, []);

  const clearChat = useCallback(() => {
    requestIdRef.current++; // invalidates any in-flight reply
    setIsTyping(false);
    setMessages([WELCOME_MESSAGE]);
  }, []);

  return { messages, isTyping, sendMessage, clearChat };
}