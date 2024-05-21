import { Product } from "./Product";

export interface Likes {
	productId: number;
	productName: string;
	cover: string;
	author: string;
	price: number;
}

export const getLikes = async (): Promise<Likes[]> => {
	try {
		const localStorageLikes = await localStorage.getItem("likes");
		if (localStorageLikes) {
			return Promise.resolve(JSON.parse(localStorageLikes));
		}
		return Promise.resolve([]);
	} catch (e) {
		return Promise.reject(e);
	}
};

export const findInLikes = async (productId: number): Promise<boolean> => {
	try {
		const localStorageLikes = await localStorage.getItem("likes");
		if (localStorageLikes) {
			const likes: Likes[] = JSON.parse(localStorageLikes);
			const find = likes.find((item) => item.productId === productId);
			if (find) {
				return Promise.resolve(true);
			}
		}
		return Promise.resolve(false);
	} catch (e) {
		return Promise.reject(e);
	}
};

export const likeProduct = async (values: {
	product: Product;
	accessToken?: string;
}): Promise<boolean> => {
	try {
		let localStorageLikes = await localStorage.getItem("likes");
		let likes: Likes[] = [];
		if (localStorageLikes) {
			likes = JSON.parse(localStorageLikes.toString());
		}
		likes.push({
			productId: values.product.id,
			productName: values.product.name,
			cover: values.product.cover,
			author: values.product.author,
			price: values.product.price,
		});
		localStorage.setItem("likes", JSON.stringify(likes));
		return Promise.resolve(true);
	} catch (e) {
		return Promise.reject(false);
	}

	// return makeRequest(
	// 	{
	// 		url: "like",
	// 		method: "POST",
	// 		data: {
	// 			user_id: 2, //there is no user data endpoint
	// 			product_id: values.productId,
	// 		},
	// 	},
	// 	values.accessToken
	// );
};
export const unlikeProduct = async (values: {
	productId: number;
	accessToken?: string;
}): Promise<boolean> => {
	try {
		let localStorageLikes = await localStorage.getItem("likes");
		let likes: Likes[] = [];
		if (localStorageLikes) {
			likes = JSON.parse(localStorageLikes.toString());
		}
		likes = likes.filter((item) => item.productId !== values.productId);

		localStorage.setItem("likes", JSON.stringify(likes));
		return Promise.resolve(true);
	} catch (e) {
		return Promise.reject(false);
	}
	// 	return makeRequest(
	// 		{
	// 			url: "unlike",
	// 			method: "POST",
	// 			data: {
	// 				user_id: 2, //there is no user data endpoint
	// 				product_id: values.productId,
	// 			},
	// 		},
	// 		values.accessToken
	// 	);
};
