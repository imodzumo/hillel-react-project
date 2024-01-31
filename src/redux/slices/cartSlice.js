import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {PIZZA_API} from "../../constants.js";

const initialState = {
	items: [],
	menuItems: [],
	isLoading: false,
	isError: false,
	totalPrice: 0
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

const calculateTotalPrice = (items) => {
	return items.reduce((total, item) => total + (item.unitPrice * item.quantity), 0);
};

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
			state.totalPrice = calculateTotalPrice(state.items);
		},
		deleteFromCart: (state, {payload})=> {
			state.items = state.items.filter(item => item.id !== payload.id)
			state.totalPrice = calculateTotalPrice(state.items);
		},
		incrementQty: (state, {payload}) => {
			const item = state.items.find(item => item.id === payload.id);
			++item.quantity;
			state.totalPrice = calculateTotalPrice(state.items);
		},
		decrementQty: (state, {payload}) => {
			const item = state.items.find(item => item.id === payload.id);
			if (item.quantity <= 1) {
				state.items = state.items.filter(item => item.id !== payload.id)
			}
			--item.quantity;
			state.totalPrice = calculateTotalPrice(state.items);
		},
		clearCart: (state, {payload}) => {
			state.items = payload
			state.totalPrice = calculateTotalPrice(state.items);
		},
		updateTotalPrice: (state, action) => {
			state.totalPrice = action.payload;
		},
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
	clearCart,
	updateTotalPrice
} = cartSlice.actions;
export default cartSlice.reducer;
