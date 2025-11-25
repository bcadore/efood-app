import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const [cartStage, setCartStage] = useState('cart') // cart | delivery | payment | confirmation
  const [orderId, setOrderId] = useState('')

  const [delivery, setDelivery] = useState({
    receiver: '',
    address: '',
    city: '',
    zipCode: '',
    number: '',
    complement: ''
  })

  const [payment, setPayment] = useState({
    cardName: '',
    cardNumber: '',
    cardCode: '',
    expiresMonth: '',
    expiresYear: ''
  })

  const closeCart = () => {
    dispatch(close())
    setCartStage('cart')
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const handleDeliveryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDelivery({ ...delivery, [e.target.name]: e.target.value })
  }

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayment({ ...payment, [e.target.name]: e.target.value })
  }

  const finishPayment = async () => {
    if (!payment.cardNumber || !payment.cardName || !delivery.receiver || !delivery.address) {
        alert("Preencha todos os campos obrigatórios")
        return
    }

    const payload = {
      products: items.map(item => ({
        id: item.id,
        price: item.preco
      })),
      delivery: {
        receiver: delivery.receiver,
        address: {
          description: delivery.address,
          city: delivery.city,
          zipCode: delivery.zipCode,
          number: Number(delivery.number),
          complement: delivery.complement
        }
      },
      payment: {
        card: {
          name: payment.cardName,
          number: payment.cardNumber,
          code: Number(payment.cardCode),
          expires: {
            month: Number(payment.expiresMonth),
            year: Number(payment.expiresYear)
          }
        }
      }
    }

    try {
      const res = await fetch('https://api-ebac.vercel.app/api/efood/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      const data = await res.json()
      
      if (data.orderId) {
        setOrderId(data.orderId)
        setCartStage('confirmation')
        items.forEach(item => dispatch(remove(item.id)))
      } else {
        alert("Erro ao processar pedido. Verifique os dados.")
      }
      
    } catch (error) {
      console.error(error)
      alert("Erro na conexão com a API")
    }
  }

  if (!isOpen) return null

  return (
    <>
      <S.Overlay onClick={closeCart} />
      <S.CartContainer>
        
        {cartStage === 'cart' && (
          <>
            {items.length > 0 ? (
                <>
                <div className="items-container">
                <ul>
                    {items.map((item) => (
                    <S.CartItem key={item.id}>
                        <img src={item.foto} alt={item.nome} />
                        <div>
                        <h3>{item.nome}</h3>
                        <span>{formataPreco(item.preco)}</span>
                        </div>
                        <button onClick={() => dispatch(remove(item.id))} type="button">
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
                <S.Button onClick={() => setCartStage('delivery')} type="button">
                    Continuar com a entrega
                </S.Button>
                </div>
                </>
            ) : (
                <p className="empty-text">O carrinho está vazio.</p>
            )}
          </>
        )}

        {cartStage === 'delivery' && (
            <>
                <h2>Entrega</h2>
                <form>
                    <S.InputGroup>
                        <label htmlFor="receiver">Quem irá receber</label>
                        <input type="text" id="receiver" name="receiver" value={delivery.receiver} onChange={handleDeliveryChange} />
                    </S.InputGroup>

                    <S.InputGroup>
                        <label htmlFor="address">Endereço</label>
                        <input type="text" id="address" name="address" value={delivery.address} onChange={handleDeliveryChange} />
                    </S.InputGroup>

                    <S.InputGroup>
                        <label htmlFor="city">Cidade</label>
                        <input type="text" id="city" name="city" value={delivery.city} onChange={handleDeliveryChange} />
                    </S.InputGroup>

                    <S.Row>
                        <S.InputGroup>
                            <label htmlFor="zipCode">CEP</label>
                            <input type="text" id="zipCode" name="zipCode" value={delivery.zipCode} onChange={handleDeliveryChange} />
                        </S.InputGroup>
                        <S.InputGroup>
                            <label htmlFor="number">Número</label>
                            <input type="number" id="number" name="number" value={delivery.number} onChange={handleDeliveryChange} />
                        </S.InputGroup>
                    </S.Row>

                    <S.InputGroup>
                        <label htmlFor="complement">Complemento (opcional)</label>
                        <input type="text" id="complement" name="complement" value={delivery.complement} onChange={handleDeliveryChange} />
                    </S.InputGroup>
                </form>

                <div style={{ marginTop: '16px' }}>
                    <S.Button type="button" onClick={() => setCartStage('payment')}>
                        Continuar com o pagamento
                    </S.Button>
                    <S.Button type="button" onClick={() => setCartStage('cart')}>
                        Voltar para o carrinho
                    </S.Button>
                </div>
            </>
        )}

        {cartStage === 'payment' && (
            <>
                 <h2>Pagamento - Valor a pagar {formataPreco(getTotalPrice())}</h2>
                 <form>
                    <S.InputGroup>
                        <label htmlFor="cardName">Nome no cartão</label>
                        <input type="text" id="cardName" name="cardName" value={payment.cardName} onChange={handlePaymentChange} />
                    </S.InputGroup>

                    <S.Row>
                        <S.InputGroup style={{ flex: 2 }}>
                            <label htmlFor="cardNumber">Número do cartão</label>
                            <input type="text" id="cardNumber" name="cardNumber" value={payment.cardNumber} onChange={handlePaymentChange} />
                        </S.InputGroup>
                        <S.InputGroup style={{ flex: 1 }}>
                            <label htmlFor="cardCode">CVV</label>
                            <input type="text" id="cardCode" name="cardCode" value={payment.cardCode} onChange={handlePaymentChange} />
                        </S.InputGroup>
                    </S.Row>

                    <S.Row>
                        <S.InputGroup>
                            <label htmlFor="expiresMonth">Mês de vencimento</label>
                            <input type="text" id="expiresMonth" name="expiresMonth" value={payment.expiresMonth} onChange={handlePaymentChange} />
                        </S.InputGroup>
                        <S.InputGroup>
                            <label htmlFor="expiresYear">Ano de vencimento</label>
                            <input type="text" id="expiresYear" name="expiresYear" value={payment.expiresYear} onChange={handlePaymentChange} />
                        </S.InputGroup>
                    </S.Row>
                 </form>

                 <div style={{ marginTop: '16px' }}>
                    <S.Button type="button" onClick={finishPayment}>
                        Finalizar pagamento
                    </S.Button>
                    <S.Button type="button" onClick={() => setCartStage('delivery')}>
                        Voltar para a edição de endereço
                    </S.Button>
                </div>
            </>
        )}

        {cartStage === 'confirmation' && (
            <>
                <h2>Pedido realizado - {orderId}</h2>
                <p>
                    Estamos felizes em informar que seu pedido já está em processo de 
                    preparação e, em breve, será entregue no endereço fornecido.
                </p>
                <p>
                    Gostaríamos de ressaltar que nossos entregadores não estão autorizados 
                    a realizar cobranças extras.
                </p>
                <p>
                    Lembre-se da importância de higienizar as mãos após o recebimento do 
                    pedido, garantindo assim sua segurança e bem-estar durante a refeição.
                </p>
                <p>
                    Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. 
                    Bom apetite!
                </p>
                <S.Button type="button" onClick={closeCart}>
                    Concluir
                </S.Button>
            </>
        )}

      </S.CartContainer>
    </>
  )
}

export default Cart