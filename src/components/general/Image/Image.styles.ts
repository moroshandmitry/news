import styled from 'styled-components'

import { applySpacerStyles } from '../Spacer/Spacer.styles'

import type { ISpacerProps } from '../Spacer/Spacer.types'

export const StyledImage = styled.img<ISpacerProps>`
  ${applySpacerStyles}
`
