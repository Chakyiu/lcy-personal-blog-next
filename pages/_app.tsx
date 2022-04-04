import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components/macro'
import { wrapper } from '@store/store'
import { useSelector } from 'react-redux'
import { RootState } from '@store/reducers'
import { lightTheme, darkTheme } from '@styles/themes'

function MyApp({ Component, pageProps }: AppProps) {
  const theme = useSelector((state: RootState) => state.app.theme)

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default wrapper.withRedux(MyApp)
