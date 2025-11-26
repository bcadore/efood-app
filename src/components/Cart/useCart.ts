import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'
import type { DeliveryValues, PaymentValues } from './types'

export const useCart = () => {
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

  const removeItem = (id: number) => dispatch(remove(id))

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

  return {
    isOpen,
    items,
    cartStage,
    setCartStage,
    closeCart,
    removeItem,
    getTotalPrice,
    formatPrice,
    handleDeliverySubmit,
    handlePaymentSubmit,
    isLoading,
    isSuccess,
    data
  }
}

export default useCart
