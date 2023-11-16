import React from 'react'

import { StyledSpacer } from './Spacer.styles'

import type { ISpacerProps } from './Spacer.types'

const Spacer: React.FC<React.PropsWithChildren<ISpacerProps>> = (props) => {
  const { children, ...spacerProps } = props

  const renderChildren = React.Children.toArray(children) as React.ReactElement[]

  return <StyledSpacer {...spacerProps}>{renderChildren}</StyledSpacer>
}

export default Spacer
