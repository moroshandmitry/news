import { css } from 'styled-components'

export interface ICardTimeProps extends React.PropsWithChildren {
  time?: string
  additionalStyles?: ReturnType<typeof css>
}
