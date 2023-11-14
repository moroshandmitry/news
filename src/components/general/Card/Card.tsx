import React from 'react'
import styled, { css } from 'styled-components'

import * as Parts from './parts'

interface ICardProps extends React.ComponentPropsWithRef<'article'>, React.PropsWithChildren {
  additionalStyles?: ReturnType<typeof css>
}

interface ICardParts {
  Time: typeof Parts.CardTime
  Desc: typeof Parts.CardDesc
  Title: typeof Parts.CardTitle
}

const StyledCard = styled.article<ICardProps>`
  display: flex;
  flex-direction: row;
  margin: 0px 0px 24px;
  ${(props) => props.additionalStyles}
`

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
