import axios, { AxiosRequestConfig } from "axios";

export function makeRequest<T>(
	config: AxiosRequestConfig,
	accessToken?: string
) {
	return axios.request<T>({
		headers: {
			...config.headers,
			...(accessToken !== undefined
				? { Authorization: `Bearer ${accessToken}` }
				: {}),
		},
		baseURL: "https://assign-api.piton.com.tr/api/rest",
		...config,
	});
}
