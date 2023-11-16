import React from 'react'

import { formatPostedTime } from 'lib/helpers'

import { StyledCardTime, StyledDiv } from './Card.Time.styles'

import type { ICardTimeProps } from './Card.Time.types'

const CardTime: React.FC<ICardTimeProps> = (props) => {
  const { time, children, additionalStyles } = props

  if (time) {
    return <StyledCardTime additionalStyles={additionalStyles}>{formatPostedTime(time)}</StyledCardTime>
  }

  return <StyledDiv>{children}</StyledDiv>
}

export default CardTime
