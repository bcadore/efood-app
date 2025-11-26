import * as S from './styles'

type Item = {
  id: number
  nome: string
  foto: string
  preco: number
}

type Props = {
  items?: Item[] | null
  removeItem: (id: number) => void
  formatPrice: (price: number) => string
}

const CartItems = ({ items, removeItem, formatPrice }: Props) => {
  if (!items || items.length === 0) {
    return <p className="empty-text">O carrinho está vazio.</p>
  }

  return (
    <>
      <div className="items-container">
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formatPrice(item.preco)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button">
                <img src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" alt="Remover" />
              </button>
            </S.CartItem>
          ))}
        </ul>
      </div>
    </>
  )
}

export default CartItems
