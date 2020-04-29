import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const StyledProgress = styled.h4`
color: #8a4a1c;
margin: 0;
`

export const Progress = () => {
  const questionIndex = useSelector((state) => state.quiz.currentQuesionIndex)
  const totalQuestions = useSelector((state) => state.quiz.questions.length)
  
  return (
    <>
      <StyledProgress>
        {questionIndex + 1 }/{totalQuestions}
      </StyledProgress>
    </>
  )
}