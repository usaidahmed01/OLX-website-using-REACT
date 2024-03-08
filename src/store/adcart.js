import { createSlice } from '@reduxjs/toolkit'



const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: []
    
  },
  reducers: {
    addToCart: (state, data) => {
      
      state.cart.push(data.payload)
      // console.log(data, 'data hai');
    },
    removeFromCart: (state, data) => {
      const itemIndex = state.cart.findIndex((item) => item.id === data.payload);

      if (itemIndex !== -1) {
        state.cart.splice(itemIndex, 1);
      }
    }
  }
  
})

export const { addToCart , removeFromCart } = CartSlice.actions
export default CartSlice