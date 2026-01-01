import { Bot } from "lucide-react";

export function TypingIndicator() {
  return (
    <div className="flex gap-3 justify-start animate-slide-in">
      <div className="flex-shrink-0 w-9 h-9 rounded-full gradient-primary flex items-center justify-center shadow-soft">
        <Bot className="w-5 h-5 text-primary-foreground" />
      </div>
      
      <div className="bg-chat-bot px-4 py-4 rounded-2xl rounded-tl-md shadow-soft">
        <div className="flex gap-1.5">
          <span className="w-2 h-2 bg-muted-foreground/60 rounded-full typing-dot" />
          <span className="w-2 h-2 bg-muted-foreground/60 rounded-full typing-dot" />
          <span className="w-2 h-2 bg-muted-foreground/60 rounded-full typing-dot" />
        </div>
      </div>
    </div>
  );
}
