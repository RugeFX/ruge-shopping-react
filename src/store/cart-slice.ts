import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "store";
import { Product } from "types/product";

interface CartProduct extends Omit<Product, "rating" | "description"> {
  quantity: number;
}

export interface CartState {
  products: CartProduct[];
}

const initialState: CartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.products = [];
    },
    addProduct: (state, action: PayloadAction<Omit<CartProduct, "quantity">>) => {
      const product = state.products.find((product) => product.id === action.payload.id);
      if (product) {
        product.quantity++;
        return;
      }
      state.products.push({ ...action.payload, quantity: 1 });
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter((product) => product.id !== action.payload);
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const product = state.products.find((product) => product.id === action.payload);
      if (!product) return;

      product.quantity++;
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const product = state.products.find((product) => product.id === action.payload);
      if (!product) return;

      if (product.quantity === 1) {
        state.products = state.products.filter((product) => product.id !== action.payload);
        return;
      }
      product.quantity--;
    },
  },
});

const cartReducer = cartSlice.reducer;

export const { clearCart, addProduct, removeProduct, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export const selectCart = (state: RootState) => state.cart;
export default cartReducer;
