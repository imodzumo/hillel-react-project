import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {PIZZA_API} from "../../constants.js";

const initialState = {
	orderInfo: {},
	isLoading: false,
	isError: false,
}

export const createOrder = createAsyncThunk('order/createOrder', async (orderData, { rejectWithValue }) => {
	try {
		const response = await fetch(`${PIZZA_API}/order`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(orderData),
		});
		if (!response.ok) {
			throw new Error('Order creation failed');
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error.message);
		return rejectWithValue(error.message);
	}
})

const orderSlice = createSlice({
	name: "order",
	initialState,
	reducers: {
		addOrder: (state, {payload}) => {
			state.orderInfo = payload;
		}
	},
	extraReducers: (builder)=> {
		builder.addCase(createOrder.pending, (state) => {
			state.isError = false;
			state.isLoading = true;
		});
		builder.addCase(createOrder.fulfilled, (state, {payload}) => {
			state.orderInfo = payload;
			state.isLoading = false;
		});
		builder.addCase(createOrder.rejected, (state, action) => {
			state.isLoading = false;
			state.isError = true;
		});
	}
})

export const {
	addOrder,
} = orderSlice.actions;
export default orderSlice.reducer;
