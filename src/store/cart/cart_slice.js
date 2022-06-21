import { createSlice } from "@reduxjs/toolkit";
import { fetchCartData } from "./cart_actions";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
  canSend: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.canSend = true;
      state.totalQuantity++;
      const searchItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (searchItem) {
        state.totalPrice += searchItem.price;
        searchItem.quantity++;
        searchItem.totalPrice += searchItem.price;
      } else {
        state.totalPrice += action.payload.price;
        state.items.push({
          ...action.payload,
          totalPrice: action.payload.price,
          quantity: 1,
        });
      }
    },
    removeItem(state, action) {
      state.canSend = true;
      state.totalQuantity--;
      const searchItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      state.totalPrice -= searchItem.price;
      if (searchItem.quantity === 1) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        searchItem.quantity--;
        searchItem.totalPrice -= searchItem.price;
      }
    },
    clearCart(state) {
      state.canSend = true;
      state.items = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCartData.fulfilled, (state, action) => {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
      state.totalPrice = action.payload.totalPrice;
    });
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
