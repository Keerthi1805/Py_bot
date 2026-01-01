import { Bot, Sparkles } from "lucide-react";

export function ChatHeader() {
  return (
    <header className="p-4 border-b border-border bg-card/80 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto flex items-center gap-4">
        <div className="relative">
          <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center shadow-glow">
            <Bot className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-card" />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-semibold text-foreground">PyBot</h1>
            <Sparkles className="w-4 h-4 text-primary" />
          </div>
          <p className="text-sm text-muted-foreground">Rule-based chatbot • Always online</p>
        </div>
        
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-xs font-medium text-accent-foreground">Active</span>
        </div>
      </div>
    </header>
  );
}
