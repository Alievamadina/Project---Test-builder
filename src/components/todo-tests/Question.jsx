import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addQuestion } from "../../store/reducer/testsSlice";

const Question = (id, title, questions) => {
    const [inputQuestion, setInputQuestion]= useState("")
    const dispatch = useDispatch()
    const newQuestion={
        question:inputQuestion,
        id: Math.random().toString(),
        titleId:id,
        variants:[]
    }
    const addQuestionHandler=()=>{
        dispatch(addQuestion(newQuestion))
    }


  return (
    <div>
      <h1>{title}</h1>
      <input value={inputQuestion} onChange={e=>setInputQuestion(e.target.value)}/>
      <button onClick={addQuestionHandler} >add question</button>
    </div>
  );
};

export default Question;
