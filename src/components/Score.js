import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

export const Score = () => {
  const everyAnswer = useSelector((state) => state.quiz.answers)
  const correctAnswers = everyAnswer.filter((correct) => correct.isCorrect)

  const SummaryContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  `

  const SummaryGreeting = styled.h2`
    font-size: 50px;
    width:80%;
    color: #8a4a1c;
    margin-bottom: 0;
  `

  return (
    <SummaryContainer>
      <SummaryGreeting>Congrats you got {correctAnswers.length * 887} points! <span role="img" aria-label="emoji">🎉</span></SummaryGreeting>
    </SummaryContainer>
  )
}