import '~/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Header } from '~/components/Header'
import { CartProvider } from '~/contexts/CartContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>We Fit</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <CartProvider>
        <Header />
        <main className='min-h-[calc(100vh-64px)] px-4 pb-4 flex flex-col gap-4 md:flex-row md:flex-wrap md:max-w-[960px] md:p-0 md:mx-auto md:content-start md:justify-center'>
          <Component {...pageProps} />
        </main>
      </CartProvider>
    </>
  )
}
