import { AuthState } from "@/util/Auth";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: AuthState = {
	name: "",
	token: "",
	type: "",
	id: -1,
};
export const auth = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logOut: () => {
			return initialState;
		},
		logIn: (state, action: PayloadAction<AuthState>) => {
			return { ...action.payload };
		},
	},
});

export const { logIn, logOut } = auth.actions;

export default auth.reducer;
