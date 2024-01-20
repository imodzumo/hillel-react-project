import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	user: ""
}

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		authUser: (state, {payload}) => {
			state.user = payload
		}
	}
})

export const {authUser} = userSlice.actions;
export default userSlice.reducer;
