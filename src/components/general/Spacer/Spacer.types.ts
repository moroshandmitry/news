import type { CSSProperties } from 'styled-components'

type FlexProperties = Pick<CSSProperties, 'flexDirection' | 'justifyContent' | 'alignItems' | 'flexWrap' | 'alignSelf' | 'alignContent'>

export interface ISpacerProps extends FlexProperties {
  margin?: number
  mt?: number
  mr?: number
  mb?: number
  ml?: number
  padding?: number
  pt?: number
  pr?: number
  pb?: number
  pl?: number
}
