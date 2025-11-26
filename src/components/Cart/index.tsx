import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import type { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'
import * as S from './styles'

// --- Interfaces de Tipagem ---
interface DeliveryValues {
  receiver: string
  address: string
  city: string
  zipCode: string
  number: string | number
  complement: string
}

interface PaymentValues {
  cardName: string
  cardNumber: string
  cardCode: string
  expiresMonth: string
  expiresYear: string
}

// --- Sub-componente: Formulário de Entrega ---
const DeliveryForm = ({ 
  onNext, 
  onBack 
}: { 
  onNext: (values: DeliveryValues) => void, 
  onBack: () => void 
}) => {
  const formik = useFormik<DeliveryValues>({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      zipCode: '',
      number: '',
      complement: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string().min(5, 'Mínimo de 5 caracteres').required('Obrigatório'),
      address: Yup.string().required('Obrigatório'),
      city: Yup.string().required('Obrigatório'),
      zipCode: Yup.string().min(8, 'Mínimo 8 caracteres').required('Obrigatório'),
      number: Yup.number().required('Obrigatório')
    }),
    onSubmit: (values) => {
      onNext(values)
    }
  })

  const getError = (field: keyof DeliveryValues) => {
    const isTouched = formik.touched[field]
    const error = formik.errors[field]
    return isTouched && error ? error : ''
  }

  return (
    <>
      <h2>Entrega</h2>
      <form onSubmit={formik.handleSubmit}>
        <S.InputGroup>
          <label htmlFor="receiver">Quem irá receber</label>
          <input id="receiver" type="text" name="receiver" value={formik.values.receiver} onChange={formik.handleChange} onBlur={formik.handleBlur} className={getError('receiver') ? 'error' : ''} />
          {getError('receiver') && <small>{getError('receiver')}</small>}
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="address">Endereço</label>
          <input id="address" type="text" name="address" value={formik.values.address} onChange={formik.handleChange} onBlur={formik.handleBlur} className={getError('address') ? 'error' : ''} />
          {getError('address') && <small>{getError('address')}</small>}
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="city">Cidade</label>
          <input id="city" type="text" name="city" value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur} className={getError('city') ? 'error' : ''} />
          {getError('city') && <small>{getError('city')}</small>}
        </S.InputGroup>
        <S.Row>
          <S.InputGroup>
            <label htmlFor="zipCode">CEP</label>
            <input id="zipCode" type="text" name="zipCode" value={formik.values.zipCode} onChange={formik.handleChange} onBlur={formik.handleBlur} className={getError('zipCode') ? 'error' : ''} />
            {getError('zipCode') && <small>{getError('zipCode')}</small>}
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="number">Número</label>
            <input id="number" type="number" name="number" value={formik.values.number} onChange={formik.handleChange} onBlur={formik.handleBlur} className={getError('number') ? 'error' : ''} />
            {getError('number') && <small>{getError('number')}</small>}
          </S.InputGroup>
        </S.Row>
        <S.InputGroup>
          <label htmlFor="complement">Complemento (opcional)</label>
          <input id="complement" type="text" name="complement" value={formik.values.complement} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        </S.InputGroup>
        <div style={{ marginTop: '16px' }}>
          <S.Button type="submit">Continuar com o pagamento</S.Button>
          <S.Button type="button" onClick={onBack}>Voltar para o carrinho</S.Button>
        </div>
      </form>
    </>
  )
}

