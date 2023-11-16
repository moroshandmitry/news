import styled from 'styled-components'

import type { ISpacerProps } from './Spacer.types'

export const applySpacerStyles = (props: ISpacerProps) => {
  return {
    display: 'flex',
    padding: props.padding ?? undefined,
    paddingTop: props.pt ?? undefined,
    paddingRight: props.pr ?? undefined,
    paddingBottom: props.pb ?? undefined,
    paddingLeft: props.pl ?? undefined,
    margin: props.margin ?? undefined,
    marginTop: props.mt ?? undefined,
    marginRight: props.mr ?? undefined,
    marginBottom: props.mb ?? undefined,
    marginLeft: props.ml ?? undefined,
    flexWrap: props.flexWrap ?? undefined,
    alignSelf: props.alignSelf ?? undefined,
    alignItems: props.alignItems ?? undefined,
    flexDirection: props.flexDirection ?? 'column',
    alignContent: props.alignContent ?? undefined,
    justifyContent: props.justifyContent ?? undefined,
  }
}

export const StyledSpacer = styled.div<ISpacerProps>`
  ${applySpacerStyles}
`
