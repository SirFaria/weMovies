import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '~/contexts/CartContext'

export function Header() {
  const { cartItems } = useCart()

  return (
    <header className='bg-bg-dark max-w-[960px] mx-auto flex justify-between py-[18px] px-[11px]'>
      <Link href='/'>
        <h1 className='text-white font-bold size text-xl'>WeMovies</h1>
      </Link>
      <div className='flex items-center'>
        <div className='flex flex-col items-end'>
          <h2 className='text-white font-semibold text-sm hidden invisible md:block md:visible'>
            Meu Carrinho
          </h2>
          <p className='text-text-gray font-semibold text-xs'>
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'itens'}
          </p>
        </div>
        <Link href='/cart'>
          <Image
            width={30}
            height={25}
            className='ml-[9px]'
            src='/assets/shopping-bag.svg'
            alt='ícone de bolsa de shopping'
          />
        </Link>
      </div>
    </header>
  )
}
