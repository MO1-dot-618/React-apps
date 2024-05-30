import React from 'react'
import './Quiz.css'

function Quiz() {
  return (
    <div className='quiz-container'>
      <h2>How many time zones are there in Russia?</h2>
      <ul>
        <li>11</li>
        <li>1</li>
        <li>5</li>
        <li>8</li>
      </ul>
      <button>Next question</button>
      <div className='index'>1 of 5 questions</div>
    </div>
  )
}

export default Quiz
