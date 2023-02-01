import { IMovies } from '~/contexts/CartContext'
import { api } from './api'

// função para emular a espera da requisição
const delay = (time: number) =>
  new Promise<void>(resolve => {
    const timeoutId = setTimeout(() => {
      clearTimeout(timeoutId)
      resolve()
    }, time)
  })

export async function getMoviesList() {
  const { data } = await api.get<IMovies[]>('/products')

  await delay(1000)

  return data
}
