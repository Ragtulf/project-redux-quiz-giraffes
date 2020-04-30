import React from 'react';
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { quiz } from '../reducers/quiz'

const StyledStartButton = styled.button`
  width: 180px;
  height: 40px;
  padding-bottom: 0.5em;
  background-color: #bb88fc;
  color: #fff;
  border: none;
  border-radius: 30px;
  font-family: 'Paytone One', sans-serif;
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  -moz-transition: all .4s ease-in-out;
  -ms-transition: all .4s ease-in-out;
  -o-transition: all .4s ease-in-out;
  cursor: pointer;

  &&:hover {
    background-color: #6b1dcf;
  }
`

export const StartButton = ({ className }) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    return (
      dispatch(quiz.actions.startQuiz())
    )
  }

  return (
    <StyledStartButton
      className={className}
      onClick={handleClick}
      type="button">
      Start quiz
    </StyledStartButton>
  )
}
