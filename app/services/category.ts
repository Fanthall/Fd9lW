import { CategoryList } from "@/util/Category";
import { ProductListResponse } from "@/util/Product";
import { makeRequest } from "./makeRequest";

export const getCategories = () => {
	return makeRequest<CategoryList>({
		url: "/categories",
		maxBodyLength: Infinity,
		method: "GET",
	});
};

export const getCategoryProducts = (values: { id: number }) => {
	return makeRequest<ProductListResponse>({
		url: `/products/${values.id}`,
		method: "GET",
	});
};
