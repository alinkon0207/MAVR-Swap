import { createGlobalStyle, useTheme } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}
const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background: ${({ theme }) => theme.isDark ? "url('/images/background.jpeg')" : "url('/images/bg1.png')" };
    background-size: cover;
    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
