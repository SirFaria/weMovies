import Image from 'next/image'
import { ICartItems, useCart } from '~/contexts/CartContext'
import { Counter } from './Counter'

interface ICartItemDesktopProps {
  movieData: ICartItems
}

export function CartItemDesktop({ movieData }: ICartItemDesktopProps) {
  const { removeItemFromCart } = useCart()
  const subtotal = movieData.amount * movieData.price

  return (
    <tr className='w-full'>
      <td>
        <div className='flex items-center'>
          <Image
            width={89}
            height={114}
            className='w-fit '
            alt='Imagem da capa do filme'
            src={movieData.image}
          />
          <div className='flex flex-col pl-[52px]'>
            <p className='text-bg-dark text-sm font-bold whitespace-nowrap'>
              {movieData.title}
            </p>
            <strong className='text-bg-dark whitespace-nowrap'>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(movieData.price)}
            </strong>
          </div>
        </div>
      </td>

      <td className='w-[170px]'>
        <Counter />
      </td>

      <td>
        <strong className='text-bg-dark whitespace-nowrap'>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(subtotal)}
        </strong>
      </td>

      <td>
        <button onClick={() => removeItemFromCart(movieData.id)}>
          <Image
            width={16}
            height={18}
            className='ml-auto'
            alt='Ícone de lixeira'
            src='/assets/trash-can.svg'
          />
        </button>
      </td>
    </tr>
  )
}
