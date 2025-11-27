import type { DeliveryValues, PaymentValues } from './types'

export type CartItem = {
  id: number
  nome: string
  foto?: string
  preco: number
}

export function buildPurchasePayload(items: CartItem[], deliveryData: DeliveryValues, paymentValues: PaymentValues) {
  return {
    products: items.map((item) => ({ id: item.id, price: item.preco })),
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
}

export default buildPurchasePayload
