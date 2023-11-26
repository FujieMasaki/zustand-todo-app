import { useTodoStore } from "@/stores/stores/todoStore";

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div key={todo.id} className="todo-item">
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => toggleTodo(todo.id)}
            className="todo-checkbox"
          />
          <span className={todo.done ? "todo-done" : ""}>{todo.text}</span>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
