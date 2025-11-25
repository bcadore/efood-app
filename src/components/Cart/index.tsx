import { useDispatch, useSelector } from 'react-redux'
import type { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  if (!isOpen) return null

  return (
    <>
      <S.Overlay onClick={closeCart} />
      
      <S.CartContainer>
        <div className="items-container">
          <ul>
            {items.map((item) => (
              <S.CartItem key={item.id}>
                <img src={item.foto} alt={item.nome} />
                <div>
                  <h3>{item.nome}</h3>
                  <span>{formataPreco(item.preco)}</span>
                </div>
                <button onClick={() => removeItem(item.id)} type="button">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" 
                    alt="Remover" 
                  />
                </button>
              </S.CartItem>
            ))}
          </ul>
        </div>
        
        <div>
          <S.Prices>
            <span>Valor total</span>
            <span>{formataPreco(getTotalPrice())}</span>
          </S.Prices>
          <S.Button title="Clique para continuar com a entrega" type="button">
            Continuar com a entrega
          </S.Button>
        </div>
      </S.CartContainer>
    </>
  )
}

export default Cart