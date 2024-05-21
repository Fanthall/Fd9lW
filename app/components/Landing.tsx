"use client";
import { logIn } from "@/redux/feature/auth-slice";
import { useFanthalDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";
import { FunctionComponent, PropsWithChildren, useEffect } from "react";

const Landing: FunctionComponent<PropsWithChildren> = (props) => {
	const dispatch = useFanthalDispatch();
	const router = useRouter();

	useEffect(() => {
		const getLocalAuth = async () => {
			const localAuth = await localStorage.getItem("authInfo");
			if (localAuth) {
				dispatch(logIn(JSON.parse(localAuth)));
			} else {
				router.replace("/");
			}
		};
		getLocalAuth();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return <>{props.children}</>;
};

export default Landing;
