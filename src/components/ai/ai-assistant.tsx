"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const initialMessages: Message[] = [
  {
    role: "assistant",
    content: "Hi! I'm Chamadia AI, your intelligent assistant from Chamadia Real Estates. I can help you find properties, explain payment plans, answer questions, or book a site visit. How can I help you today?",
  },
];

function ChatMessage({ content }: { content: string }) {
  const parts = content.split(/(https?:\/\/[^\s]+)/g);
  return (
    <span>
      {parts.map((part, i) => {
        if (part.startsWith("http")) {
          const isWa = part.includes("wa.me") || part.includes("whatsapp");
          return (
            <a
              key={i}
              href={part}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "underline font-medium transition-colors",
                isWa
                  ? "text-green-600 hover:text-green-700"
                  : "text-navy-900 hover:text-gold-600"
              )}
            >
              {isWa ? "Open WhatsApp" : part}
            </a>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </span>
  );
}

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const handler = () => setIsOpen((prev) => !prev);
    window.addEventListener("toggle-ai-assistant", handler);
    return () => window.removeEventListener("toggle-ai-assistant", handler);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input, history: messages }),
      });

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.message },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Chamadia AI is temporarily unavailable. Please try again or contact us directly at chamadiarealestates@gmail.com." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300",
          isOpen ? "bg-red-500 hover:bg-red-600" : "bg-navy-900 hover:bg-navy-800"
        )}
        aria-label={isOpen ? "Close Chamadia AI" : "Open Chamadia AI"}
      >
        {isOpen ? <X className="w-5 h-5 md:w-6 md:h-6 text-white" /> : <Bot className="w-5 h-5 md:w-6 md:h-6 text-gold-500" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-16 md:bottom-24 right-0 md:right-6 left-0 md:left-auto z-50 mx-3 md:mx-0 w-auto md:w-[380px] max-h-[85vh] md:max-h-none bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
          >
            <div className="bg-navy-900 p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gold-500/20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Chamadia AI</h3>
                  <p className="text-white/60 text-xs">Real Estate Expert</p>
                </div>
              </div>
            </div>

            <div className="h-[350px] md:h-[400px] overflow-y-auto p-4 space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex gap-3",
                    msg.role === "user" && "flex-row-reverse"
                  )}
                >
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                      msg.role === "assistant" ? "bg-navy-50" : "bg-gold-500"
                    )}
                  >
                    {msg.role === "assistant" ? (
                      <Bot className="w-4 h-4 text-navy-900" />
                    ) : (
                      <User className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <div
                    className={cn(
                      "max-w-[80%] rounded-2xl px-4 py-3 text-sm",
                      msg.role === "assistant"
                        ? "bg-gray-100 text-gray-800"
                        : "bg-navy-900 text-white"
                    )}
                  >
                    <ChatMessage content={msg.content} />
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-navy-50 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-navy-900" />
                  </div>
                  <div className="bg-gray-100 rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900/50"
                  disabled={loading}
                />
                <Button variant="primary" size="sm" type="submit" loading={loading} className="px-4">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
