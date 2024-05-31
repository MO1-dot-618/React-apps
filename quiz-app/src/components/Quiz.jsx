import React, { useState, useEffect } from 'react'
import './Quiz.css'
import { data } from '../assets/data';


function Quiz() {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [selectedOption, setSelectedOption] = useState(null);
  let [score, setScore] = useState(0);

  useEffect(() => {
    // Disable the "Next question" button on the first render
    document.getElementById('next-question-button').disabled = true;
  }, []);

  function showScore() {
    const quizContainer = document.querySelector('.quiz-container');
    quizContainer.innerHTML = '';
    const scoreMessage = document.createElement('h2');
    scoreMessage.textContent = `Your score is ${score} out of ${data.length}`;
    quizContainer.appendChild(scoreMessage);
  }

  function selector(e) {
    const allOptions = document.querySelectorAll('.quiz-container li');
    allOptions.forEach(option => option.classList.remove('selected'));
    e.target.classList.add('selected');
    setSelectedOption(e.target.id);
  }
  function checkAnswer() {
    const e = document.getElementById(selectedOption);
    e.classList.remove('selected');
    if (question.answer == selectedOption) {
      e.classList.add("correct");
      setScore(++score);
    } else {
      e.classList.add("wrong");
    }
    document.getElementById('next-question-button').disabled = false;
    document.getElementById('check-answer-button').disabled = true;
  }
  function nextQuestion() {
    if (index === data.length-1) {
      showScore();
    } else {
      setIndex(++index);
      setQuestion(data[index]);
      if (index === data.length-1) {
        document.getElementById('next-question-button').textContent = "Done";
      }
      setSelectedOption(null);
      document.querySelectorAll('.quiz-container li').forEach(option => {
        option.classList.remove('correct', 'wrong', 'selected');
      });
      document.getElementById('next-question-button').disabled = true;
      document.getElementById('check-answer-button').disabled = false;
    }
  }

  return (
    <div className='quiz-container'>
      <h2>{index + 1}. {question.question}</h2>
      <ul>
        <li id="1" onClick={selector}>{question.option1}</li>
        <li id="2" onClick={selector}>{question.option2}</li>
        <li id="3" onClick={selector}>{question.option3}</li>
        <li id="4" onClick={selector}>{question.option4}</li>
      </ul>
      <div class="button-container">
        <button id="check-answer-button" onClick={checkAnswer}>Check answer</button>
        <button id="next-question-button" onClick={nextQuestion}>Next question</button>
      </div>
      <div className='index'>{index + 1} of {data.length} questions</div>
    </div>
  )
}

export default Quiz
