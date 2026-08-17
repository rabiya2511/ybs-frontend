import { getChatReply } from '@/constants/chatResponses';

export interface AssistantReplyResult {
  text: string;
}

/**
 * Stub only. Swap this implementation for a real call to the DIOS AI
 * backend once it exists (e.g. POST /api/assistant/chat) — useChat.ts
 * does not need to change when that happens.
 */
export async function getAssistantReply(userMessage: string): Promise<AssistantReplyResult> {
  const delay = 1100 + Math.random() * 700;
  await new Promise((resolve) => setTimeout(resolve, delay));
  return { text: getChatReply(userMessage) };
}