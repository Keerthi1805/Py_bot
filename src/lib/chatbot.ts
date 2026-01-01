export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface KnowledgeEntry {
  keywords: string[];
  responses: string[];
}

const knowledgeBase: KnowledgeEntry[] = [
  {
    keywords: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'],
    responses: [
      "Hello! 👋 How can I assist you today?",
      "Hi there! I'm here to help. What can I do for you?",
      "Hey! Great to see you. What would you like to know?"
    ]
  },
  {
    keywords: ['how are you', 'how do you do', 'how is it going', 'whats up'],
    responses: [
      "I'm doing great, thank you for asking! How can I help you?",
      "I'm functioning perfectly! Ready to assist you with anything.",
      "All systems running smoothly! What can I do for you today?"
    ]
  },
  {
    keywords: ['name', 'who are you', 'what are you', 'introduce yourself'],
    responses: [
      "I'm PyBot, a rule-based chatbot built to assist you! I use keyword matching to understand your questions.",
      "My name is PyBot! I'm a simple but helpful assistant that matches keywords to provide relevant responses.",
      "I'm PyBot, your friendly neighborhood chatbot. I work by recognizing patterns in your messages!"
    ]
  },
  {
    keywords: ['help', 'assist', 'support', 'what can you do'],
    responses: [
      "I can help you with:\n🔹 General questions\n🔹 Fruits, vegetables & food\n🔹 Animals & nature\n🔹 Colors & numbers\n🔹 Basic conversations!",
      "I'm here to assist! Try asking me about fruits, animals, colors, or just have a friendly chat.",
      "I can answer questions about many topics like food, animals, nature, and more. What would you like to know?"
    ]
  },
  {
    keywords: ['fruit', 'fruits', 'apple', 'banana', 'orange', 'mango'],
    responses: [
      "Here are some popular fruits 🍎🍌🍊:\n• Apple - crisp and sweet\n• Banana - rich in potassium\n• Orange - packed with vitamin C\n• Mango - the king of fruits\n• Grapes - great for snacking\n• Strawberry - delicious berries\n• Watermelon - refreshing in summer",
      "Fruits I know about: Apple, Banana, Orange, Mango, Grapes, Pineapple, Papaya, Guava, Kiwi, and Strawberry! 🍇🍓 They're all delicious and nutritious!",
      "Some fruits you might enjoy: 🥭 Mango, 🍎 Apple, 🍌 Banana, 🍊 Orange, 🍇 Grapes, 🍓 Strawberry, 🍉 Watermelon, 🍍 Pineapple!"
    ]
  },
  {
    keywords: ['vegetable', 'vegetables', 'veggies', 'carrot', 'potato'],
    responses: [
      "Here are some common vegetables 🥕🥔:\n• Carrot - good for eyes\n• Potato - versatile and filling\n• Tomato - rich in lycopene\n• Spinach - iron-rich greens\n• Broccoli - full of vitamins\n• Onion - adds flavor to dishes",
      "Vegetables I can tell you about: Carrot, Potato, Tomato, Cabbage, Spinach, Broccoli, Cauliflower, Cucumber, and Bell Peppers! 🥬🥒",
      "Veggies are great for health! Some examples: Carrot 🥕, Potato 🥔, Tomato 🍅, Spinach, Broccoli 🥦, and many more!"
    ]
  },
  {
    keywords: ['animal', 'animals', 'dog', 'cat', 'bird', 'pet', 'pets'],
    responses: [
      "Here are some animals 🐕🐈:\n• Dog - loyal companion\n• Cat - independent and cute\n• Bird - beautiful singers\n• Fish - peaceful pets\n• Rabbit - fluffy friends\n• Elephant - largest land animal\n• Lion - king of the jungle",
      "Animals I know: Dogs 🐕, Cats 🐈, Birds 🐦, Fish 🐠, Horses 🐴, Elephants 🐘, Lions 🦁, Tigers 🐯, and many more!",
      "Some popular animals: Dog, Cat, Horse, Cow, Sheep, Goat, Chicken, Duck, Eagle, and Dolphin! 🐾"
    ]
  },
  {
    keywords: ['color', 'colors', 'colour', 'colours', 'red', 'blue', 'green'],
    responses: [
      "Here are the primary and common colors 🎨:\n• Red - color of passion\n• Blue - calm and serene\n• Green - nature's color\n• Yellow - bright and cheerful\n• Orange - warm and energetic\n• Purple - royal and mysterious\n• Pink - soft and lovely",
      "Colors of the rainbow: Red 🔴, Orange 🟠, Yellow 🟡, Green 🟢, Blue 🔵, Indigo, and Violet! 🌈",
      "Some beautiful colors: Red, Blue, Green, Yellow, Purple, Pink, Orange, Black, White, and Brown! 🎨"
    ]
  },
  {
    keywords: ['number', 'numbers', 'count', 'counting', 'math'],
    responses: [
      "Here are numbers 1-10: One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten! 🔢",
      "Numbers are fascinating! 1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣8️⃣9️⃣🔟 What would you like to know about them?",
      "I can help with numbers! Basic counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10... and beyond! 📊"
    ]
  },
  {
    keywords: ['food', 'eat', 'eating', 'meal', 'hungry', 'dish'],
    responses: [
      "Popular foods around the world 🍕🍔:\n• Pizza - Italian classic\n• Burger - American favorite\n• Sushi - Japanese delicacy\n• Pasta - comfort food\n• Curry - flavorful and spicy\n• Tacos - Mexican delight",
      "Some delicious foods: Pizza 🍕, Burger 🍔, Rice 🍚, Noodles 🍜, Bread 🍞, Salad 🥗, and Soup 🍲!",
      "Food is wonderful! Some examples: Breakfast foods, lunch meals, dinner dishes, snacks, and desserts! 🍽️ What are you craving?"
    ]
  },
  {
    keywords: ['weather', 'temperature', 'forecast', 'rain', 'sunny', 'cold', 'hot'],
    responses: [
      "I don't have access to real-time weather data, but I hope you have a wonderful day regardless! ☀️🌧️",
      "Weather types I know: Sunny ☀️, Rainy 🌧️, Cloudy ☁️, Snowy ❄️, Windy 💨, and Stormy ⛈️!",
      "I can't check the weather, but here are weather types: Sunny, Cloudy, Rainy, Snowy, Foggy, and Windy! 🌤️"
    ]
  },
  {
    keywords: ['time', 'date', 'day', 'today', 'clock'],
    responses: [
      "I don't have access to real-time clock, but I'm always here to chat whenever you need! ⏰",
      "Days of the week: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday! 📅",
      "Months of the year: January through December! Time flies when you're having fun! 🗓️"
    ]
  },
  {
    keywords: ['python', 'programming', 'code', 'coding', 'developer'],
    responses: [
      "Python is a fantastic programming language! It's known for its readable syntax and versatility. I was conceptually built using Python principles! 🐍",
      "Programming is the art of telling computers what to do. Python makes it especially accessible with its clean, intuitive syntax.",
      "As a chatbot, I appreciate good code! Python's simplicity is what makes building bots like me possible."
    ]
  },
  {
    keywords: ['how do you work', 'how were you built', 'architecture', 'design'],
    responses: [
      "I work using keyword matching! When you send a message, I scan it for keywords and match them to my knowledge base to find the best response.",
      "My architecture is simple: I have a knowledge base with keywords and responses. When your message matches keywords, I pick a relevant response!",
      "I use a rule-based approach: predefined keywords mapped to responses. No neural networks here, just good old pattern matching!"
    ]
  },
  {
    keywords: ['thank', 'thanks', 'appreciate', 'grateful'],
    responses: [
      "You're welcome! 😊 It's my pleasure to help!",
      "Anytime! That's what I'm here for.",
      "Happy to help! Feel free to ask me anything else."
    ]
  },
  {
    keywords: ['bye', 'goodbye', 'see you', 'farewell', 'later'],
    responses: [
      "Goodbye! 👋 Have a wonderful day!",
      "See you later! Feel free to come back anytime.",
      "Farewell! It was nice chatting with you. Take care!"
    ]
  },
  {
    keywords: ['joke', 'funny', 'laugh', 'humor'],
    responses: [
      "Why do programmers prefer dark mode? Because light attracts bugs! 🐛😄",
      "Why did the chatbot go to therapy? It had too many issues with processing emotions! 😂",
      "What's a robot's favorite type of music? Heavy metal! 🤖🎸"
    ]
  },
  {
    keywords: ['love', 'like you', 'awesome', 'amazing', 'great'],
    responses: [
      "Aww, thank you! You're pretty awesome yourself! 💖",
      "That means a lot! I enjoy our conversations too!",
      "You're making my circuits warm! Thanks for the kind words! 😊"
    ]
  }
];

const defaultResponses = [
  "I'm not quite sure I understand. Could you rephrase that?",
  "Hmm, that's outside my knowledge base. Try asking something else!",
  "I don't have information about that, but I'm always learning! Ask me something else.",
  "I'm a simple bot with limited knowledge. Could you try a different question?",
  "I didn't catch that. Maybe try using different words?"
];

function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export function generateResponse(userMessage: string): string {
  const normalizedMessage = userMessage.toLowerCase().trim();
  
  // Find matching knowledge entry
  for (const entry of knowledgeBase) {
    for (const keyword of entry.keywords) {
      if (normalizedMessage.includes(keyword)) {
        return getRandomItem(entry.responses);
      }
    }
  }
  
  // Return default response if no match found
  return getRandomItem(defaultResponses);
}

export function generateId(): string {
  return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
