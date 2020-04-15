import React from 'react'
import { useSelector } from 'react-redux'
import { CurrentQuestion } from 'components/CurrentQuestion'
import { Summary } from 'components/Summary'

export const QuizContent = () => {
  const quizOver = useSelector((state) => state.quiz.quizOver)

  return (
    <div>
      {!quizOver ? ( 
      <CurrentQuestion /> 
      ) : ( <Summary />)}
    </div>
  )
}
