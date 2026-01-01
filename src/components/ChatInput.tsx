import { useState, FormEvent, KeyboardEvent } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSend(input.trim());
      setInput("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t border-border bg-card/80 backdrop-blur-sm">
      <div className="flex gap-3 items-end max-w-4xl mx-auto">
        <div className="flex-1 relative">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            disabled={disabled}
            rows={1}
            className="w-full px-4 py-3 pr-12 bg-secondary text-secondary-foreground rounded-xl border-0 resize-none focus:outline-none focus:ring-2 focus:ring-ring transition-all placeholder:text-muted-foreground disabled:opacity-50"
            style={{ minHeight: '48px', maxHeight: '120px' }}
          />
        </div>
        <Button 
          type="submit" 
          size="icon"
          disabled={!input.trim() || disabled}
          className="h-12 w-12 rounded-xl gradient-primary hover:opacity-90 transition-opacity shadow-soft disabled:opacity-50"
        >
          <Send className="w-5 h-5" />
        </Button>
      </div>
    </form>
  );
}
