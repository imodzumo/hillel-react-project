import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {PIZZA_API} from "../../constants.js";

const initialState = {
	items: [],
	menuItems: [],
	isLoading: false,
	isError: false,
}

export const getMenuItems = createAsyncThunk('cart/getMenuItems', async ()=> {
	try {
		const res = await fetch(`${PIZZA_API}/menu`);
		if (!res.ok) {
			throw new Error('Failed to fetch menu');
		}
		const {data} = await res.json();
		return data
	} catch (error) {
		console.error(error.message);
	}
})

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, {payload}) => {
			const item = state.items.find(item => item.id === payload.id);
			if (item) {
				++item.quantity;
			} else {
				state.items.push({...payload, quantity: 1});
			}
		},
		deleteFromCart: (state, {payload})=> {
			state.items = state.items.filter(item => item.id !== payload.id)
		},
		incrementQty: (state, {payload}) => {
			const item = state.items.find(item => item.id === payload.id);
			++item.quantity;
		},
		decrementQty: (state, {payload}) => {
			const item = state.items.find(item => item.id === payload.id);
			if (item.quantity <= 1) {
				state.items = state.items.filter(item => item.id !== payload.id)
			}
			--item.quantity;
		},
		clearCart: (state, {payload}) => {
			state.items = payload
		}
	},
	extraReducers: (builder)=> {
		builder.addCase(getMenuItems.pending, (state, action) => {
			state.isError = false;
			state.isLoading = true;
		});
		builder.addCase(getMenuItems.fulfilled, (state, {payload}) => {
			state.menuItems = payload;
			state.isLoading = false;
		});
		builder.addCase(getMenuItems.rejected, (state, action) => {
			state.isLoading = false;
			state.isError = true;
		});
	}
})

export const {
	addToCart,
	deleteFromCart,
	decrementQty,
	incrementQty,
	clearCart
} = cartSlice.actions;
export default cartSlice.reducer;