// --- Sub-componente: Formulário de Pagamento ---
const PaymentForm = ({ 
  onFinish, 
  onBack, 
  priceLabel, 
  isLoading 
}: { 
  onFinish: (values: PaymentValues) => void, 
  onBack: () => void, 
  priceLabel: string, 
  isLoading: boolean 
}) => {
  const formik = useFormik<PaymentValues>({
    initialValues: {
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      cardName: Yup.string().required('Obrigatório'),
      cardNumber: Yup.string().required('Obrigatório'),
      cardCode: Yup.string().required('Obrigatório'),
      expiresMonth: Yup.string().required('Obrigatório'),
      expiresYear: Yup.string().required('Obrigatório')
    }),
    onSubmit: (values) => {
      onFinish(values)
    }
  })

  const getError = (field: keyof PaymentValues) => {
    const isTouched = formik.touched[field]
    const error = formik.errors[field]
    return isTouched && error ? error : ''
  }

  return (
    <>
      <h2>Pagamento - Valor a pagar {priceLabel}</h2>
      <form onSubmit={formik.handleSubmit}>
        <S.InputGroup>
          <label htmlFor="cardName">Nome no cartão</label>
          <input id="cardName" type="text" name="cardName" value={formik.values.cardName} onChange={formik.handleChange} onBlur={formik.handleBlur} className={getError('cardName') ? 'error' : ''} disabled={isLoading} />
          {getError('cardName') && <small>{getError('cardName')}</small>}
        </S.InputGroup>
        <S.Row>
          <S.InputGroup style={{ flex: 2 }}>
            <label htmlFor="cardNumber">Número do cartão</label>
            <input id="cardNumber" type="text" name="cardNumber" value={formik.values.cardNumber} onChange={formik.handleChange} onBlur={formik.handleBlur} className={getError('cardNumber') ? 'error' : ''} disabled={isLoading} />
            {getError('cardNumber') && <small>{getError('cardNumber')}</small>}
          </S.InputGroup>
          <S.InputGroup style={{ flex: 1 }}>
            <label htmlFor="cardCode">CVV</label>
            <input id="cardCode" type="text" name="cardCode" value={formik.values.cardCode} onChange={formik.handleChange} onBlur={formik.handleBlur} className={getError('cardCode') ? 'error' : ''} disabled={isLoading} />
            {getError('cardCode') && <small>{getError('cardCode')}</small>}
          </S.InputGroup>
        </S.Row>
        <S.Row>
          <S.InputGroup>
            <label htmlFor="expiresMonth">Mês de vencimento</label>
            <input id="expiresMonth" type="text" name="expiresMonth" value={formik.values.expiresMonth} onChange={formik.handleChange} onBlur={formik.handleBlur} className={getError('expiresMonth') ? 'error' : ''} disabled={isLoading} />
            {getError('expiresMonth') && <small>{getError('expiresMonth')}</small>}
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="expiresYear">Ano de vencimento</label>
            <input id="expiresYear" type="text" name="expiresYear" value={formik.values.expiresYear} onChange={formik.handleChange} onBlur={formik.handleBlur} className={getError('expiresYear') ? 'error' : ''} disabled={isLoading} />
            {getError('expiresYear') && <small>{getError('expiresYear')}</small>}
          </S.InputGroup>
        </S.Row>
        <div style={{ marginTop: '16px' }}>
          <S.Button type="submit" disabled={isLoading}>{isLoading ? 'Finalizando...' : 'Finalizar pagamento'}</S.Button>
          <S.Button type="button" onClick={onBack} disabled={isLoading}>Voltar para a edição de endereço</S.Button>
        </div>
      </form>
    </>
  )
}

// --- Componente Principal ---
const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  
  const [purchase, { isLoading, isSuccess, data }] = usePurchaseMutation()

  const [cartStage, setCartStage] = useState('cart')
  const [deliveryData, setDeliveryData] = useState<DeliveryValues | null>(null)

  const closeCart = () => {
    dispatch(close())
    setCartStage('cart')
    setDeliveryData(null)
  }

  useEffect(() => {
    if (isSuccess && data) {
      setCartStage('confirmation')
      items?.forEach(item => dispatch(remove(item.id)))
    }
  }, [isSuccess, data, dispatch, items])

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items?.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0) || 0
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  const handleDeliverySubmit = (values: DeliveryValues) => {
    setDeliveryData(values)
    setCartStage('payment')
  }

  const handlePaymentSubmit = (paymentValues: PaymentValues) => {
    if (!items || items.length === 0 || !deliveryData) return

    const payload = {
      products: items.map((item) => ({
        id: item.id,
        price: item.preco
      })),
      delivery: {
        receiver: deliveryData.receiver,
        address: {
          description: deliveryData.address,
          city: deliveryData.city,
          zipCode: deliveryData.zipCode,
          number: Number(deliveryData.number),
          complement: deliveryData.complement
        }
      },
      payment: {
        card: {
          name: paymentValues.cardName,
          number: paymentValues.cardNumber,
          code: Number(paymentValues.cardCode),
          expires: {
            month: Number(paymentValues.expiresMonth),
            year: Number(paymentValues.expiresYear)
          }
        }
      }
    }

    purchase(payload)
  }

  if (!isOpen) return null

  return (
    <>
      <S.Overlay onClick={closeCart} />
      <S.CartContainer>
        {/* TELA 1: LISTA DE PRODUTOS */}
        {cartStage === 'cart' && (
          <>
            {items && items.length > 0 ? (
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
                <div>
                  <S.Prices>
                    <span>Valor total</span>
                    <span>{formatPrice(getTotalPrice())}</span>
                  </S.Prices>
                  <S.Button onClick={() => setCartStage('delivery')} type="button">Continuar com a entrega</S.Button>
                </div>
              </>
            ) : (
              <p className="empty-text">O carrinho está vazio.</p>
            )}
          </>
        )}

        {/* TELA 2: FORMULÁRIO DE ENTREGA */}
        {cartStage === 'delivery' && (
          <DeliveryForm onNext={handleDeliverySubmit} onBack={() => setCartStage('cart')} />
        )}

        {/* TELA 3: FORMULÁRIO DE PAGAMENTO */}
        {cartStage === 'payment' && (
          <PaymentForm 
            onFinish={handlePaymentSubmit} 
            onBack={() => setCartStage('delivery')} 
            priceLabel={formatPrice(getTotalPrice())} 
            isLoading={isLoading} 
          />
        )}

        {/* TELA 4: CONFIRMAÇÃO */}
        {cartStage === 'confirmation' && (
          <>
            <h2>Pedido realizado - {data?.orderId}</h2>
            <p>Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.</p>
            <p>Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.</p>
            <p>Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.</p>
            <p>Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</p>
            <S.Button type="button" onClick={closeCart}>Concluir</S.Button>
          </>
        )}
      </S.CartContainer>
    </>
  )
}

export default Cart