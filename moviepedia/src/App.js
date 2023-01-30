import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setTodos((currentArray) => [...currentArray, todo]);
    setTodo("");
  };
  console.log(todos);
  return (
    <div>
      <h1>{todos.length} things to do</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Anything to do?"
          onChange={onChange}
          value={todo}
        ></input>
        <button>Add</button>
      </form>
    </div>
  );
}

export default App;
