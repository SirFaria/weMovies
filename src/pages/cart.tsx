import { CartItemDesktop } from '~/components/CartItemDesktop'
import { CartItemMobile } from '~/components/CartItemMobile'
import { EmptyCart } from '~/components/EmptyCart'
import { useCart } from '~/contexts/CartContext'
import { formatToBRL } from '~/utils/currencyFormatter'

export default function Cart() {
  const { cartItems, buyItems } = useCart()

  const totalCost = cartItems.reduce(
    (acc, { amount, price }) => acc + amount * price,
    0,
  )

  if (cartItems.length === 0) {
    return (
      <>
        <EmptyCart />
      </>
    )
  }
  return (
    <article className='bg-white w-full h-full p-4 rounded flex-1 flex flex-col gap-[21px] md:mx-4 md:px-6 md:pb-6 md:pt-[3px] lg:mx-0 '>
      <div className='w-full flex-1'>
        <div className='w-full flex flex-col gap-4'>
          {cartItems.map(item => (
            <CartItemMobile key={item.id} itemData={item} />
          ))}
        </div>
        <table className='invisible hidden md:table md:visible border-separate border-spacing-y-[21px] border-spacing-x-0 w-full'>
          <thead className=''>
            <tr>
              <th className='text-text-gray text-sm font-bold uppercase text-ellipsis whitespace-nowrap text-left'>
                Produto
              </th>
              <th className='text-text-gray text-sm font-bold uppercase text-ellipsis whitespace-nowrap text-left'>
                Qtd
              </th>
              <th className='text-text-gray text-sm font-bold uppercase text-ellipsis whitespace-nowrap text-left'>
                Subtotal
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <CartItemDesktop key={item.id} itemData={item} />
            ))}
          </tbody>
        </table>
      </div>
      <div className='border border-text-gray h-[1px] w-full mt-auto'></div>
      <div className='w-full flex flex-col gap-4 items-end md:flex-row-reverse md:justify-between'>
        <div className='flex items-center'>
          <p className='text-text-gray text-sm font-bold uppercase'>Total </p>
          <strong className='ml-4 text-bg-dark text-2xl font-bold'>
            {formatToBRL(totalCost)}
          </strong>
        </div>
        <button
          className='bg-btn-blue text-white text-sm font-bold w-full py-[11px] px-[60px] uppercase rounded justify-self-end md:w-fit'
          onClick={buyItems}
        >
          Finalizar pedido
        </button>
      </div>
    </article>
  )
}
