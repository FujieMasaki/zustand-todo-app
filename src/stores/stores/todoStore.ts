import create from "zustand";
import { devtools } from "zustand/middleware";

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type TodoState = {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
};

export const useTodoStore = create<TodoState>(
  devtools((set) => ({
    todos: [],

    addTodo: (text) =>
      set((state) => {
        const newTodo = { id: Date.now(), text, done: false };
        return { todos: [...state.todos, newTodo] };
      }),

    toggleTodo: (id) =>
      set((state) => {
        const updatedTodos = state.todos.map((todo) =>
          todo.id === id ? { ...todo, done: !todo.done } : todo
        );
        return { todos: updatedTodos };
      }),
  }))
);
