import { LoginAuthResponse, RegisterAuthResponse } from "@/util/Auth";
import { makeRequest } from "./makeRequest";

export const loginRequest = (values: { email: string; password: string }) => {
	return makeRequest<LoginAuthResponse>({
		url: "/login",
		method: "POST",
		data: {
			email: values.email,
			password: values.password,
		},
	});
};

export const registerRequest = (values: {
	email: string;
	password: string;
	name: string;
}) => {
	return makeRequest<RegisterAuthResponse>({
		url: "/register",
		method: "POST",
		data: {
			email: values.email,
			password: values.password,
			name: values.name,
		},
	});
};
