import React from "react";
import Answers from "../components/Answers";
import ProgressBar from "../components/ProgressBar";

function Quiz() {
  return (
    <>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answers />
      <ProgressBar />
    </>
  );
}

export default Quiz;
