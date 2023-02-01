import { CartItem } from '~/components/CartItem'
import { EmptyCart } from '~/components/EmptyCart'
import { Success } from '~/components/Success'

export default function Cart() {
  return (
    <>
      {/* <EmptyCart /> */}
      {/* <Success /> */}
      <article className='bg-white w-full h-full p-4 rounded flex-1 flex flex-col gap-[21px]'>
        <div className='w-full'>
          <CartItem />
        </div>
        <div className='border border-text-gray h-[1px] w-full mt-auto'></div>
        <div className='w-full flex flex-col gap-4 items-end'>
          <div className='flex items-center'>
            <p className='text-text-gray text-sm font-bold uppercase'>Total </p>
            <strong className='ml-4 text-bg-dark text-2xl font-bold'>
              R$ 29,90
            </strong>
          </div>
          <button className='bg-btn-blue text-white text-sm font-bold w-full py-[11px] px-[60px] uppercase rounded justify-self-end'>
            Finalizar pedido
          </button>
        </div>
      </article>
    </>
  )
}
