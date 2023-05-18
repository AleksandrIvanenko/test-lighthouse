import {AppProps} from 'next/app'
import 'src/assets/global.css'

export default function App({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />
}
