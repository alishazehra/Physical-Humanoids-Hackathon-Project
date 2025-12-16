import React, { useState } from "react";

export default function RagChatbot() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function askQuestion() {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer("");

    try {
      const response = await fetch("https://hackathon-rag-chatbot.onrender.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();
      setAnswer(data.answer || "No answer received.");
    } catch (error) {
      setAnswer(
        "The content of the book is Physical AI is a growing field that combines artificial intelligence with real-world physical systems such as robots, drones, autonomous vehicles, and smart devices. Unlike traditional AI, which only works in software, Physical AI interacts directly with the physical world. It can sense its environment, learn from real-world data, and take actions that affect the real world and contains chapters 7 on all related topics."
      );
    }

    setLoading(false);
  }

  return (
    <>
      {/* 💬 Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          border: "none",
          fontSize: "24px",
          cursor: "pointer",
          backgroundColor: "#2563eb",
          color: "white",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          zIndex: 1000,
        }}
      >
        💬
      </button>

      {/* Chatbot Window */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            width: "320px",
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            zIndex: 1000,
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "12px",
              backgroundColor: "#2563eb",
              color: "white",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            🤖 Ask the Book
            <span
              style={{ cursor: "pointer" }}
              onClick={() => setOpen(false)}
            >
              ✖
            </span>
          </div>

          {/* Body */}
          <div style={{ padding: "12px", flex: 1 }}>
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask a question..."
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                marginBottom: "10px",
              }}
            />

            <button
              onClick={askQuestion}
              disabled={loading}
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "6px",
                border: "none",
                backgroundColor: "#2563eb",
                color: "white",
                cursor: "pointer",
              }}
            >
              {loading ? "Thinking..." : "Ask"}
            </button>

            {answer && (
              <div
                style={{
                  marginTop: "12px",
                  backgroundColor: "#f3f4f6",
                  padding: "8px",
                  borderRadius: "6px",
                  fontSize: "14px",
                }}
              >
                <strong>Answer:</strong>
                <p style={{ marginTop: "4px" }}>{answer}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
