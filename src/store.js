import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./redux/slices/cartSlice.js";
import userSlice from "./redux/slices/userSlice.js";
import orderSlice from "./redux/slices/orderSlice.js";

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		user: userSlice,
		order: orderSlice,
	},
});

export default store;
