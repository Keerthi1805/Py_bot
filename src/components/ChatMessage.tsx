import { Message } from "@/lib/chatbot";
import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isBot = message.sender === 'bot';
  
  return (
    <div 
      className={`flex gap-3 animate-slide-in ${isBot ? 'justify-start' : 'justify-end'}`}
    >
      {isBot && (
        <div className="flex-shrink-0 w-9 h-9 rounded-full gradient-primary flex items-center justify-center shadow-soft">
          <Bot className="w-5 h-5 text-primary-foreground" />
        </div>
      )}
      
      <div 
        className={`max-w-[75%] px-4 py-3 rounded-2xl shadow-soft whitespace-pre-wrap ${
          isBot 
            ? 'bg-chat-bot text-chat-bot-foreground rounded-tl-md' 
            : 'bg-chat-user text-chat-user-foreground rounded-tr-md'
        }`}
      >
        <p className="text-sm leading-relaxed">{message.text}</p>
        <span className={`text-xs mt-1 block ${isBot ? 'text-muted-foreground' : 'text-primary-foreground/70'}`}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
      
      {!isBot && (
        <div className="flex-shrink-0 w-9 h-9 rounded-full bg-secondary flex items-center justify-center shadow-soft">
          <User className="w-5 h-5 text-secondary-foreground" />
        </div>
      )}
    </div>
  );
}
