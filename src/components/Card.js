import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./Card.styled.js";
import "./test.css";

const Card = () => {
  return (
    <>
      <h1>
        <header className="answer">
          <Link to="/test">Take the test</Link>
          <br />
          <Link to="/todo">Добавить тест </Link>
          <br />
        </header>
      </h1>
    </>
  );
};
export default Card;
