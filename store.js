import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./src/redux/slices/counterSlice.js";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
});

export default store;
