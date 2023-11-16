import styled from 'styled-components'

import type { ISpacerProps } from './Spacer.types'

export const applySpacerStyles = ({
  padding,
  pt,
  pr,
  pb,
  pl,
  margin,
  mt,
  mr,
  mb,
  ml,
  display,
  flexDirection,
  ...restFlexProps
}: ISpacerProps) => ({
  padding: padding ?? undefined,
  paddingTop: pt ?? undefined,
  paddingRight: pr ?? undefined,
  paddingBottom: pb ?? undefined,
  paddingLeft: pl ?? undefined,
  margin: margin ?? undefined,
  marginTop: mt ?? undefined,
  marginRight: mr ?? undefined,
  marginBottom: mb ?? undefined,
  marginLeft: ml ?? undefined,
  display: display ?? 'flex',
  flexDirection: flexDirection ?? 'column',
  ...restFlexProps,
})

export const StyledSpacer = styled.div<ISpacerProps>`
  ${applySpacerStyles}
`
