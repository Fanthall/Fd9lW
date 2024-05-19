"use client";

import { FunctionComponent, PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
export const ReduxProvider: FunctionComponent<PropsWithChildren> = (props) => {
	return <Provider store={store}>{props.children}</Provider>;
};
