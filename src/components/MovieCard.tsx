import Image from 'next/image'

export function MovieCard() {
  return (
    <div className='bg-white rounded flex flex-col items-center p-[10px]'>
      <Image
        width={147}
        height={188}
        className='mb-2'
        alt='Imagem da capa do filme'
        src='/assets/viuva-negra.png'
      />
      <p className='font-bold text-xs text-bg-dark'>Viúva Negra</p>
      <span className='font-bold text-bg-dark'>R$ 9,99</span>
      <button className='bg-btn-blue w-full py-[11px] mt-2 flex items-center justify-center rounded'>
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
