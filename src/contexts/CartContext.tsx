import { createContext, ReactNode, useContext, useState } from 'react'

interface ICartProviderProps {
  children: ReactNode
}

export interface IMovies {
  id: number
  title: string
  price: number
  image: string
}

export interface ICartItems extends IMovies {
  amount: number
}

interface ICartContext {
  cartItems: ICartItems[]
  addItemToCart: (movie: IMovies) => void
  removeItemFromCart: (id: number) => void
  changeItemAmount: (id: number, amount: number) => void
}

export const CartContext = createContext<ICartContext>({} as ICartContext)

export function CartProvider({ children }: ICartProviderProps) {
  const [cartItems, setCartItems] = useState<ICartItems[]>([])

  function addItemToCart({ id, title, price, image }: IMovies) {
    // para impedir do item ser adicionado novamente ao carrinho
    let exists = false
    const newCart = cartItems.map(item => {
      if (item.id === id) {
        exists = true
        return { ...item }
      }
      return item
    })

    if (exists) {
      setCartItems(newCart)
    } else {
      setCartItems([
        ...cartItems,
        {
          title,
          price,
          image,
          id,
          amount: 1,
        },
      ])
    }
  }

  function changeItemAmount(itemId: number, newAmount: number) {
    const newCart = cartItems.map(item => {
      if (item.id === itemId) {
        return { ...item, amount: newAmount }
      }
      return item
    })

    setCartItems(newCart)
  }

  function removeItemFromCart(itemId: number) {
    setCartItems(cartItems.filter(({ id }) => id !== itemId))
  }

  console.log(cartItems)

  return (
    <CartContext.Provider
      value={{ cartItems, addItemToCart, removeItemFromCart, changeItemAmount }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
