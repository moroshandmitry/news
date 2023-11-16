import styled from 'styled-components'

import type { ICardProps } from './Card.types'

export const StyledCard = styled.article<ICardProps>`
  display: flex;
  flex-direction: row;
  margin: 0px 0px 24px;
  ${(props) => props.additionalStyles}
`
