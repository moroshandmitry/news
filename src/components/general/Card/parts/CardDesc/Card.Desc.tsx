import React from 'react'

import { StyledCardDesc, StyledDiv } from './Card.Desc.styles'

import type { ICardDescProps } from './Card.Desc.types'

const CardDesc: React.FC<ICardDescProps> = (props) => {
  const { desc, children, additionalStyles } = props

  if (desc) {
    return <StyledCardDesc additionalStyles={additionalStyles}>{desc}</StyledCardDesc>
  }

  return <StyledDiv>{children}</StyledDiv>
}

export default CardDesc
