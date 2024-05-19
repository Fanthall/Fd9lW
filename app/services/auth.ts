import { makeRequest } from "./makeRequest";

export const login = (values: { email: string; password: string }) => {
	return makeRequest({
		url: "/login",
		method: "POST",
		data: {
			email: values.email,
			password: values.password,
		},
	});
};

export const register = (values: {
	email: string;
	password: string;
	name: string;
}) => {
	return makeRequest({
		url: "/register",
		method: "POST",
		data: {
			email: values.email,
			password: values.password,
			name: values.name,
		},
	});
};
