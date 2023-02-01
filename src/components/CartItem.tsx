import Image from 'next/image'

export function CartItem() {
  return (
    <div className='w-full flex gap-4 justify-between'>
      <Image
        width={147}
        height={188}
        className='w-fit '
        alt='Imagem da capa do filme'
        src='/assets/viuva-negra.png'
      />

      <div className='flex flex-col gap-4'>
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
          <div className='flex gap-[11px] items-center h-fit'>
            <Image
              width={18}
              height={18}
              className=''
              alt='Ícone de menos'
              src='/assets/minus.svg'
            />
            <input
              type='text'
              // value={1}
              className='max-w-[59px] h-fit pl-3 py-[3.5px] text-sm font-normal border border-input-border rounded'
            />
            <Image
              width={18}
              height={18}
              className=''
              alt='Ícone de mais'
              src='/assets/plus.svg'
            />
          </div>
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
