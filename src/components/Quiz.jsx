import React, { useState } from "react";

export const Quiz = ({ question, answers, correctIndex }) => {
  const [result, setResult] = useState("");
  const [color, setColor] = useState("")

  const checkAnswer = (i) => {
    if (i === correctIndex) {
      setResult("Правильно!");
      setColor("green")
    } else {
      setResult("Неправильно");
      setColor("red")
    }
  };

  return (
    <div className={`question ${color}`}>
      <h2>{question}</h2>

      <div className="buttons">
        {answers.map((answer, i) => (
          <button key={i} onClick={() => checkAnswer(i)}>
            {answer}
          </button>
        ))}
      </div>
      {result && <p>{result}</p>}
    </div>
  );
};
