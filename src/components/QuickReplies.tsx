interface QuickRepliesProps {
  onSelect: (text: string) => void;
}

const quickReplies = [
  "Name some fruits",
  "Tell me about animals",
  "What colors do you know?",
  "Tell me a joke"
];

export function QuickReplies({ onSelect }: QuickRepliesProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center px-4 py-3">
      {quickReplies.map((reply) => (
        <button
          key={reply}
          onClick={() => onSelect(reply)}
          className="px-4 py-2 text-sm font-medium text-primary bg-accent hover:bg-accent/80 rounded-full transition-colors border border-primary/20 hover:border-primary/40"
        >
          {reply}
        </button>
      ))}
    </div>
  );
}
