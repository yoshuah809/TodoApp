import "./styles.css";
import NewTodoForm from "./todos/NewTodoForm";
import TodoList from "./todos/Todolist";

export default function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}
