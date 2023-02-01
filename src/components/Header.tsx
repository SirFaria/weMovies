import Image from 'next/image'

export function Header() {
  return (
    <header className='bg-bg-dark max-w-[960px] mx-auto flex justify-between py-[18px] px-[11px]'>
      <h1 className='text-white font-bold size text-xl'>WeMovies</h1>
      <div className='flex items-center'>
        <div className='flex flex-col items-end'>
          {/* <h2 className='text-white font-semibold text-sm'>Meu Carrinho</h2> */}
          <p className='text-text-gray font-semibold text-xs'>0 itens</p>
        </div>
        <Image
          width={30}
          height={25}
          className='ml-[9px]'
          src='/assets/shopping-bag.svg'
          alt='ícone de bolsa de shopping'
        />
      </div>
    </header>
  )
}
