import { configureStore } from '@reduxjs/toolkit'
import api from '../services/api'
import cartReducer from './reducers/cart'

const CART_STORAGE_KEY = 'efood:cart'

const loadCartState = () => {
  try {
    if (typeof localStorage === 'undefined') return undefined
    const serialized = localStorage.getItem(CART_STORAGE_KEY)
    if (!serialized) return undefined
    const parsed = JSON.parse(serialized)
    return { cart: parsed }
  } catch (err) {
    return undefined
  }
}

const saveCartState = (state: any) => {
  try {
    if (typeof localStorage === 'undefined') return
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state))
  } catch (err) {
    // ignore write errors
  }
}

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  preloadedState: loadCartState()
})

// Subscribe and persist cart slice changes
store.subscribe(() => {
  const state = store.getState()
  saveCartState(state.cart)
})

export type RootReducer = ReturnType<typeof store.getState>