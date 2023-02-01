import Image from 'next/image'
import { ICartItems, useCart } from '~/contexts/CartContext'
import { formatToBRL } from '~/utils/currencyFormatter'
import { Counter } from './Counter'

interface ICartItemDesktopProps {
  itemData: ICartItems
}

export function CartItemDesktop({ itemData }: ICartItemDesktopProps) {
  const { removeItemFromCart } = useCart()
  const subtotal = itemData.amount * itemData.price

  return (
    <tr className='w-full'>
      <td>
        <div className='flex items-center'>
          <Image
            width={89}
            height={114}
            className='w-fit '
            alt='Imagem da capa do filme'
            src={itemData.image}
          />
          <div className='flex flex-col pl-[52px]'>
            <p className='text-bg-dark text-sm font-bold whitespace-nowrap'>
              {itemData.title}
            </p>
            <strong className='text-bg-dark whitespace-nowrap'>
              {formatToBRL(itemData.price)}
            </strong>
          </div>
        </div>
      </td>

      <td className='w-[170px]'>
        <Counter itemId={itemData.id} itemAmount={itemData.amount} />
      </td>

      <td>
        <strong className='text-bg-dark whitespace-nowrap'>
          {formatToBRL(subtotal)}
        </strong>
      </td>

      <td>
        <button onClick={() => removeItemFromCart(itemData.id)}>
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
