import Image from 'next/image'
import { useState } from 'react'

export function Counter() {
  const [amount, setAmount] = useState(1)

  function increment() {
    setAmount(state => state + 1)
  }

  function decrement() {
    if (amount > 1) {
      setAmount(state => state - 1)
    }
  }

  function onBlur(value: number) {
    // Não deixa a quantidade ser menor que 1
    if (!value || value < 1) {
      return setAmount(1)
    }

    // Arredonda qualquer número quebrado
    setAmount(Math.round(value))
  }

  return (
    <div className='flex gap-[11px] items-center h-fit w-fit'>
      <button onClick={decrement}>
        <Image
          width={18}
          height={18}
          className=''
          alt='Ícone de menos'
          src='/assets/minus.svg'
        />
      </button>
      <input
        type='number'
        min='1'
        value={amount}
        onChange={e => setAmount(e.target.valueAsNumber)}
        onBlur={e => onBlur(e.target.valueAsNumber)}
        className='max-w-[59px] h-fit pl-3 py-[3.5px] text-sm font-normal border border-input-border rounded'
      />
      <button onClick={increment}>
        <Image
          width={18}
          height={18}
          className=''
          alt='Ícone de mais'
          src='/assets/plus.svg'
        />
      </button>
    </div>
  )
}
