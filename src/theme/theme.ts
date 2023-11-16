import { baseColors } from './style/constants'

type BaseColors = typeof baseColors

export type ThemeColors = BaseColors & {
  primary: string
  secondary: string
  tertiary: string
  quaternary: string
}

export interface Theme {
  colors: ThemeColors
}

export const lightTheme: ThemeColors = {
  primary: baseColors.black,
  secondary: baseColors.white,
  tertiary: baseColors.mediumGray,
  quaternary: baseColors.platinum,
  ...baseColors,
}

export const darkTheme: ThemeColors = {
  primary: baseColors.deepPlum,
  secondary: baseColors.linen,
  tertiary: baseColors.royalLavender,
  quaternary: baseColors.lilacGray,
  ...baseColors,
}

const theme: Record<'light' | 'dark', Theme> = {
  light: { colors: lightTheme },
  dark: { colors: darkTheme },
}

// Extend DefaultTheme for autocomplete in styled components
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export default theme
