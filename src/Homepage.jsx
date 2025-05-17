"use client";

import { useState, useEffect } from "react";
import { useStream } from "@langchain/langgraph-sdk/react";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const thread = useStream({
    apiUrl: "https://deploy-1983a7058c7254d6952d610c94e0f412.us.langgraph.app",
    assistantId: "agent",
    apiKey: "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",
    messagesKey: "messages",
  });

  useEffect(() => {
    if (thread.values?.messages) {
      setMessages(thread.values.messages);
    }
    setIsLoading(thread.isLoading);
  }, [thread.values, thread.isLoading]);

  console.log("Thread values:", thread.values);

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="mb-4 p-4 bg-gray-50 rounded-lg min-h-[300px] max-h-[500px] overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            {msg}
          </div>
        ))}

        {thread.interrupt && (
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg mb-4 whitespace-pre-wrap">
            {thread.interrupt.value.toString()}
          </div>
        )}

        {isLoading && !thread.interrupt && <div className="text-gray-500">Thinking...</div>}
      </div>

      <form
        className="flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.target;
          const userInput = new FormData(form).get("message");
          form.reset();

          if (thread.interrupt) {
            thread.submit(undefined, { command: { resume: userInput } });
          } else {
            thread.submit({
              messages: [userInput],
            });
          }
        }}
      >
        <input
          type="text"
          name="message"
          required
          className="flex-1 p-2 border rounded-lg"
          placeholder={thread.interrupt ? "Type your response..." : "Type a message..."}
        />

        {thread.isLoading ? (
          <button type="button" onClick={() => thread.stop()} className="px-4 py-2 bg-red-500 text-white rounded-lg">
            Stop
          </button>
        ) : (
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            Send
          </button>
        )}
      </form>
    </div>
  );
}
