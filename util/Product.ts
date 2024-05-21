export interface Product {
	author: string;
	cover: string;
	created_at: string;
	description: string;
	id: number;
	name: string;
	price: number;
	sales: number;
	slug: string;
	likes_aggregate: {
		aggregate: {
			count: number;
		};
	};
}

export interface ProductResponse {
	product_by_pk: Product;
}
export interface ProductListResponse {
	product: Product[];
}

export interface ProductImageResponse {
	action_product_image: {
		url: string;
	};
}
