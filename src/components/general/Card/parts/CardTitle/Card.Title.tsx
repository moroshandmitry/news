import React from 'react'

import { decodeText } from 'lib/helpers'

import { StyledCardTitle, StyledDiv } from './Card.Title.styles'

import type { ICardTitleProps } from './Card.Title.types'

const CardTitle: React.FC<ICardTitleProps> = (props) => {
  const { title, children, additionalStyles } = props

  if (title) {
    return <StyledCardTitle additionalStyles={additionalStyles}>{decodeText(title)}</StyledCardTitle>
  }

  const renderedChildren = React.Children.map(children, (child, index) => {
    return <StyledDiv key={index}>{child}</StyledDiv>
  })

  return <>{renderedChildren}</>
}

export default CardTitle
