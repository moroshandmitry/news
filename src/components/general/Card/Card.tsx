import React from 'react'

import { StyledCard } from './Card.styles'

import type { ICardParts, ICardProps } from './Card.types'

import * as Parts from './parts'

const Card: React.FC<ICardProps> & ICardParts = (props) => {
  const { children, additionalStyles, ...restArticleProps } = props

  return (
    <StyledCard additionalStyles={additionalStyles} {...restArticleProps}>
      {children}
    </StyledCard>
  )
}

Card.Time = Parts.CardTime
Card.Desc = Parts.CardDesc
Card.Title = Parts.CardTitle

export default Card
