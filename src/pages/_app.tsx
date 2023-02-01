import '~/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Header } from '~/components/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>We Fit</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Header />
      <main className='bg-bg-dark min-h-[calc(100vh-64px)] px-4 pb-4 flex flex-col gap-4'>
        <Component {...pageProps} />
      </main>
    </>
  )
}
