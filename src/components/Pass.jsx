import { useState } from "react";
import React from "react";
import { NavLink } from "react-router-dom";

const Pass = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setinputValue] = useState();
  function addTask(e) {
    e.preventDefault();
    if (inputValue.trim().length === 0) {
      return;
    }
    setTodos([
      ...todos,
      {
        id: Math.random().toString(),
        title: inputValue,
      },
    ]);
    setinputValue("");
  }
  const deleteHandler = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
    console.log(todos);
  };
  return (
    <div>
      <NavLink to="/card">
        <p>На главную </p>
      </NavLink>
      <form onSubmit={addTask}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setinputValue(e.target.value)}
        />
        <button>add</button>
      </form>
      {todos.map((item) => {
        return (
          <div key={item.id}>
            {item.title}
            {""}
            <button
              onClick={() => deleteHandler(item.id)}
              style={{ color: "blue" }}
            >
              clear
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Pass;
