import React from 'react'

import * as Parts from './parts'

import { StyledCard } from './Card.styles'

import type { ICardParts, ICardProps } from './Card.types'

const Card: React.FC<ICardProps> & ICardParts = (props) => {
  const { children, styledCss, ...restArticleProps } = props

  return (
    <StyledCard styledCss={styledCss} {...restArticleProps}>
      {children}
    </StyledCard>
  )
}

Card.Time = Parts.CardTime
Card.Desc = Parts.CardDesc
Card.Title = Parts.CardTitle

export default Card
