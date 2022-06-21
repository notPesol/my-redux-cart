import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCartData = createAsyncThunk(
  "cart/fetchCartData",
  async () => {
    const response = await fetch(
      "https://react-http-4b1ab-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
    );
    if (!response.ok) {
      throw new Error("Couldn't fetch cart data!");
    }
    const data = await response.json();
    // return action payload to reducer...
    return {
      items: data?.items || [],
      totalQuantity: data?.totalQuantity || 0,
      totalPrice: data?.totalPrice || 0.0,
    };
  }
);

export const sendCartData = createAsyncThunk(
  "cart/sendCartData",
  async (cart) => {
    const response = await fetch(
      "https://react-http-4b1ab-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
      {
        method: "PUT",
        body: JSON.stringify(cart),
      }
    );
    if (!response.ok) {
      throw new Error("Couldn't send cart data to server!");
    }
    const data = await response.json();
    return data;
  }
);
