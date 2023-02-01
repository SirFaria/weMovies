import Image from 'next/image'
import { ICartItems, useCart } from '~/contexts/CartContext'
import { Counter } from './Counter'

interface ICartItemMobileProps {
  movieData: ICartItems
}

export function CartItemMobile({ movieData }: ICartItemMobileProps) {
  const { removeItemFromCart } = useCart()
  const subtotal = movieData.amount * movieData.price
  return (
    <div className='w-full flex gap-4 justify-between md:invisible md:hidden'>
      <Image
        width={64}
        height={82}
        className='w-fit max-w-[64px]'
        alt='Imagem da capa do filme'
        src={movieData.image}
      />

      <div className='flex flex-col gap-4 flex-1'>
        <div className='flex gap-4 items-center'>
          <p className='text-bg-dark text-sm font-bold whitespace-nowrap'>
            {movieData.title}
          </p>
          <strong className='text-bg-dark whitespace-nowrap ml-auto'>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(movieData.price)}
          </strong>
          <button onClick={() => removeItemFromCart(movieData.id)}>
            <Image
              width={16}
              height={18}
              className=''
              alt='Ícone de lixeira'
              src='/assets/trash-can.svg'
            />
          </button>
        </div>
        <div className='flex gap-4 justify-between items-end'>
          <Counter />
          <div className='flex flex-col items-end'>
            <span className='text-text-gray text-xs font-bold uppercase'>
              Subtotal
            </span>
            <strong className='text-bg-dark whitespace-nowrap'>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(subtotal)}
            </strong>
          </div>
        </div>
      </div>
    </div>
  )
}
