import { css } from 'styled-components'

export interface ICardDescProps extends React.PropsWithChildren {
  desc?: string
  additionalStyles?: ReturnType<typeof css>
}
