import Image from 'next/image'
import Link from 'next/link'

export default function Success() {
  return (
    <article className='bg-white w-full flex flex-col items-center py-16 px-6 rounded md:mx-4'>
      <h2 className='text-bg-dark text-xl font-bold text-center mb-8'>
        Compra realizada <br /> com sucesso
      </h2>
      <Image
        width={420}
        height={265.8}
        className='object-cover'
        alt='Imagem de nada encontrado'
        src='/assets/success.svg'
      />
      <Link href='/'>
        <button className='bg-btn-blue text-white text-sm font-bold mt-8 py-[11px] px-[60px] uppercase rounded'>
          Voltar
        </button>
      </Link>
    </article>
  )
}
