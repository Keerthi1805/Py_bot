import { useState, useRef, useEffect } from "react";
import { Message, generateResponse, generateId } from "@/lib/chatbot";
import { ChatHeader } from "./ChatHeader";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { TypingIndicator } from "./TypingIndicator";
import { QuickReplies } from "./QuickReplies";

const welcomeMessage: Message = {
  id: generateId(),
  text: "Hello! 👋 I'm PyBot, a rule-based chatbot. I can answer questions about fruits, vegetables, animals, colors, food, and more! Try asking me something!",
  sender: 'bot',
  timestamp: new Date()
};

export function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([welcomeMessage]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async (text: string) => {
    const userMessage: Message = {
      id: generateId(),
      text,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    const thinkingTime = 800 + Math.random() * 1000;
    
    await new Promise(resolve => setTimeout(resolve, thinkingTime));
    
    const botResponse: Message = {
      id: generateId(),
      text: generateResponse(text),
      sender: 'bot',
      timestamp: new Date()
    };
    
    setIsTyping(false);
    setMessages(prev => [...prev, botResponse]);
  };

  const showQuickReplies = messages.length === 1;

  return (
    <div className="flex flex-col h-screen bg-background">
      <ChatHeader />
      
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto p-4 space-y-4">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          
          {isTyping && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {showQuickReplies && <QuickReplies onSelect={handleSend} />}
      
      <ChatInput onSend={handleSend} disabled={isTyping} />
    </div>
  );
}
