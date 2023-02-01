import Image from 'next/image'
import { useState } from 'react'
import { useCart } from '~/contexts/CartContext'

interface ICounterProps {
  itemId: number
  itemAmount: number
}

export function Counter({ itemId, itemAmount }: ICounterProps) {
  const [amount, setAmount] = useState(1)
  const { changeItemAmount } = useCart()

  function increment() {
    setAmount(state => state + 1)
    changeItemAmount(itemId, itemAmount + 1)
  }

  function decrement() {
    if (itemAmount > 1) {
      setAmount(state => state - 1)
      changeItemAmount(itemId, itemAmount - 1)
    }
  }

  function onChange(value: number) {
    setAmount(value)
    changeItemAmount(itemId, value)
  }

  function onBlur(value: number) {
    // Não deixa a quantidade ser menor que 1
    if (!value || value < 1) {
      setAmount(1)
      changeItemAmount(itemId, 1)

      return
    }

    // Arredonda qualquer número quebrado
    setAmount(Math.round(value))
    changeItemAmount(itemId, Math.round(value))
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
        onChange={e => onChange(e.target.valueAsNumber)}
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
