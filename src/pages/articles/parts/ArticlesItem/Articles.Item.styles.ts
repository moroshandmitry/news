import { css } from 'styled-components'
import { colorOpacityMixin } from 'theme/style/mixins'

export const styledCardCss = css`
  border: 1px solid ${(props) => colorOpacityMixin(props.theme.colors.linen, 0.1)};
`
