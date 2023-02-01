import Image from 'next/image'
import { useEffect, useState } from 'react'
import { MovieCard } from '~/components/MovieCard'
import { IMovies } from '~/contexts/CartContext'
import { getMoviesList } from '~/services/getMoviesList'

export default function Home() {
  const [moviesList, setMoviesList] = useState<IMovies[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    ;(async () => {
      try {
        setIsLoading(true)
        const movies = await getMoviesList()
        setMoviesList(movies)
      } catch (err) {
      } finally {
        setIsLoading(false)
      }
    })()
  }, [])

  if (isLoading) {
    return (
      <>
        <Image
          priority
          width={55.41}
          height={55.41}
          alt='Carregando itens'
          src='/assets/loader.png'
          className='animate-spin m-auto md:mt-[calc(50vh - 72px)]'
        />
      </>
    )
  }

  return (
    <>
      {moviesList.map(movie => (
        <MovieCard key={movie.id} movieData={movie} />
      ))}
    </>
  )
}
