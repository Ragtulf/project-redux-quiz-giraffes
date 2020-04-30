import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { quiz } from 'reducers/quiz'
import { Progress } from './Progress'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuesionIndex])
  const dispatch = useDispatch()
  const [hasAnswer, setHasAnswer] = useState(false)

  if (!question) {
    return <QuestionText>Oh no! I could not find the current question!</QuestionText>
  }

  const handleClick = (index) => {
    setHasAnswer(true)
    dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index }))
  }

  const nextClick = () => {
    setHasAnswer(false)
    dispatch(quiz.actions.goToNextQuestion())
  }

  const handleColor = (props) => {
    console.log(props)
    if (hasAnswer && props.index === question.correctAnswerIndex) {
      return '#6ed14d' //
    } else if (hasAnswer && props.index !== question.correctAnswerIndex) {
      return '#ed4a2d' //
    } else {
      return '#e05ed3' //pink
    }
  }

  const CurrentQuestionContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`
  const Image = styled.img`
    margin: 30px 0 0 0;
    width: 300px;
  `
  const QuestionText = styled.h2`
    font-size: 24px;
    width: 300px;
    text-align: center;
    color: #8a4a1c;
    margin: 10px 0 5px 0;
  `

  const AnswerContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    max-width: 300px;
  `

  const AnswerButton = styled.button`
    width: 100px;
    height: 80px;
    background-color: ${handleColor};
    color: #fff;
    border: none;
    border-radius: 10px;
    font-family: 'Actor', sans-serif;
    font-size: 18px;
    font-weight: bold;
    transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    -moz-transition: all .4s ease-in-out;
    -ms-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    margin: 5px;
    cursor: pointer;
  `
  // &&:hover {
  //   background-color: #b51db5;
  // }
  // &&:focus {
  //   background-color: #b51db5;
  // }

  const NextButton = styled.button`
    width: 120px;
    height: 40px;
    padding-bottom: 0.2em;
    background-color: #8a4a1c;;
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
    margin: 10px 0 20px 0;
    cursor: pointer;

    &&:hover {
      background-color: #e37629;
    }

    &&:disabled {
      color: #ccc;
      background-color: #cf8b00;
    }
  `

  return (
    <CurrentQuestionContainer>
      <Image src={question.image} alt="Giraffe" />
      <QuestionText>Question: {question.questionText}</QuestionText>
      <AnswerContainer>
        {question.options.map((answer, index) => {
          return (
            <AnswerButton
              // className={hasAnswer && index === question.correctAnswerIndex ? 'answerOption green' : 'answerOption'}
              key={index}
              index={index}
              type="button"
              disabled={hasAnswer}
              onClick={() => handleClick(index)}>
              {answer}
            </AnswerButton>
          )
        })}
      </AnswerContainer>
      <NextButton
        type="button"
        className="moveOn"
        disabled={!hasAnswer}
        onClick={() => nextClick()}>
        NEXT
      </NextButton>
      <Progress />
    </CurrentQuestionContainer>
  )
}