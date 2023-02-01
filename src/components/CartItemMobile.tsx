import Image from 'next/image'
import { Counter } from './Counter'

export function CartItemMobile() {
  return (
    <div className='w-full flex gap-4 justify-between md:invisible md:hidden'>
      <Image
        width={147}
        height={188}
        className='w-fit '
        alt='Imagem da capa do filme'
        src='/assets/viuva-negra.png'
      />

      <div className='flex flex-col gap-4 flex-1'>
        <div className='flex gap-4 items-center'>
          <p className='text-bg-dark text-sm font-bold whitespace-nowrap'>
            Homem Aranha
          </p>
          <strong className='text-bg-dark whitespace-nowrap'>R$ 29,99</strong>
          <Image
            width={16}
            height={18}
            className=''
            alt='Ícone de lixeira'
            src='/assets/trash-can.svg'
          />
        </div>
        <div className='flex gap-4 justify-between items-end'>
          <Counter />
          <div className='flex flex-col items-end'>
            <span className='text-text-gray text-xs font-bold uppercase'>
              Subtotal
            </span>
            <strong className='text-bg-dark whitespace-nowrap'>R$ 29,99</strong>
          </div>
        </div>
      </div>
    </div>
  )
}
