import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart/cart_slice";
import uiSlice from "./ui/ui_slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;
