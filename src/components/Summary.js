import React from 'react'
import { Score } from 'components/Score'
import { RestartButton } from 'components/RestartButton'
import styled from 'styled-components'

export const Summary = () => {

  const SummaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    margin-top: 2em;
  `

  return (
    <SummaryContainer>
      <Score />
      <RestartButton />
    </SummaryContainer>
  )
}
