export type ChatRole = 'user' | 'bot';

export interface ChatMessage {
  id: string;
  role: ChatRole;
  text: string;
  timestamp: string;
}

export interface QuickReply {
  id: string;
  label: string;
  prompt: string;
}