import React from 'react'

import { StyledImage } from './Image.styles'

import type { IImageProps } from './Image.types'

const Image: React.FC<IImageProps> = (props) => {
  const { ...spacerProps } = props

  return <StyledImage {...spacerProps} />
}

export default Image
