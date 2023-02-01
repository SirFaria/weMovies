import Image from 'next/image'
import { IMovies, useCart } from '~/contexts/CartContext'

interface IMovieCardProps {
  movieData: IMovies
}

export function MovieCard({ movieData }: IMovieCardProps) {
  const { addItemToCart } = useCart()

  return (
    <div className='bg-white rounded flex flex-col items-center p-[10px] md:min-w-[309px] md:h-fit'>
      <Image
        width={147}
        height={188}
        className='mb-2'
        alt='Imagem da capa do filme'
        src={movieData.image}
      />
      <p className='font-bold text-xs text-bg-dark'>{movieData.title}</p>
      <span className='font-bold text-bg-dark'>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(movieData.price)}
      </span>
      <button
        className='bg-btn-blue w-full py-[11px] mt-2 flex items-center justify-center rounded'
        onClick={() => addItemToCart(movieData)}
      >
        <Image
          width={12}
          height={12}
          className=''
          alt='Ícone carrinho de compras'
          src='/assets/shopping-cart.svg'
        />
        <span className='ml-[5px] text-white text-xs font-normal'>0</span>
        <p className='ml-3 text-white font-bold text-xs uppercase'>
          Adicionar ao carrinho
        </p>
      </button>
    </div>
  )
}
