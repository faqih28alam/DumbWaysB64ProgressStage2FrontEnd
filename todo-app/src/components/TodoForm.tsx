import { useState } from "react";
import { useTodo } from "../hooks/useTodo";

export const TodoForm = () => {
  const [text, setText] = useState("");
  const { createTodo, loading } = useTodo();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    createTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-5">
      <input
        type="text"
        name=""
        id=""
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Add new task..."
        disabled={loading}
      />
      <button type="submit" disabled={loading}>
        Add
      </button>
    </form>
  );
};
