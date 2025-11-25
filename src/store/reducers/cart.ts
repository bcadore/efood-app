import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

// Defina o tipo do Produto aqui ou importe de outro lugar se já tiver
type Produto = {
  id: number
  nome: string
  foto: string
  preco: number
}

type CartState = {
  items: Produto[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Produto>) => {
        state.items.push(action.payload)
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, remove, open, close } = cartSlice.actions
export default cartSlice.reducer