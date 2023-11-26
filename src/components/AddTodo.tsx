import { useTodoStore } from "@/stores/stores/todoStore";
import { useState } from "react";

const AddTodo = () => {
  const [text, setText] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="add-todo-input"
      />
      <button type="submit" className="add-todo-button">
        Add
      </button>
    </form>
  );
};

export default AddTodo;
