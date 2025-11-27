import { describe, it, expect, beforeEach } from 'vitest'

beforeEach(() => {
  // clear localStorage before each test
  localStorage.clear()
})

describe('store persistence', () => {
  it('loads cart state from localStorage and persists updates', async () => {
    const saved = { items: [{ id: 10, nome: 'Sushi', foto: '', preco: 42 }], isOpen: true }
    localStorage.setItem('efood:cart', JSON.stringify(saved))

    // import store after setting storage so preloaded state picks it up
    const { store } = await import('../index')

    const s = store.getState()
    expect(s.cart.items).toHaveLength(1)
    expect(s.cart.items[0].id).toBe(10)

    // dispatch an action and ensure localStorage is updated
    const { add, remove } = await import('../reducers/cart')
    store.dispatch(add({ id: 20, nome: 'X', foto: '', preco: 50 }))

    const serialized = JSON.parse(localStorage.getItem('efood:cart') || 'null')
    expect(serialized.items.some((i: any) => i.id === 20)).toBe(true)

    store.dispatch(remove(20))
    const serialized2 = JSON.parse(localStorage.getItem('efood:cart') || 'null')
    expect(serialized2.items.some((i: any) => i.id === 20)).toBe(false)
  })
})
