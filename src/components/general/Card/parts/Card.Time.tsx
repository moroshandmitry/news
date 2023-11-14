import React from 'react'
import styled, { css } from 'styled-components'

import { formatPostedTime } from 'lib/helpers'

interface ICardTimeProps extends React.PropsWithChildren {
  time?: string
  additionalStyles?: ReturnType<typeof css>
}

const commonStyles = css`
  font-size: 14px;
  width: max-content;
  color: rgb(128, 128, 128);
`

const StyledCardTime = styled.time<ICardTimeProps>`
  ${commonStyles}
  ${({ additionalStyles }) => additionalStyles && additionalStyles}
`

const StyledDiv = styled.div``

const CardTime: React.FC<ICardTimeProps> = (props) => {
  const { time, children, additionalStyles } = props

  if (time) {
    return <StyledCardTime additionalStyles={additionalStyles}>{formatPostedTime(time)}</StyledCardTime>
  }

  return <StyledDiv>{children}</StyledDiv>
}

export default CardTime
