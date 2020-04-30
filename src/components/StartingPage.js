import React from 'react'
import { StartButton } from 'components/StartButton'
import styled from 'styled-components'

const WelcomeContainer = styled.div`
  width:100%;
  display:flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`
const WelcomeGreeting = styled.h1`
  font-size: 68px;
  width:100%;
  color: #8a4a1c;
  margin-bottom: 0;
`
const WelcomeText = styled.p`
  width: 75%;
  font-family: 'Actor', sans-serif;
  font-size: 30px;
  color: #8a4a1c;

`

export const StartingPage = () => {
  return (
    <WelcomeContainer>
      <WelcomeGreeting>Giraffe quiz!</WelcomeGreeting>
      <WelcomeText>Let's see how much you know about giraffes<span role="img" aria-label="giraffe emojis">🦒🦒🦒</span></WelcomeText>
      <StartButton />
    </WelcomeContainer>
  )
}