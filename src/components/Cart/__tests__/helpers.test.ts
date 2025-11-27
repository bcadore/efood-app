import { describe, it, expect } from 'vitest'
import { buildPurchasePayload } from '../helpers'

describe('buildPurchasePayload', () => {
  it('builds expected payload with numeric conversions', () => {
    const items = [{ id: 1, nome: 'X', preco: 100 }]
    const delivery = {
      receiver: 'Joao',
      address: 'Rua A',
      city: 'Cidade',
      zipCode: '12345678',
      number: '10',
      complement: 'apt'
    }
    const payment = {
      cardName: 'Joao',
      cardNumber: '4242',
      cardCode: '123',
      expiresMonth: '7',
      expiresYear: '2028'
    }

    const result = buildPurchasePayload(items, delivery, payment)

    expect(result.products).toHaveLength(1)
    expect(result.products[0]).toEqual({ id: 1, price: 100 })
    expect(result.delivery.receiver).toBe('Joao')
    expect(result.delivery.address.number).toBe(10)
    expect(result.payment.card.code).toBe(123)
    expect(result.payment.card.expires.month).toBe(7)
    expect(result.payment.card.expires.year).toBe(2028)
  })
})
