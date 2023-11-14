import React from 'react'
import styled from 'styled-components'

import { applySpacerStyles } from '../Spacer/Spacer'

import type { ISpacerProps } from '../Spacer/Spacer.types'

interface IImageProps extends React.ComponentPropsWithRef<'img'>, ISpacerProps {}

const StyledImage = styled.img<ISpacerProps>`
  ${applySpacerStyles}
`

const Image: React.FC<IImageProps> = (props) => {
  const { ...spacerProps } = props

  return <StyledImage {...spacerProps} />
}

export default Image
