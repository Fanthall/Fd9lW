import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import authReducer from "./feature/auth-slice";
export const store = configureStore({
	reducer: {
		authReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type FanthalDispatch = typeof store.dispatch;

export const useFanthalDispatch: () => FanthalDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
