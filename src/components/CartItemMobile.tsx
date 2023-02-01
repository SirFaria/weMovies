import Image from 'next/image'
import { ICartItems, useCart } from '~/contexts/CartContext'
import { formatToBRL } from '~/utils/currencyFormatter'
import { Counter } from './Counter'

interface ICartItemMobileProps {
  itemData: ICartItems
}

export function CartItemMobile({ itemData }: ICartItemMobileProps) {
  const { removeItemFromCart } = useCart()
  const subtotal = itemData.amount * itemData.price
  return (
    <div className='w-full flex gap-4 justify-between md:invisible md:hidden'>
      <Image
        width={64}
        height={82}
        className='w-fit max-w-[64px]'
        alt='Imagem da capa do filme'
        src={itemData.image}
      />

      <div className='flex flex-col gap-4 flex-1'>
        <div className='flex gap-4 items-center'>
          <p className='text-bg-dark text-sm font-bold whitespace-nowrap'>
            {itemData.title}
          </p>
          <strong className='text-bg-dark whitespace-nowrap ml-auto'>
            {formatToBRL(itemData.price)}
          </strong>
          <button onClick={() => removeItemFromCart(itemData.id)}>
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
          <Counter itemId={itemData.id} itemAmount={itemData.amount} />
          <div className='flex flex-col items-end'>
            <span className='text-text-gray text-xs font-bold uppercase'>
              Subtotal
            </span>
            <strong className='text-bg-dark whitespace-nowrap'>
              {formatToBRL(subtotal)}
            </strong>
          </div>
        </div>
      </div>
    </div>
  )
}
