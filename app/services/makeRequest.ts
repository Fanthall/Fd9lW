import axios, { AxiosRequestConfig } from "axios";

export function makeRequest<T>(config: AxiosRequestConfig) {
	return axios.request<T>({
		baseURL: "https://assign-api.piton.com.tr/api/rest",
		...config,
	});
}
