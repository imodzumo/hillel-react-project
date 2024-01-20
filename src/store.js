import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./redux/slices/cartSlice.js";
import userSlice from "./redux/slices/userSlice.js";

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		user: userSlice
	},
});

export default store;
