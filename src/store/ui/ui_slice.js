import { createSlice } from "@reduxjs/toolkit";
import { sendCartData } from "../cart/cart_actions";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    showCart: false,
    notification: null,
  },
  reducers: {
    toggleShowCart(state) {
      state.showCart = !state.showCart;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    hideNotification(state) {
      state.notification = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendCartData.pending, (state) => {
      state.notification = {
        status: "pending",
        title: "Pending",
        message: "Sending cart data...",
      };
    });
    builder.addCase(sendCartData.fulfilled, (state) => {
      state.notification = {
        status: "success",
        title: "Success",
        message: "Sent cart data successfully.",
      };
    });
    builder.addCase(sendCartData.rejected, (state, action) => {
      state.notification = {
        status: "error",
        title: "Error",
        message: action.error.message || "Couldn't send cart data to server!",
      };
    });
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
