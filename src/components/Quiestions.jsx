import React from "react";
import { Quiz } from "./Quiz";

export const QuizList = () => {
  return (
    <div className="block">
      <Quiz
        question="Какой это месяц?"
        answers={["Лето", "Рамадан", "4", "Короткий"]}
        correctIndex={1}
      />

      <Quiz
        question="Как меня зовут?"
        answers={["Бекболот", "Атай", "Эмир", "Нурдин"]}
        correctIndex={0}
      />

      <Quiz
        question="Что такое hook?"
        answers={[
          "Это первый скилл пуджа из доты",
          "Забыл",
          "Это специальные JavaScript-функции",
          "Это вирус"
        ]}
        correctIndex={2}
      />
    </div>
  );
};
