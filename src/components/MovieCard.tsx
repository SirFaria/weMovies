import Image from 'next/image'
import { IMovies, useCart } from '~/contexts/CartContext'
import { formatToBRL } from '~/utils/currencyFormatter'

interface IMovieCardProps {
  movieData: IMovies
}

export function MovieCard({ movieData }: IMovieCardProps) {
  const { cartItems, addItemToCart } = useCart()

  const thisMovie = cartItems.find(item => item.id === movieData.id)

  const isOnCart = thisMovie?.id === movieData.id

  return (
    <div className='bg-white rounded flex flex-col items-center justify-between p-[10px] md:min-w-[309px] md:h-fit md:min-h-[305px]'>
      <Image
        width={147}
        height={188}
        className='mb-2'
        alt='Imagem da capa do filme'
        src={movieData.image}
      />
      <p className='font-bold text-xs text-bg-dark'>{movieData.title}</p>
      <span className='font-bold text-bg-dark'>
        {formatToBRL(movieData.price)}
      </span>
      <button
        className={` ${
          isOnCart ? 'bg-btn-green' : 'bg-btn-blue'
        } w-full py-[11px] mt-2 flex items-center justify-center rounded`}
        onClick={() => addItemToCart(movieData)}
      >
        <Image
          width={12}
          height={12}
          className=''
          alt='Ícone carrinho de compras'
          src='/assets/shopping-cart.svg'
        />
        <span className='ml-[5px] text-white text-xs font-normal'>
          {isOnCart ? thisMovie.amount : '0'}
        </span>
        <p className='ml-3 text-white font-bold text-xs uppercase'>
          {isOnCart ? 'Item Adicionado' : 'Adicionar ao carrinho'}
        </p>
      </button>
    </div>
  )
}
