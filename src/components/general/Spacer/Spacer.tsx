import React from 'react'

import { StyledSpacer } from './Spacer.styles'

import type { ISpacerProps } from './Spacer.types'

const Spacer: React.FC<React.PropsWithChildren<ISpacerProps>> = (props) => {
  const { children, ...spacerProps } = props

  return <StyledSpacer {...spacerProps}>{children}</StyledSpacer>
}

export default Spacer
