import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTitle } from "../../store/reducer/testsSlice";
import Question from "./Question";

const Todos = () => {
  const { tests } = useSelector((state) => state.tests);
  console.log(tests);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const newTitle = {
    id: Math.random().toString(),
    title: inputValue,
    questions: [],
  };
  const addTitleHandler = (e) => {
    e.preventDefault();

    dispatch(addTitle(newTitle));
  };

  return (
    <div>
      <form action="" onSubmit={addTitleHandler}>
        <input
          className="siver"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="siver-1" type="submit">
          Add
        </button>
      </form>
      {tests.map((test) => (
        <Question key={test.id} {...test}/>
      ))}
    </div>
  );
};

export default Todos;
