import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Card from "./components/Card";
import Pass from "./components/Pass";
import Test from "./components/Test";
import Todos from "./components/todo-tests/Todos";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/card" element={<Card />} />
        <Route path="/test" element={<Test />} />
        <Route path="/pass" element={<Pass />} />
        <Route path="/todo" element={<Todos />} />
      </Routes>
    </>
  );
};

export default App;
