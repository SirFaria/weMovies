import Image from 'next/image'
import { MovieCard } from '~/components/MovieCard'

export default function Home() {
  return (
    <>
      <MovieCard />
      {/* <Image
          className='animate-spin m-auto'
          alt='Carregando itens'
          src='/assets/loader.png'
          width={55.41}
          height={55.41}
        /> */}
    </>
  )
}
