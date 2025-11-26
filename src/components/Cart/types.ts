export interface DeliveryValues {
  receiver: string
  address: string
  city: string
  zipCode: string
  number: string | number
  complement: string
}

export interface PaymentValues {
  cardName: string
  cardNumber: string
  cardCode: string
  expiresMonth: string
  expiresYear: string
}
