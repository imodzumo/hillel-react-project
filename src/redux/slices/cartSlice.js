import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	items: []
}

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
