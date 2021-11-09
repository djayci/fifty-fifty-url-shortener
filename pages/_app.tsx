import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { CustomHead } from '../src/components/head/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CustomHead />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
