import React from 'react'

import { decodeText } from 'lib/helpers'

import { StyledCardTitle } from './Card.Title.styles'

import type { ICardTitleProps } from './Card.Title.types'

const CardTitle: React.FC<ICardTitleProps> = (props) => {
  const { title, children, styledCss } = props

  if (title) {
    return <StyledCardTitle styledCss={styledCss}>{decodeText(title)}</StyledCardTitle>
  }

  return <React.Fragment>{children}</React.Fragment>
}

export default CardTitle
