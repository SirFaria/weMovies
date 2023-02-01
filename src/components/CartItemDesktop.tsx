import Image from 'next/image'
import { Counter } from './Counter'

export function CartItemDesktop() {
  return (
    <tr className='w-full'>
      <td>
        <div className='flex items-center'>
          <Image
            width={147}
            height={188}
            className='w-fit '
            alt='Imagem da capa do filme'
            src='/assets/viuva-negra.png'
          />
          <div className='flex flex-col pl-[52px]'>
            <p className='text-bg-dark text-sm font-bold whitespace-nowrap'>
              Homem Aranha
            </p>
            <strong className='text-bg-dark whitespace-nowrap'>R$ 29,99</strong>
          </div>
        </div>
      </td>

      <td className='w-[170px]'>
        <Counter />
      </td>

      <td>
        <strong className='text-bg-dark whitespace-nowrap'>R$ 29,99</strong>
      </td>

      <td>
        <Image
          width={16}
          height={18}
          className='ml-auto'
          alt='Ícone de lixeira'
          src='/assets/trash-can.svg'
        />
      </td>
    </tr>
  )
}
