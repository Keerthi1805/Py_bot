# Py_bot

PyBot — Simple Rule-Based Chatbot
A clean, modern rule-based chatbot built with a Python-style keyword-matching engine and a beautiful React UI. PyBot answers user queries using a predefined knowledge base — no API keys, no external services, fully offline.

 Features
  Real-time chat interface with smooth message bubbles
  Rule-based keyword matching engine (Python-style logic ported to TypeScript)
  Predefined knowledge base covering greetings, fruits, vegetables, animals, colors, numbers, food, weather, time, Python, jokes, and more
  Typing indicator animation for a natural feel
  Quick reply suggestions to help users get started
  Modern teal/cyan themed UI with soft shadows and animations
  Fully responsive — works on desktop and mobile
  100% client-side — no API keys, no backend, no tracking
   Tech Stack
Layer	Technology
Framework	React 18 + Vite 5
Language	TypeScript
Styling	Tailwind CSS + shadcn/ui
Logic	Rule-based keyword matching engine

Project Structure
src/
├── components/
│   ├── Chatbot.tsx          # Main chat container & state
│   ├── ChatHeader.tsx       # Header with bot name + status
│   ├── ChatMessage.tsx      # User/bot message bubble
│   ├── ChatInput.tsx        # Input field + send button
│   ├── TypingIndicator.tsx  # Animated typing dots
│   └── QuickReplies.tsx     # Suggested starter questions
├── lib/
│   └── chatbot.ts           # Knowledge base + matching engine
└── pages/
    └── Index.tsx            # Main page
Getting Started
Prerequisites
Node.js 18+ and npm (or bun)
Installation


# Install dependencies
npm install

# Start the dev server
npm run dev
Open http://localhost:5173 in your browser.

Build for production
npm run build
npm run preview

How It Works
PyBot uses a simple but effective keyword matching algorithm:

The user message is normalized (lowercased, trimmed).
The engine scans the knowledgeBase array in src/lib/chatbot.ts.
Each entry contains an array of keywords and possible responses.
The first entry whose keyword appears in the message wins.
A random response is selected to keep replies varied.
If nothing matches, a friendly default fallback is returned.
// Simplified example
const knowledgeBase = [
  {
    keywords: ["hello", "hi", "hey"],
    responses: ["Hi there! 👋", "Hello! How can I help?"]
  },
  {
    keywords: ["fruit", "fruits"],
    responses: ["Apples, bananas, mangoes, oranges, and grapes "]
  },
];
 Sample Questions to Try
"Hello!"
"Name some fruits"
"Tell me about animals"
"What colors do you know?"
"Tell me a joke"
"What is Python?"
"What time is it?"
 Extending the Knowledge Base
Adding a new topic is as simple as editing src/lib/chatbot.ts:

{
  keywords: ["sports", "football", "cricket"],
  responses: [
    "I love sports! ⚽ Football and cricket are super popular.",
    "Sports keep us active and entertained! "
  ],
},
Save the file — hot reload picks it up instantly.



Acknowledgements
Inspired by classic Python rule-based chatbots
UI built with shadcn/ui and Tailwind CSS
Icons by Lucide
Made with — happy chatting!
