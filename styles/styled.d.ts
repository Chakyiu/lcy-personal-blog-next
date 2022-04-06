import 'styled-components/macro'
import { TTheme } from './themes'

declare module 'styled-components/macro' {
  export interface DefaultTheme extends TTheme {}
}
