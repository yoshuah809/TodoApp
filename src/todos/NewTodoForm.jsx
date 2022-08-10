import { useState } from "react";
import { connect } from "react-redux";
import { createTodo } from "../app/actions";
import "./NewTodoForm.css";

const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="new-todo-form">
      <input
        value={inputValue}
        placeholder="Type your new Todo Here"
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        className="new-todo-input"
      />
      <button
        onClick={() => {
          const isDuplicateText = todos.some(
            (todo) => todo.text === inputValue
          );
          if (!isDuplicateText) {
            onCreatePressed(inputValue);
            setInputValue("");
          }
        }}
        className="new-todo-button"
      >
        Create Todo
      </button>
    </div>
  );
};
const mapStateToProps = (state) => ({
  todos: state.todos
});
const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(createTodo(text))
});
export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
