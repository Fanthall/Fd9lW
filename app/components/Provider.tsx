"use client";

import { NextUIProvider } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { FunctionComponent, PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
export const Providers: FunctionComponent<PropsWithChildren> = (props) => {
	const { systemTheme } = useTheme();

	return (
		<NextUIProvider
			className={`w-full h-full ${
				(systemTheme ?? "dark") === "dark" ? "dark" : "light"
			}`}
		>
			<Provider store={store}>{props.children}</Provider>
		</NextUIProvider>
	);
};
