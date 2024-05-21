import { ProductImageResponse, ProductResponse } from "@/util/Product";
import { makeRequest } from "./makeRequest";

export const getImage = (values: { cover: string }) => {
	return makeRequest<ProductImageResponse>({
		url: "/cover_image",
		method: "POST",
		data: {
			fileName: values.cover,
		},
	});
};

export const getProduct = (values: { id: string }) => {
	return makeRequest<ProductResponse>({
		url: `product/${values.id}`,
		method: "GET",
	});
};
